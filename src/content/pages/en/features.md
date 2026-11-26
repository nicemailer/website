---
title: Features
description: Everything NiceMailer does to keep your email fast, calm and safe.
---

## Speed

### Instant, whatever the size of your mailbox

Opening a folder takes a couple of milliseconds, even while new mail is being downloaded. Filtering 400,000 emails to keep only those written by real people takes 2 ms. NiceMailer has been built and tested on mailboxes of hundreds of thousands of emails, from the first line of code.

### Keyboard first. Keyboard king.

Never used a keyboard shortcut? No problem: everything works with the mouse.

But if you love keyboard shortcuts, you've come to the right place. Keys inspired by Vim to read, reply, file, tag and search without lifting your hands from the keyboard: <kbd>j</kbd> and <kbd>k</kbd> to move, <kbd>d</kbd> to archive, <kbd>r</kbd> to reply, <kbd>/</kbd> to search, <kbd>z</kbd> to undo. Press <kbd>?</kbd> at any time to see every key.

### Don't search. Find.

Filter all your email instantly, across all your accounts. Combine every criterion: full text, date, sender, recipient, unread, flagged, with attachments, with your reply, sender is a person or a robot, tag, contact group. Every filter can be inverted ("not from @shop.com"), dates can be typed the way you think of them ("after 1/10/2026", "older than 6 months"), and everything stays instant.

### Everything in an email, one key away

One key, <kbd>l</kbd>, lists everything an email holds: its links, its attachments, the phone numbers of the sender, and the confirmation code you just received. Copy the code, open the attachment, or call the sender through your iPhone, all with a single keystroke.

### Deep links to your notes

Every email has a permanent link, such as `[Email subject](nicemailer://m/3f9a0c2b7e41)`, copied from the email in two keystrokes. Paste it into Obsidian, Notion or any note-taking app, and come back to the email in one click, years later.

## Calm

### Unknown senders wait in Quarantine

Email from people you have never heard from stays out of your inbox, in Quarantine. There, one key decides where each sender belongs: your Inbox, Paperwork, Newsletters, or banned for good. Everything runs on your Mac and works with your existing IMAP account, so you find the same result on your phone.

Paperwork holds the admin (invoices and the like) that you don't read but need to keep. Newsletters holds the newsletters you will be glad to read when you have the time.

### Decide once per sender. Forever.

Your decision applies to the sender, not to one email. Send a shop to Newsletters, and every email it has ever sent you, in every account, goes there too, along with every one it will send. You can even decide for a whole domain at once.

### A workflow that keeps your inbox clean

Each email in your inbox only needs to be seen, read and dealt with once. Then you decide where it goes:

- **Archive**: nothing left to do;
- **Todo**: action is needed;
- **Waiting**: emails you will need to follow up on soon. An email from someone promising to "get back to you very soon"; the email you sent to a prospect, whose reply you are waiting for. The conversation comes back to your inbox by itself when the reply arrives.

Inbox, Todo and Waiting come together in "Work" to give you the full picture. A small arrow in the list ("→ Alice") tells you at a glance who is waiting for whom.

### Go fast, without fear

Every move and every decision can be undone with one key. Every email you send waits five seconds before it leaves, in case you change your mind.

### Try it without changing a thing

Not sure this workflow is for you? Add your account and choose "Only look for now": NiceMailer shows your mail and doesn't change a single byte on the server. Before you go further, it shows you exactly which folders it will create. When you are ready, one click puts the workflow in place, without downloading your mail again.

### Tell humans from robots

Most of the email we receive is written by machines. NiceMailer tells them apart, so that in a single keystroke you see only the conversations with real people, even in years of archives.

### Conversations you can actually read

Long threads are a wall of repeated quotes, signatures and "Sent from my iPhone". NiceMailer shows each message with only what it adds: the quoted history, repeated signatures and copies of earlier messages are folded away, one key away if you need them.

### Easy on your eyes

Some email clients end up looking like Christmas trees. NiceMailer has a clean, quiet interface: its power lies in how quickly it lets you find, read, reply to and file your email. And a real dark mode darkens even the white background of your favorite newsletter.

