// src/models.js
import { v4 as uuidv4 } from "uuid";

// Base user model
export const createUserModel = (user) => ({
  id: uuidv4(),
  uid: user.uid,
  email: user.email,
  createdAt: new Date().toISOString(),
});

// Contestant profile model
export const createContestantProfile = (userId, data) => ({
  id: uuidv4(),
  userId,
  fullName: data.fullName,
  email: data.email,
  gender: data.gender,
  community: data.community,
  hobbies: data.hobbies,
  profilePicture: data.profilePicture || "",
  bio: data.bio || "",
  createdAt: new Date().toISOString(),
});

// Example order model (for future use)
export const createOrderModel = (userId, orderData) => ({
  id: uuidv4(),
  userId,
  items: orderData.items || [],
  total: orderData.total || 0,
  status: orderData.status || "pending",
  createdAt: new Date().toISOString(),
});
