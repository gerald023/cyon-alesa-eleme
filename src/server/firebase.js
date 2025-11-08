import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzDuQwqbs6E_3LWMT8mnKlzMuQ75vLWL8",
  authDomain: "cyon-alesa.firebaseapp.com",
  projectId: "cyon-alesa",
  storageBucket: "cyon-alesa.firebasestorage.app",
  messagingSenderId: "905713187909",
  appId: "1:905713187909:web:0615fb968ae30a3b3f772c",
  measurementId: "G-W2ETXW02G3"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);


enableIndexedDbPersistence(db).catch((err) => {
  // fallback: ignore, depends on multi-tab usage
    console.warn("Persistence error:", err);
});

export default app;