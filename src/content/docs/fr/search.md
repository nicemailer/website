---
title: Recherche et filtres
description: Retrouver n'importe quel mail en un instant, avec des mots, des filtres, ou les deux.
order: 6
---

## Chercher partout

Appuyez sur <kbd>/</kbd> et tapez quelques mots. NiceMailer les cherche partout : objet, expéditeur, destinataires et texte, dans tous les dossiers sauf Deleted, Junk et Banned. Chaque mot correspond au début d'un mot, et les accents ne comptent pas : `factur` trouve « facture » et « factures ».

Mettez un tiret devant un mot pour l'exclure : `renouvellement -facture`.

## Filtrer la liste

Appuyez sur <kbd>f</kbd> (ou cliquez sur la loupe de la barre d'état) pour filtrer la liste courante. Les filtres s'additionnent, et chacun s'affiche comme une pastille dans la barre d'état : cliquez sur une pastille pour la retirer, ou appuyez sur <kbd>Échap</kbd> pour les retirer toutes.

| Filtre | Garde |
| --- | --- |
| Non lus, Lus | Les conversations avec un mail non lu, ou aucun |
| Drapeau, Sans drapeau | Les conversations marquées d'un drapeau, ou les autres |
| De…, À… | Le courrier d'une personne, d'une adresse ou d'un domaine entier (`@boutique.fr`), ou vers eux |
| Sujet…, Texte… | Des mots de l'objet, ou de l'objet et du texte |
| Date conversation…, Date mail… | Aujourd'hui, les 7 ou 30 derniers jours, cette année, avant ou après une date |
| Pièce jointe | Les conversations avec un fichier |
| Avec ma réponse | Les conversations auxquelles vous avez répondu |
| Humain, Robot | Les conversations avec une vraie personne, ou seulement des machines |
| Tag…, Groupe… | Le courrier portant un tag, ou d'un membre d'un groupe de contacts |

Pas besoin de faire défiler : tapez quelques lettres d'un filtre. `no` atteint Non lus, `sd` Sans drapeau (ses initiales), `de` De….

## Exclure

Chaque filtre peut être inversé. Les filtres oui ou non ont leur contraire (Sans drapeau, Sans pièce jointe). Dans De…, À…, Sujet… et Texte…, commencez la valeur par un tiret : `-@boutique.fr` garde tout ce qui ne vient pas de cette boutique.

Un exemple : les mails qui parlent d'acme.fr, mais ni de ni vers acme.fr. <kbd>f</kbd> Texte… `acme.fr` ; <kbd>f</kbd> De… `-@acme.fr` ; <kbd>f</kbd> À… `-@acme.fr`.

## Tapez les dates comme vous y pensez

Les filtres de date comprennent :

- une date : `2026-10-01`, `1/10/2026`, `1.10.26` ;
- une durée : `10j`, `3s`, `6m`, `2a`, ou en toutes lettres, `2 ans` ;
- puis « après » ou « avant ». Deux bornes font un intervalle : après le 1er janvier, puis avant le 1er juillet, c'est le premier semestre.

## Humain ou robot

La plupart du courrier est envoyé par des machines : boutiques, services, notifications. NiceMailer les distingue d'après le contenu de chaque mail, sans en lire le texte. Le filtre **Humain** ne laisse que les conversations avec de vraies personnes, même dans des années d'archives. Si NiceMailer se trompe sur un expéditeur, corrigez-le dans l'écran **Contacts** (<kbd>;</kbd> <kbd>c</kbd>).

## Tous les mails d'une personne

<kbd>⌃</kbd> <kbd>⇧</kbd> <kbd>c</kbd> sur un mail liste tous les mails de son expéditeur, dans tous les dossiers. Dans l'écran Contacts, Entrée fait de même pour n'importe quelle adresse.
