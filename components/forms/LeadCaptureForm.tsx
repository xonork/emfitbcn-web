"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import type { LeadData } from "@/types";

type LeadCaptureFormProps = {
  onSubmitSuccess?: (data: LeadData) => void;
  quizAnswers: LeadData["quizAnswers"];
  submitLabel?: string;
};

export function LeadCaptureForm({
  onSubmitSuccess,
  quizAnswers,
  submitLabel = "Ver Mi Plan Personalizado",
}: LeadCaptureFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const leadData: LeadData = { name, email, quizAnswers };

    try {
      // TODO: Webhook — POST a endpoint de automatización (Make/Zapier/n8n)
      // await fetch(process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL!, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(leadData),
      // });

      // TODO: Supabase — insert en tabla `leads` con segmentación del quiz
      // const { error } = await supabase.from("leads").insert({
      //   name: leadData.name,
      //   email: leadData.email,
      //   goal: leadData.quizAnswers.goal,
      //   level: leadData.quizAnswers.level,
      //   gender: leadData.quizAnswers.gender,
      //   availability: leadData.quizAnswers.availability,
      //   equipment: leadData.quizAnswers.equipment,
      //   created_at: new Date().toISOString(),
      // });

      onSubmitSuccess?.(leadData);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="lead-name" className="mb-1 block text-sm font-medium text-brand-gray-light">
          Nombre
        </label>
        <input
          id="lead-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          className="w-full rounded-lg border border-brand-border bg-brand-muted px-4 py-3 text-white placeholder:text-brand-gray focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
        />
      </div>

      <div>
        <label htmlFor="lead-email" className="mb-1 block text-sm font-medium text-brand-gray-light">
          Email
        </label>
        <input
          id="lead-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="w-full rounded-lg border border-brand-border bg-brand-muted px-4 py-3 text-white placeholder:text-brand-gray focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
        />
        <p className="mt-1 text-xs text-brand-gray">
          Recomendado usar un email distinto a hotmail o yahoo
        </p>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : submitLabel}
      </Button>
    </form>
  );
}
