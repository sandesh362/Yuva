import type { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';
import { User } from '../models/index.js';
import { fail } from '../utils/api.js';
import { verifyToken } from '../utils/jwt.js';

export interface AuthRequest extends Request { user?: { id: string; role: 'student' | 'business' } }

export async function authenticateUser(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.replace(/^Bearer\s+/i, '');
    if (!token) return fail(res, 401, 'Authentication token is required');
    const payload = verifyToken(token);
    if (!Types.ObjectId.isValid(payload.sub)) return fail(res, 401, 'Invalid authentication token');
    const user = await User.findById(payload.sub).select('_id role');
    if (!user) return fail(res, 401, 'Account no longer exists');
    req.user = { id: user.id, role: user.role };
    next();
  } catch { return fail(res, 401, 'Invalid or expired authentication token'); }
}

export const requireRole = (...roles: Array<'student' | 'business'>) => (req: AuthRequest, res: Response, next: NextFunction) =>
  !req.user ? fail(res, 401, 'Authentication token is required') : roles.includes(req.user.role) ? next() : fail(res, 403, 'You do not have permission for this action');
