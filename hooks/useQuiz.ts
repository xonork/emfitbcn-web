"use client";

import { useCallback, useState } from "react";
import type { QuizGoal } from "@/types";

export function useQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialGoal, setInitialGoal] = useState<QuizGoal | undefined>();

  const openQuiz = useCallback((goal?: QuizGoal) => {
    setInitialGoal(goal);
    setIsOpen(true);
  }, []);

  const closeQuiz = useCallback(() => {
    setIsOpen(false);
    setInitialGoal(undefined);
  }, []);

  return { isOpen, initialGoal, openQuiz, closeQuiz };
}
