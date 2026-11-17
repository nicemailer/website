"""The English demo mailbox: Alex Morgan, a product designer.

Every person, company and domain is invented.
"""

from __future__ import annotations

from demobox import PDF, Person

ME = Person("Alex Morgan", "alex@morgan-studio.com")

SAM = Person("Sam Rivera", "sam@larkfield.io", "Sam Rivera\nHead of Product, Larkfield\n+1 415 555 0187")
MAYA = Person("Maya Chen", "maya.chen@larkfield.io", "Maya Chen\nUX Research, Larkfield")
PRIYA = Person("Priya Natarajan", "priya.natarajan@gmail.com", client="iPhone Mail (22B83)")
JONAS = Person("Jonas Becker", "jonas@becker-architects.de", "Jonas Becker\nBecker Architects\n+49 30 5550 1234")
NORA = Person("Nora Ellis", "nora@ellis-accounting.com", "Nora Ellis, CPA\nEllis Accounting\n+1 415 555 0123")
TOM = Person("Tom Okafor", "tom@okafor.dev")
EMMA = Person("Emma Lindqvist", "emma@northpine.se", "Emma Lindqvist\nNorthpine Studio, Stockholm")
DAN = Person("Dan Whitaker", "dan.whitaker@fastmail.com")
GRACE = Person("Grace Morgan", "grace.morgan@icloud.com", client="iPhone Mail (22B83)")
LEO = Person("Leo Hart", "leo.hart@icloud.com")
HANNAH = Person("Hannah Reyes", "hannah@reyes-events.com", "Hannah Reyes\nReyes Events\n+1 628 555 0199")

BANK = Person("Calder Bank", "statements@calderbank.com")
BANK_FAKE = Person("Calder Bank Security", "alerts@calderbank.com")
ENERGY = Person("Brightline Energy", "billing@brightline-energy.com")
AIR = Person("Skyward Air", "noreply@skywardair.com")
CLOUD = Person("Cobalt Cloud", "no-reply@cobaltcloud.io")
SLOWWEB = Person("The Slow Web", "hello@slowweb.news")
DIGEST = Person("Designer's Digest", "digest@designersdigest.co")
FIELD = Person("Field Notes Weekly", "news@fieldnotes.email")
BOOKS = Person("Kestrel Books", "offers@kestrelbooks.com")
COFFEE = Person("Fable Coffee", "hello@fablecoffee.com")
PIXEL = Person("Pixelworks", "events@pixelworks.ai")
NOTABLY = Person("Notably", "team@notably.app")
LOOP = Person("LinkedLoop", "invitations@linkedloop.com")
SUMMIT = Person("Design Systems Summit", "tickets@dssummit.org")

PEOPLE = [SAM, MAYA, PRIYA, JONAS, NORA, TOM, EMMA, DAN, GRACE, LEO]


