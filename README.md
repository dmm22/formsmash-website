# FormSmash Website

Marketing website for FormSmash.

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4
- React Router 7

## Setup

```bash
npm install
cp .env.example .env.development
npm run dev
```

## Environment

| Variable | Description |
| --- | --- |
| `VITE_API_BASE_URL` | Backend API base URL (see `.env.example`) |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
