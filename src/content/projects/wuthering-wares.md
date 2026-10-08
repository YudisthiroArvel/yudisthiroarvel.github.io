---
title: Wuthering Wares
summary: A Flutter e-commerce app themed around the game Wuthering Waves, running on its own Node.js and Express backend, with Google sign-in and an in-app admin role.
year: 2025
role: Mobile & Backend Developer
context: Mobile Programming
team: Solo, built end to end
tags: [Mobile, Backend]
stack: [Flutter, Node.js, Express, MySQL, JWT, Google OAuth]
order: 5
cover: ../../assets/projects/wuthering-wares/screen-1.png
screens:
  - ../../assets/projects/wuthering-wares/screen-1.png
  - ../../assets/projects/wuthering-wares/screen-2.png
  - ../../assets/projects/wuthering-wares/screen-3.png
  - ../../assets/projects/wuthering-wares/screen-4.png
  - ../../assets/projects/wuthering-wares/screen-5.png
  - ../../assets/projects/wuthering-wares/screen-6.png
---

## The project

A Flutter e-commerce app themed around the game Wuthering Waves, for browsing and buying resonator equipment and terminal supplies. It runs on its own Node.js and Express backend over MySQL, with a separate admin role that manages the whole catalogue from inside the same app.

## My impact

I built both sides: the Flutter client with its models, screens and service layer, and the Express API behind it. Authentication took the most time. Email and password sign-in sits alongside Google OAuth, and both issue a JWT bearer token that the app keeps in secure storage and attaches to every purchase request. The admin panel reuses that same role check rather than being a separate app.

## What I learned

Owning both the app and its API showed me how much of mobile development is really contract design between two codebases. I also learned to keep a service layer between the UI and the network, so that a change to an endpoint never reaches into a screen.
