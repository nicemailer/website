---
title: Your data and backups
description: Where your email lives on your Mac, how to back it up, and how to open another mailbox.
order: 9
---

## Where it is

Everything NiceMailer keeps is in one folder, `~/Library/Application Support/NiceMailer`:

| In the folder        | What it is                                                                        | Size, for 400,000 emails |
| -------------------- | --------------------------------------------------------------------------------- | ------------------------ |
| `raw.noindex/`       | Every email exactly as it was received, compressed, one file per message          | 23 GB                    |
| `nicemailer.db`      | Folders, conversations, senders and your decisions, tags, groups, drafts, history | 0.5 GB                   |
| `nicemailer_body.db` | The text of the emails and the search index                                       | 12 GB                    |

Your settings are in `~/.config/nicemailer/`, and your passwords in the macOS Keychain.

## The raw emails never change

Each email is written once, under a name computed from its content, and never modified afterwards. Everything else NiceMailer stores can be rebuilt from these files: the text, the search index, even what an improved version of NiceMailer will learn to read in them. Your email outlives any version of the app.

## Back it up

**Time Machine** backs up the folder like any other. You can leave out the text and search file, the largest after the raw emails, since NiceMailer can rebuild it:

```sh
tmutil addexclusion ~/Library/Application\ Support/NiceMailer/nicemailer_body.db
```

**With another tool**, back up two things:

- `raw.noindex/`, with any copy tool, `rsync -a` for example. Since its files never change, each backup only copies the new emails.
- `nicemailer.db`, with the command below, which makes a consistent copy even while NiceMailer runs (about 2 seconds for 0.5 GB):

  ```sh
  /Applications/NiceMailer.app/Contents/Helpers/nicemailer mailbox backup \
       /Volumes/Backup/nicemailer.db
  ```

Copying `nicemailer.db` with the Finder while NiceMailer runs may miss its latest changes: use the command.

## Updates keep a copy

Before an update changes the format of your mailbox, NiceMailer copies it. If the change fails, the copy is put back as it was, and the previous version of NiceMailer can still open it.

## Several mailboxes

Hold <kbd>⌥</kbd> while opening NiceMailer, or choose **NiceMailer › Change Mailbox…**, to open another data folder, on an external disk for example.

## Leaving

Your email remains yours. For your IMAP accounts, everything is still on your server. On your Mac, each raw email is a standard message, compressed with zstd, and the format of the databases is documented in the [source code](https://github.com/nicemailer/nicemailer).
