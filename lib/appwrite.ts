import { Account, Client, Databases } from 'react-native-appwrite';

// Create client in two steps so we can conditionally call setSelfSigned without TypeScript errors
export const client = new Client();
client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!) // Your Appwrite Endpoint
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!) // Your Appwrite Project ID
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM ?? 'expo'); // Set platform and version (fallback to 'expo')

// If you're running Appwrite locally with a self-signed cert, set
// EXPO_PUBLIC_APPWRITE_SELF_SIGNED=true in your env to enable this.
if (process.env.EXPO_PUBLIC_APPWRITE_SELF_SIGNED === 'true') {
  // react-native-appwrite typings may not include setSelfSigned; call it via any to avoid compile errors.
  (client as any).setSelfSigned?.(true);
}

export const account = new Account(client);

export const databases = new Databases(client);

export const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
export const HABITS_COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_HABITS_COLLECTION_ID!;

export const COMPLETIONS_COLLECTION_ID =
  process.env.EXPO_PUBLIC_COMPLETIONS_COLLECTION_ID!;
export interface RealtimeResponse {
  events: string[];
  payload: any;
}