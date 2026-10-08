---
title: Tolongin Marketplace
summary: A two-sided marketplace where one account can both offer and hire freelance services across Indonesia, with escrow payments released only after the buyer approves the work.
year: 2026
role: Backend Developer
context: Software Architecture
team: Team of 5
tags: [Backend, System Design]
stack: [NestJS, Prisma, MySQL, State Machine]
featured: true
order: 1
cover: ../../assets/projects/tolongin/cover.png
links:
  - label: Repository
    href: https://github.com/spzhrrr/tolongin-marketplace-fullstack
---

## The project

A two-sided marketplace where a single account can both offer freelance services and hire for them, covering digital work and physical services across Indonesia. Payment is held in escrow and released only once the buyer approves the delivered work, which gives two strangers a concrete reason to trust each other in a transaction.

## My impact

I worked on the back end, built in NestJS over Prisma and MySQL across sixteen feature modules. The piece I care about most is the order lifecycle. Rather than scattering permission checks through the code, we modelled it as an explicit state machine, so an order can only move `WAITING_CONFIRMATION → PAID → WAITING_REVIEW → COMPLETED`, and the domain itself rejects any other jump.

## What I learned

This was the first time I chose an architecture on purpose instead of letting one emerge. Splitting every module into Controller → Service → Domain → Repository taught me that a design pattern is only worth applying when it answers a problem the domain actually raised.
