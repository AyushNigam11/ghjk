import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2abPqLMJKy2lHs-5O62VkzHtU8H4rSYs",
  authDomain: "clone-41401.firebaseapp.com",
  projectId: "clone-41401",
  storageBucket: "clone-41401.appspot.com",
  messagingSenderId: "614731207835",
  appId: "1:614731207835:web:874d5dfdb36972eb15e23e",
  measurementId: "G-SRR5N5LN11",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
