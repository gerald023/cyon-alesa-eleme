import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { createContestantProfile, createUserModel } from "../models/models";
import { doc, setDoc } from "firebase/firestore";



export const signUp = async (email, password, profileData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user)

    // Create base user document
    const userDoc = createUserModel(user);
    await setDoc(doc(db, "users", user.uid), userDoc);

     // Create contestant profile document
    const profileDoc = createContestantProfile(user.uid, {
      fullName: profileData.fullName,
      email: user.email,
      gender: profileData.gender,
      community: profileData.community,
      hobbies: profileData.hobbies,
      profilePicture: profileData.profilePicture,
      bio: profileData.bio,
    });

    console.log(profileDoc)

    await setDoc(doc(db, "contestantProfiles", user.uid), profileDoc);

    return { user, profileDoc };
    
  } catch (error) {
    console.log(error)
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};


export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return "Password reset email sent!";
  } catch (error) {
    throw error;
  }
};


// ✅ Update password (must be logged in)
export const changePassword = async (newPassword) => {
  try {
    if (!auth.currentUser) throw new Error("No user logged in");
    await updatePassword(auth.currentUser, newPassword);
    return "Password updated successfully!";
  } catch (error) {
    throw error;
  }
};


// ✅ Log out
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};