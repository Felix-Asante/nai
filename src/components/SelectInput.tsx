import React from "react";
import { useController } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { cn } from "@/utils";

interface Options {
  label: string;
  value: string;
  id?: string;
}
interface Props {
  name: string;
  control: any;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  options: Options[];
  triggerClassName?: string;
  className?: string;
}

function sortOptions(options: Options[]) {
  return [...options].sort((a, b) =>
    a.label?.localeCompare(b.label, undefined, {
      sensitivity: "base",
      usage: "sort",
    })
  );
}

export default function SelectInput({
  name,
  control,
  label,
  placeholder,
  options,
  defaultValue,
  triggerClassName,
  className,
}: Props) {
  const { field, fieldState } = useController({ name, control, defaultValue });

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label
          className={cn("text-sm", fieldState.error && "text-destructive")}
        >
          {label}
        </Label>
      )}
      <Select onValueChange={field.onChange} value={field.value?.toString()}>
        <SelectTrigger className={cn("h-11", triggerClassName)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {sortOptions(options)?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option?.id ? `(${option?.id})` : ""} {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {fieldState?.error?.message && (
        <p className="text-sm font-medium text-destructive">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
}
