import type { Response } from 'express';

export const ok = (res: Response, data: unknown, status = 200) => res.status(status).json({ success: true, data });
export const fail = (res: Response, status: number, message: string, errors: unknown[] = []) =>
  res.status(status).json({ success: false, message, errors });
