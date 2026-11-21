## 0.2.1 — 2026-11-21

### Added

- **Folders:** Give the folders your own names in `config.toml` (`[folder_names]`, e.g. `waiting = "En attente"`), and the views Work, All Mail and Everything too. English stays the default; the created file proposes the French names, commented out. Only the app shows them: the folders on the server keep their names.
- **Display:** Set the text size in `config.toml`: `ui.text_size` for the window and `ui.status_bar_text_size` for the status bar, applied as soon as the file is saved.
- **Sync:** While an account is synchronized for the first time, the status bar says how far it is: "Importing Inbox: 12,300 of 44,829", then the mails left to download. A large account no longer makes the app look frozen.
- **AI agents:** Each mail an agent reads comes with its link (`nicemailer://m/…`), to put in a note or an answer; paste a link to a mail in the conversation and the agent reads that mail.

### Changed

- **Links:** The link to a mail (`l`, then Return) names the mail itself, `nicemailer://m/3f9a0c2b7e41`, rather than its number in the database: pasted in a note, it opens the mail on every Mac that has it, and after a mailbox is imported again. Links copied before keep working on the Mac that made them.
- **Links:** In a conversation, the link to a mail (`l`) is the one of the message you are reading (`ctrl-k` / `ctrl-j`), and opening it shows that very message, unfolded, in the folder where the conversation is filed. The History screen opens its mails the same way.
- **Sync:** NiceMailer no longer limits each account to 10 connections an hour. It slows down only for a server that shows a block (refuses a login "for now", refuses the password it accepted, turns the connection away): it then waits from 15 minutes to 4 hours, and connects at most half as often from then on. `nicemailer sync status` shows the limit learnt; it survives a restart, and a new password ends the wait.
- **Accounts:** with a single account, the account switcher (`@`) no longer shows in the status bar, the key does nothing and the help leaves it out.
- **Display:** The default text size is 16 pt instead of 12, and 18 pt in the status bar. ⌘+ and ⌘− now last for the session only, and ⌘0 goes back to the size of `config.toml`.

### Fixed

- **Sync:** New mail no longer stops arriving for a while after the Mac has slept and woken a few times. A wake keeps the connections that survived the sleep, and replaces the others with a single login once the Mac has stayed awake 15 s; the limit of logins per hour now counts the time the Mac slept, so a wait for it ends when `nicemailer sync status` says.
- **Display:** In the classic theme, the sections of the sidebar (Working, Filing, Rejected, Technical) follow the app's language; they were always in French.
- **Keys:** In `keymap.toml`, a key given to an action of a menu (`f = "move.todo"` in `[menu.move]`) now replaces its default key: the menu and the folder column show it, and the default key no longer does that action. Before, both keys worked and the menus kept showing the default one. In the other tables, the default key still works, but the help and the status bar show yours.
- **Display:** The status bar always says the text size reached by ⌘+, ⌘− or ⌘0, also when the change comes from the View menu.


## 0.2.0 — 2026-11-20

First public and open-source release, with 19 languages, configurable keyboard shortcuts, and auto-update. New UI to add an account and an option to try it in "look-only" mode to test the app.

### Added

- **License:** NiceMailer is free software, under the GNU Affero General Public License, version 3.
- **Languages:** 17 new languages, following the language of macOS or the one chosen for the app: German, Spanish, Italian, Portuguese (Brazil and Portugal), Dutch, Swedish, Danish, Norwegian, Finnish, Polish, Russian, Ukrainian, Japanese, Simplified and Traditional Chinese, and Korean. These translations have not yet been reviewed by native speakers.
- **Updates:** NiceMailer updates itself and its background core. It checks once a day, or on demand with NiceMailer > Check for Updates….
- **Updates:** During an update or a mailbox upgrade, the app, the `nicemailer` command and AI agents say so and wait, instead of reporting that NiceMailer is not running. `nicemailer --wait` waits for the end; without it, the command exits with status 75.
- **Updates:** The mailbox is copied before each upgrade of its data format and put back if the upgrade fails: nothing is lost, and the previous version can still open it.
- **Writing:** A Bcc button at the end of the Cc line shows or hides the Bcc line.
- **Keyboard:** `Ctrl-D` and `Ctrl-U` move by half a page on the History, Contacts, Tags and Groups screens.
- **Keyboard:** Every key can be changed in `~/.config/nicemailer/keymap.toml`: move or remove keys, add your own for any folder or action, create your own menus. The help, the status bar and the menus show the keys in effect, and `nicemailer keymap check` validates the file.
- **Accounts:** Preferences (Settings…, ⌘,) with an Accounts tab: add an account from its address, password and name, list the accounts and change their order. NiceMailer finds the servers and asks for more only when needed.
- **Accounts:** Before an account is added, the Preferences show what will change on the server: the folders to create, and for each role a choice among the folders that already exist.
- **Accounts:** Add an account "only to look": NiceMailer shows its mail and changes nothing on the server. "Organize…" on its page, or `nicemailer account activate`, later creates the folders, archives the old mail and starts screening, without downloading the mail again.
- **Tags and groups:** Filter the list with Tag… and Group… in the attribute selector (`f`), including "without tag" and "without group".
- **Tags and groups:** In three columns, the groups are listed under the folders: a click filters the list, and the active groups are highlighted.
- **Tags and groups:** The open mail shows its tags and the groups of its sender after the subject.
- **Tags and groups:** `t` and `g` also remove a tag or a group, for one mail or a selection; with several mails, each row says how many have it.
- **Tags and groups:** Rename (`r`) or delete (`d`) a tag or a group from the Tags (`;T`) and Groups (`;g`) screens. Deleting a tag removes it from all its mails, on the server too.
- **Tags and groups:** The Tags screen shows one row per tag name, with its mails counted across all accounts.
- **Unsubscribing:** `unsubscribe.in_banned = true` in `config.toml` shows the unsubscribe button on the mails of Banned, to clean that folder of lists you once signed up to (off by default).
- **Command line:** `nicemailer core stop` and `nicemailer core start` stop and start the background core, and return once it is done.

