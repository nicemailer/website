#!/usr/bin/env python3
"""Appends one phase of a generated demo mailbox to an IMAP server.

    python3 demo/imap_append.py --dir demo/out/en --phase history \
        --user demo-en-123 --password nicemailer --ca <ca.crt>

Meant for the test Dovecot of the app repository (`make imap-up`), on
127.0.0.1:31993 with TLS. Missing folders are created.
"""

import argparse
import imaplib
import json
import ssl
from datetime import datetime
from pathlib import Path


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dir", required=True)
    ap.add_argument("--phase", choices=["history", "after"], required=True)
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--port", type=int, default=31993)
    ap.add_argument("--user", required=True)
    ap.add_argument("--password", default="nicemailer")
    ap.add_argument("--ca", required=True)
    args = ap.parse_args()

    folder_dir = Path(args.dir)
    manifest = json.loads((folder_dir / "manifest.json").read_text())
    ctx = ssl.create_default_context(cafile=args.ca)
    # The test certificate is made for "localhost"; we connect by IP.
    ctx.check_hostname = False
    # Python 3.13+ also enforces RFC 5280 details the test authority lacks
    # (an Authority Key Identifier); the chain itself is still verified.
    ctx.verify_flags &= ~ssl.VERIFY_X509_STRICT
    imap = imaplib.IMAP4_SSL(args.host, args.port, ssl_context=ctx)
    imap.login(args.user, args.password)

    existing = set()
    typ, data = imap.list()
    for line in data or []:
        name = line.decode().rsplit(' "', 1)[-1].strip('"') if line else ""
        existing.add(name)
    count = 0
    for m in manifest["mails"]:
        if m["phase"] != args.phase:
            continue
        folder = m["folder"]
        if folder not in existing and folder != "INBOX":
            imap.create(folder)
            existing.add(folder)
        raw = (folder_dir / m["file"]).read_bytes()
        date = imaplib.Time2Internaldate(datetime.fromisoformat(m["date"]).timestamp())
        flags = "(" + " ".join(m["flags"]) + ")"
        typ, resp = imap.append(folder, flags, date, raw)
        if typ != "OK":
            raise SystemExit(f"APPEND {m['file']} to {folder}: {resp}")
        count += 1
    imap.logout()
    print(f"{args.phase}: {count} messages appended for {args.user}")


if __name__ == "__main__":
    main()
