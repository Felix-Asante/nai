import { QuizValueProps } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Quiz({ value }: { value: QuizValueProps }) {
  return (
    <Accordion key={value._key} id={value._key} type="single">
      <AccordionItem value={value._key}>
        <AccordionTrigger>{value.question}</AccordionTrigger>
        <AccordionContent>{value.answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
