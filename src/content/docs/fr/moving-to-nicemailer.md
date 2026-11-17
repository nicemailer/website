---
title: Passer à NiceMailer
description: Emporter tout votre courrier, celui de vos comptes actuels et les archives de ceux que vous avez fermés.
order: 3
---

Passer à NiceMailer ne veut pas dire laisser quoi que ce soit derrière vous. Il y a trois cas, du plus simple au plus rare.

## Vos comptes actuels

[Ajoutez-les](/fr/docs/add-an-account/). NiceMailer télécharge chaque mail de chaque dossier et en garde une copie sur votre Mac. Les listes sont prêtes d'abord, en quelques secondes ou minutes ; le texte des mails suit en arrière-plan. Sur une boîte de test de 100 000 mails, toutes les listes étaient complètes au bout de 20 secondes.

Vous pouvez continuer à utiliser vos autres applications de mail pendant ce temps : elles voient les mêmes dossiers.

## Les archives des comptes fermés

Une ancienne adresse professionnelle, un fournisseur que vous avez quitté : si vous en avez un fichier **mbox**, NiceMailer l'importe dans un compte d'archive. La plupart des services et des applications de mail savent en exporter un :

| Depuis | Comment obtenir le fichier mbox |
| --- | --- |
| Apple Mail | Sélectionnez une boîte, **Boîte aux lettres › Exporter la boîte aux lettres…** : le fichier s'appelle `mbox`, dans le dossier exporté |
| Gmail | [Google Takeout](https://takeout.google.com), Mail seulement : vous obtenez un fichier `.mbox` |
| Thunderbird | Chaque dossier local est un fichier mbox ; le module ImportExportTools NG exporte les autres |
| HEY | Exportez votre courrier depuis les réglages de votre compte HEY |

Puis, dans le Terminal (NiceMailer doit être lancé) :

```sh
/Applications/NiceMailer.app/Contents/Helpers/nicemailer import-mbox ~/Downloads/archive.mbox \
    --account ancien-job --address moi@ancien-job.fr
```

- `--account` est le nom du compte d'archive, tel que vous voulez le voir dans NiceMailer.
- `--address` est l'adresse de cette boîte : ce que vous avez envoyé depuis elle va dans Sent, tout le reste dans Archive.

À quoi vous attendre :

- **C'est rapide.** Un export de 10 Go et 45 000 mails prend une quarantaine de secondes.
- **Rien ne se perd.** Chaque mail est gardé exactement tel qu'il était, et les conversations sont reconstituées.
- **On peut l'arrêter et le relancer.** Relancer la même commande n'ajoute que ce qui manque : les mails déjà importés sont ignorés.
- **Tout reste sur votre Mac.** Un compte d'archive n'a pas de serveur : rien n'est envoyé nulle part, et ranger ses mails ne change que votre Mac.
- **Les gens à qui vous avez écrit sont retenus.** Leurs prochains mails, sur n'importe quel compte, arrivent directement dans votre Inbox au lieu de la Quarantine.

## Toute votre bibliothèque Apple Mail

Apple Mail garde une copie de chaque compte qu'il a connu, même après sa suppression ou la fermeture du serveur. NiceMailer peut reprendre toute cette bibliothèque, chaque compte et chaque dossier, y compris ceux dont le serveur n'existe plus (l'export d'Apple Mail lui-même échoue sur eux).

Pour l'instant, cela se fait avec deux scripts du [code source](https://github.com/nicemailer/nicemailer), qui demandent Python 3 et un Terminal avec l'accès complet au disque :

1. `scripts/export-apple-mail.py` lit votre bibliothèque Apple Mail sans la modifier et écrit un fichier mbox par compte et par dossier local, pièces jointes comprises.
2. `scripts/import-mail-export.py` les importe tous dans NiceMailer, en ne demandant que ce qu'il ne peut pas deviner, comme le nom d'un compte.

Les scripts sont décrits dans la documentation du code source (`docs/import-mbox.md`, « Importing all of Apple Mail »).

## Revenir en arrière

NiceMailer n'enferme rien. Pour vos comptes IMAP, votre courrier reste sur votre serveur ; sur votre Mac, chaque message est gardé octet pour octet tel qu'il a été reçu (compressé, un fichier par message), et NiceMailer est libre : vous pourrez toujours lire vos données sans lui.
