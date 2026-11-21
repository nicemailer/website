---
title: Le workflow
description: Où va le mail, et pourquoi. Quarantaine, Inbox, Archive, Todo, Waiting, et une décision par expéditeur.
order: 4
---

Le workflow commence une fois votre compte [activé](/fr/docs/add-an-account/) sans l'option **Seulement regarder pour l'instant**.

## Les dossiers

| Dossier         | Ce qu'il contient                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Inbox**       | Le mail des personnes acceptées, pas encore traité                                                                         |
| **Todo**        | Les conversations où vous avez quelque chose à produire                                                                        |
| **Waiting**     | Les conversations à relancer : un expéditeur qui a promis de "revenir vers vous" ; un mail que vous avez envoyé à un prospect  |
| **Quarantaine** | Le mail des inconnus sur lesquels vous n'avez pas encore décidé                                                            |
| **Archive**     | Les conversations où il n'y a plus rien à faire                                                                                |
| **Paperwork**   | Factures, reçus, relevés : du mail à garder, pas à lire à l'arrivée                                                        |
| **Newsletter**  | Newsletters, promotions, notifications                                                                                         |
| **Junk**        | Le spam                                                                                                                        |
| **Banned**      | Les expéditeurs dont vous ne voulez plus jamais entendre parler                                                                |
| **Deleted**     | La corbeille                                                                                                                   |

Trois vues regroupent plusieurs dossiers : 
- **Work** (<kbd>;</kbd> <kbd>o</kbd>) avec tout ce qui est à traiter : Inbox, Todo et Waiting ensemble ; 
- **All Mail** (<kbd>;</kbd> <kbd>m</kbd>) tout sauf Deleted, Junk et Banned, idéal pour la plupart des recherches ; 
- **Everything** (<kbd>;</kbd> <kbd>e</kbd>) vraiment tout.

## Quarantaine : une décision par expéditeur

Quand quelqu'un vous écrit pour la première fois, son mail va en Quarantaine. Là, une seule touche décide où va l'expéditeur :

| Touche       | Destination | Et ses prochains mails                                          |
| ------------ | ----------- | --------------------------------------------------------------- |
| <kbd>i</kbd> | Inbox       | Vont dans l'Inbox                                               |
| <kbd>n</kbd> | Newsletter  | Vont dans Newsletter                                            |
| <kbd>p</kbd> | Paperwork   | Vont dans Paperwork                                             |
| <kbd>b</kbd> | Banned      | Vont dans Banned                                                |
| <kbd>x</kbd> | Junk        | Restent en Quarantaine : le spam change d'adresse à chaque fois |
| <kbd>d</kbd> | Deleted     | Restent en Quarantaine                                          |

Une décision porte sur l'expéditeur, pas sur un mail : tout ce qu'il vous a envoyé avant, dans tous vos comptes, est rangé avec, comme tout ce qu'il enverra. La barre d'état le dit : « déplacé dans Newsletter, les prochains mails de news@boutique.fr aussi, 12 autres mails rangés ».

La même décision peut se prendre plus tard depuis n'importe quel dossier : déplacer une conversation dans Newsletter, Paperwork ou Banned décide aussi pour son expéditeur. L'écran **Contacts** (<kbd>;</kbd> <kbd>c</kbd>) liste chaque expéditeur avec sa décision, que vous pouvez y changer.

Devant chaque nom en Quarantaine, une silhouette indique qu'une personne a écrit le mail, un engrenage qu'une machine l'a fait. C'est en général la personne qui mérite votre Inbox.

## Les expéditeurs falsifiés

N'importe qui peut écrire n'importe quel nom et adresse dans le « De » d'un mail. NiceMailer vérifie, avec le verdict de votre serveur de mail (SPF, DKIM, DMARC), que chaque mail vient bien du domaine qu'il annonce.

- Un mail qui échoue à cette vérification reste en Quarantaine, même si vous avez accepté l'expéditeur dont il prend l'apparence.
- Si vous essayez d'accepter un expéditeur dont le mail semble falsifié, NiceMailer vous demande d'abord. Certains expéditeurs légitimes utilisent des outils mal configurés : vous pouvez alors accepter leurs mails non vérifiés à l'avenir.
- Bannir un mail falsifié ne bannit que ce mail, jamais le vrai expéditeur dont le nom a été emprunté.

