"use client";

import type React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useRef } from "react";

const otpSchema = z.object({
  digit1: z.string().length(1, "Required").regex(/^\d$/, "Must be a digit"),
  digit2: z.string().length(1, "Required").regex(/^\d$/, "Must be a digit"),
  digit3: z.string().length(1, "Required").regex(/^\d$/, "Must be a digit"),
  digit4: z.string().length(1, "Required").regex(/^\d$/, "Must be a digit"),
  digit5: z.string().length(1, "Required").regex(/^\d$/, "Must be a digit"),
  digit6: z.string().length(1, "Required").regex(/^\d$/, "Must be a digit"),
});

type OtpFormValues = z.infer<typeof otpSchema>;

export function OtpVerification() {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
      digit5: "",
      digit6: "",
    },
  });

  const onSubmit = (values: OtpFormValues) => {
    const otp = Object.values(values).join("");
    console.log("[v0] OTP submitted:", otp);
    // Handle OTP verification logic here
  };

  const handleInputChange = (index: number, value: string) => {
    if (value.length === 1 && /^\d$/.test(value)) {
      // Move to next input
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // @ts-ignore
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Purple Gradient with Logo */}
      <div className="flex-1 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex flex-col items-center justify-center relative">
        {/* Main Logo */}
        <div className="flex items-center gap-4">
          {/* Location Pin Icon with C */}
          <div className="relative">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center relative">
                <span className="text-white text-3xl font-bold">C</span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-purple-600"></div>
              </div>
            </div>
          </div>

          {/* Arabic Text */}
          <div className="text-right">
            <h1
              className="text-6xl font-bold text-gray-800"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              عندك
            </h1>
          </div>
        </div>
      </div>

      {/* Right Side - OTP Verification Form */}
      <div className="flex-1 bg-gray-50 flex flex-col items-center justify-center px-12">
        {/* Top Logo */}
        <div className="absolute top-8 right-8 flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">C</span>
          </div>
          <span
            className="text-2xl font-bold text-gray-800"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            عندك
          </span>
        </div>

        {/* OTP Verification Form */}
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Verify Email</h2>
            <p className="text-gray-600">
              Please enter the otp we have sent you in your email.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* OTP Input Fields */}
              <div className="flex justify-center gap-3">
                {(
                  [
                    "digit1",
                    "digit2",
                    "digit3",
                    "digit4",
                    "digit5",
                    "digit6",
                  ] as const
                ).map((fieldName, index) => (
                  <FormField
                    key={fieldName}
                    control={form.control}
                    name={fieldName}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            maxLength={1}
                            className="w-12 h-12 text-center text-lg font-semibold border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, "");
                              field.onChange(value);
                              handleInputChange(index, value);
                              // Store ref after onChange
                              inputRefs.current[index] = e.target;
                            }}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              {/* Display form errors */}
              <div className="text-center">
                {Object.values(form.formState.errors).some(
                  (error) => error
                ) && (
                  <p className="text-red-500 text-sm">
                    Please fill in all OTP digits
                  </p>
                )}
              </div>

              {/* Verify Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-medium text-base"
              >
                Verify Email
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
