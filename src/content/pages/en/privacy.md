---
title: Privacy
description: What NiceMailer sends, to whom, and when. The short answer is nothing about you, to nobody, unless you ask.
---

NiceMailer has no telemetry: no analytics, no usage statistics, no crash reporter, no account to create. Your email stays on your Mac. This page lists every connection the app makes, so that you don't have to take that on trust. The [source code](https://github.com/nicemailer/nicemailer) lets you check it.

## What the app connects to

| Connection | When | What is sent |
| --- | --- | --- |
| Your mail servers (IMAP and SMTP) | All the time, for the accounts you added | What any mail client sends: your login, the changes you make, the emails you send |
| Your DNS resolver | When you add an account | The domain of your address, to find its mail servers. The list of known providers is built into the app |
| GitHub, for updates | Once a day, if you allowed it at the second launch, or when you choose Check for Updates… | A standard web request for the list of releases. No information about your Mac or your use of the app |
| Anthropic, through your own `claude` tool | Only when you run an AI command, if you turned AI on | The email, conversation, draft or attachment the command works on, and nothing else |
| The sender's servers | Only when you ask to load the remote images of an email | The image requests, as in any browser: the sender learns that the email was opened, and your IP address |
| The sender's unsubscribe address | Only when you click Unsubscribe | A request with no cookie and no personal data, as the list asks (RFC 8058) |

Links you open go to your browser, and phone numbers you call go to macOS and your iPhone. Neither passes through NiceMailer.

## What stays on your Mac

- **Your email**, its search index and everything NiceMailer learns from it (who is a person and who is a robot, your decisions on each sender) live in your data folder, `~/Library/Application Support/NiceMailer`.
- **Your passwords** are in the macOS Keychain, never in a file.
- **Your contacts** are read from the Contacts app when you look up a sender, and are never copied into NiceMailer.
- **The history of AI runs** (what was asked, what came back) is kept on your Mac for 30 days.

## Tracking by senders

Many emails contain tracking pixels: invisible images whose only use is to tell the sender when and where you opened the email. NiceMailer removes them when the email arrives, and never loads remote images unless you ask, for this email or for every email of this sender. The title line of an email tells you how many trackers were removed.

## AI and AI agents

AI is off until you turn it on. Even then, nothing is sent in the background: each call is started by you, on what you see. NiceMailer uses the `claude` command-line tool, signed in with your own Claude subscription, and checks at every call that it can't run commands, browse the web or read your files.

If you connect an AI app such as Claude Desktop to NiceMailer, that app can read your email to answer your questions, and sends what it reads to its own AI provider, under that provider's terms. NiceMailer lets it read and prepare drafts, but never send, move or delete.

## This website

nicemailer.org is a static site hosted by GitHub Pages. It has no cookies, no analytics, no tracking scripts and no fonts or images loaded from other sites. GitHub, as the host, receives the usual request information (such as your IP address) to serve the pages; see [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

## Questions

If something on this page is unclear, or if you find the app doing something it doesn't say, please [open an issue](https://github.com/nicemailer/nicemailer/issues).
