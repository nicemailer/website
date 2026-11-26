---
title: Ajouter votre compte
description: Connecter votre boîte, la regarder sans rien changer, puis l'organiser quand vous êtes prêt.
order: 2
---

## Les fournisseurs pris en charge

NiceMailer fonctionne avec tout fournisseur qui propose **l'IMAP** : Gmail, iCloud, Fastmail, Outlook.com, Microsoft 365, le serveur de votre entreprise ou de votre hébergeur, et la plupart des autres.

- **Gmail, iCloud et Fastmail** demandent un **mot de passe d'application**, à créer dans les réglages de sécurité de votre compte, à la place de votre mot de passe habituel : voir [Gmail, iCloud, Fastmail](/fr/docs/app-passwords/), pas à pas pour chacun.
- **Outlook.com et Microsoft 365** se connectent dans votre navigateur, sur la page de Microsoft : NiceMailer ne voit jamais votre mot de passe (voir plus bas).

## Ajouter le compte

1. Ouvrez **NiceMailer › Réglages…** (<kbd>⌘</kbd> <kbd>,</kbd>), onglet **Comptes**, et cliquez sur **+**.
2. Tapez votre adresse, votre mot de passe, et le nom que vos correspondants verront dans « De ».
3. Cliquez sur **Ajouter le compte**.

NiceMailer trouve seul les serveurs de votre adresse, et ne demande davantage que s'il en a besoin : le serveur IMAP si votre domaine n'est pas connu, ou un mot de passe distinct pour l'envoi si votre fournisseur en exige un. Votre mot de passe est enregistré dans le trousseau de macOS, jamais dans un fichier.

Pour le changer plus tard, par exemple après un nouveau mot de passe d'application, ouvrez la page du compte dans les Réglages.

### Outlook.com et Microsoft 365

Microsoft n'accepte plus les mots de passe des applications de mail. Dès que vous tapez une adresse Outlook.com, Hotmail, Live ou Microsoft 365, le champ du mot de passe est remplacé par un bouton **Se connecter avec Microsoft**. Cliquez dessus, connectez-vous sur la page de Microsoft dans votre navigateur, et l'ajout reprend où il s'était arrêté.

Si Microsoft vous demande plus tard de vous reconnecter (après un changement de mot de passe, par exemple), la page du compte dans les Réglages propose un bouton **Se reconnecter**. Depuis le Terminal, `nicemailer account add` et `nicemailer account login <compte>` ouvrent la même page dans votre navigateur.

## Regarder d'abord, décider ensuite

Avant d'écrire quoi que ce soit sur votre serveur, NiceMailer vous montre ce qu'il changerait : les dossiers qu'il créerait (Todo, Waiting, Quarantaine, Paperwork, Newsletter…) et le dossier qu'il utiliserait pour chaque rôle. Si votre serveur a déjà un dossier pour un rôle, vous pouvez le choisir à la place.

Vous pouvez alors choisir **Seulement regarder pour l'instant : ne rien changer sur le serveur**. NiceMailer télécharge et affiche votre mail, la recherche et les filtres fonctionnent, et pas un octet ne change sur le serveur : aucun dossier n'est créé, aucun mail n'est déplacé.

Quand vous êtes prêt, sélectionnez le compte dans les Réglages et cliquez sur **Organiser…**. NiceMailer vous remontre le même résumé, puis crée ses dossiers et commence à trier le nouveau mail. Votre mail n'est pas retéléchargé.

## Une Inbox courte pour commencer

Si votre Inbox contient beaucoup de mails, NiceMailer propose d'archiver les anciens au moment d'organiser le compte : les mails lus antérieurs à une date, et les non lus antérieurs à une autre. Il affiche le nombre exact de mails concernés par chaque choix, et vous pouvez décocher l'un ou l'autre. Vous démarrez avec une Inbox qui ne contient que le récent.

## Les gens que vous connaissez évitent la Quarantaine

Une fois le compte organisé, le mail des expéditeurs inconnus va en [Quarantaine](/fr/docs/workflow/). Pour que vos amis et collègues n'y finissent pas, NiceMailer accepte d'emblée tous ceux à qui vous avez écrit : leurs prochains mails arrivent directement dans votre Inbox. Vous pouvez le désactiver sur le même écran.

## Votre téléphone voit la même chose

Les dossiers de NiceMailer sont des dossiers ordinaires sur votre serveur. Ce que vous rangez dans NiceMailer, votre téléphone et vos autres applications de mail le voient dans le même dossier, et ce que vous faites ailleurs apparaît dans NiceMailer.

## Plusieurs comptes

Ajoutez autant de comptes que vous voulez. Le sélecteur de compte, <kbd>@</kbd>, montre un compte ou tous ensemble. Faites glisser les comptes dans les Réglages pour changer leur ordre.
