---
title: Lire et écrire
description: Des conversations lisibles, tout ce que contient un mail en une touche, votre vie privée pendant la lecture, et des envois sans regret.
order: 7
---

## Des conversations qui se lisent simplement

Quand vous ouvrez une conversation, chaque message ne montre que ce qu'il apporte. NiceMailer replie :

- l'historique cité à la fin d'une réponse (« Le lundi, Alice a écrit : … ») ;
- les signatures qu'un expéditeur répète dans chaque message ;
- les « Envoyé de mon iPhone » et les mentions de confidentialité ;
- le texte recopié d'un message précédent.

Les citations au milieu d'une réponse, qui donnent le contexte d'une réponse point par point, restent. Rien n'est supprimé : chaque partie repliée affiche une ligne comme « ··· 24 lignes citées », et <kbd>T</kbd> montre tout d'un coup. Les messages plus anciens déjà lus sont repliés sur une ligne ; le dernier et les non lus sont ouverts.

## Tout ce que contient un mail en une touche

<kbd>l</kbd> ouvre un panneau avec tout ce que contient le mail :

- le **code de vérification**, en premier, quand c'en est un (« Votre code : 610731 ») : Entrée le copie ;
- les **liens**, chacun une fois, avec leur vraie destination quand une newsletter la cache derrière une adresse de pistage ;
- les **numéros de téléphone** du mail et de la fiche de l'expéditeur dans Contacts : Entrée appelle avec votre iPhone ;
- les **pièces jointes** : Entrée enregistre le fichier dans Téléchargements, <kbd>⌘</kbd> <kbd>↩</kbd> l'enregistre et l'ouvre ;
- un **lien vers le mail lui-même**, à coller dans vos notes.

## Des liens vers vos notes

La première ligne de <kbd>l</kbd> copie un lien vers le mail, comme `[Facture d'octobre](nicemailer://m/3f9a0c2b7e41)`. Collez-le dans Obsidian, Notion ou n'importe quelle note : un clic ouvre NiceMailer sur ce mail, où qu'il ait été rangé depuis.


## Texte ou HTML

Qu'un mail s'ouvre d'abord en texte propre ou en HTML dépend du [thème](/fr/docs/themes/) : en HTML dans Clean et Regular, en texte dans Geek et Minimal. Le sélecteur en haut du mail, **text | html | images**, ou <kbd>h</kbd>, passe de l'un à l'autre. La version HTML est celle conçue par l'expéditeur, sans ses scripts, et en mode sombre même si elle a été faite pour une page blanche. NiceMailer retient votre choix pour chaque expéditeur, quel que soit le thème. Les mails en HTML suivent la taille du texte (<kbd>⌘</kbd> <kbd>+</kbd> <kbd>⌘</kbd> <kbd>−</kbd>) comme le reste de la fenêtre.

## Images et pisteurs

Beaucoup de mails contiennent des pixels espions, des images invisibles qui disent à l'expéditeur quand et où vous les avez ouverts. NiceMailer les retire à l'arrivée, et la ligne de titre du mail en indique le nombre. Les autres images distantes ne se chargent que si vous choisissez **images** (ou <kbd>v</kbd> <kbd>i</kbd>), pour ce mail ou pour cet expéditeur désormais.

## Écrire et envoyer

<kbd>r</kbd> répond à tous, <kbd>R</kbd> à l'expéditeur seul, <kbd>F</kbd> transfère, <kbd>c</kbd> écrit un nouveau mail ; la ligne de titre du mail propose les mêmes actions en boutons, avec le drapeau. Les commandes d'une réponse (envoyer, joindre, expéditeur, format…) sont des boutons sous son objet. La réponse s'ouvre à la place du mail, dans un champ de texte qui se comporte comme n'importe quel champ de texte du Mac, avec vos raccourcis d'édition habituels. <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>T</kbd> bascule entre texte seul et texte mis en forme, pour cette réponse et les suivantes, jusqu'à ce que vous appuyiez de nouveau. Joignez des fichiers en les déposant sur la réponse, en collant des fichiers copiés dans le Finder, ou avec <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>A</kbd>. Votre texte est enregistré pendant que vous tapez : un plantage en perd au plus une demi-seconde.

<kbd>⌘</kbd> <kbd>↩</kbd> envoie, après cinq secondes : la barre d'état affiche « Envoi dans 5 s », et <kbd>z</kbd> fait revenir la réponse si vous changez d'avis. <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>↩</kbd> demande d'abord où ranger la conversation une fois envoyée : Archive, Waiting, Todo.

<kbd>Échap</kbd> ferme la réponse et garde le brouillon, dans Drafts (<kbd>;</kbd> <kbd>r</kbd>) et sur votre serveur.

## Se désabonner

Quand une newsletter indique comment se désabonner, un bouton apparaît sur sa ligne de titre (<kbd>⌘</kbd> <kbd>U</kbd>). Quand la liste le permet, un clic suffit, sans ouvrir aucune page. NiceMailer ne le propose jamais en Quarantaine ni dans Junk : se désabonner d'un spam ne fait que confirmer votre adresse au spammeur.
