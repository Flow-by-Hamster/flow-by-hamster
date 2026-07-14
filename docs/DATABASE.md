# Database

## Purpose

Describe every business entity in Flow.

The database is designed around business operations, not UI screens.

---

## Entity Relationship Overview

Workspace

↓

Business

↓

Customers

↓

Bookings

↓

Services

↓

Automations

↓

Communications

↓

Analytics

---

## Business

Purpose

Represents a company operating inside Flow.

Fields

- name
- slug
- timezone
- owner
- branding

Relationships

Workspace

↓

Business

↓

Customers

↓

Services

↓

Bookings

---

## Customer

Purpose

Represents a client of a business.

Relationships

Business

↓

Customer

↓

Bookings

↓

Communications

↓

Analytics

---

## Booking

Purpose

Stores appointments.

Relationships

Customer

↓

Booking

↓

Service

↓

Automation

---

## Service

Purpose

A bookable service.

---

## Automation

Purpose

Stores automation workflows.

---

## Communication

Purpose

Stores every WhatsApp, Email and SMS interaction.

---

## Analytics

Purpose

Stores business intelligence metrics.

---

## AI

Purpose

Stores AI conversations, memory, generated insights and recommendations.

---

## Security Model

Workspace Isolation

↓

Business Isolation

↓

Role Permissions

↓

Ownership

↓

Audit Logs