---
title: Gmail, iCloud, Fastmail
description: Créer en quelques minutes le mot de passe d'application que demandent Gmail, iCloud et Fastmail.
order: 2.5
---

Gmail, iCloud et Fastmail ne laissent pas une application de mail utiliser le mot de passe avec lequel vous vous connectez à leur site. Ils demandent un **mot de passe d'application** : un mot de passe réservé à une application, que vous créez dans les réglages de sécurité de votre compte et que vous pouvez révoquer à tout moment sans changer votre mot de passe principal.

NiceMailer ne peut pas se connecter avec votre mot de passe principal chez ces fournisseurs : si vous le tapez, les réglages du compte disent que le serveur **a refusé le mot de passe**. Créez un mot de passe d'application comme ci-dessous, collez-le dans le champ du mot de passe, puis cliquez à nouveau sur **Ajouter le compte**. NiceMailer utilise le même mot de passe pour envoyer.

Le mot de passe d'application n'est affiché qu'une fois. Inutile de le noter : NiceMailer le garde dans le trousseau de macOS. Si vous le perdez, supprimez-le et créez-en un autre.

## Gmail

Il faut que la **validation en deux étapes** soit activée sur votre compte Google : sans elle, Google ne propose pas de mot de passe d'application.

1. Activez la validation en deux étapes, si ce n'est pas déjà fait : [myaccount.google.com/signinoptions/twosv](https://myaccount.google.com/signinoptions/twosv).
2. Ouvrez [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords), et reconnectez-vous si Google le demande.
3. Donnez-lui un nom, par exemple `NiceMailer`, et cliquez sur **Créer**.
4. Google affiche un mot de passe de 16 lettres, en quatre groupes. Copiez-le dans le champ du mot de passe de NiceMailer, sans les espaces.

Bon à savoir :

- Si la page dit que les mots de passe d'application ne sont pas disponibles, votre compte est sans doute géré par une organisation (Google Workspace) dont l'administrateur les a désactivés, ou inscrit à la Protection avancée de Google. NiceMailer ne pourra s'y connecter que lorsqu'il prendra en charge la connexion Google (OAuth).
- Changer votre mot de passe Google révoque tous les mots de passe d'application, y compris celui de NiceMailer.

## iCloud

Il faut que l'**identification à deux facteurs** soit activée sur votre compte Apple. C'est le cas de presque tous les comptes.

1. Connectez-vous à [account.apple.com](https://account.apple.com).
2. Ouvrez **Connexion et sécurité**, puis **Mots de passe pour app**.
3. Cliquez sur **Générer un mot de passe pour app** (ou **+**), nommez-le `NiceMailer`, et confirmez avec le mot de passe de votre compte Apple.
4. Copiez le mot de passe qu'affiche Apple, de la forme `abcd-efgh-ijkl-mnop`, dans NiceMailer, avec ses tirets.

Tapez dans NiceMailer votre **adresse iCloud** (`…@icloud.com`, `…@me.com` ou `…@mac.com`), même si vous vous connectez à Apple avec une autre adresse.

## Fastmail

Les mots de passe d'application demandent une formule qui inclut l'accès depuis d'autres applications (IMAP) : la formule Basic ne l'inclut pas.

1. Dans Fastmail, ouvrez **Settings › Privacy & Security**.
2. Dans **App passwords**, cliquez sur **New app password**.
3. Nommez-le `NiceMailer`, et donnez-lui l'accès **Mail (IMAP/POP/SMTP)**.
4. Cliquez sur **Generate password**, et copiez le mot de passe dans NiceMailer.

## Les autres fournisseurs

Beaucoup d'autres fournisseurs fonctionnent de la même façon quand la double authentification est activée : Yahoo, AOL, GMX, Zoho et d'autres. Cherchez « mot de passe d'application » dans les réglages de sécurité de votre compte, ou dans son aide.

Outlook.com, Hotmail et Microsoft 365 n'acceptent plus les mots de passe d'application pour les applications de mail : ils n'autorisent que la connexion Microsoft (OAuth), que NiceMailer ne prend pas encore en charge.

## Révoquer l'accès

Pour couper l'accès de NiceMailer à votre compte, supprimez son mot de passe d'application sur la page où vous l'avez créé. Votre mot de passe principal et vos autres applications continuent de fonctionner.