### Changed

- **Window:** The title bar is shown by default. In the `config.toml` NiceMailer creates, the lines of the hidden title bar, call confirmation, AI and unsubscribing in Banned show the value that turns them on: removing the `# ` is enough.
- **History:** The History screen is readable: short dates, who did what in plain words, one row per batch that unfolds, and Return opens the mail in its current folder so an action can be corrected. Mails marked as read are hidden until you press `u`. `f` shows only the actions of one author: you, NiceMailer, the terminal or an AI agent.
- **Attribute selector:** All rows of `f` are visible at once, without scrolling, and grouped in pairs: Unread / Read, Flagged / Not flagged, From… / To…, Subject… / Text…, the two dates, Group… / Tag…, Human / Robot, attachments, your reply, conversations. "Answered" is now "With my reply".
- **Speed:** NiceMailer stays faster when the Mac is busy, after a restart or during a backup, and the synchronization holds up your actions less.
- **Command line:** `nicemailer mailbox check`, `upgrade` and `backup` work on the mailbox in use, without a folder to type; `--data-dir` names another mailbox folder. `backup` takes only the file to write.

### Fixed

- **Mail:** New mail no longer stays "(body not downloaded)" for up to an hour after the Mac woke from sleep a few times: its body comes within seconds, and at once when you open it.
- **Unsubscribe:** "unsubscribed" gives the day it was done, also when it was today; it gave only the time ("unsubscribed 09:57").
- **AI:** A prompt run right after typing in a reply reads the last words typed, and its answer applies; before, it could work on an older text and refuse to apply with "The reply changed since the AI read it".
- **Language and region:** Dates, sizes and numbers follow the app's language and the Mac's region: month names, date order (also when typing a date in the attribute selector), 12- or 24-hour clock, "251 ko", "1 234".
- **Language and region:** Counts read correctly in English and French: "1 mail", "1 attachment saved", and in French "0 mail".
- **Language and region:** Errors, including connection errors, are written in the app's language; the words of a mail server or of the AI are quoted as they came.
- **Keyboard:** Keys typed in the Preferences and in the open and save panels reach their fields, instead of running commands in the main window.
- **Replies:** The quoted history at the end of a reply is folded in many more languages: German, Portuguese, Dutch, Swedish, Danish, Norwegian, Polish, Russian, Chinese and Japanese, including Outlook headers and forwards.
- **Replies:** Replying from NiceMailer marks the mail as answered, also on the server, so other mail clients show it.
- **Replies:** "With my reply" also finds the conversations answered from a mail client that does not mark the mail: a reply of yours in Sent is enough.
- **Tags and groups:** The tag picker (`t`) lists the tags of every account; it could be empty for a mail of another account.
- **Tags and groups:** `g` adds the person the conversation is with, no longer yourself. Your own addresses can no longer be in a group, and those already there are removed.
- **Accounts:** When the SMTP server refuses the mailbox password, `nicemailer account add` keeps the account's server and says to save its own password, instead of creating the account without a server to send from.
- **History:** The list scrolls to the end of the log, with the keys and with the mouse wheel; the Contacts screen too.
- **Updates:** The app no longer stays without its core after a new version, signed differently, replaces the installed one.

### Removed

- **Interface:** The Theme menu and the Classic interface: NiceMailer always opens in its keyboard-driven interface.
- **Interface:** File > New Window and window tabs: a second window only mirrored the first. Windows with their own folder and selection will come back later.
- **Interface:** NiceMailer > Stop the Core, replaced by `nicemailer core stop`.

## 0.1.0 — 2026-11-16

First release, for testers. Apple Silicon Macs only, macOS 14 or later. No automatic updates: to update, download the new version and replace the app in Applications.

### Added

- IMAP accounts: servers found from the address, initial import of the mailbox, synchronization in both directions, new mail pushed by IDLE.
- A core that keeps running in the background when the app is closed: mail keeps arriving and being sorted, pending sends leave.
- New mail screened at reception: people and robots told apart, sender authentication checked.
- A folder workflow driven by the keyboard, with a decision on each sender and undo.
- Simplified display of conversations: quotes, signatures and copies hidden.
- Replies with a text or formatted editor, sent through SMTP with an undo delay.
- AI assistance through your own `claude` command-line tool.
- Import of a whole mailbox from an mbox file.
- Links to a mail (`nicemailer://m/<id>`) to paste in notes, for example in Obsidian.
- The `nicemailer` command-line client, inside the app (`Contents/Helpers/nicemailer`).
- English and French.
