"use client";

import type { ReactNode } from "react";
import { Target, TrendingUp, Zap } from "lucide-react";
import { useQuizContext } from "@/components/providers/QuizProvider";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QUIZ_TEASER } from "@/lib/constants";
import type { QuizGoal } from "@/types";

const ICONS: Record<QuizGoal, ReactNode> = {
  weight_loss: <Target className="h-8 w-8 text-brand-pink" />,
  hypertrophy: <TrendingUp className="h-8 w-8 text-brand-pink" />,
  performance: <Zap className="h-8 w-8 text-brand-pink" />,
};

export function QuizTeaser() {
  const { openQuiz } = useQuizContext();

  return (
    <Section className="bg-brand-surface">
      <SectionHeading title={QUIZ_TEASER.question} align="center" />

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {QUIZ_TEASER.options.map((option) => (
          <button
            key={option.id}
            onClick={() => openQuiz(option.id)}
            className="group rounded-2xl border border-brand-border bg-brand-muted p-6 text-left transition-all hover:border-brand-pink hover:bg-brand-pink/5 hover:shadow-lg hover:shadow-brand-pink/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
          >
            <div className="mb-4">{ICONS[option.id]}</div>
            <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-pink md:text-xl">
              {option.label}
            </h3>
            <p className="mt-2 text-sm text-brand-gray-light">{option.description}</p>
          </button>
        ))}
      </div>
    </Section>
  );
}
