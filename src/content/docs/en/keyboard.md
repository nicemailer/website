---
title: Keyboard shortcuts
description: The keys you will use every day. Press ? in the app to see all of them.
order: 5
---

You don't need to learn any of this: everything has a menu item or a click. But each key you learn saves a trip to the mouse, many times a day. In the app, <kbd>?</kbd> shows every key, grouped by use.

Some keys are a **prefix**: <kbd>;</kbd>, <kbd>m</kbd>, <kbd>s</kbd> and <kbd>v</kbd> open a small menu that lists the second keys, so you never have to remember them.

## Move around

| Key | Action |
| --- | --- |
| <kbd>j</kbd> <kbd>k</kbd>, or <kbd>↓</kbd> <kbd>↑</kbd> | Next, previous conversation |
| <kbd>⌃</kbd> <kbd>d</kbd><br><kbd>⌃</kbd> <kbd>u</kbd> | Half a page down, up |
| <kbd>⌃</kbd> <kbd>j</kbd><br><kbd>⌃</kbd> <kbd>k</kbd> | Next, previous message of the conversation |
| <kbd>;</kbd> then a letter | Go to a folder: <kbd>i</kbd> Inbox, <kbd>q</kbd> Quarantine, <kbd>t</kbd> Todo, <kbd>w</kbd> Waiting, <kbd>a</kbd> Archive, <kbd>o</kbd> Work, <kbd>m</kbd> All Mail… |
| <kbd>;</kbd> <kbd>T</kbd>, <kbd>;</kbd> <kbd>g</kbd> | The tags, the groups: <kbd>↩</kbd> opens their email, <kbd>r</kbd> renames, <kbd>d</kbd> deletes |
| <kbd>@</kbd> | Choose an account, or all of them |
| <kbd>Esc</kbd> | Go back, close a panel, clear the marks |

## Act on email

Actions apply to the marked conversations if there are any, otherwise to the one under the cursor.

| Key | Action |
| --- | --- |
| <kbd>J</kbd> <kbd>K</kbd> | Mark this conversation and move, to act on several at once |
| <kbd>d</kbd> | Done: archive (in Quarantine: delete) |
| <kbd>m</kbd> then a letter | Move: <kbd>t</kbd> Todo, <kbd>w</kbd> Waiting, <kbd>n</kbd> Newsletter, <kbd>p</kbd> Paperwork… |
| <kbd>Delete</kbd> | Move to Deleted |
| <kbd>z</kbd> | Undo the last move or decision |
| <kbd>u</kbd> | Read or unread |
| <kbd>*</kbd> | Flag |
| <kbd>t</kbd> | Add or remove a tag |
| <kbd>g</kbd> | Add the person to a contact group, or remove them |
| <kbd>⌘</kbd> <kbd>U</kbd> | Unsubscribe from the newsletter |

## Read

| Key | Action |
| --- | --- |
| <kbd>l</kbd> | Links, attachments, phone numbers and confirmation code of the email |
| <kbd>T</kbd> | Show everything (quotes, signatures, folded messages), or the simple view again |
| <kbd>S</kbd> | Skip to the text after the next quote |
| <kbd>v</kbd> <kbd>h</kbd> | Text or HTML view |
| <kbd>v</kbd> <kbd>i</kbd> | Load the remote images |
| <kbd>⌃</kbd> <kbd>c</kbd> | The sender's card in Contacts |
| <kbd>⌃</kbd> <kbd>⇧</kbd> <kbd>c</kbd> | Every email of the sender |

## Write

| Key | Action |
| --- | --- |
| <kbd>r</kbd> | Reply to all |
| <kbd>R</kbd> | Reply to the sender only |
| <kbd>F</kbd> | Forward |
| <kbd>c</kbd> | New email |
| <kbd>⌘</kbd> <kbd>↩</kbd> | Send. You have five seconds to cancel with <kbd>z</kbd> |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>↩</kbd> | Choose where to file the conversation, then send |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>B</kbd> | Show the Bcc line |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>F</kbd> | Choose the sending address, and so the account |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>T</kbd> | Switch between plain and formatted text |
| <kbd>Esc</kbd> | Close and keep the draft |
| <kbd>⌘</kbd> <kbd>Esc</kbd> | Discard the draft |

## Find

| Key | Action |
| --- | --- |
| <kbd>/</kbd> | Search everywhere |
| <kbd>f</kbd> | Filter the current list: unread, flagged, from, to, date, attachments… |

See [Search and filters](/docs/search/).

## The mouse

Everything works with the mouse too. A click selects a conversation, <kbd>⌘</kbd>-click marks or unmarks one, <kbd>⇧</kbd>-click marks a range. The blocks of the status bar, at the bottom of the window, open the same menus as their keys.

## Change the keys

Every key can be changed, in the file `~/.config/nicemailer/keymap.toml`. A comment explains each action in it: open it, replace the key, save.
