import { z } from "zod";
export const formSchema = z.object({
  bannerImage: z
    .instanceof(File, { message: "Please upload a banner image" })
    .refine((file) => file.size <= 5000000, "File size must be less than 5MB")
    .refine(
      (file) =>
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          file.type
        ),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    ),
  websiteLink: z
    .string()
    .min(1, "Website link is required")
    .url("Please enter a valid URL"),
});

export type FormData = z.infer<typeof formSchema>;



