import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useEffect, useState } from "react";

export const useAuthListener = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user || null));
    return unsubscribe;
  }, []);

  return user;
};