import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Check if Firebase Analytics is supported and the window object is defined
if (isSupported(getAnalytics()) && typeof window !== "undefined") {
  // Initialize Firebase Analytics
  const analytics = getAnalytics(app);
}

// Export other Firebase modules
export const auth = getAuth(app);

export default function () {
  return <>Nothing is here!</>;
}
