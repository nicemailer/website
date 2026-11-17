"""The demo mailbox of the website's screenshots, in English and in French.

Everything here is invented: the people, the companies and their domains.
The mailbox is built so that each screenshot shows a feature at work:

- the Inbox: recent conversations with real people, some unread, flagged,
  with attachments, one where the owner wrote last ("→ Sam");
- a long conversation with quotes, signatures and "Sent from my iPhone",
  which the app folds away;
- Quarantine: new senders, among them a person, newsletters, and a forged
  email pretending to come from the owner's bank (DMARC fails);
- Todo, Waiting, Newsletter, Paperwork and Archive filled enough for the
  lists to look lived in.

`build_box(lang, now)` returns the messages, each with the server folder it is
appended to and the phase it belongs to: "history" (on the server before the
account is added, so it is not screened) or "after" (appended once the
account is organized: these are screened at arrival, as real new mail).
The same seed gives the same mailbox; only the dates follow `now`.
"""

from __future__ import annotations

import random
from dataclasses import dataclass, field
from email.message import EmailMessage
from email.utils import format_datetime, make_msgid
from datetime import datetime, timedelta

AUTHSERV = "mx.demo.test"

# A minimal valid PDF, for attachments.
PDF = (
    b"%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n"
    b"2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n"
    b"3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]>>endobj\n"
    b"trailer<</Root 1 0 R>>\n%%EOF\n"
)


@dataclass
class Mail:
    folder: str  # server folder: INBOX, Sent, Archive, Todo, Waiting, Newsletter, Paperwork
    phase: str  # "history" or "after"
    msg: EmailMessage
    date: datetime
    seen: bool = True
    flagged: bool = False


@dataclass
class Person:
    name: str
    addr: str
    signature: str = ""
    client: str = "Apple Mail (2.3826.400.131.1.6)"


@dataclass
class Box:
    me: Person
    mails: list[Mail] = field(default_factory=list)


def _auth(domain: str, ok: bool = True) -> str:
    if ok:
        return (
            f"{AUTHSERV}; dkim=pass header.d={domain}; spf=pass smtp.mailfrom={domain}; "
            f"dmarc=pass (p=REJECT) header.from={domain}"
        )
    return (
        f"{AUTHSERV}; dkim=none; spf=fail smtp.mailfrom=mail-relay.top; "
        f"dmarc=fail (p=REJECT) header.from={domain}"
    )


