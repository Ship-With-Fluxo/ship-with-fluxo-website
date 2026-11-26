import { Eyebrow } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/data/landing";

export function Faq() {
  return (
    <section id="faq" className="section-y scroll-mt-20">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
        <div>
          <Eyebrow>{FAQ.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl leading-[1.1] font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
            {FAQ.title}
          </h2>
          <p className="mt-5 max-w-xs leading-relaxed text-muted-foreground">{FAQ.description}</p>
        </div>

        <Accordion type="single" collapsible>
          {FAQ.items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
