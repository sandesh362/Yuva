# YuvaConnect API

Node 22+ and MongoDB are required. Copy `.env.example` to `.env`, set a real `JWT_SECRET`, then run:

```sh
npm install
npm run dev
npm run seed
```

Use `npm run build` for a production build and `npm start` to run it. The API health endpoint is `GET /api/health`.

Demo accounts (only for local demos): `student@yuvaconnect.demo` / `Demo@123` and `business@yuvaconnect.demo` / `Demo@123`.

The API is a REST modular monolith backed by MongoDB. It supports authentication, profile/verification, gigs/discovery/matching, applications, engagements/deliverables/payment simulation, reviews/portfolio, conversations/messages, notifications, saved items and support tickets. See [API.md](API.md) for endpoint reference.
