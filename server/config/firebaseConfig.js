// config/firebase.js
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import serviceAccount from "../firebase-credential.json" with { type: 'json' };

try {
  initializeApp({credential:cert(serviceAccount)})
} catch (error) {
  console.error(
    "CRITICAL ERROR: Firebase Admin SDK initialization failed:",
    error
  );
  // If initialization fails, the script cannot proceed.
  process.exit(1);
}


// Get the initialized Firestore instance
// This method is available after admin.initializeApp()
const db = getFirestore()

// Export the initialized Firestore instance
export { db };
