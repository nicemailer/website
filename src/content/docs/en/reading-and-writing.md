---
title: Reading and writing
description: Readable conversations, everything an email holds in one key, privacy while you read, and sending without regrets.
order: 7
---

## Conversations that read simply

When you open a conversation, each message shows only what it adds. NiceMailer folds away:

- the quoted history at the end of a reply ("On Monday, Alice wrote: …");
- signatures a sender repeats in every message;
- "Sent from my iPhone" and confidentiality notices;
- text copied from an earlier message.

Quotes inside an answer, which give the context of point-by-point replies, stay. Nothing is removed: each folded part shows a line such as "··· 24 quoted lines", and <kbd>T</kbd> shows everything at once. Older messages you have read are folded to one line; the latest one and the unread ones are open.

## Everything an email holds, in one key

<kbd>l</kbd> opens a panel with everything the email holds:

- the **verification code**, first, when the email is one ("Your code: 610731"): Return copies it;
- the **links**, each one once, with where it really leads when a newsletter hides it behind a tracking address;
- the **phone numbers** of the email and of the sender's card in Contacts: Return calls through your iPhone;
- the **attachments**: Return saves the file to Downloads, <kbd>⌘</kbd> <kbd>↩</kbd> saves and opens it;
- a **link to the email itself**, to paste into your notes.

## Links to your notes

The first row of <kbd>l</kbd> copies a link to the email, such as `[Invoice for October](nicemailer://m/3f9a0c2b7e41)`. Paste it into Obsidian, Notion or any note: a click opens NiceMailer on that email, wherever it was filed since.

## Text or HTML

NiceMailer shows an email as clean text by default. The switch at the top of the email, **text | html | images**, or <kbd>v</kbd> <kbd>h</kbd>, shows the version designed by the sender, without its scripts, and in dark mode even if it was made for a white page. NiceMailer remembers your choice for each sender.

## Images and trackers

Many emails contain tracking pixels, invisible images that tell the sender when and where you opened them. NiceMailer removes them when the email arrives, and the title line of the email shows how many. Other remote images load only when you choose **images** (or <kbd>v</kbd> <kbd>i</kbd>), for this email or for this sender from now on.

## Write and send

<kbd>r</kbd> replies to all, <kbd>R</kbd> to the sender only, <kbd>F</kbd> forwards, <kbd>c</kbd> writes a new email. The reply opens in place of the email, in a text field that behaves like any Mac text field, with your usual editing shortcuts. <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>T</kbd> switches between plain and formatted text. Attach files by dropping them on the reply, by pasting files copied in the Finder, or with <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>A</kbd>. Your text is saved as you type: a crash loses at most half a second of it.

<kbd>⌘</kbd> <kbd>↩</kbd> sends, after five seconds: the status bar says "Sending in 5 s", and <kbd>z</kbd> brings the reply back if you change your mind. <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>↩</kbd> first asks where the conversation should go once sent: Archive, Waiting, Todo.

<kbd>Esc</kbd> closes the reply and keeps the draft, in Drafts (<kbd>;</kbd> <kbd>r</kbd>) and on your server.

## Unsubscribe

When a newsletter says how to unsubscribe, a button appears on its title line (<kbd>⌘</kbd> <kbd>U</kbd>). When the list allows it, one click is enough, without opening any page. NiceMailer never offers it in Quarantine or Junk: unsubscribing from spam only confirms your address to the spammer.
