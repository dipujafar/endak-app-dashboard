import { z } from "zod";

export const formSchema = z
  .object({
    bannerImage: z
      .instanceof(File, { message: "Please upload a banner image" })
      .refine((file) => file.size <= 5000000, "Image must be less than 5MB")
      .refine(
        (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
        "Only JPEG, PNG, and WebP images are allowed"
      ),
    websiteLink: z
      .string()
      .min(1, "Website link is required")
      .url("Please enter a valid URL")
      .max(500, "URL must be less than 500 characters"),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
  })
  .refine(
    (data) => {
      if (data.startDate && data.endDate) {
        return data.endDate >= data.startDate;
      }
      return true;
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  );

export type FormData = z.infer<typeof formSchema>;
