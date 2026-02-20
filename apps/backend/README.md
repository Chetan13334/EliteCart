# EliteCart Backend

## Auth API
- Base URL: `http://localhost:5000`
- Versioned API prefix: `/api/v1`
- Auth routes prefix: `/api/v1/auth`

## Endpoints
- `POST /api/v1/auth/signup`
- `POST /api/v1/auth/signin`
- `POST /api/v1/auth/refresh`
- `POST /api/v1/auth/signout`
- `POST /api/v1/auth/signout-all` (requires Bearer access token)
- `GET /api/v1/auth/me` (requires Bearer access token)

## MongoDB Atlas Setup
1. Create a MongoDB Atlas project and cluster.
2. Create a database user with read/write access.
3. In Network Access, allow your current IP (and deployment IPs).
4. Copy your connection string and place it in `MONGODB_URI`.
5. URL-encode the password if it contains special characters.

## Environment Variables
Create `apps/backend/.env` from `apps/backend/.env.example`.

Required:
- `MONGODB_URI`
- `JWT_ACCESS_SECRET`
- `JWT_REFRESH_SECRET`

Recommended:
- `CLIENT_ORIGIN` (supports comma-separated values)
- `MONGODB_DB_NAME`
- `MONGODB_MAX_POOL_SIZE`
- `MONGODB_SERVER_SELECTION_TIMEOUT_MS`
- `MONGODB_SOCKET_TIMEOUT_MS`

## Frontend Integration Notes
- Backend sets refresh token in an `httpOnly` cookie.
- Frontend must call auth endpoints with credentials enabled:
  - `fetch`: `{ credentials: "include" }`
  - `axios`: `{ withCredentials: true }`
- Access token is returned in JSON and should be sent as:
  - `Authorization: Bearer <accessToken>`

## Run
From repo root:

```bash
npm run backend
```

Health check:

```bash
GET /health
```
