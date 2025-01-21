import React, { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";

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
}

function sortOptions(options: Options[]) {
  return options.sort((a, b) =>
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
}: Props) {
  const { field, fieldState } = useController({ name, control, defaultValue });
  const [value, setValue] = useState("");

  return (
    <div className="mt-2.5">
      <Label className="block mb-1.5">{label}</Label>
      <Select onValueChange={field.onChange} value={field.value?.toString()}>
        <SelectTrigger>
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
          {fieldState?.error?.message}
        </p>
      )}
    </div>
  );
}
