import React from "react";
import { useController } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

interface TextAreaInputProp {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  labelClassName?: string;
  className?: string;
}
export default function TextAreaInput({
  control,
  name,
  label,
  placeholder,
  className,
  defaultValue,
  labelClassName,
}: TextAreaInputProp) {
  const { field, fieldState } = useController({ name, control, defaultValue });
  return (
    <div className={className}>
      <Label htmlFor={name} className={cn("block mb-1.5", labelClassName)}>
        {label}
      </Label>
      <Textarea
        className="w-full h-24 p-3  border rounded-md"
        placeholder={placeholder}
        id={name}
        {...field}
      />
      {fieldState?.error?.message && (
        <p className="text-sm font-medium text-destructive mt-1">
          {fieldState?.error?.message}
        </p>
      )}
    </div>
  );
}
