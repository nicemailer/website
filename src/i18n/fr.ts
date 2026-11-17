import type { Strings } from './index';

// Toutes les chaînes du site en français, avec la même forme que en.ts.
const fr: Strings = {
  meta: {
    title: 'NiceMailer : un client mail rapide, calme et digne de confiance pour le Mac',
    description:
      'NiceMailer est un client mail libre et gratuit pour macOS. Instantané avec des centaines de milliers de mails, pensé pour le clavier, local d’abord, avec une IA facultative.',
  },
  nav: {
    features: 'Fonctions',
    docs: 'Documentation',
    changelog: 'Nouveautés',
    privacy: 'Confidentialité',
    source: 'Code source',
    download: 'Télécharger',
    otherLanguage: 'English',
    skip: 'Aller au contenu',
  },
  download: {
    button: 'Télécharger pour Mac',
    version: (v: string) => `Version ${v}`,
    requirements: 'macOS 14 ou plus récent, Apple Silicon',
    license: 'Libre et gratuit, AGPLv3',
  },
  hero: {
    title: 'Le mail qui suit votre rythme.',
    lead:
      'NiceMailer est un client mail rapide, calme et digne de confiance pour le Mac. Il reste instantané avec des centaines de milliers de mails, écarte le bruit de votre chemin et garde chaque conversation sur votre Mac pour des décennies.',
    shotAlt: 'La fenêtre de NiceMailer : la liste des conversations à gauche, un mail ouvert à droite.',
    caption: 'Une conversation de quatre messages. Les précédents tiennent chacun sur une ligne, et le dernier ne montre que ce qu’il apporte : sa signature et ses 28 lignes citées sont à une touche.',
  },
  measures: {
    title: 'Mesuré, pas promis',
    items: [
      { value: '2 ms', label: 'pour afficher un dossier, même pendant le téléchargement du courrier' },
      { value: '2 ms', label: 'pour ne garder que les mails écrits par des personnes, parmi 400 000' },
      { value: '36 s', label: 'pour importer une archive de 10 Go et 46 000 mails' },
    ],
    note: 'Mesures faites sur un MacBook M1, avec des boîtes réelles et générées. La méthode est décrite dans la documentation du code source.',
  },
  pillars: [
    {
      id: 'speed',
      title: 'Rapide',
      lead: 'Chaque action répond tout de suite, et chaque action a sa touche.',
      shot: 'filters',
      shotAlt: 'Le panneau des filtres ouvert sur la liste : Non lus, Drapeau, De… et les autres.',
      caption: 'La touche f filtre par non lus, expéditeur, personne ou robot, pièces jointes… Chaque filtre répond à l’instant, même sur des centaines de milliers de mails.',
      points: [
        {
          title: 'Le clavier d’abord',
          text: 'Lisez, répondez, rangez, étiquetez et cherchez sans toucher la souris, avec des touches inspirées de Vim. Vous préférez la souris ? Tout fonctionne aussi avec elle.',
        },
        {
          title: 'Ne cherchez plus. Trouvez.',
          text: 'Recherche dans le texte de tous vos comptes, combinée à des filtres : date, expéditeur, non lus, drapeau, pièces jointes, votre réponse, personne ou robot, tag, groupe. Chaque filtre peut être inversé.',
        },
        {
          title: 'Tout ce que contient un mail, à une touche',
          text: 'La touche l montre les liens, les pièces jointes, les numéros de téléphone et le code de confirmation d’un mail. Copiez le code, ouvrez le fichier ou appelez l’expéditeur avec votre iPhone.',
        },
        {
          title: 'Un lien vers chaque mail',
          text: 'Copiez en deux touches un lien stable vers n’importe quel mail, et collez-le dans Obsidian, Notion ou vos notes. Un clic vous y ramène, des années plus tard.',
        },
      ],
    },
    {
      id: 'calm',
      title: 'Calme',
      lead: 'Seules les personnes que vous avez choisies arrivent dans votre boîte. Les autres attendent une décision que vous ne prenez qu’une fois.',
      shot: 'quarantine',
      shotAlt: 'Le dossier Quarantine : les mails des expéditeurs inconnus, avec une touche par destination dans la barre d’état.',
      caption: 'Les inconnus attendent en Quarantine. Une touche décide où va un expéditeur, pour tous les mails qu’il vous enverra.',
      points: [
        {
          title: 'Les inconnus attendent en Quarantine',
          text: 'Le mail d’un nouvel expéditeur reste hors de votre Inbox. Une touche l’envoie dans l’Inbox, Paperwork ou Newsletter, ou bannit l’expéditeur pour de bon.',
        },
        {
          title: 'Une décision par expéditeur',
          text: 'Votre décision porte sur l’expéditeur, pas sur un mail : tout ce qu’il vous a envoyé, dans tous vos comptes, est rangé avec, et tout ce qu’il enverra aussi.',
        },
        {
          title: 'Une boîte qui se vide',
          text: 'En quittant l’Inbox, un mail va dans Archive, Todo ou Waiting. Une conversation en Waiting revient d’elle-même quand la réponse arrive.',
        },
        {
          title: 'Des conversations lisibles',
          text: 'L’historique cité, les signatures répétées et les « Envoyé de mon iPhone » sont repliés. Chaque message montre ce qu’il apporte, le reste est à une touche.',
        },
      ],
    },
    {
      id: 'trust',
      title: 'Fiable',
      lead: 'Votre courrier est la mémoire de votre vie. NiceMailer le protège, et vous protège de ce qui y arrive.',
      shot: 'thread',
      shotAlt: 'Une newsletter dans NiceMailer, avec son bouton de désabonnement et le nombre de pixels espions retirés.',
      caption: 'Le pixel espion de cette newsletter a été retiré à son arrivée (l’œil barré) : l’expéditeur ne sait jamais que vous l’avez lue. Le désabonnement tient en un clic.',
      points: [
        {
          title: 'Le phishing reste dehors',
          text: 'NiceMailer vérifie que chaque mail vient bien de qui il prétend venir. Un message qui emprunte le nom de votre banque ne sort pas de la Quarantine.',
        },
        {
          title: 'Personne ne sait quand vous lisez',
          text: 'Les pixels espions sont retirés à l’arrivée, les images distantes ne se chargent qu’à votre demande, et le désabonnement se fait en un clic.',
        },
        {
          title: 'Votre courrier, sur votre Mac, pour de bon',
          text: 'Chaque mail est gardé sur votre Mac tel qu’il a été reçu, dans des fichiers qui ne changent jamais. Sauvegardez-les avec Time Machine ou n’importe quel outil de copie.',
        },
        {
          title: 'Une IA qui demande d’abord',
          text: 'Désactivée tant que vous ne l’activez pas. Elle résume, traduit, rédige et suggère où ranger un mail, sans rien appliquer avant votre accord.',
        },
      ],
    },
  ],
  pillarMore: 'Toutes les fonctions',
  tryIt: {
    title: 'Essayez sans rien changer',
    text: 'Ajoutez votre compte et choisissez « Seulement regarder pour l’instant » : NiceMailer affiche votre courrier sans modifier un seul octet sur le serveur. Avant d’aller plus loin, il vous montre exactement les dossiers qu’il va créer. Quand vous êtes prêt, un clic met le workflow en place, sans retélécharger votre courrier.',
    link: 'Ajouter votre compte',
  },
  migration: {
    title: 'Emportez tout votre courrier',
    text: 'Ajoutez vos comptes : NiceMailer télécharge tout leur courrier. Les archives des comptes fermés suivent aussi : un export mbox d’Apple Mail, Gmail, Thunderbird ou HEY s’importe en quelques minutes, et le relancer n’ajoute que ce qui manque.',
    link: 'Passer à NiceMailer',
  },
  openSource: {
    title: 'Libre, pour que vous puissiez vérifier',
    text: 'NiceMailer est un logiciel libre, sous licence GNU AGPLv3. Chaque affirmation de cette page se vérifie dans le code source : comment votre courrier est stocké, ce qui est envoyé à l’IA, ce que l’agent IA a le droit de faire. Aucune télémétrie, ni dans l’application ni sur ce site.',
    link: 'Lire le code sur GitHub',
  },
  author: {
    title: 'Pourquoi NiceMailer existe',
    text: [
      'Je cherche le bon client mail depuis des décennies. Aucun n’était assez rapide avec une grosse boîte, aucun ne se pilotait au clavier, aucun ne gardait mon courrier en sécurité sur mon propre ordinateur.',
      'Alors je le construis, comme je construis depuis plus de vingt ans des applications complexes et critiques. NiceMailer est un projet jeune, mais ce n’est pas une expérience d’un week-end : son modèle de données et ses spécifications ont été écrits avant la première ligne de code, et je m’en sers des heures chaque jour.',
    ],
  },
  faq: {
    title: 'Questions',
    items: [
      {
        q: 'Sur quels Mac fonctionne-t-il ?',
        a: 'Les Mac Apple Silicon (M1 et suivants), avec macOS 14 Sonoma ou plus récent.',
      },
      {
        q: 'Quels fournisseurs de mail sont pris en charge ?',
        a: 'Tout fournisseur qui propose l’IMAP avec un mot de passe : Gmail, iCloud, Fastmail, le serveur de votre entreprise et la plupart des autres. Certains demandent un mot de passe d’application quand la double authentification est active. Outlook.com, qui n’accepte que la connexion OAuth, n’est pas encore pris en charge.',
      },
      {
        q: 'Combien ça coûte ?',
        a: 'Rien. NiceMailer est libre et gratuit, sous licence GNU AGPLv3.',
      },
      {
        q: 'Mon courrier est-il envoyé quelque part ?',
        a: 'Non. NiceMailer parle à vos serveurs de mail, cherche les mises à jour sur GitHub, et n’envoie un mail à l’IA que quand vous le demandez. Aucune télémétrie, aucun compte à créer.',
      },
      {
        q: 'Faut-il utiliser l’IA ?',
        a: 'Non. L’IA est désactivée tant que vous ne l’activez pas, et toutes les fonctions de l’application marchent sans elle.',
      },
      {
        q: 'Va-t-il modifier ma boîte sur le serveur ?',
        a: 'Seulement si vous le voulez. Si vous choisissez « Seulement regarder pour l’instant », rien ne change sur le serveur. Une fois le compte organisé, NiceMailer crée ses dossiers et y range le courrier, pour que votre téléphone voie les mêmes dossiers.',
      },
      {
        q: 'Est-il disponible dans ma langue ?',
        a: 'L’application est en français et en anglais, et suit la langue de votre Mac.',
      },
    ],
  },
  final: {
    title: 'Offrez à votre courrier le client qu’il mérite.',
  },
  footer: {
    issues: 'Signaler un problème',
    license: 'NiceMailer est un logiciel libre, sous licence GNU AGPLv3.',
    noTracking: 'Ce site n’a ni cookie, ni statistiques, ni pisteur.',
  },
  docs: {
    title: 'Documentation',
    onThisPage: 'Guide',
    edit: 'Quelque chose n’est pas clair ou est faux ? Ouvrez une issue.',
    prev: 'Précédent',
    next: 'Suivant',
  },
  changelog: {
    title: 'Nouveautés',
    description: 'Ce qui change dans NiceMailer, version après version.',
    lead: 'Ce qui change dans NiceMailer, version après version. « Unreleased » liste ce qui arrive dans la prochaine version.',
    englishOnly: 'Les notes de version sont rédigées en anglais.',
  },
  shot: {
    pending: 'Capture d’écran à venir',
    zoom: 'Agrandir cette capture',
    close: 'Fermer (Échap)',
  },
};

export default fr;
