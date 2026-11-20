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

## Undo

<kbd>z</kbd> undoes the last move or decision: the emails go back where they were, and the previous decision comes back. Press it again to go one step further back. Nothing is ever lost by going fast.

## The History

Every change is recorded: the moves, the decisions, who made them (you, the sorting at arrival, an AI agent). The **History** screen (<kbd>;</kbd> <kbd>h</kbd>) shows them, newest first.
