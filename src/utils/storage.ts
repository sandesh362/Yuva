import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

/**
 * Cross-platform key-value storage for small secrets like auth tokens.
 *
 * `expo-secure-store` has no web implementation — calling
 * `SecureStore.getItemAsync()` on web crashes with
 * `ExpoSecureStore.default.getValueWithKeyAsync is not a function`.
 *
 * So: use SecureStore on iOS/Android (encrypted keychain/keystore) and
 * `window.localStorage` on web. The async API matches SecureStore, so this
 * is a drop-in replacement anywhere in the app.
 */

function useLocalStorage(): boolean {
  return (
    Platform.OS === 'web' &&
    typeof window !== 'undefined' &&
    typeof window.localStorage !== 'undefined'
  );
}

export async function getItemAsync(key: string): Promise<string | null> {
  if (useLocalStorage()) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }
  return SecureStore.getItemAsync(key);
}

export async function setItemAsync(key: string, value: string): Promise<void> {
  if (useLocalStorage()) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Storage full or blocked (private mode) — token just won't persist.
    }
    return;
  }
  await SecureStore.setItemAsync(key, value);
}

export async function deleteItemAsync(key: string): Promise<void> {
  if (useLocalStorage()) {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Key missing or storage blocked — nothing to do.
    }
    return;
  }
  await SecureStore.deleteItemAsync(key);
}
