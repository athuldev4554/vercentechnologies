import { z } from "zod";

export const contactSchema = z.object({
  firstname: z.string().trim().min(1, "Please enter your name."),
  email: z.string().trim().pipe(z.email("Please enter a valid email address.")),
  message: z.string().trim()
    .min(1, "Please tell us what you would like to build or integrate.")
    .max(5000, "Please keep your enquiry within 5,000 characters."),
});

export type ContactValues = z.infer<typeof contactSchema>;
