"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-brand-surface">
      <SectionHeading title="Preguntas Frecuentes" align="center" />

      <div className="mx-auto max-w-3xl space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-xl border border-brand-border bg-brand-muted"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-brand-pink/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-inset"
                aria-expanded={isOpen}
              >
                <span className="pr-4 font-semibold text-white">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-brand-pink transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-brand-border px-5 pb-5 pt-3 text-sm leading-relaxed text-brand-gray-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
