---
title: Vos données et sauvegardes
description: Où votre courrier est rangé sur votre Mac, comment le sauvegarder, et comment ouvrir une autre boîte.
order: 9
---

## Où il est

Tout ce que garde NiceMailer est dans un seul dossier, `~/Library/Application Support/NiceMailer` :

| Dans le dossier | Ce que c'est | Taille, pour 400 000 mails |
| --- | --- | --- |
| `raw.noindex/` | Chaque mail exactement tel qu'il a été reçu, compressé, un fichier par message | 23 Go |
| `nicemailer.db` | Dossiers, conversations, expéditeurs et vos décisions, tags, groupes, brouillons, historique | 0,5 Go |
| `nicemailer_body.db` | Le texte des mails et l'index de recherche | 12 Go |

Vos réglages sont dans `~/.config/nicemailer/`, et vos mots de passe dans le trousseau de macOS.

## Les mails bruts ne changent jamais

Chaque mail est écrit une fois, sous un nom calculé à partir de son contenu, et n'est plus jamais modifié. Tout le reste de ce que stocke NiceMailer peut être reconstruit à partir de ces fichiers : le texte, l'index de recherche, et même ce qu'une version améliorée de NiceMailer saura y lire. Votre courrier survit à toutes les versions de l'application.

## Sauvegarder

**Time Machine** sauvegarde le dossier comme n'importe quel autre. Vous pouvez exclure le fichier du texte et de la recherche, le plus gros après les mails bruts, puisque NiceMailer sait le reconstruire :

```sh
tmutil addexclusion ~/Library/Application\ Support/NiceMailer/nicemailer_body.db
```

**Avec un autre outil**, sauvegardez deux choses :

- `raw.noindex/`, avec n'importe quel outil de copie, `rsync -a` par exemple. Comme ses fichiers ne changent jamais, chaque sauvegarde ne copie que les nouveaux mails.
- `nicemailer.db`, avec la commande ci-dessous, qui en fait une copie cohérente même pendant que NiceMailer tourne (environ 2 secondes pour 0,5 Go) :

  ```sh
  /Applications/NiceMailer.app/Contents/Helpers/nicemailer mailbox backup \
      ~/Library/Application\ Support/NiceMailer /Volumes/Sauvegarde/nicemailer.db
  ```

Copier `nicemailer.db` avec le Finder pendant que NiceMailer tourne peut manquer ses derniers changements : utilisez la commande.

## Les mises à jour gardent une copie

Avant qu'une mise à jour change le format de votre boîte, NiceMailer la copie. Si le changement échoue, la copie est remise telle quelle, et la version précédente de NiceMailer peut encore l'ouvrir.

## Plusieurs boîtes

Maintenez <kbd>⌥</kbd> en ouvrant NiceMailer, ou choisissez **NiceMailer › Changer de base…**, pour ouvrir un autre dossier de données, sur un disque externe par exemple.

## Partir

Votre courrier reste le vôtre. Pour vos comptes IMAP, tout est encore sur votre serveur. Sur votre Mac, chaque mail brut est un message standard, compressé avec zstd, et le format des bases est documenté dans le [code source](https://github.com/nicemailer/nicemailer).
