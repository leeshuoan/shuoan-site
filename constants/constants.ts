import { createContext, Dispatch, SetStateAction } from "react";

interface ExperienceContextValue {
  selectedExperience: number | null;
  setSelectedExperience: Dispatch<SetStateAction<number | null>>;
}

interface EducationContextValue {
  selectedEducation: number | null;
  setSelectedEducation: Dispatch<SetStateAction<number | null>>;
}

export const ExperienceContext = createContext<ExperienceContextValue>({
  selectedExperience: null,
  setSelectedExperience: () => {},
});

export const EducationContext = createContext<EducationContextValue>({
  selectedEducation: null,
  setSelectedEducation: () => {},
});