def fill(Builder, now):
    b = Builder("en", now)
    b.box.me = ME
    me = ME

    # --- Inbox ----------------------------------------------------------

    # The conversation shown open in the hero screenshot. Its last message
    # arrives after the account is organized: Sam is a correspondent, so it
    # is screened straight to the Inbox, and it is the newest, unread.
    b.thread(
        "INBOX",
        "Onboarding redesign: next steps",
        [
            (SAM, "Hi Alex,\n\nThanks again for Tuesday's workshop. The team loved the new welcome flow, especially the progress steps.\n\nCould you send us a first version of the three key screens by the end of next week? Maya will share the recordings of the usability tests tomorrow."),
            (me, "Hi Sam,\n\nGreat to hear! End of next week works. I'll start with the welcome screen and the account setup, then the empty states.\n\nOne question: do we keep the illustration style of the marketing site, or do you want something lighter in the app?"),
            (SAM, "Lighter in the app, I think. Let's keep the illustrations for the empty states only.\n\nSent from my iPhone"),
            (SAM, "Alex, one more thing: the board meeting moved to Thursday the 4th. Could we review the screens on Wednesday afternoon instead? I've attached the updated timeline.\n\nAlso, Maya found two issues in the tests that change the account setup step. She'll write to you today."),
        ],
        b.ago(days=3, hours=4),
        gap_hours=20,
        unread_last=True,
        last_phase="after",
        last_at=b.ago(minutes=25),
    )
    # Owner wrote last: the row says "→ Priya".
    b.thread(
        "INBOX",
        "Dinner on Saturday?",
        [
            (PRIYA, "Hey! Are you free on Saturday? We're trying the new Ethiopian place on Valencia.\n\nSent from my iPhone"),
            (me, "Yes, count me in! 8pm works for me. Should I book?"),
        ],
        b.ago(hours=30),
        gap_hours=2,
    )
    b.thread(
        "INBOX",
        "Studio floor plan, version 3",
        [(JONAS, "Hello Alex,\n\nHere is version 3 of the floor plan, with the meeting room moved next to the kitchen as you asked. The shelves along the north wall are now 40 cm deep.\n\nLet me know what you think before Friday, so I can send it to the contractor.\n\nBest regards,\nJonas")],
        b.ago(hours=7),
        unread_last=True,
        flagged=True,
        attach_first=("floor-plan-v3.pdf", PDF, "application/pdf"),
    )
    b.thread(
        "INBOX",
        "Q4 estimated tax payment",
        [(NORA, "Hi Alex,\n\nYour Q4 estimated payment is due on January 15. Based on your numbers so far, I'd suggest $4,200. The details are in the attached worksheet.\n\nPlease confirm and I'll prepare the voucher.\n\nThanks,\nNora")],
        b.ago(hours=11),
        unread_last=True,
        attach_first=("q4-estimate.pdf", PDF, "application/pdf"),
    )
    b.thread(
        "INBOX",
        "Coffee next week?",
        [
            (TOM, "Hey Alex, I'm in town next week for a conference. Coffee on Tuesday or Wednesday morning?"),
            (me, "Wednesday morning is perfect. Fable Coffee at 9?"),
            (TOM, "See you there!"),
        ],
        b.ago(days=1, hours=8),
        gap_hours=1,
    )
    b.thread(
        "INBOX",
        "Workshop in Stockholm: dates",
        [
            (EMMA, "Hi Alex,\n\nWe'd love to have you for the design systems workshop in Stockholm. Would March 10–12 or March 17–19 suit you better?\n\nWarm regards,\nEmma"),
            (me, "Hi Emma,\n\nMarch 17–19 would be ideal. I'll book my flights once you confirm.\n\nAlex"),
            (EMMA, "Perfect, March 17–19 it is. I'll send the agenda next week."),
        ],
        b.ago(days=2, hours=2),
        gap_hours=5,
    )
    b.thread(
        "INBOX",
        "Mom's birthday",
        [(GRACE, "Hi! Mom turns 70 on the 14th. I was thinking of a family dinner at the lake house. Can you bring the photo album you made?\n\nLove,\nGrace\n\nSent from my iPhone")],
        b.ago(hours=2),
        unread_last=True,
        phase="after",
    )
    b.thread(
        "INBOX",
        "Usability test recordings",
        [(MAYA, "Hi Alex,\n\nThe recordings of the five sessions are in the shared folder. The summary is attached: the main issue is the password step, which three participants missed.\n\nMaya")],
        b.ago(days=2, hours=9),
        attach_first=("usability-summary.pdf", PDF, "application/pdf"),
    )
    b.thread(
        "INBOX",
        "Climbing on Sunday",
        [
            (DAN, "Gym at 10 on Sunday? Leo is in too."),
            (me, "I'm in. I'll bring the new rope."),
        ],
        b.ago(days=3, hours=1),
        gap_hours=3,
    )
    b.notice(
        "INBOX",
        CLOUD,
        "Your Cobalt Cloud verification code",
        "Your verification code is 482913.\n\nIt expires in 10 minutes. If you didn't try to sign in, you can ignore this email.",
        b.ago(hours=1),
    )
    b.notice(
        "INBOX",
        AIR,
        "Your booking confirmation: SFO to ARN, March 16",
        "Thank you for booking with Skyward Air.\n\nBooking reference: K7Q2ZP\nSan Francisco (SFO) to Stockholm (ARN), March 16, 6:40 PM\n\nYour e-ticket is attached.",
        b.ago(days=1, hours=3),
        attachment=("e-ticket-K7Q2ZP.pdf", PDF, "application/pdf"),
    )
    b.thread(
        "INBOX",
        "Photos from the trip",
        [(LEO, "Finally sorted the photos from Big Sur. The one of the bridge at sunset is my favorite.\n\nLeo")],
        b.ago(days=4, hours=5),
    )

    # --- Todo and Waiting ------------------------------------------------

    b.thread(
        "Todo",
        "Engagement letter for 2027",
        [(NORA, "Hi Alex,\n\nAttached is the engagement letter for next year. Could you sign it and send it back when you have a moment?\n\nThanks,\nNora")],
        b.ago(days=5),
        attach_first=("engagement-letter-2027.pdf", PDF, "application/pdf"),
    )
    b.thread(
        "Todo",
        "Invoice #2026-11: PO number needed",
        [(SAM, "Hi Alex, our finance team needs a PO number on the November invoice. I've requested one, it should be PO-88412. Could you send a corrected invoice?\n\nThanks!")],
        b.ago(days=6, hours=3),
    )
    b.thread(
        "Todo",
        "Agenda for the workshop",
        [(EMMA, "Here is a first draft of the agenda. Could you check the timing of your sessions on day 2?")],
        b.ago(days=8),
    )
    b.thread("Waiting", "Quote for the shelves", [(me, "Hi Jonas,\n\nCould you ask the carpenter for a quote for the shelves? Oak if possible.\n\nThanks,\nAlex")], b.ago(days=4), to=JONAS, sent_folder="Waiting")
    b.thread("Waiting", "Deposit for the cabin", [(me, "Hi Leo, I sent the deposit for the cabin. Could you send me your half when you can?")], b.ago(days=6), to=LEO, sent_folder="Waiting")
    b.thread("Waiting", "Access to the analytics dashboard", [(me, "Hi Maya, could you give me read access to the analytics dashboard? I'd like to check the drop-off on the setup step.")], b.ago(days=2), to=MAYA, sent_folder="Waiting")

    # --- Newsletter and Paperwork -----------------------------------------

    letters = [
        (SLOWWEB, ["Why fast software feels calm", "The case for fewer notifications", "Building for decades, not quarters", "Plain text is a feature"]),
        (DIGEST, ["10 type pairings for 2027", "Inside the redesign of a transit map", "Color systems that scale", "The return of the grid"]),
        (FIELD, ["Notes from the Sierra", "A week without a phone", "Walking the coast trail"]),
        (BOOKS, ["Your winter reading list", "20% off design books this week", "New: The Craft of Interfaces"]),
        (COFFEE, ["New harvest from Huila", "Brewing guide: the perfect pour-over"]),
    ]
    i = 0
    for sender, subjects in letters:
        for s in subjects:
            i += 1
            b.newsletter("Newsletter", sender, s, f"{s}.\n\nThis week's issue, with three stories we loved and one we disagreed with.\n\nThanks for reading.", b.ago(days=1 + i * 2.3, hours=i), seen=i > 3)

    papers = [
        (BANK, "Your November statement is ready", "Your statement for November is attached.", "statement-2026-11.pdf"),
        (BANK, "Your October statement is ready", "Your statement for October is attached.", "statement-2026-10.pdf"),
        (ENERGY, "Your Brightline Energy bill: $86.40", "Your bill for October is $86.40, due on November 28. It will be paid automatically.", "bill-2026-10.pdf"),
        (ENERGY, "Your Brightline Energy bill: $71.15", "Your bill for September is $71.15. It was paid automatically.", "bill-2026-09.pdf"),
        (CLOUD, "Invoice for your Cobalt Cloud subscription", "Thank you for your payment of $12.00.", "cobalt-invoice-1187.pdf"),
        (AIR, "Your receipt: K7Q2ZP", "Your payment of $1,184.20 has been received.", "receipt-K7Q2ZP.pdf"),
    ]
    for n, (sender, subject, text, name) in enumerate(papers):
        b.notice("Paperwork", sender, subject, text, b.ago(days=3 + n * 9), attachment=(name, PDF, "application/pdf"))

    # --- Archive: two years of ordinary mail --------------------------------

    things = [
        "the brand guidelines", "the kickoff", "the moodboard", "the budget", "the April invoice",
        "the user interviews", "the new logo", "the offsite", "the contract", "the prototype",
        "the roadmap", "the photos", "the trip", "the apartment", "the conference talk", "the website",
    ]
    patterns = ["Quick question about {}", "Notes on {}", "Thanks for {}", "Following up on {}", "About {}"]
    lines = [
        "Thanks for your message.", "I had a look this morning.", "Let's discuss it on Thursday.",
        "That sounds good to me.", "I've shared the file with you.", "Could you check the numbers?",
        "Talk soon.", "I'll get back to you tomorrow.", "Great work on this.", "No rush on this one.",
    ]
    for n in range(140):
        who = b.rng.choice(PEOPLE)
        subject = b.rng.choice(patterns).format(b.rng.choice(things)).capitalize()
        turns = []
        for t in range(b.rng.choice([1, 2, 2, 3])):
            text = " ".join(b.rng.sample(lines, 3))
            turns.append((who if t % 2 == 0 else me, f"Hi {('Alex' if t % 2 == 0 else who.name.split()[0])},\n\n{text}"))
        # The first ones are recent and still in the Inbox, read: an Inbox
        # is rarely empty, and a full list shows the layout better.
        if n < 9:
            b.thread("INBOX", subject, turns, b.ago(days=4.6 + n * 0.9), gap_hours=4)
        else:
            b.thread("Archive", subject, turns, b.ago(days=12 + n * 5.1), gap_hours=6)
    for n in range(40):
        sender, subjects = b.rng.choice(letters)
        b.newsletter("Newsletter", sender, b.rng.choice(subjects), "An earlier issue.", b.ago(days=40 + n * 9))

    # --- Arrivals, screened by NiceMailer -----------------------------------

    b.thread(
        "INBOX",
        "Speaking at our spring retreat?",
        [(HANNAH, "Hi Alex,\n\nI organize a small retreat for product teams in Napa in April, and a friend recommended your talk on calm interfaces. Would you be open to speaking? I'd be happy to share the details.\n\nBest,\nHannah")],
        b.ago(hours=5),
        unread_last=True,
        phase="after",
    )
    b.notice(
        "INBOX",
        BANK_FAKE,
        "Unusual sign-in: verify your account now",
        "We detected an unusual sign-in to your Calder Bank account.\n\nTo avoid suspension, verify your identity within 24 hours:\nhttps://calderbank-secure-verify.top/login\n\nCalder Bank Security",
        b.ago(hours=3),
        seen=False,
        phase="after",
        forged=True,
    )
    b.newsletter("INBOX", PIXEL, "Live webinar: AI for design teams", "Join us on Thursday for a live webinar.", b.ago(hours=9), seen=False, phase="after")
    b.newsletter("INBOX", NOTABLY, "Your trial ends in 3 days", "Upgrade now to keep your notes in sync.", b.ago(hours=14), seen=False, phase="after")
    b.notice("INBOX", LOOP, "Riley wants to connect with you", "Riley Park, Product Manager at Orbit, wants to connect.", b.ago(hours=20), seen=False, phase="after")
    b.newsletter("INBOX", SUMMIT, "Last call: early-bird tickets", "Early-bird tickets for the Design Systems Summit end on Friday.", b.ago(days=1, hours=2), seen=False, phase="after")
    return b.box
