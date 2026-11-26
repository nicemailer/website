---
title: Install NiceMailer
description: Download the app, open it for the first time, and keep it up to date.
order: 1
---

## What you need

- A Mac with Apple Silicon (M1 or later).
- macOS 14 Sonoma or later.
- An email account that offers IMAP: Gmail, iCloud, Outlook.com, Microsoft 365 and most others. See [Add your account](/docs/add-an-account/) for the providers that work.

## Install

1. [Download the latest version](https://github.com/nicemailer/nicemailer/releases/latest). It is a disk image, `NiceMailer-<version>.dmg`.
2. Open it and drag **NiceMailer** to the **Applications** folder.
3. Open NiceMailer from Applications.

The app is signed and notarized by Apple: macOS opens it without warnings.

### With Homebrew

```sh
brew install --cask nicemailer/tap/nicemailer
```

Homebrew also links the `nicemailer` command, to use NiceMailer from the Terminal.

## The first launch

NiceMailer is made of two parts: the app you see, and a **core** that runs in the background. The core receives and sorts your mail, and sends what you wrote, even when the app is closed.

The first time, macOS says that a background item was added. That is the core. If macOS asks for your permission, allow NiceMailer in **System Settings › General › Login Items**.

Then open **NiceMailer › Settings…** (<kbd>⌘</kbd> <kbd>,</kbd>) to [add your first account](/docs/add-an-account/).

## System permissions

NiceMailer works fully without any access to the rest of your Mac. Two permissions add features, and you can grant them, refuse them or withdraw them at any time in **System Settings › Privacy & Security**.

### Contacts

With access to your contacts, NiceMailer recognizes the people who are in your address book. A small icon at the end of each message says whether its sender has a card, and <kbd>ctrl</kbd> <kbd>c</kbd> opens that card. The phone numbers of the card also appear among the links of the email (<kbd>l</kbd>), ready to call with your iPhone.

macOS asks for it the first time you use one of these features, never at launch. The cards are read when they are needed and are never copied into NiceMailer's database. If you refuse, everything else works the same, and the links panel shows the links of the email only.

### Accessibility

When you call a number from an email, macOS doesn't call at once: it shows a notification with a green button, and you have to click it. A notification never takes the keyboard, so <kbd>Return</kbd> can't press it.

With the Accessibility permission, NiceMailer presses that button for you, so you call a sender straight from their email without touching the mouse. As this permission is broad (it lets an app operate the interface of other apps), the feature is off by default. To turn it on, add this to `~/.config/nicemailer/config.toml`:

```toml
[ui]
auto_confirm_calls = true
```

At the first call, macOS asks you to allow NiceMailer in **System Settings › Privacy & Security › Accessibility**. Until you do, calls work as before, with the click.

## Updates

NiceMailer updates itself. At the second launch it asks whether it may check for new versions; if you agree, it looks once a day. You can also choose **NiceMailer › Check for Updates…** at any time.

An update replaces the app and its core together. If the format of your mailbox changes, NiceMailer copies it first and puts it back if anything goes wrong, so no update can lose your mail.

The changes of each version are listed in the [changelog](/changelog/).

## Uninstall

1. Choose **NiceMailer › Stop the Core**, then quit the app.
2. Move NiceMailer from Applications to the Trash.
3. Your mail stays in `~/Library/Application Support/NiceMailer`. Delete that folder only if you no longer want it: see [Your data and backups](/docs/your-data/).
