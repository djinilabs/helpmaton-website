---
title: "Agent Skills: Teach Your Agents to Use Their Tools Like Pros"
description: >
  Agent Skills are instruction blocks that teach your agents how to use their
  tools effectively—with step-by-step guidance, examples, and edge-case handling.
  Pick skills that match your integrations for smarter, more consistent results.
pubDate: "2026-02-13"
author: "Pedro Teixeira, founder and CEO"
image: "/images/robot-skills.png"
tags: ["Product", "Agent Skills", "Tools", "Getting Started"]
---

![Agent Skills](/images/robot-skills.png)

Your agent has access to Notion, or Zendesk, or document search—but sometimes it fumbles. It guesses how to use the tool, misses obvious edge cases, or gives you inconsistent results. Sound familiar? What if your agent didn't have to guess how to use its tools?

That's exactly what **Agent Skills** are for. In this post I'll walk you through what they are, how specific they get, and how you can use them so your agents work smarter with the tools you've already connected.

## What are Agent Skills?

Agent Skills are optional instruction blocks that teach your agent how to use its tools effectively. Think of them as a playbook or cheat sheet for a specific job: step-by-step guidance, real examples, and clear rules for "what to do when things go wrong."

The best part? You don't write these yourself. You pick from a catalog that matches the tools you've connected. Connect Notion, and you get Notion skills. Connect Zendesk, and you get Zendesk skills. The platform does the heavy lifting.

## How specific are they?

Skills aren't generic tips. They're built for **specific tools and workflows**. Here's how they break down by domain:

- **Analytics** – PostHog (marketing analytics, feature flags, events debugging), HubSpot (contacts, CRM)
- **Support** – Zendesk (tickets, customer context), Intercom (conversations)
- **Project management** – Linear (issues, sprints), Notion (knowledge base, project tracking), Todoist (tasks)
- **E-commerce** – Shopify (orders, products)
- **Sales & CRM** – HubSpot, Salesforce
- **Built-in tools** – Document search (FAQ assistant, research), web search (competitive intelligence), email (follow-ups, support replies), memory (context recall)

Each skill is tailored to that tool and that use case. So when you enable a Zendesk skill, your agent gets guidance that's about Zendesk tickets and customer context—not a one-size-fits-all blurb.

## The tool–skill connection (and why it matters)

Skills only show up when **all** the tools they need are enabled and connected. A Notion skill only appears if you've connected Notion. A PostHog skill only appears if you've connected PostHog. No clutter, no confusion.

That keeps your agent focused: it only gets instructions for tools it actually has. For you, it means no configuration overload. You connect what you need, then pick the matching skills. The platform handles the rest.

## What's inside a skill?

Without getting technical, here's what makes skills effective:

- **Step-by-step instructions** – When and how to use each tool, in order
- **Examples** – Sample requests and what a good response (and tool usage) looks like
- **Edge cases** – What to do when data is missing, results are empty, or something fails
- **Tool-specific guidance** – e.g. "use document search for FAQ-style questions" or "use PostHog events for funnel steps"

So your agent isn't just "allowed" to use a tool—it's taught how to use it well.

## How to use them

1. Open your agent's detail page
2. Go to **External tools** → **Skills**
3. Enable skills that match the tools you've connected (e.g. Notion, Linear, document search)
4. Your agent will use those skill instructions whenever it calls those tools

Skills are optional. Enable only what fits your agent's job. And when you export a workspace, skills are included—so your setups stay reproducible.

## Real-world scenarios

**Support agent** – You've connected Zendesk. You enable the Zendesk skill. Your agent handles tickets with better context, fewer mistakes, and clearer escalation when needed.

**Research agent** – You use document search and web search. You enable the document FAQ and web research skills. Your agent gives you more consistent summaries and citations, and knows when to search docs vs. the web.

**Product agent** – You've got Linear and Notion. You enable the Linear and Notion skills. Your agent does better issue triage, sprint planning, and project updates because it's following tool-specific playbooks.

## Wrap-up

Agent Skills make your agents smarter with their tools without you having to write long, complex instructions. Connect your integrations, pick the skills that match, and let the playbooks do the work.

If you want the full list of skills and tool requirements, check out the [Agent Skills documentation](https://github.com/djinilabs/helpmaton/blob/main/docs/agent-skills.md). And if you're new here, you can [create your first agent](https://app.helpmaton.com) and try a skill as soon as you've connected a matching tool.

Ready to get started? [Get started with Helpmaton](https://app.helpmaton.com).
