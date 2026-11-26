---
title: Add your account
description: Connect your mailbox, look at it without changing anything, then organize it when you are ready.
order: 2
---

## Providers that work

NiceMailer works with any provider that offers **IMAP**: Gmail, iCloud, Fastmail, Outlook.com, Microsoft 365, your company's or your host's mail server, and most others.

- **Gmail, iCloud and Fastmail** ask for an **app password**, created in the security settings of your account, instead of your usual password: see [Gmail, iCloud, Fastmail](/docs/app-passwords/) for each, step by step.
- **Outlook.com and Microsoft 365** sign in through your browser, on Microsoft's page: NiceMailer never sees your password (see below).

## Add the account

1. Open **NiceMailer › Settings…** (<kbd>⌘</kbd> <kbd>,</kbd>), tab **Accounts**, and click **+**.
2. Type your address, your password, and the name people should see in "From".
3. Click **Add Account**.

NiceMailer finds the servers of your address by itself, and asks for more only when it needs to: the IMAP server if your domain is not a known one, or a separate password for sending if your provider wants one. Your password is saved in the macOS Keychain, never in a file.

To change it later, for example after a new app password, open the account's page in the Settings.

### Outlook.com and Microsoft 365

Microsoft no longer accepts passwords from mail apps. As soon as you type an Outlook.com, Hotmail, Live or Microsoft 365 address, the password field is replaced by a **Sign in with Microsoft** button. Click it, sign in on Microsoft's page in your browser, and the adding resumes where it stopped.

If Microsoft later asks you to sign in again (after you changed your password, say), the account's page in the Settings has a **Sign in again** button. From the Terminal, `nicemailer account add` and `nicemailer account login <account>` open the same page in your browser.

## Look first, decide later

Before anything is written on your server, NiceMailer shows you what it would change: the folders it would create (Todo, Waiting, Quarantine, Paperwork, Newsletter…) and the folder it would use for each role. If your server already has a folder for a role, you can pick it instead.

You can then choose **Only look for now: change nothing on the server**. NiceMailer downloads and shows your mail, search and filters work, and not a single byte changes on the server: no folder is created and no email is moved.

When you are ready, select the account in the Settings and click **Organize…**. NiceMailer shows the same summary again, then creates its folders and starts sorting new mail. Your mail is not downloaded again.

## A short Inbox to start with

If your Inbox holds a lot of email, NiceMailer offers to archive the old messages when you organize the account: read emails older than a date, and unread ones older than another. It shows the exact number of emails each choice moves, and you can uncheck either. You start with an Inbox that holds only what is recent.

## The people you know skip Quarantine

Once the account is organized, email from unknown senders goes to [Quarantine](/docs/workflow/). So that your friends and colleagues don't end up there, NiceMailer accepts at once everyone you have written to: their next emails go straight to your Inbox. You can turn this off on the same screen.

## Your phone sees the same thing

NiceMailer's folders are ordinary folders on your server. Whatever you file in NiceMailer, your phone and your other mail apps see in the same folder, and what you do elsewhere shows up in NiceMailer.

## Several accounts

Add as many accounts as you like. The account picker, <kbd>@</kbd>, shows one account or all of them together. Drag the accounts in the Settings to change their order.
