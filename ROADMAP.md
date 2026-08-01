# cpim-auth roadmap

CPIM authentication service. Part of the workspace [3-year roadmap](../ROADMAP.md) (CPIM-first).

## This repo’s track

| Period | Focus | Status |
|--------|--------|--------|
| **Y1Q1** | PostgreSQL + migrations for users | `planned` |
| **Y1Q2** | Password hashing, refresh tokens, roles (`operator` / `engineer` / `admin`) | `planned` |
| **Y3Q1** | Container image / secrets for JWT keys | `planned` |
| **Y3Q4** | SSO (OIDC) against a test IdP | `planned` |

## Consumed by

- `cpim-api-api` (validate + login proxy)
- `cpim-ui` (login UX)

## Notes

Update status here when a milestone ships; keep the master roadmap in sync.
