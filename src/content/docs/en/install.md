---
title: Install NiceMailer
description: Download the app, open it for the first time, and keep it up to date.
order: 1
---

## What you need

- A Mac with Apple Silicon (M1 or later).
- macOS 14 Sonoma or later.
- An email account that offers IMAP with a password. See [Add your account](/docs/add-an-account/) for the providers that work.

## Install

1. [Download the latest version](https://github.com/nicemailer/nicemailer/releases/latest). It is a disk image, `NiceMailer-<version>.dmg`.
2. Open it and drag **NiceMailer** to the **Applications** folder.
3. Open NiceMailer from Applications.

The app is signed and notarized by Apple: macOS opens it without warnings.

## The first launch

NiceMailer is made of two parts: the app you see, and a **core** that runs in the background. The core receives and sorts your mail, and sends what you wrote, even when the app is closed.

The first time, macOS says that a background item was added. That is the core. If macOS asks for your permission, allow NiceMailer in **System Settings › General › Login Items**.

Then open **NiceMailer › Settings…** (<kbd>⌘</kbd> <kbd>,</kbd>) to [add your first account](/docs/add-an-account/).

## Updates

NiceMailer updates itself. At the second launch it asks whether it may check for new versions; if you agree, it looks once a day. You can also choose **NiceMailer › Check for Updates…** at any time.

An update replaces the app and its core together. If the format of your mailbox changes, NiceMailer copies it first and puts it back if anything goes wrong, so no update can lose your mail.

The changes of each version are listed in the [changelog](/changelog/).

## Uninstall

1. Choose **NiceMailer › Stop the Core**, then quit the app.
2. Move NiceMailer from Applications to the Trash.
3. Your mail stays in `~/Library/Application Support/NiceMailer`. Delete that folder only if you no longer want it: see [Your data and backups](/docs/your-data/).
