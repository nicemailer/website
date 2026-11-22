---
title: Gmail, iCloud, Fastmail
description: Create the app password that Gmail, iCloud and Fastmail ask for, in a few minutes.
order: 2.5
---

Gmail, iCloud and Fastmail don't let an email app use the password you sign in with on their website. They ask for an **app password**: a password made for one app, that you create in the security settings of your account and can revoke at any time without changing your main password.

NiceMailer can't sign in with your main password at these providers: if you type it, the account settings say that the server **refused the password**. Create an app password as below, paste it in the password field, and click **Add Account** again. NiceMailer uses the same password to send.

The app password is shown only once. You don't need to write it down: NiceMailer keeps it in the macOS Keychain. If you lose it, delete it and create another one.

## Gmail

You need **2-Step Verification** on your Google account: without it, Google doesn't offer app passwords.

1. Turn on 2-Step Verification, if it isn't on yet: [myaccount.google.com/signinoptions/twosv](https://myaccount.google.com/signinoptions/twosv).
2. Open [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords), and sign in again if Google asks.
3. Give it a name, such as `NiceMailer`, and click **Create**.
4. Google shows a password of 16 letters, in four groups. Copy it into the password field of NiceMailer, without the spaces.

Good to know:

- If the page says app passwords are not available, your account is probably managed by an organization (Google Workspace) whose administrator turned them off, or enrolled in Google's Advanced Protection. NiceMailer can't connect to it until it supports Google sign-in (OAuth).
- Changing your Google password revokes every app password, NiceMailer's included.

## iCloud

You need **two-factor authentication** on your Apple Account. It is on for almost every account.

1. Sign in to [account.apple.com](https://account.apple.com).
2. Open **Sign-In and Security**, then **App-Specific Passwords**.
3. Click **Generate an app-specific password** (or **+**), name it `NiceMailer`, and confirm with your Apple Account password.
4. Copy the password Apple shows, of the form `abcd-efgh-ijkl-mnop`, into NiceMailer, with its hyphens.

Type your **iCloud address** (`…@icloud.com`, `…@me.com` or `…@mac.com`) in NiceMailer, even if you sign in to Apple with another address.

## Fastmail

App passwords need a plan that includes access from other apps (IMAP): the Basic plan does not.

1. In Fastmail, open **Settings › Privacy & Security**.
2. In **App passwords**, click **New app password**.
3. Name it `NiceMailer`, and give it access to **Mail (IMAP/POP/SMTP)**.
4. Click **Generate password**, and copy the password into NiceMailer.

## Other providers

Many other providers work the same way when two-factor authentication is on: Yahoo, AOL, GMX, Zoho and others. Look for "app password" in the security settings of your account, or in its help pages.

Outlook.com, Hotmail and Microsoft 365 don't accept app passwords for email apps any more: they only allow Microsoft's sign-in (OAuth), which NiceMailer does not support yet.

## Revoke the access

To cut NiceMailer off from your account, delete its app password on the same page where you created it. Your main password and your other apps keep working.
