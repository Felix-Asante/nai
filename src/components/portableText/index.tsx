import { PortableText } from "@portabletext/react";
import { CustomPortableTextComponents } from "./CustomPortableTextComponents";

export default function DisplayPortableText({ value }: { value: any[] }) {
  return (
    <PortableText value={value} components={CustomPortableTextComponents} />
  );
}
