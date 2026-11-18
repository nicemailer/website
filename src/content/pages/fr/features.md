---
title: Fonctionnalités
description: Tout ce qui rend NiceMailer rapide, reposant et sécurisant.
---

## Rapide

### Instantané, quelle que soit la taille de votre boîte

Ouvrir un dossier prend quelques millisecondes, même pendant le téléchargement du nouveau courrier. Filtrer 400 000 mails pour ne garder que ceux écrits par de vraies personnes prend 2 ms. NiceMailer a été construit et testé sur des boîtes de centaines de milliers de mails, dès la première ligne de code.

### Le clavier d'abord. Le clavier roi.

Vous n'utilisez jamais de raccourcis ? Aucun problème : tout fonctionne à la souris.

Mais si vous aimez les raccourcis clavier, vous êtes au bon endroit. Des touches inspirées de Vim pour lire, répondre, ranger, étiqueter et chercher sans lever les mains du clavier : <kbd>j</kbd> et <kbd>k</kbd> pour avancer, <kbd>d</kbd> pour archiver, <kbd>r</kbd> pour répondre, <kbd>/</kbd> pour chercher, <kbd>z</kbd> pour annuler. <kbd>?</kbd> affiche toutes les touches, à tout moment.

### Ne cherchez plus. Trouvez.

Filtrez instantanément tous vos mails, sur tous vos comptes. Combinez tous les critères : texte intégral, date, expéditeur, destinataire, non lus, drapeau, pièces jointes, avec votre réponse, expéditeur personne ou robot, tag, groupe de contacts. Chaque filtre peut être inversé (« pas de @boutique.fr »), les dates se tapent comme on y pense (« après 1/10/2026 », « il y a plus de 6 mois »), et tout reste instantané.

### Tout ce que contient un mail, à une touche

Une touche, <kbd>l</kbd>, liste tout ce que contient un mail : ses liens, ses pièces jointes, les numéros de téléphone de l'expéditeur, et le code de confirmation que vous venez de recevoir. Copiez le code, ouvrez la pièce jointe ou appelez l'expéditeur avec votre iPhone, d'une seule touche.

### Des liens profonds vers vos notes

Chaque mail a un lien permanent, du type `[Objet du mail](nicemailer://m/399955)`, copié depuis le mail en deux touches. Collez-le dans Obsidian, Notion ou n'importe quelle application de notes, et revenez au mail d'un clic, des années plus tard.

## Reposant

### Les inconnus attendent en Quarantaine

Le courrier des personnes qui ne vous ont jamais écrit reste hors de votre Inbox, en Quarantaine. Là, une touche décide où va chaque expéditeur : votre Inbox, Paperwork, Newsletter, ou banni pour de bon. Tout se passe sur votre Mac et fonctionne avec votre compte IMAP actuel, afin de retourner cela sur votre téléphone.

Paperwork contient la paperasse (factures, etc.) qu'on ne lit pas mais qu'on doit garder. Newsletter contient les lettres d'information qu'on sera content de lire quand on aura le temps.  

### Une décision par expéditeur. Pour toujours.

Votre décision porte sur l'expéditeur, pas sur un mail. Envoyez une boutique dans Newsletter, et tous les mails qu'elle vous a envoyés, dans tous vos comptes, y vont aussi, comme tous ceux qu'elle enverra. Vous pouvez même décider pour un domaine entier.

### Un workflow qui garde votre Inbox propre

Chaque mail de votre Inbox n'a besoin d'être vu, lu et traité qu'une seule fois. Puis vous décidez où il va :

- **Archive** : plus rien à faire ;
- **Todo** : une action est nécessaire ;
- **Waiting** : les mails dont il faudra contrôler la suite sous peu. Un mail reçu de quelqu’un annonçant "revenir vers vous très vite" ; le mail que vous avez envoyé à un prospect et dont vous attendez la réponse. La conversation revient d'elle-même dans votre Inbox quand la réponse arrive.

Inbox, Todo et Waiting sont réunis dans "Work" pour avoir une vision globale. Une petite flèche dans la liste (« → Alice ») montre d'un coup d'œil qui attend qui. 

### Aller vite, sans crainte

Chaque déplacement et chaque décision s'annulent d'une touche. Chaque mail envoyé attend cinq secondes avant de partir, au cas où vous changeriez d'avis.

### Essayez sans rien changer

Pas sûr que ce workflow soit fait pour vous ? Ajoutez votre compte et choisissez « Seulement regarder pour l'instant » : NiceMailer affiche votre courrier sans modifier un seul octet sur le serveur. Avant d'aller plus loin, il vous montre exactement les dossiers qu'il va créer. Quand vous êtes prêt, un clic met le workflow en place, sans retélécharger votre courrier.

### Distinguer les humains des robots

La plupart des mails que nous recevons sont écrits par des machines. NiceMailer les distingue : d'une touche, vous ne voyez que les conversations avec de vraies personnes, même dans des années d'archives.

### Des conversations enfin lisibles

Les longues conversations sont un mur de citations répétées, de signatures et de « Envoyé de mon iPhone ». NiceMailer montre chaque message avec seulement ce qu'il apporte : l'historique cité, les signatures répétées et les copies des messages précédents sont repliés, à une touche si vous en avez besoin.

### Reposant pour les yeux

