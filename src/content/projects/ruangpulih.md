---
title: RuangPulih
summary: A hybrid mobile app that helps students and young workers look after their mental health day to day, with journaling, habit tracking, doctor consultations, and an AI counselling chatbot.
year: 2026
role: System Architect
context: Mobile Hybrid Solution
team: Team of 6
tags: [System Architecture, Mobile, AI]
stack: [Flutter, Riverpod, Node.js, Express, MySQL, JWT, Gemini API]
order: 2
cover: ../../assets/projects/ruangpulih/screen-1.jpeg
screens:
  - ../../assets/projects/ruangpulih/screen-1.jpeg
  - ../../assets/projects/ruangpulih/screen-2.jpeg
  - ../../assets/projects/ruangpulih/screen-3.jpeg
links:
  - label: Repository
    href: https://github.com/ferdinandsetyawansetyawan-coder/RuangPulih
---

## The project

A hybrid mobile app that helps students and young workers aged 18 to 35 look after their mental health day to day, built around SDG 3. It grew out of our own survey, where respondents described anxiety, overthinking that cost them sleep, and a habit of keeping things to themselves, but said they would accept digital support if their privacy held.

## My impact

I owned the system architecture. I chose the stack layer by layer with a written reason for each: Flutter with Riverpod so one codebase serves web and mobile, Node and Express over MySQL because journal, habit and schedule data is relational, JWT with bcrypt to keep the User, Doctor and Admin roles genuinely separate, and the Gemini API behind the counselling chatbot. I also drew the use case model that fixed what each of those three roles can reach.

## What I learned

Deciding an architecture for a team of six meant every choice had to be defensible to the people who would build on it. I learned to write down why a technology was picked and not only which one, and that a boundary drawn early, like separating a doctor's access from a user's, saves far more work than it costs.
