"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormFiled from "../common/CustomFormFiled";
import { Input } from "postcss";

// enum
export enum FormFieldType{
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phonmeInput',
  CHECKBOX = 'çheckbox',
  DATE_PIKER = 'datePicker',
  SELECET = 'select',
  SKELETON = 'skeleton',
};

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function PatientForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there</h1>
          <p className="text-dark-700">Schedule your first appointment</p>
        </section>

        <CustomFormFiled 
         control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          lable="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="User"
         />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default PatientForm;
