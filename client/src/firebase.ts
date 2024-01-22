// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-73df8.firebaseapp.com",
  projectId: "real-estate-73df8",
  storageBucket: "real-estate-73df8.appspot.com",
  messagingSenderId: "932589117693",
  appId: "1:932589117693:web:132f62e999d9853f715e94",
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const app = initializeApp(firebaseConfig);
