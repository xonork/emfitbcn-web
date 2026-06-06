export type QuizGoal = "weight_loss" | "hypertrophy" | "performance";

export type QuizAnswers = {
  goal?: QuizGoal;
  gender?: "male" | "female" | "other";
  level?: "beginner" | "intermediate" | "advanced";
  availability?: "15min" | "30min" | "45min";
  equipment?: "home" | "gym" | "both";
};

export type LeadData = {
  name: string;
  email: string;
  quizAnswers: QuizAnswers;
};

export type PricingPlan = "single" | "bundle";
