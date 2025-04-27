'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "../forms/PatientForm";

interface CustomProps {
  control: Control<any>
  fieldType: FormFieldType
  name: string,
  lable?: string,
  placeholder?: string,
  iconSrc?: string,
  iconAlt?: string,
  disabled?: boolean,
  dateFormat?: string,
  showTimeSelect?: boolean,
  children?: React.ReactNode,
  renderSkeleton?: (field: any) => React.ReactNode,
}

const CustomFormFiled = ({control, fieldType, name, lable}: CustomProps) => {
  return (
    <div>
      <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex-1">
              {fieldType !== FormFieldType.CHECKBOX && lable(
                <FromLable>
                  {lable}
                </FromLable>
              )}
            </FormItem>
          )}
        />
    </div>
  )
}

export default CustomFormFiled