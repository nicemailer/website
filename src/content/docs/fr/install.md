---
title: Installer NiceMailer
description: Télécharger l'application, la lancer une première fois et la garder à jour.
order: 1
---

## Ce qu'il vous faut

- Un Mac Apple Silicon (M1 ou plus récent).
- macOS 14 Sonoma ou plus récent.
- Un compte mail qui propose l'IMAP avec un mot de passe. Voir [Ajouter votre compte](/fr/docs/add-an-account/) pour les fournisseurs pris en charge.

## Installer

1. [Téléchargez la dernière version](https://github.com/nicemailer/nicemailer/releases/latest). C'est une image disque, `NiceMailer-<version>.dmg`.
2. Ouvrez-la et faites glisser **NiceMailer** dans le dossier **Applications**.
3. Ouvrez NiceMailer depuis Applications.

L'application est signée et notarisée par Apple : macOS l'ouvre sans avertissement.

## Le premier lancement

NiceMailer est fait de deux parties : l'application que vous voyez, et un **noyau** qui tourne en arrière-plan. Le noyau reçoit et trie votre courrier, et envoie ce que vous avez écrit, même quand l'application est fermée.

La première fois, macOS signale qu'un élément d'arrière-plan a été ajouté : c'est le noyau. Si macOS demande votre autorisation, autorisez NiceMailer dans **Réglages Système › Général › Ouverture**.

Ouvrez ensuite **NiceMailer › Réglages…** (<kbd>⌘</kbd> <kbd>,</kbd>) pour [ajouter votre premier compte](/fr/docs/add-an-account/).

## Mises à jour

NiceMailer se met à jour tout seul. Au deuxième lancement, il vous demande s'il peut chercher les nouvelles versions ; si vous acceptez, il regarde une fois par jour. Vous pouvez aussi choisir **NiceMailer › Rechercher les mises à jour…** à tout moment.

Une mise à jour remplace l'application et son noyau ensemble. Si le format de votre boîte change, NiceMailer la copie d'abord et la remet en place en cas de problème : aucune mise à jour ne peut vous faire perdre votre courrier.

Les changements de chaque version sont listés dans les [nouveautés](/fr/changelog/).

## Désinstaller

1. Choisissez **NiceMailer › Arrêter le noyau**, puis quittez l'application.
2. Mettez NiceMailer à la corbeille depuis Applications.
3. Votre courrier reste dans `~/Library/Application Support/NiceMailer`. Ne supprimez ce dossier que si vous n'en voulez plus : voir [Vos données et sauvegardes](/fr/docs/your-data/).
