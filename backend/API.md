# API reference

All protected endpoints require `Authorization: Bearer <token>`. Successful responses are `{ success: true, data }`.

| Method | Endpoint | Role | Purpose |
|---|---|---|---|
| POST | `/api/auth/register`, `/api/auth/login` | Public | Account and token |
| GET/PATCH | `/api/auth/me`, `/api/auth/profile` | Any | Current profile |
| GET/POST | `/api/gigs` | Public/Business | Discover or create gigs |
| GET/PATCH/DELETE | `/api/gigs/:id` | Public/Owner | Gig details/edit/delete |
| POST | `/api/gigs/:id/publish|pause|close|apply|save` | Business/Student | Gig actions |
| GET | `/api/business/gigs`, `/api/student/applications`, `/api/gigs/:id/applications` | Scoped | Work lists |
| PATCH | `/api/applications/:id/withdraw|shortlist|reject|select` | Scoped | Application workflow |
| GET/POST | `/api/engagements/*`, `/api/deliverables/*` | Scoped | Work and deliverables |
| POST | `/api/reviews`, `/api/support`, `/api/verification/submit` | Any | Reviews and support |
| GET | `/api/notifications`, `/api/conversations`, `/api/transactions` | Any | Inbox and payment status |

`GET /api/gigs` accepts `search`, `skills`, `category`, `minBudget`, `maxBudget`, `workType`, `city`, `locality`, `sort`, `page`, and `limit`. Gig creation needs title, description, category and a positive budget; application needs a proposal of at least 10 characters.
