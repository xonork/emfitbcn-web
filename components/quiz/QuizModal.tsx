"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { Button } from "@/components/ui/Button";
import type { QuizAnswers, QuizGoal } from "@/types";

type QuizModalProps = {
  isOpen: boolean;
  initialGoal?: QuizGoal;
  onClose: () => void;
};

const STEPS = ["goal", "profile", "availability", "lead"] as const;
type Step = (typeof STEPS)[number];

const GOAL_OPTIONS: { id: QuizGoal; label: string }[] = [
  { id: "weight_loss", label: "Perder peso" },
  { id: "hypertrophy", label: "Hipertrofia muscular" },
  { id: "performance", label: "Mejorar rendimiento" },
];

export function QuizModal({ isOpen, initialGoal, onClose }: QuizModalProps) {
  const [step, setStep] = useState<Step>("goal");
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(initialGoal ? "profile" : "goal");
      setAnswers(initialGoal ? { goal: initialGoal } : {});
      setCompleted(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialGoal]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  function nextStep() {
    const idx = STEPS.indexOf(step);
    if (idx < STEPS.length - 1) setStep(STEPS[idx + 1]);
  }

  function updateAnswers(partial: Partial<QuizAnswers>) {
    setAnswers((prev) => ({ ...prev, ...partial }));
    nextStep();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Quiz de plan personalizado"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-brand-border bg-brand-charcoal p-6 shadow-2xl shadow-brand-pink/10 md:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-brand-gray transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
          aria-label="Cerrar quiz"
        >
          <X size={24} />
        </button>

        {completed ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-pink/20 text-3xl">
              ✓
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              ¡Tu plan está listo!
            </h3>
            <p className="mt-2 text-brand-gray-light">
              Revisa tu email para acceder a tu prescripción personalizada.
            </p>
            <Button className="mt-6" onClick={onClose}>
              Cerrar
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6 flex gap-2">
              {STEPS.map((s, i) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    STEPS.indexOf(step) >= i ? "bg-brand-pink" : "bg-brand-border"
                  }`}
                />
              ))}
            </div>

            {step === "goal" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  ¿Cuál es tu objetivo principal?
                </h3>
                <div className="mt-4 space-y-3">
                  {GOAL_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => updateAnswers({ goal: opt.id })}
                      className="w-full rounded-lg border border-brand-border bg-brand-muted p-4 text-left transition-all hover:border-brand-pink hover:bg-brand-pink/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
                    >
                      <span className="font-semibold text-white">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "profile" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  Cuéntanos sobre ti
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="mb-2 text-sm text-brand-gray-light">Género</p>
                    <div className="flex flex-wrap gap-2">
                      {(["female", "male", "other"] as const).map((g) => (
                        <button
                          key={g}
                          onClick={() => setAnswers((prev) => ({ ...prev, gender: g }))}
                          className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                            answers.gender === g
                              ? "border-brand-pink bg-brand-pink/10 text-brand-pink"
                              : "border-brand-border text-brand-gray-light hover:border-brand-pink/50"
                          }`}
                        >
                          {g === "female" ? "Mujer" : g === "male" ? "Hombre" : "Otro"}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-sm text-brand-gray-light">Nivel de experiencia</p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          ["beginner", "Principiante"],
                          ["intermediate", "Intermedio"],
                          ["advanced", "Avanzado"],
                        ] as const
                      ).map(([id, label]) => (
                        <button
                          key={id}
                          onClick={() => setAnswers((prev) => ({ ...prev, level: id }))}
                          className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                            answers.level === id
                              ? "border-brand-pink bg-brand-pink/10 text-brand-pink"
                              : "border-brand-border text-brand-gray-light hover:border-brand-pink/50"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    disabled={!answers.gender || !answers.level}
                    onClick={nextStep}
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {step === "availability" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  ¿Cuánto tiempo y dónde entrenas?
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="mb-2 text-sm text-brand-gray-light">Tiempo disponible</p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          ["15min", "15 min"],
                          ["30min", "30 min"],
                          ["45min", "45+ min"],
                        ] as const
                      ).map(([id, label]) => (
                        <button
                          key={id}
                          onClick={() => setAnswers((prev) => ({ ...prev, availability: id }))}
                          className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                            answers.availability === id
                              ? "border-brand-pink bg-brand-pink/10 text-brand-pink"
                              : "border-brand-border text-brand-gray-light hover:border-brand-pink/50"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-sm text-brand-gray-light">Equipamiento</p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          ["home", "En casa"],
                          ["gym", "Gimnasio"],
                          ["both", "Ambos"],
                        ] as const
                      ).map(([id, label]) => (
                        <button
                          key={id}
                          onClick={() => setAnswers((prev) => ({ ...prev, equipment: id }))}
                          className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                            answers.equipment === id
                              ? "border-brand-pink bg-brand-pink/10 text-brand-pink"
                              : "border-brand-border text-brand-gray-light hover:border-brand-pink/50"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    disabled={!answers.availability || !answers.equipment}
                    onClick={nextStep}
                  >
                    Ver mi plan
                  </Button>
                </div>
              </div>
            )}

            {step === "lead" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  Recibe tu plan personalizado
                </h3>
                <p className="mt-2 text-sm text-brand-gray-light">
                  Basado en tu perfil, hemos seleccionado el programa ideal para ti.
                </p>
                <div className="mt-6">
                  <LeadCaptureForm
                    quizAnswers={answers}
                    onSubmitSuccess={() => setCompleted(true)}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
