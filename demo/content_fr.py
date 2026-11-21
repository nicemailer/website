"""La boîte de démonstration française : Alex Moreau, designer produit.

Toutes les personnes, entreprises et domaines sont inventés. La structure
suit content_en.py, conversation pour conversation.
"""

from __future__ import annotations

from demobox import PDF, Person

ME = Person("Alex Moreau", "alex@moreau-studio.fr")

SAM = Person("Samuel Roche", "samuel@lanterne.io", "Samuel Roche\nDirecteur produit, Lanterne\n06 12 34 56 78")
MAYA = Person("Maya Chen", "maya.chen@lanterne.io", "Maya Chen\nRecherche UX, Lanterne")
PRIYA = Person("Inès Benali", "ines.benali@gmail.com", client="iPhone Mail (22B83)")
JONAS = Person("Jonas Becker", "jonas@becker-architectes.fr", "Jonas Becker\nBecker Architectes\n01 45 67 89 10")
NORA = Person("Nora Lefèvre", "nora@cabinet-lefevre.fr", "Nora Lefèvre\nExpert-comptable, Cabinet Lefèvre\n01 42 00 11 22")
TOM = Person("Thomas Girard", "thomas@girard.dev")
EMMA = Person("Emma Lindqvist", "emma@northpine.se", "Emma Lindqvist\nNorthpine Studio, Stockholm")
DAN = Person("Damien Faure", "damien.faure@fastmail.fr")
GRACE = Person("Claire Moreau", "claire.moreau@icloud.com", client="iPhone Mail (22B83)")
LEO = Person("Léo Martin", "leo.martin@icloud.com")
HANNAH = Person("Hélène Roux", "helene@roux-evenements.fr", "Hélène Roux\nRoux Événements\n06 98 76 54 32")

BANK = Person("Banque Calder", "releves@banque-calder.fr")
BANK_FAKE = Person("Banque Calder Sécurité", "alertes@banque-calder.fr")
ENERGY = Person("Lumière Énergie", "facturation@lumiere-energie.fr")
AIR = Person("Air Azur", "noreply@air-azur.fr")
CLOUD = Person("Cobalt Cloud", "no-reply@cobaltcloud.io")
SLOWWEB = Person("Le Web lent", "bonjour@leweblent.fr")
DIGEST = Person("Lettre du design", "lettre@lettredudesign.fr")
FIELD = Person("Carnets de terrain", "news@carnetsdeterrain.fr")
BOOKS = Person("Librairie Faucon", "offres@librairie-faucon.fr")
COFFEE = Person("Café Fable", "bonjour@cafefable.fr")
PIXEL = Person("Pixelworks", "events@pixelworks.ai")
NOTABLY = Person("Notably", "team@notably.app")
LOOP = Person("LinkedLoop", "invitations@linkedloop.com")
SUMMIT = Person("Journées Design Systems", "billets@journees-ds.fr")

PEOPLE = [SAM, MAYA, PRIYA, JONAS, NORA, TOM, EMMA, DAN, GRACE, LEO]