class Builder:
    def __init__(self, lang: str, now: datetime, me: Person | None = None):
        self.lang = lang
        self.now = now
        self.box = Box(me or Person("", ""))
        self.rng = random.Random(f"nicemailer-demo-{lang}")

    # -- low level -------------------------------------------------------

    def message(
        self,
        frm: Person,
        to: list[Person],
        subject: str,
        body: str,
        date: datetime,
        *,
        reply_to: EmailMessage | None = None,
        cc: list[Person] | None = None,
        html: str | None = None,
        attachments: list[tuple[str, bytes, str]] | None = None,
        robot: dict[str, str] | None = None,
        forged: bool = False,
    ) -> EmailMessage:
        m = EmailMessage()
        domain = frm.addr.split("@")[1]
        if frm is not self.box.me:
            m["Authentication-Results"] = _auth(domain, ok=not forged)
        m["From"] = f"{frm.name} <{frm.addr}>"
        m["To"] = ", ".join(f"{p.name} <{p.addr}>" for p in to)
        if cc:
            m["Cc"] = ", ".join(f"{p.name} <{p.addr}>" for p in cc)
        m["Subject"] = subject
        m["Date"] = format_datetime(date)
        m["Message-ID"] = make_msgid(domain=domain)
        if reply_to is not None:
            m["In-Reply-To"] = reply_to["Message-ID"]
            refs = (reply_to.get("References", "") + " " + reply_to["Message-ID"]).strip()
            m["References"] = refs
        if robot:
            for k, v in robot.items():
                m[k] = v
        else:
            m["X-Mailer"] = frm.client
        m["MIME-Version"] = "1.0"
        m.set_content(body)
        if html:
            m.add_alternative(html, subtype="html")
        for name, data, mime in attachments or []:
            maintype, subtype = mime.split("/")
            m.add_attachment(data, maintype=maintype, subtype=subtype, filename=name)
        return m

    def add(self, folder: str, msg: EmailMessage, date: datetime, *, phase="history", seen=True, flagged=False):
        self.box.mails.append(Mail(folder, phase, msg, date, seen, flagged))
        return msg

    def ago(self, hours: float = 0, days: float = 0, minutes: float = 0) -> datetime:
        return self.now - timedelta(hours=hours, days=days, minutes=minutes)

    # -- conversations ---------------------------------------------------

    def thread(
        self,
        folder: str,
        subject: str,
        turns: list[tuple[Person, str]],
        start: datetime,
        *,
        gap_hours: float = 3,
        to: Person | None = None,
        unread_last: bool = False,
        flagged: bool = False,
        quote: bool = True,
        attach_first: tuple[str, bytes, str] | None = None,
        phase: str = "history",
        sent_folder: str = "Sent",
        last_phase: str | None = None,
        last_at: datetime | None = None,
    ) -> list[EmailMessage]:
        """A conversation: each turn quotes the previous one, as mail clients do.

        The owner's turns go to Sent (or `sent_folder`), the others to
        `folder`. With `last_phase`, the last turn arrives in that phase;
        with `last_at`, at that date.
        """
        me = self.box.me
        other = to or next(p for p, _ in turns if p is not me)
        msgs: list[EmailMessage] = []
        date = start
        prev: EmailMessage | None = None
        prev_text = ""
        for i, (who, text) in enumerate(turns):
            if last_at is not None and i == len(turns) - 1:
                date = last_at
            body = text
            if who.signature:
                body += "\n\n-- \n" + who.signature
            if quote and prev is not None:
                intro = self.quote_intro(prev, date)
                quoted = "\n".join("> " + line if line else ">" for line in prev_text.splitlines())
                body += f"\n\n{intro}\n{quoted}\n"
            recipient = other if who is me else me
            subj = subject if prev is None else self.re(subject)
            atts = [attach_first] if (attach_first and i == 0) else None
            msg = self.message(who, [recipient], subj, body, date, reply_to=prev, attachments=atts)
            last = i == len(turns) - 1
            ph = last_phase if (last and last_phase) else phase
            if who is me:
                self.add(sent_folder if last else "Sent", msg, date, phase=ph)
            else:
                self.add(folder, msg, date, phase=ph, seen=not (last and unread_last), flagged=flagged and last)
            msgs.append(msg)
            prev, prev_text = msg, body
            date = date + timedelta(hours=gap_hours * (0.6 + self.rng.random()))
            # Never in the future: the last turn of a recent conversation
            # stays a few minutes before `now`.
            date = min(date, self.now - timedelta(minutes=12 - i))
        return msgs

    def re(self, subject: str) -> str:
        return subject if subject.lower().startswith("re:") else f"Re: {subject}"

    def quote_intro(self, prev: EmailMessage, date: datetime) -> str:
        who = prev["From"].split(" <")[0]
        d = datetime.strptime(prev["Date"][5:16], "%d %b %Y")
        if self.lang == "fr":
            mois = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
            return f"Le {d.day} {mois[d.month - 1]} {d.year}, {who} a écrit :"
        return f"On {d.strftime('%a, %b')} {d.day}, {d.year}, {who} wrote:"

    def newsletter(self, folder, sender: Person, subject, text, date, *, phase="history", seen=True, pixel=True):
        domain = sender.addr.split("@")[1]
        html = (
            f"<html><body style='font-family:Helvetica'><h1>{subject}</h1>"
            + "".join(f"<p>{p}</p>" for p in text.split("\n\n"))
            + f"<p><a href='https://{domain}/read'>Read more</a></p>"
            + (f"<img src='https://t.{domain}/o.gif?u=8f3a' width='1' height='1' alt=''>" if pixel else "")
            + "</body></html>"
        )
        msg = self.message(
            sender,
            [self.box.me],
            subject,
            text,
            date,
            html=html,
            robot={
                "List-Unsubscribe": f"<https://{domain}/unsubscribe?u=8f3a>, <mailto:unsubscribe@{domain}>",
                "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
                "Feedback-ID": f"campaign:{domain}",
                "Precedence": "bulk",
            },
        )
        return self.add(folder, msg, date, phase=phase, seen=seen)

    def notice(self, folder, sender: Person, subject, text, date, *, phase="history", seen=True, attachment=None, forged=False):
        msg = self.message(
            sender,
            [self.box.me],
            subject,
            text,
            date,
            attachments=[attachment] if attachment else None,
            robot={"Auto-Submitted": "auto-generated"},
            forged=forged,
        )
        return self.add(folder, msg, date, phase=phase, seen=seen)


def build_box(lang: str, now: datetime) -> Box:
    """The demo mailbox of a language."""
    if lang == "en":
        from content_en import fill
    elif lang == "fr":
        from content_fr import fill
    else:
        raise ValueError(lang)
    return fill(Builder, now)
