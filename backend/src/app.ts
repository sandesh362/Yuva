import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { env } from './config/env.js';
import { errorHandler } from './middleware/error.middleware.js';
import routes from './routes/index.js';

export const app = express();
const allowedOrigins = env.clientUrl.split(',').map((x) => x.trim());
app.use(helmet()); app.use(cors({ origin(origin, callback) { if (!origin || allowedOrigins.includes(origin)) return callback(null, true); callback(new Error('Origin not allowed by CORS')); }, credentials: true }));
app.use(express.json({ limit: '1mb' })); app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 300, standardHeaders: 'draft-8', legacyHeaders: false }));
app.use('/api', routes); app.use(errorHandler);