def fill(Builder, now):
    b = Builder("fr", now)
    b.box.me = ME
    me = ME

    # --- Inbox ----------------------------------------------------------

    b.thread(
        "INBOX",
        "Refonte de l'accueil : prochaines étapes",
        [
            (SAM, "Bonjour Alex,\n\nMerci encore pour l'atelier de mardi. L'équipe a adoré le nouveau parcours d'accueil, en particulier les étapes de progression.\n\nPourrais-tu nous envoyer une première version des trois écrans clés d'ici la fin de la semaine prochaine ? Maya partagera demain les enregistrements des tests utilisateurs."),
            (me, "Bonjour Samuel,\n\nRavi de l'entendre ! La fin de la semaine prochaine me va. Je commence par l'écran d'accueil et la création de compte, puis les états vides.\n\nUne question : on garde le style d'illustration du site, ou tu veux quelque chose de plus léger dans l'application ?"),
            (SAM, "Plus léger dans l'application, je pense. Gardons les illustrations pour les états vides seulement.\n\nEnvoyé de mon iPhone"),
            (SAM, "Alex, encore une chose : le comité de direction est avancé au jeudi 4. Pourrait-on revoir les écrans le mercredi après-midi ? Je te joins le planning mis à jour.\n\nAutre point : Maya a relevé deux problèmes dans les tests qui changent l'étape de création de compte. Elle t'écrit aujourd'hui."),
        ],
        b.ago(days=3, hours=4),
        gap_hours=20,
        unread_last=True,
        last_phase="after",
        last_at=b.ago(minutes=25),
    )
    b.thread(
        "INBOX",
        "Dîner samedi ?",
        [
            (PRIYA, "Coucou ! Tu es libre samedi ? On veut tester le nouveau restaurant éthiopien rue Oberkampf.\n\nEnvoyé de mon iPhone"),
            (me, "Oui, je suis partant ! 20 h me va. Je réserve ?"),
        ],
        b.ago(hours=30),
        gap_hours=2,
    )
    b.thread(
        "INBOX",
        "Plan de l'atelier, version 3",
        [(JONAS, "Bonjour Alex,\n\nVoici la version 3 du plan, avec la salle de réunion déplacée à côté de la cuisine comme tu le souhaitais. Les étagères du mur nord font maintenant 40 cm de profondeur.\n\nDis-moi ce que tu en penses avant vendredi, que je puisse l'envoyer à l'entreprise.\n\nBien à toi,\nJonas")],
        b.ago(hours=7),
        unread_last=True,
        flagged=True,
        attach_first=("plan-atelier-v3.pdf", PDF, "application/pdf"),
    )
    b.thread(
        "INBOX",
        "Acompte de TVA de décembre",
        [(NORA, "Bonjour Alex,\n\nL'acompte de TVA de décembre est à verser avant le 24. D'après vos chiffres, je propose 3 800 €. Le détail est dans le tableau joint.\n\nMerci de me confirmer, je préparerai la déclaration.\n\nCordialement,\nNora Lefèvre")],
        b.ago(hours=11),
        unread_last=True,
        attach_first=("acompte-tva-decembre.pdf", PDF, "application/pdf"),
    )
    b.thread(
        "INBOX",
        "Un café la semaine prochaine ?",
        [
            (TOM, "Salut Alex, je suis à Paris la semaine prochaine pour une conférence. Un café mardi ou mercredi matin ?"),
            (me, "Mercredi matin, parfait. Café Fable à 9 h ?"),
            (TOM, "À mercredi !"),
        ],
        b.ago(days=1, hours=8),
        gap_hours=1,
    )
    b.thread(
        "INBOX",
        "Atelier à Stockholm : les dates",
        [
            (EMMA, "Bonjour Alex,\n\nNous serions ravis de vous accueillir pour l'atelier design systems à Stockholm. Préférez-vous du 10 au 12 mars ou du 17 au 19 mars ?\n\nBien cordialement,\nEmma"),
            (me, "Bonjour Emma,\n\nDu 17 au 19 mars serait idéal. Je réserve mes vols dès votre confirmation.\n\nAlex"),
            (EMMA, "Parfait, ce sera du 17 au 19 mars. Je vous envoie le programme la semaine prochaine."),
        ],
        b.ago(days=2, hours=2),
        gap_hours=5,
    )
    b.thread(
        "INBOX",
        "L'anniversaire de maman",
        [(GRACE, "Coucou ! Maman a 70 ans le 14. Je pensais à un dîner en famille à la maison du lac. Tu peux apporter l'album photo que tu as fait ?\n\nBisous,\nClaire\n\nEnvoyé de mon iPhone")],
        b.ago(hours=2),
        unread_last=True,
        phase="after",
    )
    b.thread(
        "INBOX",
        "Enregistrements des tests utilisateurs",
        [(MAYA, "Bonjour Alex,\n\nLes enregistrements des cinq sessions sont dans le dossier partagé. La synthèse est jointe : le principal problème est l'étape du mot de passe, que trois participants ont manquée.\n\nMaya")],
        b.ago(days=2, hours=9),
        attach_first=("synthese-tests.pdf", PDF, "application/pdf"),
    )
    b.thread(
        "INBOX",
        "Escalade dimanche",
        [
            (DAN, "Salle à 10 h dimanche ? Léo vient aussi."),
            (me, "Je suis là. J'apporte la nouvelle corde."),
        ],
        b.ago(days=3, hours=1),
        gap_hours=3,
    )
    b.notice(
        "INBOX",
        CLOUD,
        "Votre code de vérification Cobalt Cloud",
        "Votre code de vérification : 482913.\n\nIl expire dans 10 minutes. Si vous n'avez pas essayé de vous connecter, ignorez ce message.",
        b.ago(hours=1),
    )
    b.notice(
        "INBOX",
        AIR,
        "Confirmation de réservation : Paris – Stockholm, 16 mars",
        "Merci d'avoir choisi Air Azur.\n\nRéférence de réservation : K7Q2ZP\nParis-Charles de Gaulle (CDG) – Stockholm (ARN), 16 mars, 18 h 40\n\nVotre billet électronique est joint.",
        b.ago(days=1, hours=3),
        attachment=("billet-K7Q2ZP.pdf", PDF, "application/pdf"),
    )
    b.thread(
        "INBOX",
        "Les photos du voyage",
        [(LEO, "J'ai enfin trié les photos de Bretagne. Celle du phare au coucher du soleil est ma préférée.\n\nLéo")],
        b.ago(days=4, hours=5),
    )

    # --- Todo et Waiting ---------------------------------------------------

    b.thread(
        "Todo",
        "Lettre de mission 2027",
        [(NORA, "Bonjour Alex,\n\nVous trouverez ci-joint la lettre de mission pour l'an prochain. Pourriez-vous la signer et me la renvoyer quand vous aurez un moment ?\n\nCordialement,\nNora Lefèvre")],
        b.ago(days=5),
        attach_first=("lettre-de-mission-2027.pdf", PDF, "application/pdf"),
    )
    b.thread(
        "Todo",
        "Facture 2026-11 : numéro de commande",
        [(SAM, "Bonjour Alex, notre service financier a besoin d'un numéro de commande sur la facture de novembre. Je l'ai demandé, ce sera BC-88412. Pourrais-tu envoyer une facture corrigée ?\n\nMerci !")],
        b.ago(days=6, hours=3),
    )
    b.thread(
        "Todo",
        "Programme de l'atelier",
        [(EMMA, "Voici une première version du programme. Pourriez-vous vérifier l'horaire de vos sessions le deuxième jour ?")],
        b.ago(days=8),
    )
    b.thread("Waiting", "Devis pour les étagères", [(me, "Bonjour Jonas,\n\nPeux-tu demander un devis au menuisier pour les étagères ? En chêne si possible.\n\nMerci,\nAlex")], b.ago(days=4), to=JONAS, sent_folder="Waiting")
    b.thread("Waiting", "L'acompte du gîte", [(me, "Salut Léo, j'ai versé l'acompte du gîte. Tu peux m'envoyer ta moitié quand tu peux ?")], b.ago(days=6), to=LEO, sent_folder="Waiting")
    b.thread("Waiting", "Accès au tableau de bord", [(me, "Bonjour Maya, pourrais-tu me donner un accès en lecture au tableau de bord ? J'aimerais regarder les abandons à l'étape de création de compte.")], b.ago(days=2), to=MAYA, sent_folder="Waiting")

    # --- Newsletter et Paperwork -------------------------------------------

    letters = [
        (SLOWWEB, ["Pourquoi un logiciel rapide paraît calme", "Plaidoyer pour moins de notifications", "Construire pour des décennies", "Le texte brut est une fonction"]),
        (DIGEST, ["10 associations de polices pour 2027", "Dans les coulisses d'un plan de métro", "Des palettes qui tiennent la distance", "Le retour de la grille"]),
        (FIELD, ["Carnets des Pyrénées", "Une semaine sans téléphone", "Le sentier des douaniers"]),
        (BOOKS, ["Vos lectures de l'hiver", "-20 % sur les livres de design cette semaine", "Nouveauté : L'Art des interfaces"]),
        (COFFEE, ["Nouvelle récolte du Huila", "Le guide de l'infusion parfaite"]),
    ]
    i = 0
    for sender, subjects in letters:
        for s in subjects:
            i += 1
            b.newsletter("Newsletter", sender, s, f"{s}.\n\nAu sommaire cette semaine : trois histoires qui nous ont plu, et une avec laquelle nous ne sommes pas d'accord.\n\nMerci de nous lire.", b.ago(days=1 + i * 2.3, hours=i), seen=i > 3)

    papers = [
        (BANK, "Votre relevé de novembre est disponible", "Votre relevé de novembre est joint.", "releve-2026-11.pdf"),
        (BANK, "Votre relevé d'octobre est disponible", "Votre relevé d'octobre est joint.", "releve-2026-10.pdf"),
        (ENERGY, "Votre facture Lumière Énergie : 86,40 €", "Votre facture d'octobre s'élève à 86,40 €, prélevée le 28 novembre.", "facture-2026-10.pdf"),
        (ENERGY, "Votre facture Lumière Énergie : 71,15 €", "Votre facture de septembre s'élève à 71,15 €. Elle a été prélevée.", "facture-2026-09.pdf"),
        (CLOUD, "Facture de votre abonnement Cobalt Cloud", "Merci pour votre paiement de 12,00 €.", "cobalt-facture-1187.pdf"),
        (AIR, "Votre reçu : K7Q2ZP", "Nous avons bien reçu votre paiement de 1 084,20 €.", "recu-K7Q2ZP.pdf"),
    ]
    for n, (sender, subject, text, name) in enumerate(papers):
        b.notice("Paperwork", sender, subject, text, b.ago(days=3 + n * 9), attachment=(name, PDF, "application/pdf"))

    # --- Archive : deux ans de mail ordinaire --------------------------

    things = [
        "la charte graphique", "le lancement", "la planche d'ambiance", "le budget", "la facture d'avril",
        "les entretiens utilisateurs", "le nouveau logo", "le séminaire", "le contrat", "le prototype",
        "la feuille de route", "les photos", "le voyage", "l'appartement", "la conférence", "le site",
    ]
    patterns = ["Petite question sur {}", "Notes sur {}", "Merci pour {}", "Relance : {}", "À propos de {}"]
    lines = [
        "Merci pour ton message.", "J'ai regardé ce matin.", "On en parle jeudi ?",
        "Ça me va très bien.", "Je t'ai partagé le fichier.", "Tu peux vérifier les chiffres ?",
        "À bientôt.", "Je te réponds demain.", "Beau travail.", "Rien d'urgent.",
    ]
    for n in range(140):
        who = b.rng.choice(PEOPLE)
        subject = b.rng.choice(patterns).format(b.rng.choice(things))
        subject = subject[0].upper() + subject[1:]
        turns = []
        for t in range(b.rng.choice([1, 2, 2, 3])):
            text = " ".join(b.rng.sample(lines, 3))
            turns.append((who if t % 2 == 0 else me, f"Bonjour {('Alex' if t % 2 == 0 else who.name.split()[0])},\n\n{text}"))
        # The first ones are recent and still in the Inbox, read: an Inbox
        # is rarely empty, and a full list shows the layout better.
        if n < 9:
            b.thread("INBOX", subject, turns, b.ago(days=4.6 + n * 0.9), gap_hours=4)
        else:
            b.thread("Archive", subject, turns, b.ago(days=12 + n * 5.1), gap_hours=6)
    for n in range(40):
        sender, subjects = b.rng.choice(letters)
        b.newsletter("Newsletter", sender, b.rng.choice(subjects), "Un numéro précédent.", b.ago(days=40 + n * 9))

    # --- Arrivées, triées par NiceMailer ------------------------------------

    b.thread(
        "INBOX",
        "Intervenir à notre séminaire de printemps ?",
        [(HANNAH, "Bonjour Alex,\n\nJ'organise en avril un petit séminaire pour des équipes produit, près d'Annecy, et une amie m'a recommandé votre conférence sur les interfaces calmes. Seriez-vous partant pour intervenir ? Je vous envoie volontiers les détails.\n\nBien à vous,\nHélène")],
        b.ago(hours=5),
        unread_last=True,
        phase="after",
    )
    b.notice(
        "INBOX",
        BANK_FAKE,
        "Connexion inhabituelle : vérifiez votre compte",
        "Nous avons détecté une connexion inhabituelle à votre compte Banque Calder.\n\nPour éviter la suspension, vérifiez votre identité sous 24 heures :\nhttps://banque-calder-verification.top/connexion\n\nBanque Calder Sécurité",
        b.ago(hours=3),
        seen=False,
        phase="after",
        forged=True,
    )
    b.newsletter("INBOX", PIXEL, "Webinaire : l'IA pour les équipes design", "Rejoignez-nous jeudi pour un webinaire en direct.", b.ago(hours=9), seen=False, phase="after")
    b.newsletter("INBOX", NOTABLY, "Votre essai se termine dans 3 jours", "Passez à la version payante pour garder vos notes synchronisées.", b.ago(hours=14), seen=False, phase="after")
    b.notice("INBOX", LOOP, "Camille souhaite se connecter avec vous", "Camille Dupont, cheffe de produit chez Orbite, souhaite se connecter.", b.ago(hours=20), seen=False, phase="after")
    b.newsletter("INBOX", SUMMIT, "Dernier appel : billets à tarif réduit", "Les billets à tarif réduit des Journées Design Systems se terminent vendredi.", b.ago(days=1, hours=2), seen=False, phase="after")
    return b.box
