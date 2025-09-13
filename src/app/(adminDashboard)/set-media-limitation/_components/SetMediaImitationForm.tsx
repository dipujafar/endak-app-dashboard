"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedArrow from "@/animatedArrows/AnimatedArrow";

const formSchema = z.object({
  photos: z.string().min(1, "Please select a photo limit"),
  videos: z.string().min(1, "Please select a video limit"),
});

export function SetMediaImitationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      photos: "4",
      videos: "1",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  function onCancel() {
    form.reset();
    // Handle cancel action here
  }

  return (
    <div>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gray-900">
          Set Media Upload Limitation
        </CardTitle>
        <p className="text-sm font-medium text-gray-700 mt-2">
          Upload Capacity Settings
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="photos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Photos
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-gray-50 border-gray-200">
                          <SelectValue placeholder="Select limit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, index) => (
                          <SelectItem
                            key={index + 1}
                            value={(index + 1).toString()}
                          >
                            {(index + 1).toString()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="videos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Videos
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-gray-50 border-gray-200">
                          <SelectValue placeholder="Select limit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, index) => (
                          <SelectItem
                            key={index + 1}
                            value={(index + 1).toString()}
                          >
                            {(index + 1).toString()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                className="flex-1 bg-main-color  hover:bg-purple-700 text-white font-medium group"
              >
                UPDATE
                <AnimatedArrow />
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="flex-1 bg-white border-gray-400 text-gray-700 hover:bg-gray-50 font-medium group"
              >
                CANCEL <AnimatedArrow />
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </div>
  );
}