## Sortir de l'Inbox

| Touche                    | Destination | Quand                                       |
| ------------------------- | ----------- | ------------------------------------------- |
| <kbd>d</kbd>              | Archive     | Il n'y a plus rien à faire                  |
| <kbd>m</kbd> <kbd>t</kbd> | Todo        | Vous avez quelque chose à faire             |
| <kbd>m</kbd> <kbd>w</kbd> | Waiting     | Vous attendez une réponse ou devez relancer |
| <kbd>Suppr</kbd>          | Deleted     | Vous n'en voulez pas                        |

Et bien sûr, répondre à un mail le sort de l'Inbox.

<kbd>m</kbd> ouvre un menu de toutes les destinations permises depuis le dossier courant. Une conversation en **Waiting** revient d'elle-même dans l'Inbox quand quelqu'un répond. Quand vous répondez, <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>↩</kbd> envoie et range la conversation d'un coup, par exemple dans Waiting.

Dans la liste, une flèche devant le nom (« → Alice ») signifie que vous avez écrit le dernier : la conversation attend l'autre personne.

## Tags et groupes

Les dossiers disent où en est une conversation. Les tags et les groupes ajoutent ce que les dossiers ne disent pas : de quoi parle un mail, et qui l'a écrit. Aucun des deux ne déplace le mail.

**Un tag** se pose sur une conversation : « Chantier Dupont », « Compta 2026 », « Urgent ». Une conversation peut en porter plusieurs. <kbd>t</kbd> ouvre la liste des tags : choisissez-en un, ou tapez un nouveau nom pour le créer. Les tags de la conversation y sont proposés en premier, pour les retirer. Les tags sont enregistrés sur le serveur comme mots-clés IMAP : Thunderbird les affiche, mais Mail sur iPhone et Gmail en général non.

**Un groupe** réunit des personnes : VIP, Famille, Équipe, Association. <kbd>g</kbd> ajoute l'expéditeur de la conversation à un groupe, ou l'en retire, et tapez un nouveau nom pour créer le groupe. Une personne peut être dans plusieurs groupes, et les groupes valent pour tous vos comptes. Être dans un groupe ne change pas où va le mail : la décision dit où va un mail, le groupe dit qui est l'expéditeur.

Avec plusieurs conversations marquées, <kbd>t</kbd> et <kbd>g</kbd> s'appliquent à toutes, et chaque ligne dit combien l'ont déjà : « 1 sur 3 ».

Les tags d'une conversation s'affichent dans la liste et en haut du mail (`#Urgent`), les groupes de l'expéditeur aussi (`@VIP`). Pour retrouver leur mail :

- <kbd>;</kbd> <kbd>T</kbd> liste les tags et <kbd>;</kbd> <kbd>g</kbd> les groupes. <kbd>↩</kbd> ouvre les mails du tag ou des membres du groupe, dans tous les comptes ; <kbd>r</kbd> renomme, <kbd>d</kbd> supprime.
- Les filtres **Tag…** et **Groupe…** (<kbd>f</kbd>) affinent n'importe quelle liste. Voir [Recherche et filtres](/fr/docs/search/).
- En présentation trois colonnes, les groupes apparaissent sous les dossiers : un clic filtre la liste sur leurs membres.

Supprimer un tag le retire de tous ses mails, sur le serveur aussi, et ne s'annule pas avec <kbd>z</kbd>. Supprimer un groupe ne touche à aucun mail.

## Annuler

<kbd>z</kbd> annule le dernier déplacement ou la dernière décision : les mails reviennent où ils étaient, et la décision précédente revient. Appuyez encore pour remonter d'un pas. Aller vite ne fait jamais rien perdre.

## L'historique

Chaque changement est consigné : les déplacements, les décisions, qui les a pris (vous, le tri à l'arrivée, un agent IA). L'écran **Historique** (<kbd>;</kbd> <kbd>h</kbd>) les montre, du plus récent au plus ancien.
