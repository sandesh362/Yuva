import type { ErrorRequestHandler } from 'express';
import { env } from '../config/env.js';

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);
  const status = err.name === 'ValidationError' ? 400 : err.code === 11000 ? 409 : 500;
  res.status(status).json({ success: false, message: status === 500 ? 'Unexpected server error' : err.message, errors: env.production ? [] : (err.errors ? Object.values(err.errors).map((e: any) => e.message) : []) });
};
