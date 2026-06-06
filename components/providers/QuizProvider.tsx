"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { QuizModal } from "@/components/quiz/QuizModal";
import { useQuiz } from "@/hooks/useQuiz";
import type { QuizGoal } from "@/types";

type QuizContextValue = {
  openQuiz: (goal?: QuizGoal) => void;
  closeQuiz: () => void;
};

const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const { isOpen, initialGoal, openQuiz, closeQuiz } = useQuiz();

  return (
    <QuizContext.Provider value={{ openQuiz, closeQuiz }}>
      {children}
      <QuizModal isOpen={isOpen} initialGoal={initialGoal} onClose={closeQuiz} />
    </QuizContext.Provider>
  );
}

export function useQuizContext() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within QuizProvider");
  }
  return context;
}