### Your look, your rules

Four themes come built in: **Clean**, the default; **Regular**, a Mac window with a toolbar, as in Mail; **Geek**, for those who live in their code editor; and **Minimal**, Clean in a monospaced font, with emails as text. The list shows one line per email, or three as in Mail: sender and date, subject, the beginning of the email. Each theme is a small text file you can change, or use to start your own. The keys and features are the same in all of them.

## Trust

### Phishing stays out

Anyone can write any name in the "From" of an email. NiceMailer checks that each email really comes from who it claims to be (SPF, DKIM, DMARC), and is not fooled by forged results. An email pretending to come from your bank doesn't get past Quarantine just because it borrowed a known name, and banning a forger never bans the real sender.

### Nobody knows when you read their email

Tracking pixels, the invisible images that tell a sender when and where you opened their email, are removed when the email arrives. Remote images are never loaded unless you ask, and NiceMailer remembers your choice for each sender. Unsubscribing from a newsletter takes one click, and NiceMailer never offers it on spam, where it would only confirm your address to the spammer.

### No telemetry. None.

NiceMailer doesn't count you, doesn't profile you and doesn't report on you: no analytics, no crash reporter phoning home, no account to create. The same goes for this site, which has no cookies and no statistics. What the app sends, and to whom, is listed on the [Privacy](/privacy/) page.

### Your email, on your Mac, forever

Your email holds the record of your entire personal and professional life. Your provider could shut down, or your organization could close your account at any time. NiceMailer keeps every email on your Mac, exactly as it was received, in files that are never modified afterwards. Back them up with Time Machine or any copy tool: each backup only adds the new emails. Everything else NiceMailer stores can be rebuilt from these files.

### Keep your history

Import a whole mailbox from an mbox file: a 10 GB export of 45,000 emails takes about 40 seconds. Moving from Apple Mail? NiceMailer can bring your entire Apple Mail library, including accounts whose server no longer exists. See [Moving to NiceMailer](/docs/moving-to-nicemailer/).

### AI that works for you, and only when you ask

AI in NiceMailer is optional, and off until you turn it on. Nothing is sent to the AI unless you ask, and nothing it suggests is applied until you accept it.

- **Write**: turn three bullet points into a complete email (it leaves blanks rather than inventing facts), proofread, improve the style, rephrase, translate, suggest subjects.
- **Read**: summarize a conversation and its action items, summarize an attached PDF or document, translate an email, check whether a suspicious email is a scam.
- **Sort**: suggest where each email in Quarantine belongs, for you to confirm in one keystroke.

NiceMailer uses your existing Claude subscription and stores no credentials. Every email is treated as data, never as an instruction: a malicious email cannot take control of the AI.

### Your AI assistant, connected to your mailbox

Thanks to NiceMailer's MCP server, Claude Desktop, Claude Code or a similar app can search your email, read conversations and attachments, answer "which urgent or important emails should I deal with first?", and prepare replies. It cannot send, move or delete anything: that rule is enforced by NiceMailer itself, not left to the AI, and NiceMailer's core only answers apps that carry its own code signature. You review every draft and send it yourself.

### See who did what

Every change to your mailbox is recorded: what you filed today, who banned that address, what your AI assistant did. Look back at your day from the History screen.

### Open source, so you can check

NiceMailer is free software under the GNU AGPLv3. You don't have to take any claim on this page on trust: how your email is stored, what is sent to the AI and what an AI agent may do are all in the [source code](https://github.com/nicemailer/nicemailer). Not a developer? Send your AI agent to read it for you: it will be delighted.

### Built to last

NiceMailer's data model and specifications were designed long before the first line of code. Its core, written in Rust, keeps running in the background when the app is closed: mail keeps arriving and being sorted, and pending emails are sent. Every change you make survives a crash and reaches the server when the connection comes back. Before each upgrade, your mailbox is copied, and it is restored automatically if anything goes wrong. A full test suite guards every feature.
