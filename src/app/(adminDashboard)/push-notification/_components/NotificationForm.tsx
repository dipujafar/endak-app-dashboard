"use client";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  titleEn: z.string().min(1, "English title is required"),
  titleAr: z.string().min(1, "Arabic title is required"),
  messageEn: z.string().min(1, "English message is required"),
  messageAr: z.string().min(1, "Arabic message is required"),

  targetAudience: z.string().min(1, "Please select a target audience"),
});

type FormData = z.infer<typeof formSchema>;

const targetAudienceOptions = [
  { value: "all", label: "All" },
  { value: "all-users", label: "All Users" },
  { value: "all-vendors", label: "All Vendors" },
  { value: "active-user", label: "Active User" },
  { value: "deactive-user", label: "Deactive User" },
  { value: "only-completed-profile", label: "Only Completed Profile" },
  { value: "guest-profile", label: "Guest Profile" },
];

export const NotificationForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titleEn: "",
      titleAr: "",
      messageEn: "",
      messageAr: "",
      targetAudience: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    form.reset();
  };

  return (
    <div>
      <div className="">
        <div className="pb-4">
          <h4 className="text-xl font-semibold text-foreground">
            Push Notifications
          </h4>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="titleEn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter English title"
                          className="bg-background border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="titleAr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Title (Arabic)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="أدخل العنوان بالعربية"
                          className="bg-background border-border text-right"
                          dir="rtl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="messageEn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter English message"
                          className="bg-background border-border resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="messageAr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Message (Arabic)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="أدخل الرسالة بالعربية"
                          className="bg-background border-border resize-none min-h-[120px] text-right"
                          dir="rtl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Target Audience
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background border-border z-50">
                        {targetAudienceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-main-color hover:bg-[#8c65ce] text-primary-foreground font-medium py-3 rounded-lg"
              >
                Send Now
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
