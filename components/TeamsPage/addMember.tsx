"use client"
import React from "react";
import Image from "next/image";
import { nunitoSans } from "@/app/fonts/font";


import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast";
const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  role: z.enum(["Admin", "Analyst", "Inventory Manager"]),
  permissions: z.object({
    delete: z.boolean().optional(),
    edit: z.boolean().optional(),
  }),
})

type FormValues = z.infer<typeof formSchema>

const AddMember = () => {
  const [isAdmin, setIsAdmin] = useState(false)
 

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "Analyst",
      permissions: {
        delete: false,
        edit: false,
      },
    },
  })

  function onSubmit(values: FormValues) {
    console.log(values)
    // Here you would typically 
    toast.success("User created successfully!")
    
  }
  return (
    <div className=" rounded-md w-full bg-white flex flex-col items-center justify-center h-auto py-14 lg:px-[180px] md:px-10 px-9">
      <div className="flex items-center justify-center flex-col gap-y-2">
        <label className="flex items-center justify-center h-[80px] w-[80px] rounded-full bg-[#ECECEE] text-white cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            //   onChange={(e) => {
            //     const file = e.target.files[0];
            //     // Handle the file upload or preview here, e.g., by setting it to state
            //   }}
          />
          <Image src="/camera.svg" alt="Camera" width={40} height={40} />
        </label>

        <p
          className={`${nunitoSans.className} text-[14px] font-semibold text-[#4379EE]`}
        >
          Upload Photo
        </p>
      </div>

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-4xl w-full mx-auto  p-6 bg-white rounded-lg shadow-md">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select 
                onValueChange={(value) => {
                  field.onChange(value)
                  setIsAdmin(value === "Admin")
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Analyst">Analyst</SelectItem>
                  <SelectItem value="Inventory Manager">Inventory Manager</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-3">
          <FormLabel>Permissions</FormLabel>
          <FormField
            control={form.control}
            name="permissions.delete"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isAdmin}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Delete
                  </FormLabel>
                  <FormDescription>
                    Can delete items
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="permissions.edit"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isAdmin}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Edit
                  </FormLabel>
                  <FormDescription>
                    Can edit items
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full bg-[#4880FF] hover:bg-[#4880FF] text-white">Create User</Button>
      </form>
    </Form>
    </div>
  );
};

export default AddMember;
