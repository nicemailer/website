---
title: Installer NiceMailer
description: Télécharger l'application, la lancer une première fois et la garder à jour.
order: 1
---

## Ce qu'il vous faut

- Un Mac Apple Silicon (M1 ou plus récent).
- macOS 14 Sonoma ou plus récent.
- Un compte mail qui propose l'IMAP : Gmail, iCloud, Outlook.com, Microsoft 365 et la plupart des autres. Voir [Ajouter votre compte](/fr/docs/add-an-account/) pour les fournisseurs pris en charge.

## Installer

1. [Téléchargez la dernière version](https://github.com/nicemailer/nicemailer/releases/latest). C'est une image disque, `NiceMailer-<version>.dmg`.
2. Ouvrez-la et faites glisser **NiceMailer** dans le dossier **Applications**.
3. Ouvrez NiceMailer depuis Applications.

L'application est signée et notarisée par Apple : macOS l'ouvre sans avertissement.

### Avec Homebrew

```sh
brew install --cask nicemailer/tap/nicemailer
```

Homebrew installe aussi la commande `nicemailer`, pour utiliser NiceMailer depuis le Terminal.

## Le premier lancement

NiceMailer est fait de deux parties : l'application que vous voyez, et un **noyau** qui tourne en arrière-plan. Le noyau reçoit et trie votre mail, et envoie ce que vous avez écrit, même quand l'application est fermée.

La première fois, macOS signale qu'un élément d'arrière-plan a été ajouté : c'est le noyau. Si macOS demande votre autorisation, autorisez NiceMailer dans **Réglages Système › Général › Ouverture**.

Ouvrez ensuite **NiceMailer › Réglages…** (<kbd>⌘</kbd> <kbd>,</kbd>) pour [ajouter votre premier compte](/fr/docs/add-an-account/).

## Les autorisations système

NiceMailer fonctionne entièrement sans accès au reste de votre Mac. Deux autorisations ajoutent des fonctionnalités ; vous pouvez les accorder, les refuser ou les retirer à tout moment dans **Réglages Système › Confidentialité et sécurité**.

### Contacts

Avec l'accès à vos contacts, NiceMailer reconnaît les personnes qui sont dans votre carnet d'adresses. Une petite icône au bout de chaque message indique si son expéditeur a une fiche, et <kbd>ctrl</kbd> <kbd>c</kbd> ouvre cette fiche. Les numéros de téléphone de la fiche apparaissent aussi parmi les liens du mail (<kbd>l</kbd>), prêts à être appelés avec votre iPhone.

macOS vous le demande la première fois que vous utilisez l'une de ces fonctionnalités, jamais au lancement. Les fiches sont lues au moment où elles servent et ne sont jamais copiées dans la base de NiceMailer. Si vous refusez, tout le reste fonctionne pareil, et le panneau des liens ne montre que les liens du mail.

### Accessibilité

Quand vous appelez un numéro depuis un mail, macOS n'appelle pas tout de suite : il affiche une notification avec un bouton vert, sur lequel il faut cliquer. Une notification ne prend jamais le clavier, donc <kbd>Entrée</kbd> ne peut pas l'actionner.

Avec l'autorisation Accessibilité, NiceMailer appuie sur ce bouton pour vous : vous appelez un expéditeur directement depuis son mail, sans toucher la souris. Comme cette autorisation est large (elle permet à une application de piloter l'interface des autres), la fonctionnalité est désactivée par défaut. Pour l'activer, ajoutez ceci à `~/.config/nicemailer/config.toml` :

```toml
[ui]
auto_confirm_calls = true
```

Au premier appel, macOS vous demande d'autoriser NiceMailer dans **Réglages Système › Confidentialité et sécurité › Accessibilité**. Tant que ce n'est pas fait, les appels fonctionnent comme avant, avec le clic.

## Mises à jour

NiceMailer se met à jour tout seul. Au deuxième lancement, il vous demande s'il peut chercher les nouvelles versions ; si vous acceptez, il regarde une fois par jour. Vous pouvez aussi choisir **NiceMailer › Rechercher les mises à jour…** à tout moment.

Une mise à jour remplace l'application et son noyau ensemble. Si le format de votre boîte change, NiceMailer la copie d'abord et la remet en place en cas de problème : aucune mise à jour ne peut vous faire perdre votre mail.

Les changements de chaque version sont listés dans les [nouveautés](/fr/changelog/).

## Désinstaller

1. Choisissez **NiceMailer › Arrêter le noyau**, puis quittez l'application.
2. Mettez NiceMailer à la corbeille depuis Applications.
3. Votre mail reste dans `~/Library/Application Support/NiceMailer`. Ne supprimez ce dossier que si vous n'en voulez plus : voir [Vos données et sauvegardes](/fr/docs/your-data/).
