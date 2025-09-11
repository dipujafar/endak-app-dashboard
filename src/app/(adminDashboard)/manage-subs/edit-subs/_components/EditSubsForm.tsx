"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import AnimatedArrow from "@/animatedArrows/AnimatedArrow"

const formSchema = z.object({
  planName: z.string().min(1, "Plan name is required"),
  cost: z.string().min(1, "Cost is required"),
  topExposure: z.boolean(),
  featuredFlag: z.boolean(),
  analytics: z.boolean(),
  profileView: z.boolean(),
  showAvgRating: z.boolean(),
  planValidity: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function EditSubsForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      planName: "",
      cost: "",
      topExposure: false,
      featuredFlag: false,
      analytics: false,
      profileView: false,
      showAvgRating: false,
      planValidity: "",
    },
  })

  const watchedValues = watch()

  function onSubmit(values: FormData) {
    console.log(values)
  }

  function onCancel() {
    reset()
  }

  return (
    <Card className="w-full  bg-white shadow-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-xl font-semibold text-gray-900">Subscription Plan Editor</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          Configure plan details, features, and pricing
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-base font-medium text-gray-900">Plan Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="planName" className="text-sm text-gray-700">
                  Plan Name
                </Label>
                <Input
                  id="planName"
                  placeholder="Plan Name..."
                  className="bg-gray-50 border-gray-200"
                  {...register("planName")}
                />
                {errors.planName && <p className="text-sm text-red-600">{errors.planName.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="cost" className="text-sm text-gray-700">
                  Cost (Enter the plan price)
                </Label>
                <Input id="cost" placeholder="$0.00" className="bg-gray-50 border-gray-200" {...register("cost")} />
                {errors.cost && <p className="text-sm text-red-600">{errors.cost.message}</p>}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-medium text-gray-900">Features & Permissions</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                  <Label htmlFor="topExposure" className="text-sm text-[#003250BF] font-medium">
                    Top exposure
                  </Label>
                  <Switch
                    id="topExposure"
                    checked={watchedValues.topExposure}
                    onCheckedChange={(checked) => setValue("topExposure", checked)}
                  />
                </div>
                <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                  <Label htmlFor="featuredFlag" className="text-sm text-[#003250BF] font-medium">
                    Featured flag
                  </Label>
                  <Switch
                    id="featuredFlag"
                    checked={watchedValues.featuredFlag}
                    onCheckedChange={(checked) => setValue("featuredFlag", checked)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                  <Label htmlFor="analytics" className="text-sm text-[#003250BF] font-medium">
                    Analytics
                  </Label>
                  <Switch
                    id="analytics"
                    checked={watchedValues.analytics}
                    onCheckedChange={(checked) => setValue("analytics", checked)}
                  />
                </div>
                <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                  <Label htmlFor="profileView" className="text-sm text-[#003250BF] font-medium">
                    Profile View
                  </Label>
                  <Switch
                    id="profileView"
                    checked={watchedValues.profileView}
                    onCheckedChange={(checked) => setValue("profileView", checked)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                  <Label htmlFor="showAvgRating" className="text-sm text-[#003250BF] font-medium">
                    Show Avg. Rating
                  </Label>
                  <Switch
                    id="showAvgRating"
                    checked={watchedValues.showAvgRating}
                    onCheckedChange={(checked) => setValue("showAvgRating", checked)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-medium text-gray-900">Plan Validity</h3>
            <div className="space-y-2">
              <Label htmlFor="planValidity" className="text-sm text-gray-700">
                Add any year/month
              </Label>
              <Textarea
                id="planValidity"
                placeholder="Enter here..."
                className="bg-gray-50 border-gray-200 min-h-[80px]"
                {...register("planValidity")}
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1 bg-main-color hover:bg-purple-700 text-white font-medium py-3 group">
              UPDATE <AnimatedArrow />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 bg-transparent "
            >
              CANCEL <AnimatedArrow />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
