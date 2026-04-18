import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form";
import { Input, InputProps } from "./ui/input";
import { useFormContext } from "react-hook-form";

interface FormInputProps extends InputProps {
  name: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  description?: string;
}
export default function FormInput(props: FormInputProps) {
  const { name, label, placeholder, description, ...inputProps } = props;
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={props?.defaultValue}
      render={({ field, fieldState }) => (
        <FormItem>
          {label && (
            <FormLabel className={fieldState.error ? "text-destructive" : ""}>
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Input placeholder={placeholder} {...field} {...inputProps} />
          </FormControl>
          {description && (
            <FormDescription className="text-destructive">
              {description}
            </FormDescription>
          )}
          {fieldState.error?.message ? (
            <p className="text-sm font-medium text-destructive" role="alert">
              {fieldState.error.message}
            </p>
          ) : null}
        </FormItem>
      )}
    />
  );
}
