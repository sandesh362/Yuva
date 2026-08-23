import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export const signToken = (userId: string) => jwt.sign({ sub: userId }, env.jwtSecret, { expiresIn: env.jwtExpiresIn } as jwt.SignOptions);
export const verifyToken = (token: string) => jwt.verify(token, env.jwtSecret) as { sub: string };
