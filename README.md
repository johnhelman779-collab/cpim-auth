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

## Status

v0.1.1 — active development (JWT login / validate).

## Roadmap

See [ROADMAP.md](ROADMAP.md) for this service’s 3-year track.
