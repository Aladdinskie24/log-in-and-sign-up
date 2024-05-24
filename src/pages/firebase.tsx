// src/firebase.tsx
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDCB8wVvkLSl9RG7MsRpMSv4mVLg-w0t0",
  authDomain: "it36-cagubcub.firebaseapp.com",
  projectId: "it36-cagubcub",
  storageBucket: "it36-cagubcub.appspot.com",
  messagingSenderId: "147254941419",
  appId: "1:147254941419:web:22bfb85ee7e11b102910ae",
  measurementId: "G-NE5MP281GX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances
