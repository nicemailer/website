---
title: The workflow
description: Where email goes, and why. Quarantine, Inbox, Archive, Todo, Waiting, and a decision once per sender.
order: 4
---

The workflow starts once your account is [activated](/docs/add-an-account/) without the **Only look for now** option.

## The folders

| Folder         | What is in it                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| **Inbox**      | Email from the people you accepted, not dealt with yet                                                      |
| **Todo**       | Conversations where you have something to produce                                                           |
| **Waiting**    | Conversations to follow up on: a sender who promised to "get back to you"; an email you sent to a prospect  |
| **Quarantine** | Email from strangers you haven't decided on yet                                                             |
| **Archive**    | Conversations with nothing left to do                                                                       |
| **Paperwork**  | Invoices, receipts, statements: email you keep, but don't read as it arrives                                |
| **Newsletter** | Newsletters, promotions, notifications                                                                      |
| **Junk**       | Spam                                                                                                        |
| **Banned**     | Senders you never want to hear from again                                                                   |
| **Deleted**    | The trash                                                                                                   |

Three views group several folders:
- **Work** (<kbd>;</kbd> <kbd>o</kbd>) with everything still to deal with: Inbox, Todo and Waiting together;
- **All Mail** (<kbd>;</kbd> <kbd>m</kbd>) everything but Deleted, Junk and Banned, ideal for most searches;
- **Everything** (<kbd>;</kbd> <kbd>e</kbd>) really everything.

## Quarantine: deciding once per sender

When someone writes to you for the first time, their email goes to Quarantine. There, a single key decides where the sender belongs:

| Key          | Destination | And their next emails                               |
| ------------ | ----------- | --------------------------------------------------- |
| <kbd>i</kbd> | Inbox       | Go to the Inbox                                     |
| <kbd>n</kbd> | Newsletter  | Go to Newsletter                                    |
| <kbd>p</kbd> | Paperwork   | Go to Paperwork                                     |
| <kbd>b</kbd> | Banned      | Go to Banned                                        |
| <kbd>x</kbd> | Junk        | Stay in Quarantine: spam changes address every time |
| <kbd>d</kbd> | Deleted     | Stay in Quarantine                                  |

A decision applies to the sender, not to one email: every email they sent you before, in every account, is filed with it, and so is every email they will send. The status bar says so: "moved to Newsletter, next mails of news@shop.com too, 12 other mails filed".

The same decision can be taken later from any folder: moving a conversation to Newsletter, Paperwork or Banned decides for its sender too. The **Contacts** screen (<kbd>;</kbd> <kbd>c</kbd>) lists every sender with its decision, which you can change there.

Before each name in Quarantine, a silhouette means a person wrote the email, a gear means a machine did. A person is usually the one who deserves your Inbox.

## Forged senders

Anyone can write any name and address in the "From" of an email. NiceMailer checks with your mail server's verdict (SPF, DKIM, DMARC) that each email really comes from the domain it claims.

- An email that fails this check stays in Quarantine, even if you accepted the sender it pretends to be.
- If you try to accept a sender whose email looks forged, NiceMailer asks first. Some legitimate senders use badly configured tools: you can then accept their unverified email from now on.
- Banning a forged email bans that email only, never the real sender whose name was borrowed.

## Out of the Inbox

| Key                       | Destination | When                                               |
| ------------------------- | ----------- | -------------------------------------------------- |
| <kbd>d</kbd>              | Archive     | Nothing left to do                                 |
| <kbd>m</kbd> <kbd>t</kbd> | Todo        | You need to do something                           |
| <kbd>m</kbd> <kbd>w</kbd> | Waiting     | You are waiting for an answer or need to follow up |
| <kbd>Delete</kbd>         | Deleted     | You don't want it                                  |

And of course, replying to an email takes it out of the Inbox.

<kbd>m</kbd> opens a menu of every destination allowed from the current folder. A conversation in **Waiting** comes back to your Inbox by itself when someone answers. When you reply, <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>↩</kbd> sends and files the conversation in one step, for example in Waiting.

In the list, an arrow before the name ("→ Alice") means you wrote last: the conversation is waiting on the other person.

## Tags and groups

Folders say where a conversation stands. Tags and groups add what folders don't: what an email is about, and who wrote it. Neither of them moves your email.

**A tag** goes on a conversation: "Dupont project", "Accounts 2026", "Urgent". A conversation can have several. <kbd>t</kbd> opens the list of tags: pick one, or type a new name to create it. The conversation's own tags come first, so you can remove them. Tags are stored on the server as IMAP keywords: Thunderbird shows them, but Mail on iPhone and Gmail usually don't.

**A group** gathers people: VIP, Family, Team, Club. <kbd>g</kbd> adds the sender of the conversation to a group, or removes them, and typing a new name creates the group. A person can be in several groups, and groups apply to all your accounts. Being in a group doesn't change where email goes: the decision says where an email goes, the group says who the sender is.

With several conversations marked, <kbd>t</kbd> and <kbd>g</kbd> apply to all of them, and each line says how many already have it: "1 of 3".

A conversation's tags show in the list and at the top of the email (`#Urgent`), and so do the sender's groups (`@VIP`). To find their email:

- <kbd>;</kbd> <kbd>T</kbd> lists the tags and <kbd>;</kbd> <kbd>g</kbd> the groups. <kbd>↩</kbd> opens the email of the tag or of the group's members, in every account; <kbd>r</kbd> renames, <kbd>d</kbd> deletes.
- The **Tag…** and **Group…** filters (<kbd>f</kbd>) narrow any list. See [Search and filters](/docs/search/).
- In the three-column layout, groups appear below the folders: a click filters the list on their members.

Deleting a tag removes it from all its emails, on the server too, and can't be undone with <kbd>z</kbd>. Deleting a group doesn't touch any email.

## Undo

<kbd>z</kbd> undoes the last move or decision: the emails go back where they were, and the previous decision comes back. Press it again to go one step further back. Nothing is ever lost by going fast.

## The History

Every change is recorded: the moves, the decisions, who made them (you, the sorting at arrival, an AI agent). The **History** screen (<kbd>;</kbd> <kbd>h</kbd>) shows them, newest first.
