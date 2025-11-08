import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string()
    .min(3, "Full name must be at least 3 characters long")
    .max(100, "Full name too long"),
  
  email: z.string()
    .email("Please enter a valid email address"),
  
  password: z.string()
    .min(6, "Password must be at least 6 characters"),
  
  gender: z.enum(["male", "female"], {
    required_error: "Please select your gender",
  }),
  
  community: z.string().min(1, "Community is required"),
  
  hobbies: z.string().optional(),
  
  profilePicture: z.string()
    .url("Profile picture must be added!")
    .optional(),
  
  bio: z.string()
    .min(10, "Bio must be at least 10 characters long")
    .max(500, "Bio cannot exceed 500 characters"),
});

