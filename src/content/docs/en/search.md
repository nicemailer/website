---
title: Search and filters
description: Find any email instantly by its content, its attributes, or both.
order: 6
---

## Search everywhere

Press <kbd>/</kbd> and type a few words. NiceMailer looks for them everywhere: subject, sender, recipients and text, in every folder but Deleted, Junk and Banned. Each word matches the beginning of a word, and accents don't matter: `factur` finds "facture" and "factures".

Put a dash before a word to exclude it: `renewal -invoice`.

## Filter the list

Press <kbd>f</kbd> (or click the magnifier in the status bar) to filter the current list. Filters add up, and each one shows as a chip in the status bar: click a chip to remove it, or press <kbd>Esc</kbd> to remove them all.

| Filter | Keeps |
| --- | --- |
| Unread, Read | Conversations with an unread email, or none |
| Flagged, Not flagged | Flagged conversations, or the others |
| From…, To… | Email from or to a person, an address or a whole domain (`@shop.com`) |
| Subject…, Text… | Words of the subject, or of the subject and text |
| Conversation date…, Mail date… | Today, the last 7 or 30 days, this year, before or after a date |
| With attachments | Conversations with a file |
| With my reply | Conversations you answered |
| Human, Robot | Conversations with a real person, or only machines |
| Tag…, Group… | Email with a tag, or from a member of a contact group |

You don't have to scroll: type a few letters of a filter. `un` reaches Unread, `nf` reaches Not flagged (its initials), `fr` reaches From….

## Exclude

Every filter can be turned around. Yes-or-no filters have their opposite (Not flagged, Without attachments). In From…, To…, Subject… and Text…, start the value with a dash: `-@shop.com` keeps everything that is not from that shop.

An example: emails that talk about acme.com, but neither from nor to acme.com. <kbd>f</kbd> Text… `acme.com`; <kbd>f</kbd> From… `-@acme.com`; <kbd>f</kbd> To… `-@acme.com`.

## Type dates the way you think of them

The date filters understand:

- a date: `2026-10-01`, `1/10/2026`, `1.10.26`;
- a duration: `10d`, `3w`, `6m`, `2y`, or in words, `2 years`;
- then "after" or "before" it. Two bounds make an interval: after January 1st, then before July 1st, is the first half of the year.

## Human or robot

Most email is sent by machines: shops, services, notifications. NiceMailer tells them apart from what is in each email, without reading its text. The **Human** filter leaves only the conversations with real people, even in years of archives. If NiceMailer gets a sender wrong, change it on the **Contacts** screen (<kbd>;</kbd> <kbd>c</kbd>).

## Every email of a person

<kbd>⌃</kbd> <kbd>⇧</kbd> <kbd>c</kbd> on an email lists every email of its sender, in every folder. On the Contacts screen, Return does the same for any address.
