# cpim-auth

CPIM authentication service (login + JWT validation).

## Role

Issues and validates JWTs for the API gateway. Seed user: `admin` / `admin`.

## Run

```bash
npm install
npm run dev
```

Listens on `http://localhost:3001`.

## Endpoints

- `GET /health`
- `POST /auth/login` — `{ "username", "password" }`
- `GET /auth/validate` — `Authorization: Bearer <token>`

## Environment

- `PORT` (default `3001`)
- `JWT_SECRET` (default `cpim-dev-secret`)
