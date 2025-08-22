

import { Account, Client } from 'react-native-appwrite';

const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!) // Your Appwrite Endpoint
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!) // Your Appwrite Project ID              
 .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!); // Set platform and version

export const account = new Account(client);