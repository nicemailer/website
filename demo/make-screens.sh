#!/usr/bin/env bash
# Makes the screenshots of the website from the demo mailbox, with the real
# app, its real core and a real IMAP server (the test Dovecot of the app
# repository). Run it again for each new version of the app.
#
# Usage: demo/make-screens.sh [en] [fr]        (default: both)
#   NICEMAILER_REPO   the app repository (default: ../niceMailer)
#
# For each language:
#  1. demo/generate.py writes the demo mailbox (demo/out/<lang>/);
#  2. its history is appended to a new user of the test Dovecot;
#  3. a core of its own (own data folder, own keychain file, no network
#     for sending) adds the account, organized, and synchronizes it;
#  4. the arrivals are appended: the core screens them, as real new mail
#     (Quarantine, the forged bank alert, the known people to the Inbox);
#  5. the app plays demo/screens.uiscript in UI script mode, off screen and
#     away from the keyboard, in that language, and its snapshots are
#     copied to src/assets/screens/<lang>/.
#
# Nothing touches your own mailbox, settings or Keychain. The temporary data
# folders are left in /tmp/nmdemo.* (macOS cleans /tmp).
set -euo pipefail

SITE=$(cd "$(dirname "$0")/.." && pwd)
REPO=$(cd "${NICEMAILER_REPO:-$SITE/../niceMailer}" && pwd)
XCODE=${XCODE:-/Applications/Xcode.app/Contents/Developer}
CA="$REPO/dev/dovecot/tls/ca.crt"
CLI="$REPO/target/release/nicemailer"
CORE="$REPO/target/release/nicemailer-core"
APPBIN="$REPO/apps/NiceMailer/.build/debug/NiceMailer"
langs=("$@")
if [ ${#langs[@]} -eq 0 ]; then langs=(en fr); fi

echo "Building the app and its core in $REPO"
cargo build --release --quiet --manifest-path "$REPO/Cargo.toml"
(cd "$REPO/apps/NiceMailer" && DEVELOPER_DIR="$XCODE" swift build --quiet)

# The test IMAP server (Docker). Started if it does not answer.
if ! (exec 3<>/dev/tcp/127.0.0.1/31993) 2>/dev/null; then
    echo "Starting the test IMAP server (make imap-up)"
    make -C "$REPO" imap-up
fi

# Waits until the database holds exactly what the server holds.
wait_synced() {
    local dir=$1
    for _ in $(seq 120); do
        if NICEMAILER_DATA_DIR="$dir" "$CLI" sync verify studio --skip-hash >/dev/null 2>&1; then
            return 0
        fi
        sleep 1
    done
    echo "The demo account did not finish synchronizing:" >&2
    NICEMAILER_DATA_DIR="$dir" "$CLI" sync verify studio --skip-hash >&2 || true
    return 1
}

for lang in "${langs[@]}"; do
    echo "== $lang"
    out="$SITE/demo/out/$lang"
    python3 -I "$SITE/demo/generate.py" --lang "$lang" --out "$out"
    me=$(python3 -I -c 'import json,sys; print(json.load(open(sys.argv[1]))["me"])' "$out/manifest.json")
    name=$(python3 -I -c 'import json,sys; print(json.load(open(sys.argv[1]))["name"])' "$out/manifest.json")

    # A new Dovecot user: any name logs in with "nicemailer" and starts empty.
    user="demo-$lang-$(date +%s)"
    python3 -I "$SITE/demo/imap_append.py" --dir "$out" --phase history --user "$user" --ca "$CA"

    # Short path: the core's socket path must stay under 104 characters.
    dir=$(mktemp -d /tmp/nmdemo.XXXXXX)
    export NICEMAILER_DATA_DIR="$dir"
    # A throwaway keychain file, unlocked, that never joins your keychain
    # search list (as the core's own tests do: crates/nm-daemon/tests/common).
    /usr/bin/security create-keychain -p demo "$dir/demo.keychain-db"
    /usr/bin/security unlock-keychain -p demo "$dir/demo.keychain-db"
    /usr/bin/security set-keychain-settings "$dir/demo.keychain-db"
    NICEMAILER_CONFIG="$dir/config.toml" NICEMAILER_KEYCHAIN="$dir/demo.keychain-db" NICEMAILER_FAKE_NETWORK=1 \
        "$CORE" 2>"$dir/core.log" &
    core=$!
    trap 'kill $core 2>/dev/null || true' EXIT
    for _ in $(seq 100); do [ -S "$dir/core.sock" ] && break; sleep 0.1; done

    printf %s nicemailer | "$CLI" account add studio --email "$me" --display-name "$name" \
        --host 127.0.0.1 --port 31993 --security tls --username "$user" --ca-file "$CA" \
        --no-smtp --no-archive --yes >/dev/null
    wait_synced "$dir"

    python3 -I "$SITE/demo/imap_append.py" --dir "$out" --phase after --user "$user" --ca "$CA"
    sleep 3
    "$CLI" sync now studio >/dev/null 2>&1 || true
    wait_synced "$dir"

    shots="$dir/shots"
    mkdir -p "$shots" "$dir/exports"
    applang=$([ "$lang" = fr ] && echo "(fr)" || echo "(en)")
    # Dates follow the locale, not the language: set both.
    applocale=$([ "$lang" = fr ] && echo "fr_FR" || echo "en_US")
    if ! NICEMAILER_CLI="$CLI" NICEMAILER_UI_SCRIPT="$SITE/demo/screens.uiscript" NICEMAILER_UI_OUT="$shots" \
        NICEMAILER_EXPORT_DIR="$dir/exports" perl -e 'alarm shift; exec @ARGV' 180 "$APPBIN" -AppleLanguages "$applang" -AppleLocale "$applocale" \
        2>"$dir/app.log"; then
        echo "The screenshot scenario failed ($lang):" >&2
        grep -E "^FAIL" "$shots/result.txt" >&2 || tail -20 "$dir/app.log" >&2
        exit 1
    fi
    mkdir -p "$SITE/src/assets/screens/$lang"
    cp "$shots"/*.png "$SITE/src/assets/screens/$lang/"
    kill "$core" 2>/dev/null || true
    wait "$core" 2>/dev/null || true
    trap - EXIT
    unset NICEMAILER_DATA_DIR
    echo "$lang: $(ls "$shots"/*.png | wc -l | tr -d ' ') screenshots in src/assets/screens/$lang/ (data: $dir)"
done

# The images shown when a link to the site is shared (og:image, 1200 x 630):
# the name and the tagline beside the Inbox, in each language.
(cd "$SITE" && node scripts/make-og.mjs)
