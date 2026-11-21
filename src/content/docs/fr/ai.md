---
title: L'IA et les agents IA
description: Activer l'assistant IA, voir ce qu'il sait faire, et brancher Claude Desktop ou Claude Code sur votre boîte.
order: 8
---

L'IA est facultative dans NiceMailer. Elle est désactivée tant que vous ne l'activez pas, et toutes les fonctionnalités de l'application marchent sans elle.

## Trois règles

- **Rien ne part sans vous.** Chaque appel à l'IA est lancé par vous, sur ce que vous regardez : le brouillon, le mail ouvert, les mails marqués. Rien n'est envoyé en arrière-plan.
- **L'IA propose, vous décidez.** Un texte corrigé montre ses modifications, à accepter ; un dossier suggéré attend votre touche. L'IA n'envoie, ne déplace et ne modifie jamais un mail d'elle-même.
- **Un mail est une donnée, jamais un ordre.** Un mail malveillant peut essayer de donner des instructions à l'IA. NiceMailer ne donne aucun outil à l'IA, et le vérifie avant chaque appel : un mail ne peut rien lui faire faire.

## L'activer

NiceMailer utilise **Claude Code**, l'outil en ligne de commande `claude` d'Anthropic, connecté à votre propre abonnement Claude. NiceMailer ne stocke ni clé ni mot de passe pour lui.

1. [Installez Claude Code](https://docs.claude.com/en/docs/claude-code/overview) et connectez-vous une fois en lançant `claude` dans le Terminal.
2. Ouvrez le fichier de réglages de NiceMailer, `~/.config/nicemailer/config.toml`, et ajoutez :

   ```toml
   [ai]
   enabled = true
   ```

3. Enregistrez le fichier. NiceMailer le relit de lui-même.

À chaque appel, NiceMailer vérifie que le processus `claude` qu'il lance ne peut ni exécuter de commande, ni naviguer sur le web, ni lire de fichier, ni utiliser aucun autre outil. Sinon, l'appel est arrêté avant que quoi que ce soit de vous ne soit envoyé.

## Ce qu'elle sait faire

Appuyez sur <kbd>a</kbd> sur un mail, ou <kbd>⌃</kbd> <kbd>I</kbd> pendant que vous écrivez, pour ouvrir le menu de l'IA.

**Pendant que vous écrivez**

- Corriger, améliorer le style, reformuler (plus formel, plus amical, plus court, plus long, plus clair), traduire.
- Rédiger à partir de notes : tapez trois puces au-dessus de la citation, et obtenez un mail complet. Les faits absents de vos notes sont laissés en « [à compléter] » plutôt qu'inventés.
- Proposer un objet.
- D'autres formulations pour un mot ou un passage sélectionné.

**Sur un mail ou une conversation**

- Le résumer, avec les actions qu'il vous demande.
- Proposer des réponses rapides.
- Le traduire.
- Vérifier s'il ressemble à une arnaque, d'après son contenu et ce que NiceMailer sait de son expéditeur.
- Lister ses dates et rendez-vous.
- Rassembler les coordonnées de l'expéditeur : nom, société, téléphones, adresse.
- Résumer un PDF, un document Word ou un fichier texte joint.

**Sur plusieurs mails**

- En Quarantaine, suggérer une destination pour chaque mail ; chaque ligne affiche alors la suggestion, et une touche l'applique.
- Ailleurs, suggérer un dossier pour les mails marqués.

Chaque appel est gardé sur votre Mac pendant 30 jours, avec ce qui a été envoyé et ce qui est revenu.

## Brancher un agent IA

NiceMailer est livré avec un serveur MCP, qui permet à une application d'IA d'utiliser votre boîte comme source : Claude Desktop, Claude Code, ou toute application compatible avec le Model Context Protocol. Vous pouvez alors lui demander « qu'est-ce que j'attends ? », « retrouve la facture du plombier », « résume mes échanges avec Alice ce mois-ci » ou « prépare une réponse ».

Dans NiceMailer, ouvrez le menu **NiceMailer › Agents IA** :

- **Connecter à Claude Desktop** ajoute NiceMailer aux réglages de Claude Desktop. Relancez Claude Desktop.
- **Copier la commande pour Claude Code** copie la commande à coller dans le Terminal.
- **Copier la configuration MCP** copie les réglages pour une autre application.

### Ce qu'un agent peut faire

Un agent peut chercher dans votre mail, lire les conversations et les pièces jointes, et préparer des brouillons, que vous retrouvez dans Drafts pour les relire et les envoyer vous-même. Il **ne peut ni envoyer, ni déplacer, ni marquer, ni supprimer, ni se désabonner**. Ces limites sont imposées par le noyau de NiceMailer, pas par l'agent, et ne sont pas un réglage qu'un agent pourrait modifier.

Gardez en tête que l'application d'IA envoie ce qu'elle lit à son propre fournisseur, selon ses conditions.
