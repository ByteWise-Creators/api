import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtyMfXxArxpN8XFQfwK0SDpRaAXdxXhXU",
  authDomain: "bytewise-creators.firebaseapp.com",
  projectId: "bytewise-creators",
  storageBucket: "bytewise-creators.appspot.com",
  messagingSenderId: "420488489719",
  appId: "1:420488489719:web:07e8a8b72beff6963e01f2",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);