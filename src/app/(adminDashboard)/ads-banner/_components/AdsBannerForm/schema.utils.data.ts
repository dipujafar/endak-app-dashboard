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

// utils functions

export const handleDrag = (
  e: React.DragEvent,
  setDragActive: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();
  e.stopPropagation();
  if (e.type === "dragenter" || e.type === "dragover") {
    setDragActive(true);
  } else if (e.type === "dragleave") {
    setDragActive(false);
  }
};

export const handleDrop = (
  e: React.DragEvent,
  setDragActive: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>,
  form: any
) => {
  e.preventDefault();
  e.stopPropagation();
  setDragActive(false);

  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    form.setValue("bannerImage", file);
    form.trigger("bannerImage");
  }
};

export const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>, form: any) => {
  if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    setSelectedFile(file);
    form.setValue("bannerImage", file);
    form.trigger("bannerImage");
  }
};
