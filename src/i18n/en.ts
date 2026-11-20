// Every string of the site in English. fr.ts has the same shape: TypeScript
// checks that the two files hold the same keys (see `Strings` in index.ts).
export default {
  meta: {
    title: 'NiceMailer: a fast, calm and trustworthy email client for the Mac',
    description:
      'NiceMailer is a free and open-source email client for the Mac. Instant even with hundreds of thousands of emails. Everything stays on your Mac. Your own AI built in, if you want it.',
  },
  nav: {
    features: 'Features',
    docs: 'Docs',
    changelog: 'Changelog',
    privacy: 'Privacy',
    source: 'Source',
    download: 'Download',
    otherLanguage: 'Français',
    skip: 'Skip to content',
  },
  download: {
    button: 'Download for Mac',
    version: (v: string) => `Version ${v}`,
    requirements: 'macOS 14 or later, Apple Silicon',
    license: 'Free and open source, AGPLv3',
  },
  hero: {
    title: 'Fast to use. Calm to live with. Yours to keep.',
    lead:
      'NiceMailer is an email client for the Mac. It stays instant with hundreds of thousands of emails, lets into your inbox only the people you chose, and keeps your mail on your Mac for decades, with your privacy intact.',
    shotAlt: 'The NiceMailer window: the list of conversations on the left, an open email on the right.',
    caption: 'A conversation of four messages. Earlier ones fold into a line each, and the latest shows only what it adds: its signature and 28 quoted lines are one key away.',
  },
  measures: {
    title: 'Measured, not promised',
    items: [
      { value: '2 ms', label: 'to show a folder, even while new mail is downloading' },
      { value: '2 ms', label: 'to show only emails from real people, among 400,000' },
      { value: '36 s', label: 'to import a 10 GB archive of 45,000 emails' },
    ],
    note: 'Measured on a MacBook Pro M1, with real and generated mailboxes. The method is in the documentation of the source code.',
  },
  pillars: [
    {
      id: 'speed',
      title: 'Speed',
      lead: 'Every action is instant, and has its own keyboard shortcut.',
      shot: 'filters',
      shotAlt: 'The filter panel open over the list, with Unread, Flagged, From… and other filters.',
      caption: 'Press f to open the filters: unread, sender, person or robot, attachments… Every filter responds instantly, even across hundreds of thousands of emails.',
      points: [
        {
          title: 'Do everything from the keyboard',
          text: 'Read, reply, file, tag and search without touching the mouse, with shortcuts inspired by Vim.\nPrefer the mouse? Everything works with it too, of course.',
        },
        {
          title: "Don't search. Find.",
          text: 'Filter all your email instantly, across every account. Combine any criteria: full text, date, sender, attributes (unread, flagged, attachments, your reply, person or robot), tag, group. Every filter can be inverted.\nSay goodbye to scrolling, fast as it is…',
        },
        {
          title: 'Everything in an email, one key away',
          text: 'Press l to see the links, attachments, phone numbers and confirmation code of an email. Copy the code, open the file or call the sender through your iPhone.',
        },
        {
          title: 'A deep link to every email',
          text: 'Copy a permanent link to any email in two keystrokes and paste it into Obsidian, Notion or Apple Notes. One click brings you back to it, years later.',
        },
      ],
    },
    {
      id: 'calm',
      title: 'Calm',
      lead: 'Only the people you chose reach your inbox. The rest wait in Quarantine for a decision you make only once.',
      shot: 'quarantine',
      shotAlt: 'The Quarantine folder: emails from unknown senders, with one key per destination in the status bar.',
      caption: 'Unknown senders wait in Quarantine. The icon to the left of the name shows whether the sender is a person or a robot. One key decides where a sender belongs, for every email they will ever send you.',
      points: [
        {
          title: 'Unknown senders wait in Quarantine',
          text: 'Email from someone new stays out of your inbox. One key sends it to your Inbox, Paperwork or Newsletters, or bans the sender for good.',
        },
        {
          title: 'Decide once per sender',
          text: 'Your decision applies to the sender, not to one email: everything they sent you before, in every account, is filed with it, and so is everything they will send.',
        },
        {
          title: 'Your Inbox holds only what you want to see',
          text: 'One key sends an email to Archive, Todo or Waiting. A conversation in Waiting comes back on its own when the answer arrives, so nothing important gets lost.',
        },
        {
          title: 'Conversations you can read',
          text: 'Quoted history, repeated signatures and "Sent from my iPhone" are folded away. Each message shows what it adds, and the rest is one key away.',
        },
      ],
    },
    {
      id: 'trust',
      title: 'Trust',
      lead: 'Your email is the record of your life. NiceMailer protects it, and protects you from what arrives in it.',
      shot: 'thread',
      shotAlt: 'A newsletter in NiceMailer, with its unsubscribe button and the count of tracking pixels removed.',
      caption: 'The tracking pixel of this newsletter was removed when it arrived (the crossed-out eye), so the sender never knows you read it. Unsubscribing takes one click.',
      points: [
        {
          title: 'Phishing stays out',
          text: 'NiceMailer checks that each email really comes from who it claims to be. A message borrowing your bank’s name does not get past Quarantine.',
        },
        {
          title: 'Nobody knows when you read',
          text: 'Tracking pixels are removed when the email arrives, remote images load only when you ask, and unsubscribing takes one click.',
        },
        {
          title: 'Your email, on your Mac, for good',
          text: 'Every email is kept on your Mac exactly as it was received, in files that never change, so backing them up, with Time Machine or anything else, is quick and easy.',
        },
        {
          title: 'AI that asks first',
          text: 'Your AI is built in, but off by default. It summarizes, translates, drafts replies and suggests where an email belongs, and applies nothing until you accept it.',
        },
      ],
    },
  ],
  pillarMore: 'All the features',
  tryIt: {
    title: 'Try it without changing a thing',
    text: 'Add your account and choose “Only look for now”: NiceMailer shows your mail and doesn’t change a single byte on your server. Before going further, it shows you exactly which folders it will create. When you are ready, one click puts the workflow in place, without downloading your mail again.',
    link: 'How to add your account',
  },
  migration: {
    title: 'Bring all your email with you',
    text: 'Add your accounts and NiceMailer downloads all their mail. Archives of closed accounts come in too: an mbox export from Apple Mail, Gmail, Thunderbird or HEY is imported in minutes, and running it again only adds what is missing.',
    link: 'Moving to NiceMailer',
  },
  openSource: {
    title: 'Open source, so you can check',
    text: 'NiceMailer is free software under the GNU AGPLv3. Every claim on this page can be checked in the source code: how your email is stored, what is sent to the AI, what the AI agent is allowed to do. There is no telemetry, in the app or on this site.',
    link: 'Read the source on GitHub',
  },
  author: {
    title: 'Why NiceMailer exists',
    text: [
      'I have been looking for the perfect email client for decades. None was fast and uncluttered, could be driven entirely from the keyboard, and kept my email on my own Mac.',
      'So I built it, as I have built complex, mission-critical software for more than twenty years. NiceMailer is a young project, but it is not a weekend experiment: its data model and specifications were written before the first line of code. It is built to last.',
    ],
  },
  faq: {
    title: 'Questions',
    items: [
      {
        q: 'Which Macs does it run on?',
        a: 'Macs with Apple Silicon (M1 and later), on macOS 14 Sonoma or later.',
      },
      {
        q: 'Which email providers work?',
        a: 'Any provider that offers IMAP with a password: Gmail, iCloud, Fastmail, Infomaniak, most European providers, your company’s server and most others. Some ask for an app password when two-factor authentication is on (Gmail, for example). Outlook.com, which only allows OAuth sign-in, is not supported.',
      },
      {
        q: 'How much does it cost?',
        a: 'Nothing. NiceMailer is free and open source, under the GNU AGPLv3.',
      },
      {
        q: 'Does it send my email anywhere?',
        a: 'No. NiceMailer talks to your mail servers, checks for updates on GitHub, and sends an email to the AI only when you ask it to. There is no telemetry and no account to create.',
      },
      {
        q: 'Do I need AI?',
        a: 'No. AI is off until you turn it on, and every feature of the app works without it.',
      },
      {
        q: 'Will it change my mailbox on the server?',
        a: 'Only if you want it to. If you choose “Only look for now”, nothing changes on the server. Once you organize the account, NiceMailer creates its folders and moves email there, so your phone sees the same folders.',
      },
      {
        q: 'Is it available in my language?',
        a: 'The app is available in English, French, German, Spanish, Italian, Portuguese (Brazil and Portugal), Dutch, Swedish, Danish, Norwegian, Finnish, Polish, Ukrainian, Russian, Japanese, Simplified and Traditional Chinese, and Korean. It follows the language of your Mac.',
      },
    ],
  },
  final: {
    title: 'Give your email the client it deserves.',
  },
  footer: {
    issues: 'Report a problem',
    license: 'Made in France. Free software under the GNU AGPLv3.',
    noTracking: 'This site has no cookies, no analytics and no tracking.',
  },
  docs: {
    title: 'Documentation',
    onThisPage: 'Guide',
    edit: 'Something unclear or wrong? Open an issue.',
    prev: 'Previous',
    next: 'Next',
    contents: 'Pages of the guide',
    lead: 'How to install NiceMailer, bring your mail into it, and use it every day.',
  },
  changelog: {
    title: 'Changelog',
    description: 'What changes in NiceMailer, release by release.',
    lead: 'What changes in NiceMailer, release by release. “Unreleased” lists what is coming in the next version.',
    englishOnly: '',
  },
  shot: {
    pending: 'Screenshot coming soon',
    zoom: 'Show this screenshot larger',
    close: 'Close (Escape)',
  },
};
