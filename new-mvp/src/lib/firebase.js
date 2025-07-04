// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-msg-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
