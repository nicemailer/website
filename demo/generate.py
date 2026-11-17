#!/usr/bin/env python3
"""Writes the demo mailbox of a language as .eml files and a manifest.

    python3 demo/generate.py --lang en --out demo/out/en

The messages are generated once and written to files, so that the two
phases (history, then the arrivals after the account is organized) share
the same Message-IDs and their conversations hold together.

manifest.json lists, in the order to append them: the file, the server
folder, the phase, the IMAP flags and the internal date.
"""

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from demobox import build_box  # noqa: E402


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--lang", choices=["en", "fr"], required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    now = datetime.now().astimezone().replace(microsecond=0)
    box = build_box(args.lang, now)
    # Oldest first, as a real mailbox fills: UIDs then follow the dates.
    mails = sorted(box.mails, key=lambda m: (m.phase != "history", m.date))
    manifest = []
    for n, m in enumerate(mails):
        name = f"{n:04d}.eml"
        (out / name).write_bytes(m.msg.as_bytes())
        flags = []
        if m.seen:
            flags.append("\\Seen")
        if m.flagged:
            flags.append("\\Flagged")
        manifest.append(
            {
                "file": name,
                "folder": m.folder,
                "phase": m.phase,
                "flags": flags,
                "date": m.date.isoformat(),
            }
        )
    (out / "manifest.json").write_text(json.dumps({"me": box.me.addr, "name": box.me.name, "mails": manifest}, indent=1))
    phases = {p: sum(1 for m in manifest if m["phase"] == p) for p in ("history", "after")}
    print(f"{out}: {len(manifest)} messages ({phases['history']} history, {phases['after']} after)")


if __name__ == "__main__":
    main()
