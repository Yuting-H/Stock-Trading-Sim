// config/firebase.js
import admin from "firebase-admin"; // Import the Firebase Admin SDK

import serviceAccount from "../../stock-trading-sim-3000-firebase-adminsdk-fbsvc-ae82901ad7.json" with { type: 'json' };

// Check if a Firebase Admin app has already been initialized
// This prevents re-initialization errors in development
if (!admin.apps.length) {
  try {
    if (!serviceAccount) {
      // Fallback for GCP environments (like Cloud Functions, Cloud Run) where
      // credentials are automatically provided by the environment's service account.
      admin.initializeApp();
      console.log(
        "Firebase Admin SDK initialized using default GCP credentials."
      );
    } else {
      // Initialize with the service account key from .env (for local dev or other hosts)
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log(
        "Firebase Admin SDK initialized successfully with provided JSON."
      );
    }
  } catch (error) {
    console.error(
      "CRITICAL ERROR: Firebase Admin SDK initialization failed:",
      error
    );
    // If initialization fails, the script cannot proceed.
    process.exit(1);
  }
}

// Get the initialized Firestore instance
// This method is available after admin.initializeApp()
const db = admin.firestore();

// Export the initialized Firestore instance
export { db };
