import 'dotenv/config';

const value = (key: string, fallback?: string) => {
  const found = process.env[key] ?? fallback;
  if (!found) throw new Error(`Missing required environment variable: ${key}`);
  return found;
};

export const env = {
  port: Number(process.env.PORT ?? 5000),
  mongoUri: value('MONGODB_URI'),
  jwtSecret: value('JWT_SECRET'),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:8081',
  production: process.env.NODE_ENV === 'production',
};
