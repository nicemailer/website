---
title: Confidentialité
description: Ce que NiceMailer envoie, à qui, et quand. En bref, rien sur vous, à personne, sauf si vous le demandez.
---

NiceMailer n'a aucune télémétrie : pas de statistiques, pas de mesure d'usage, pas de rapport de plantage, pas de compte à créer. Votre mail reste sur votre Mac. Cette page liste chaque connexion que fait l'application, pour que vous n'ayez pas à nous croire sur parole. Le [code source](https://github.com/nicemailer/nicemailer) permet de le vérifier.

## Les connexions de l'application

| Connexion | Quand | Ce qui est envoyé |
| --- | --- | --- |
| Vos serveurs de mail (IMAP et SMTP) | En permanence, pour les comptes ajoutés | Ce qu'envoie tout client mail : votre identifiant, vos modifications, les mails que vous envoyez |
| Votre résolveur DNS | À l'ajout d'un compte | Le domaine de votre adresse, pour trouver ses serveurs. La liste des fournisseurs connus est intégrée à l'application |
| GitHub, pour les mises à jour | Une fois par jour, si vous l'avez accepté au deuxième lancement, ou quand vous choisissez Rechercher les mises à jour… | Une requête web ordinaire pour la liste des versions. Aucune information sur votre Mac ni sur votre usage |
| Anthropic, par votre propre outil `claude` | Seulement quand vous lancez une commande d'IA, si vous l'avez activée | Le mail, la conversation, le brouillon ou la pièce jointe concernés, et rien d'autre |
| Les serveurs de l'expéditeur | Seulement quand vous demandez les images distantes d'un mail | Les requêtes des images, comme dans un navigateur : l'expéditeur apprend que le mail a été ouvert, et votre adresse IP |
| L'adresse de désabonnement de l'expéditeur | Seulement quand vous cliquez sur Se désabonner | Une requête sans cookie ni donnée personnelle, comme la liste le demande (RFC 8058) |

Les liens que vous ouvrez partent dans votre navigateur, et les numéros que vous appelez vers macOS et votre iPhone. Aucun ne passe par NiceMailer.

## Ce qui reste sur votre Mac

- **Votre mail**, son index de recherche et tout ce que NiceMailer en apprend (qui est une personne, qui est un robot, vos décisions sur chaque expéditeur) sont dans votre dossier de données, `~/Library/Application Support/NiceMailer`.
- **Vos mots de passe** sont dans le trousseau de macOS, jamais dans un fichier.
- **Vos contacts** sont lus dans l'application Contacts quand vous cherchez un expéditeur, et ne sont jamais copiés dans NiceMailer.
- **L'historique des appels à l'IA** (la demande, la réponse) reste sur votre Mac pendant 30 jours.

## Le pistage par les expéditeurs

Beaucoup de mails contiennent des pixels espions : des images invisibles qui ne servent qu'à dire à l'expéditeur quand et où vous avez ouvert son mail. NiceMailer les retire à l'arrivée, et ne charge jamais les images distantes sans votre accord, pour ce mail ou pour tous les mails de cet expéditeur. La ligne de titre d'un mail indique combien de pisteurs ont été retirés.

## L'IA et les agents IA

L'IA est désactivée tant que vous ne l'activez pas. Même activée, rien ne part en arrière-plan : chaque appel est lancé par vous, sur ce que vous voyez. NiceMailer utilise l'outil en ligne de commande `claude`, connecté à votre propre abonnement Claude, et vérifie à chaque appel qu'il ne peut ni lancer de commande, ni naviguer sur le web, ni lire vos fichiers.

Si vous branchez une application d'IA comme Claude Desktop sur NiceMailer, cette application peut lire votre mail pour répondre à vos questions, et envoie ce qu'elle lit à son propre fournisseur d'IA, selon ses conditions. NiceMailer la laisse lire et préparer des brouillons, jamais envoyer, déplacer ni supprimer.

## Ce site

nicemailer.org est un site statique hébergé par GitHub Pages. Il n'a ni cookie, ni statistiques, ni script de pistage, et ne charge ni police ni image depuis d'autres sites. GitHub, en tant qu'hébergeur, reçoit les informations habituelles d'une requête (comme votre adresse IP) pour servir les pages ; voir la [déclaration de confidentialité de GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

La page d'accueil s'ouvre en français quand votre navigateur préfère le français. Si vous choisissez une langue avec le lien en haut de la page, votre navigateur s'en souvient (dans son stockage local, qui n'est jamais envoyé au site), pour que l'accueil continue de s'ouvrir dans cette langue.

## Questions

Si quelque chose n'est pas clair sur cette page, ou si vous voyez l'application faire quelque chose qu'elle ne dit pas, [ouvrez une issue](https://github.com/nicemailer/nicemailer/issues).
