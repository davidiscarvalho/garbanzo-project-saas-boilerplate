# garbanzo-project-saas-boilerplate
# SaaS Boilerplate

Repo boilerplate for a full-stack SaaS application.

## Structure
- `frontend/` — React app
- `backend/` — FastAPI backend
- `infra/` — Infrastructure (Postgres, env configs)

## Services
- React frontend
- FastAPI backend
- PostgreSQL database

## Setup
Clone the repo, copy `.env.example` to `.env` in each folder, and run:
```bash	
docker-compose up --build


******************************************************************************************************************************

## General:
	•	Use a single monorepo with three top-level folders: frontend, backend, and infra.
	•	Include a docker-compose.yml file to run all services (React frontend, FastAPI backend, Postgres database).
	•	Include a .env.example file for each service to define necessary environment variables.

## Frontend (frontend):
	•	Stack: React (with basic router and component structure).
	•	Pages to include:
	•	Landing page (placeholder hero section + CTA).
	•	Privacy policy page.
	•	Pricing page (fetch plans from backend).
	•	Login page.
	•	Register page (users select a plan, integrate with Stripe Checkout).
	•	Password reset page (basic form, integrate with backend).
	•	Dashboard page (placeholder with “Welcome” message and recent credit activity).
	•	User details page (username, email, plan).
	•	Wallet page (credit balance, movement history).
	•	API documentation page (placeholder/static content).
	•	Navigation bar with:
	•	Username dropdown (linked to user detail page).
	•	Wallet balance display.
	•	Hamburger menu or sidebar.

## Backend (backend):
	•	Stack: FastAPI.
	•	Integrations:
	•	Stripe for subscription management and add-ons.
	•	SendGrid for transactional email (e.g., password reset).
	•	Features:
	•	Auth endpoints (register, login, password reset via email).
	•	Password reset flow using SendGrid (token-based).
	•	Stripe webhook handling for subscription updates.
	•	Credit wallet system:
	•	Track balance per user.
	•	Credit movement types: purchase, gift, promotion, refund.
	•	Debit movement type: usage.
	•	Endpoints:
	•	GET /user/credits – return balance.
	•	GET /user/credits/history – return credit movement log.
	•	POST /user/credits/movement – manually add a movement (for now).
	•	Placeholder endpoint to return plan details for frontend pricing page.

## Database (infra):
	•	Use Postgres.
	•	Include schema for:
	•	Users (id, email, password hash, plan, etc).
	•	Credit movements (user_id, amount, type, timestamp, description).
	•	Password reset tokens.
	•	Stripe customer and subscription references.
    