import * as SecureStore from 'expo-secure-store';

const tokenKey = 'yuvaconnect.access-token';
const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export async function getToken() { return SecureStore.getItemAsync(tokenKey); }
export async function setToken(token: string) { return SecureStore.setItemAsync(tokenKey, token); }
export async function clearToken() { return SecureStore.deleteItemAsync(tokenKey); }

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  if (!baseUrl) throw new Error('EXPO_PUBLIC_API_URL is not configured. Copy .env.example to .env and set the API address.');
  const token = await getToken();
  const response = await fetch(`${baseUrl}${path}`, { ...options, headers: { Accept: 'application/json', ...(options.body ? { 'Content-Type': 'application/json' } : {}), ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers } });
  const payload = await response.json();
  if (!response.ok || !payload.success) throw new Error(payload.message ?? 'Request failed');
  return payload.data as T;
}
