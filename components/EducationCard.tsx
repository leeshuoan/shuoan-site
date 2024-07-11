import { useContext } from "react";
import { EducationContext } from "@/constants/constants";

interface EducationCardProps {
  cardKey: number;
  institution: string;
  date: string;
  degree: string;
  majors: string[];
  grade: string;
  achievements: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  cardKey,
  institution,
  date,
  degree,
  majors,
  grade,
  achievements,
}: EducationCardProps) => {
  const { selectedEducation, setSelectedEducation } =
    useContext(EducationContext);

  const handleCardMouseEnter = () => {
    setSelectedEducation(cardKey);
  };

  const handleCardMouseLeave = () => {
    setSelectedEducation(null);
  };

  return (
    <div
      className={`mb-4 group ${
        selectedEducation != cardKey && selectedEducation != null
          ? "opacity-60"
          : "opacity-100"
      } hover:bg-[#F5F7F9] dark:hover:bg-[#2D333A] hover:shadow-lg rounded-lg overflow-hidden w-full transition-[all] duration-300 ease-in-out`}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className="px-3 md:px-5 py-2">
        <div className="flex">
          <div className="text-sm font-semibold text-shuoan-gray min-w-[9.2rem] dark:text-opacity-60 dark:text-shuoan-dark">
            {date}
          </div>
          <div className="border mx-3 border-shuoan-gray dark:border-opacity-60 dark:border-shuoan-gray"></div>
          <div>
            <div className="text-lg font-semibold text-shuoan-green dark:text-shuoan-link">
              {institution}
            </div>
            <div className="text-sm font-semibold text-shuoan-gray dark:text-opacity-60 dark:text-shuoan-dark mb-1">
              {degree}
              <br />
              Majoring in {majors.join(" and ")}
            </div>
            <p className="text-sm text-shuoan-light dark:text-shuoan-dark mt-2">
              Grade: {grade}
            </p>
            <ul className="list-disc pl-5">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-sm text-shuoan-light dark:text-shuoan-dark mt-2"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
