import type { Strings } from './index';

// Toutes les chaînes du site en français, avec la même forme que en.ts.
const fr: Strings = {
  meta: {
    title: 'NiceMailer : un client mail hyper rapide, reposant et sécurisant pour Mac',
    description:
      'Client mail libre pour Mac. Hyper rapide, même avec énormément de mails. Tout reste en local. Votre IA intégrée, si vous le voulez.',
  },
  nav: {
    features: 'En détail',
    docs: 'Documentation',
    changelog: 'Nouveautés',
    privacy: 'Vie privée',
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
    title: 'Rapide. Reposant. Sécurisant.',
    lead:
      'NiceMailer est un client mail pour Mac. Tout y est instantané, même avec des centaines de milliers de mails. Seules les personnes que vous avez choisies vont dans votre Inbox, et votre mail reste sur votre Mac : pour des décennies, sans rien sacrifier de votre vie privée.',
    shotAlt: 'La fenêtre de NiceMailer : la liste des conversations à gauche, un mail ouvert à droite.',
    caption: 'Vue d’une conversation. Les messages précédents tiennent chacun sur une ligne, et le dernier ne montre que ce qu’il apporte, sans sa signature ni ses 28 lignes citées, qu’une touche rend visibles.',
  },
  measures: {
    title: 'Mesuré, pas promis',
    items: [
      { value: '2 ms', label: 'pour afficher un dossier, même pendant le téléchargement du mail' },
      { value: '2 ms', label: 'pour afficher uniquement les vraies personnes, parmi 400 000 mails' },
      { value: '36 s', label: 'pour importer une archive de 10 Go et 45 000 mails' },
    ],
    note: 'Mesures faites sur un MacBook Pro M1, avec des boîtes réelles et générées. La méthode est décrite dans la documentation du code source.',
  },
  pillars: [
    {
      id: 'speed',
      title: 'Rapide',
      lead: 'Chaque action est immédiate et dispose de son raccourci clavier.',
      shot: 'filters',
      shotAlt: 'Le panneau des filtres ouvert sur la liste : Non lus, Drapeau, De… et les autres.',
      caption: 'La touche f affiche les filtres : par non lus, expéditeur, personne ou robot, pièces jointes… Chaque filtre répond immédiatement, même sur des centaines de milliers de mails.',
      points: [
        {
          title: 'Tout peut se faire au clavier',
          text: 'Lisez, répondez, rangez, étiquetez et cherchez sans toucher la souris, avec des raccourcis inspirés de Vim.\nVous préférez la souris ? Tout fonctionne aussi, bien sûr.',
        },
        {
          title: 'Ne cherchez plus. Trouvez.',
          text: 'Filtrez instantanément tous vos mails, sur tous vos comptes. Combinez tous les critères : texte intégral, date, expéditeur, attributs (non lus, drapeau, pièces jointes, votre réponse, personne ou robot), tag, groupe. Chaque filtre peut être inversé.\nBannissez le scroll, pourtant si rapide…',
        },
        {
          title: 'Tout ce que contient un mail, accessible à une touche',
          text: 'La touche l montre les liens, les pièces jointes, les numéros de téléphone et le code de confirmation d’un mail. Copiez le code, ouvrez le fichier ou appelez l’expéditeur avec votre iPhone.',
        },
        {
          title: 'Un lien (deeplink) vers chaque mail',
          text: 'Copiez en deux touches un lien permanent vers n’importe quel mail, et collez-le dans Obsidian, Notion ou Apple Notes. Un clic vous y ramène, des années plus tard.',
        },
      ],
    },
    {
      id: 'calm',
      title: 'Reposant',
      lead: 'Seules les personnes que vous avez choisies arrivent dans votre Inbox. Les autres attendent en quarantaine une décision que vous ne prenez qu’une fois.',
      shot: 'quarantine',
      shotAlt: 'Les mails des expéditeurs inconnus, en quarantaine, avec une touche par destination dans la barre d’état.',
      caption: 'Les inconnus attendent en quarantaine. L’icône à gauche du nom indique si l’expéditeur est une personne ou un robot. Une touche décide où va un expéditeur, pour tous les mails qu’il vous enverra.',
      points: [
        {
          title: 'Les inconnus attendent en quarantaine',
          text: 'Le mail d’un nouvel expéditeur reste hors de votre Inbox. Une touche l’envoie dans l’Inbox, Paperwork ou Newsletter, ou bannit l’expéditeur pour de bon.',
        },
        {
          title: 'Une décision par expéditeur',
          text: 'Votre décision porte sur l’expéditeur, pas sur un mail : tout ce qu’il vous a envoyé, dans tous vos comptes, est rangé avec, et tout ce qu’il enverra aussi.',
        },
        {
          title: 'L’Inbox ne contient que ce que vous voulez y voir',
          text: 'En une touche, envoyez un mail dans Archive, Todo ou Waiting. Une conversation en Waiting revient d’elle-même quand la réponse arrive : aucun mail important ne se perd.',
        },
        {
          title: 'Des conversations lisibles',
          text: 'Dans les conversations, l’historique cité, les signatures répétées et les « Envoyé de mon iPhone » sont automatiquement masqués. Chaque message ne montre que ce qu’il apporte, le reste se révèle d’une touche.',
        },
      ],
    },
    {
      id: 'trust',
      title: 'Sécurisant',
      lead: 'NiceMailer vous protège, vous et votre mail, qui est la mémoire de votre vie.',
      shot: 'thread',
      shotAlt: 'Une newsletter dans NiceMailer, avec son bouton de désabonnement et le nombre de pixels espions retirés.',
      caption: 'Le pixel espion de cette newsletter a été retiré à son arrivée (l’œil barré) : l’expéditeur ne sait jamais que vous l’avez lue. On se désabonne en un clic.',
      points: [
        {
          title: 'Le phishing est filtré',
          text: 'NiceMailer vérifie que chaque mail vient bien de qui il prétend venir. Un message qui emprunte le nom de votre banque ne sort pas de la quarantaine.',
        },
        {
          title: 'Personne ne suit vos lectures',
          text: 'Les pixels espions sont retirés à l’arrivée, les images distantes ne se chargent qu’à votre demande, et le désabonnement se fait en un clic.',
        },
        {
          title: 'Vos mails sont sur votre Mac, pour toujours',
          text: 'Chaque mail est gardé sur votre Mac tel qu’il a été reçu, dans des fichiers qui ne changent jamais. Les sauvegardes (avec Time Machine ou autre) sont donc faciles et rapides.',
        },
        {
          title: 'Une IA qui demande d’abord',
          text: 'Votre IA est nativement intégrée, mais désactivée par défaut. Elle résume, traduit, rédige et suggère où ranger un mail, sans rien appliquer avant votre accord.',
        },
      ],
    },
  ],
  pillarMore: 'Toutes les fonctionnalités',
  tryIt: {
    title: 'Essayez sans risque',
    text: 'Ajoutez votre compte et choisissez « Seulement regarder pour l’instant » : NiceMailer récupère et affiche votre mail, mais ne modifie rien sur le serveur. Quand vous êtes prêt, il vous montre exactement les dossiers qu’il va créer, puis un clic met le workflow en place, sans retélécharger votre mail.',
    link: 'Ajouter votre compte',
  },
  migration: {
    title: 'Gardez tout votre historique',
    text: 'Ajoutez vos comptes : NiceMailer télécharge tout leur mail. Les archives des comptes fermés suivent aussi : un export mbox d’Apple Mail, Gmail, Thunderbird ou HEY s’importe en quelques minutes, et le relancer n’ajoute que ce qui manque.',
    link: 'Passer à NiceMailer',
  },
  openSource: {
    title: 'Libre, pour que vous puissiez vérifier',
    text: 'NiceMailer est un logiciel libre, sous licence GNU AGPLv3. Chaque affirmation de cette page se vérifie dans le code source : comment votre mail est stocké, ce qui est envoyé à l’IA, ce que l’agent IA a le droit de faire. Aucune télémétrie, ni dans l’application ni sur ce site.',
    link: 'Lire le code sur GitHub',
  },
  author: {
    title: 'Pourquoi NiceMailer existe',
    text: [
      'Je cherche le client mail parfait depuis des décennies. Mais rien n’existait d’assez rapide et sobre, pilotable entièrement au clavier, et stockant mes mails en local.',
      'Alors je l’ai créé, comme je construis depuis plus de vingt ans des applications complexes et critiques. NiceMailer est un projet jeune, mais ce n’est pas une expérience d’un week-end : son modèle de données et ses spécifications ont été écrits avant la première ligne de code. Il est conçu pour durer.',
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
        a: 'Tout fournisseur qui propose l’IMAP avec un mot de passe : les grands opérateurs français ou européens, Infomaniak, le serveur de votre entreprise, bien sûr Gmail, iCloud, Fastmail, et la plupart des autres. Certains demandent un mot de passe d’application quand la double authentification est activée (Gmail par exemple). Outlook.com, qui n’accepte que la connexion OAuth, n’est pas pris en charge.',
      },
      {
        q: 'Combien ça coûte ?',
        a: 'Rien. NiceMailer est libre et gratuit, sous licence GNU AGPLv3.',
      },
      {
        q: 'Mon mail est-il envoyé quelque part ?',
        a: 'Non. NiceMailer parle à vos serveurs de mail, cherche les mises à jour sur GitHub, et n’envoie un mail à l’IA que quand vous le demandez. Aucune télémétrie, aucun compte à créer.',
      },
      {
        q: 'Faut-il utiliser l’IA ?',
        a: 'Non. L’IA est désactivée tant que vous ne l’activez pas, et toutes les fonctionnalités de l’application marchent sans elle.',
      },
      {
        q: 'Va-t-il modifier ma boîte sur le serveur ?',
        a: 'Seulement si vous le voulez. Si vous choisissez « Seulement regarder pour l’instant », rien ne change sur le serveur. Une fois le compte organisé, NiceMailer crée ses dossiers et y range le mail, pour que votre téléphone voie les mêmes dossiers.',
      },
      {
        q: 'Est-il disponible dans ma langue ?',
        a: 'L’application est disponible en français, anglais, allemand, espagnol, italien, portugais (Brésil et Portugal), néerlandais, suédois, danois, norvégien, finnois, polonais, ukrainien, russe, japonais, chinois simplifié et traditionnel, et coréen. Elle suit la langue de votre Mac.',
      },
    ],
  },
  final: {
    title: 'Offrez à vos mails le client qu’ils méritent.',
  },
  footer: {
    issues: 'Signaler un problème',
    license: 'NiceMailer est créé en France, sous licence libre GNU AGPLv3.',
    noTracking: 'Ce site n’a ni cookie, ni statistiques, ni pisteur.',
  },
  docs: {
    title: 'Documentation',
    onThisPage: 'Guide',
    edit: 'Quelque chose n’est pas clair ou est faux ? Ouvrez une issue.',
    prev: 'Précédent',
    next: 'Suivant',
    contents: 'Pages du guide',
    lead: 'Installer NiceMailer, y faire venir votre mail et l’utiliser au quotidien.',
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
