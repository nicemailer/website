---
title: Le workflow
description: Où va le courrier, et pourquoi. Quarantine, Inbox, Archive, Todo, Waiting, et une décision par expéditeur.
order: 4
---

Le workflow commence une fois votre compte [organisé](/fr/docs/add-an-account/). Jusque-là, NiceMailer montre vos dossiers tels qu'ils sont.

## Les dossiers

| Dossier | Ce qu'il contient |
| --- | --- |
| **Inbox** | Le courrier des personnes acceptées, pas encore traité |
| **Quarantine** | Le courrier des expéditeurs sur lesquels vous n'avez pas encore décidé |
| **Todo** | Les conversations où vous avez quelque chose à faire |
| **Waiting** | Les conversations qui attendent une réponse, la vôtre ou celle de quelqu'un d'autre |
| **Archive** | Les conversations où il n'y a plus rien à faire |
| **Paperwork** | Factures, reçus, relevés : du courrier à garder, pas à lire à l'arrivée |
| **Newsletter** | Newsletters, promotions, notifications |
| **Junk** | Le spam |
| **Banned** | Les expéditeurs dont vous ne voulez plus jamais entendre parler |
| **Deleted** | La corbeille |

Trois vues réunissent plusieurs dossiers : **Travail** (<kbd>;</kbd> <kbd>o</kbd>) montre Inbox, Todo et Waiting ensemble, tout ce qui reste à traiter ; **All Mail** (<kbd>;</kbd> <kbd>m</kbd>) tout sauf Deleted, Junk et Banned, ce que veulent la plupart des recherches ; **Everything** (<kbd>;</kbd> <kbd>e</kbd>) vraiment tout.

## Quarantine : une décision par expéditeur

Quand quelqu'un vous écrit pour la première fois, son mail va en Quarantine. Là, une seule touche décide où va l'expéditeur :

| Touche | Destination | Et ses prochains mails |
| --- | --- | --- |
| <kbd>i</kbd> | Inbox | Vont dans l'Inbox |
| <kbd>n</kbd> | Newsletter | Vont dans Newsletter |
| <kbd>p</kbd> | Paperwork | Vont dans Paperwork |
| <kbd>b</kbd> | Banned | Vont dans Banned |
| <kbd>x</kbd> | Junk | Restent en Quarantine : le spam change d'adresse à chaque fois |
| <kbd>d</kbd> | Deleted | Restent en Quarantine |

Une décision porte sur l'expéditeur, pas sur un mail : tout ce qu'il vous a envoyé avant, dans tous vos comptes, est rangé avec, comme tout ce qu'il enverra. La barre d'état le dit : « déplacé dans Newsletter, les prochains mails de news@boutique.fr aussi, 12 autres mails rangés ».

La même décision peut se prendre plus tard depuis n'importe quel dossier : déplacer une conversation dans Newsletter, Paperwork ou Banned décide aussi pour son expéditeur. L'écran **Contacts** (<kbd>;</kbd> <kbd>c</kbd>) liste chaque expéditeur avec sa décision, que vous pouvez y changer.

Devant chaque nom en Quarantine, une silhouette indique qu'une personne a écrit le mail, un engrenage qu'une machine l'a fait. C'est en général la personne qui mérite votre Inbox.

## Les expéditeurs falsifiés

N'importe qui peut écrire n'importe quel nom et adresse dans le « De » d'un mail. NiceMailer vérifie, avec le verdict de votre serveur de mail (SPF, DKIM, DMARC), que chaque mail vient bien du domaine qu'il annonce.

- Un mail qui échoue à cette vérification reste en Quarantine, même si vous avez accepté l'expéditeur dont il prend l'apparence.
- Si vous essayez d'accepter un expéditeur dont le mail semble falsifié, NiceMailer vous demande d'abord. Certains expéditeurs légitimes utilisent des outils mal configurés : vous pouvez alors accepter leurs mails non vérifiés à l'avenir.
- Bannir un mail falsifié ne bannit que ce mail, jamais le vrai expéditeur dont le nom a été emprunté.

## Sortir de l'Inbox

| Touche | Destination | Quand |
| --- | --- | --- |
| <kbd>d</kbd> | Archive | Il n'y a plus rien à faire |
| <kbd>m</kbd> <kbd>t</kbd> | Todo | Vous avez quelque chose à faire |
| <kbd>m</kbd> <kbd>w</kbd> | Waiting | Vous attendez une réponse |
| <kbd>Suppr</kbd> | Deleted | Vous n'en voulez pas |

<kbd>m</kbd> ouvre un menu de toutes les destinations permises depuis le dossier courant. Une conversation en **Waiting** revient d'elle-même dans l'Inbox quand quelqu'un répond. Quand vous répondez, <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>↩</kbd> envoie et range la conversation d'un coup, par exemple dans Waiting.

Dans la liste, une flèche devant le nom (« → Alice ») signifie que vous avez écrit le dernier : la conversation attend l'autre personne.

## Annuler

<kbd>z</kbd> annule le dernier déplacement ou la dernière décision : les mails reviennent où ils étaient, et la décision précédente revient. Appuyez encore pour remonter d'un pas. Aller vite ne fait jamais rien perdre.

## L'historique

Chaque changement est consigné : les déplacements, les décisions, qui les a pris (vous, le tri à l'arrivée, un agent IA). L'écran **Historique** (<kbd>;</kbd> <kbd>h</kbd>) les montre, du plus récent au plus ancien.
