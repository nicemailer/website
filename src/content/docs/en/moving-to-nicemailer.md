---
title: Moving to NiceMailer
description: Bring every email you have, from your current accounts and from the archives of the ones you closed.
order: 3
---

Moving to NiceMailer doesn't mean leaving anything behind. There are three cases, from the simplest to the rarest.

## Your current accounts

[Add them](/docs/add-an-account/). NiceMailer downloads every email of every folder and keeps a copy on your Mac. The list is ready first, within seconds to minutes; the text of the emails follows in the background. On a test mailbox of 100,000 emails, every list was complete after 20 seconds.

You can keep using your other mail apps meanwhile: they see the same folders.

## Archives of accounts you closed

An old work address, a provider you left: if you have an **mbox** file of it, NiceMailer imports it into an archive account. Most services and mail apps can export one:

| From | How to get the mbox file |
| --- | --- |
| HEY | Export your email from your HEY account settings |
| Gmail | [Google Takeout](https://takeout.google.com), Mail only: you get an `.mbox` file |
| Apple Mail | Select a mailbox, **Mailbox › Export Mailbox…**: the file is named `mbox`, inside the exported folder |
| Thunderbird | Each local folder is an mbox file; the ImportExportTools NG add-on exports others |

Then, in Terminal (NiceMailer must be running):

```sh
/Applications/NiceMailer.app/Contents/Helpers/nicemailer import-mbox ~/Downloads/archive.mbox \
    --account old-job --address me@old-job.com
```

- `--account` is the name of the archive account, as you want to see it in NiceMailer.
- `--address` is the address of that mailbox: what you sent from it goes to Sent, everything else to Archive.

What to expect:

- **It is fast.** A 10 GB export of 46,000 emails takes about 40 seconds.
- **Nothing is lost.** Each email is kept exactly as it was, and conversations are rebuilt.
- **It can be stopped and run again.** Running the same command again only adds what is missing: emails already imported are skipped.
- **It stays on your Mac.** An archive account has no server: nothing is sent anywhere, and filing its emails only changes your Mac.
- **The people you wrote to are remembered.** Their next emails, on any account, go straight to your Inbox instead of Quarantine.

## Your whole Apple Mail library

Apple Mail keeps a copy of every account it ever had, even after you removed the account or the server closed. NiceMailer can bring that whole library over, every account and every folder, including the ones whose server no longer exists (Apple Mail's own export fails on them).

For now this is done with two scripts of the [source code](https://github.com/nicemailer/nicemailer), which need Python 3 and Terminal with Full Disk Access:

1. `scripts/export-apple-mail.py` reads your Apple Mail library without changing it and writes one mbox file per account and per local folder, attachments included.
2. `scripts/import-mail-export.py` imports them all into NiceMailer, asking only what it cannot guess, such as the name of an account.

The scripts are described in the documentation of the source code (`docs/import-mbox.md`, "Importing all of Apple Mail").

## Going back

NiceMailer locks nothing in. Your email stays on your server for your current accounts, every message on your Mac is kept byte for byte as it was received (compressed, one file per message), and NiceMailer is open source: you can always read your data without it.
