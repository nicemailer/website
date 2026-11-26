---
title: AI and AI agents
description: Turn on the AI assistant, see what it can do, and connect Claude Desktop or Claude Code to your mailbox.
order: 8
---

AI is optional in NiceMailer. It is off until you turn it on, and every feature of the app works without it.

## Three rules

- **Nothing leaves without you.** Each AI call is started by you, on what you are looking at: the draft, the email open, the emails you marked. Nothing is sent in the background.
- **The AI suggests, you decide.** A corrected text shows its changes for you to accept; a suggested folder waits for your key. The AI never sends, moves or changes an email by itself.
- **An email is data, never an order.** A malicious email may try to give instructions to the AI. NiceMailer gives the AI no tool at all, and checks it before every call: an email cannot make it do anything.

## Turn it on

NiceMailer uses **Claude Code**, Anthropic's `claude` command-line tool, signed in with your own Claude subscription. NiceMailer stores no key and no password for it.

1. [Install Claude Code](https://docs.claude.com/en/docs/claude-code/overview) and sign in once by running `claude` in Terminal.
2. Open NiceMailer's settings file, `~/.config/nicemailer/config.toml`, and add:

   ```toml
   [ai]
   enabled = true
   ```

3. Save the file. NiceMailer reads it again by itself.

At every call, NiceMailer checks that the `claude` process it starts cannot run commands, browse the web, read files or use any other tool. If it could, the call is stopped before anything of yours is sent.

## What it can do

Press <kbd>a</kbd> on an email, or <kbd>⌃</kbd> <kbd>I</kbd> while writing, to open the AI menu.

**While you write**

- Proofread, improve the style, rephrase (more formal, friendlier, shorter, longer, clearer), translate: a reply into the language of the email you received, a new email into the language you choose.
- Write from notes: type three bullet points above the quote, and get a complete email. Facts missing from your notes are left as "[to complete]" rather than invented.
- Suggest a subject.
- Other wordings for a word or a passage you selected.

**On an email or a conversation**

- Summarize it, with the actions it asks of you.
- Suggest quick replies.
- Translate it into your language.
- Check whether it looks like a scam, from its content and from what NiceMailer knows of its sender.
- List its dates and appointments.
- Gather the sender's details: name, company, phone numbers, address.
- Summarize an attached PDF, Word document or text file.

**On several emails**

- In Quarantine, suggest a destination for each email; each row then shows the suggestion, and one key applies it.
- Elsewhere, suggest a folder for the emails you marked.

Every run is kept on your Mac for 30 days, with what was sent and what came back.

## Connect an AI agent

NiceMailer comes with an MCP server, which lets an AI app use your mailbox as a source: Claude Desktop, Claude Code, or any app that supports the Model Context Protocol. You can then ask it "what am I waiting for?", "find the invoice of the plumber", "summarize my exchanges with Alice this month", or "prepare a reply".

In NiceMailer, open the menu **NiceMailer › AI Agents**:

- **Connect to Claude Desktop** adds NiceMailer to Claude Desktop's settings. Restart Claude Desktop.
- **Copy Command for Claude Code** copies the command to paste in Terminal.
- **Copy MCP Configuration** copies the settings for another app.

### What an agent may do

An agent can search your email, read conversations and attachments, and prepare drafts, which you find in Drafts to review and send yourself. It **cannot send, move, mark, delete or unsubscribe**. These limits are enforced by NiceMailer's core, not by the agent, and are not a setting an agent could change. The core only answers apps signed by NiceMailer, and an agent cannot attach hidden or private files to a draft (`~/.ssh`, `.env`, `~/Library`…).

Keep in mind that the AI app sends what it reads to its own provider, under that provider's terms.