Certains clients mail finissent par ressembler à des sapins de Noël. NiceMailer a une interface sobre et calme : sa force tient à la vitesse avec laquelle il vous laisse trouver, lire, répondre et ranger. Et un vrai mode sombre assombrit même le fond blanc de votre newsletter préférée.

## Sécurisant

### Le phishing reste dehors

N'importe qui peut écrire n'importe quel nom dans le « De » d'un mail. NiceMailer vérifie que chaque mail vient bien de qui il prétend venir (SPF, DKIM, DMARC) et ne se laisse pas tromper par des résultats falsifiés. Un mail qui se fait passer pour votre banque ne sort pas de la Quarantaine parce qu'il a emprunté un nom connu, et bannir un faussaire ne bannit jamais le vrai expéditeur.

### Personne ne sait quand vous lisez ses mails

Les pixels espions, ces images invisibles qui disent à l'expéditeur quand et où vous avez ouvert son mail, sont retirés à l'arrivée. Les images distantes ne se chargent jamais sans votre accord, et NiceMailer retient votre choix pour chaque expéditeur. Se désabonner d'une newsletter prend un clic, et NiceMailer ne le propose jamais sur un spam, où cela ne ferait que confirmer votre adresse au spammeur.

### Aucune télémétrie. Aucune.

NiceMailer ne vous compte pas, ne vous profile pas et ne rend compte de rien : pas de statistiques, pas de rapport de plantage envoyé en douce, pas de compte à créer. Il en va de même pour ce site, sans cookie ni statistiques. Ce que l'application envoie, et à qui, est détaillé sur la page [Confidentialité](/fr/privacy/).

### Votre courrier, sur votre Mac, pour toujours

Votre courrier est la mémoire de toute votre vie personnelle et professionnelle. Votre fournisseur peut fermer, votre organisation peut supprimer votre compte à tout moment. NiceMailer garde chaque mail sur votre Mac, exactement tel qu'il a été reçu, dans des fichiers qui ne sont plus jamais modifiés. Sauvegardez-les avec Time Machine ou n'importe quel outil de copie : chaque sauvegarde n'ajoute que les nouveaux mails. Tout le reste de ce que stocke NiceMailer se reconstruit à partir de ces fichiers.

### Gardez votre historique

Importez une boîte entière depuis un fichier mbox : un export de 10 Go et 45 000 mails prend une quarantaine de secondes. Vous quittez Apple Mail ? NiceMailer peut reprendre toute votre bibliothèque Apple Mail, y compris les comptes dont le serveur n'existe plus. Voir [Passer à NiceMailer](/fr/docs/moving-to-nicemailer/).

### Une IA qui travaille pour vous, et seulement quand vous le demandez

L'IA est facultative dans NiceMailer, et désactivée tant que vous ne l'activez pas. Rien n'est envoyé à l'IA sans votre demande, et rien de ce qu'elle propose n'est appliqué sans votre accord.

- **Écrire** : transformer trois puces en mail complet (elle laisse des blancs plutôt que d'inventer), corriger, améliorer le style, reformuler, traduire, proposer un objet.
- **Lire** : résumer une conversation et ses actions à faire, résumer un PDF ou un document joint, traduire un mail, vérifier si un mail suspect est une arnaque.
- **Trier** : suggérer où ranger chaque mail de la Quarantaine, à confirmer d'une touche.

NiceMailer utilise votre abonnement Claude existant et ne stocke aucun identifiant. Chaque mail est traité comme une donnée, jamais comme une instruction : un mail malveillant ne peut pas prendre le contrôle de l'IA.

### Votre assistant IA, branché sur votre boîte

Grâce au serveur MCP de NiceMailer, Claude Desktop, Claude Code ou une application semblable peut chercher dans votre courrier, lire les conversations et les pièces jointes, répondre à « Quels sont les mails urgents ou importants à traiter en priorité ? » et préparer des réponses. Il ne peut rien envoyer, déplacer ni supprimer : cette règle est imposée par NiceMailer lui-même, pas laissée à l'IA. Vous relisez chaque brouillon et l'envoyez vous-même.

### Qui a fait quoi

Chaque changement dans votre boîte est consigné : ce que vous avez rangé aujourd'hui, qui a banni cette adresse, ce qu'a fait votre assistant IA. Revoyez votre journée depuis l'écran Historique.

### Libre, pour que vous puissiez vérifier

NiceMailer est un logiciel libre, sous licence GNU AGPLv3. Vous n'avez à croire aucune affirmation de cette page sur parole : la façon dont votre courrier est stocké, ce qui est envoyé à l'IA et ce qu'un agent IA a le droit de faire sont dans le [code source](https://github.com/nicemailer/nicemailer). Vous n'êtes pas développeur ? Envoyez votre agent IA le lire à votre place : cela lui fera plaisir.

### Construit pour durer

Le modèle de données et les spécifications de NiceMailer ont été conçus bien avant la première ligne de code. Son cœur, écrit en Rust, continue de tourner en arrière-plan quand l'application est fermée : le courrier continue d'arriver et d'être trié, et les envois en attente partent. Chacune de vos actions survit à un plantage et parvient au serveur dès que la connexion revient. Avant chaque mise à jour, votre boîte est copiée, et remise en place automatiquement en cas de problème. Une suite de tests complète protège chaque fonctionnalité.
