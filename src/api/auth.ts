import { api, setToken } from './client';
export type ApiUser = { _id: string; role: 'student' | 'business'; name: string; email: string; skills?: string[]; location?: { city?: string; locality?: string } };
export async function login(email: string, password: string) { const result = await api<{ token: string; user: ApiUser }>('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }); await setToken(result.token); return result.user; }
export async function currentUser() { return api<{ user: ApiUser }>('/auth/me'); }
