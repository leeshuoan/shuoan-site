import { createContext, Dispatch, SetStateAction } from "react";

interface ExperienceContextValue {
  selectedExperience: number | null;
  setSelectedExperience: Dispatch<SetStateAction<number | null>>;
}

export const ExperienceContext = createContext<ExperienceContextValue>({
  selectedExperience: null,
  setSelectedExperience: () => {},
});
