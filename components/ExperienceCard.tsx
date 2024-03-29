import { useContext } from "react";
import { ExperienceContext } from "@/constants/constants";

interface ExperienceCardProps {
  cardKey: number;
  company: string;
  date: string;
  title: string;
  content: string[];
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  cardKey,
  company,
  date,
  title,
  content,
  skills,
}: ExperienceCardProps) => {
  const { selectedExperience, setSelectedExperience } =
    useContext(ExperienceContext);

  const handleCardMouseEnter = () => {
    setSelectedExperience(cardKey);
  };

  const handleCardMouseLeave = () => {
    setSelectedExperience(null);
  };

  return (
    <div
      className={`mb-4 group ${
        selectedExperience != cardKey && selectedExperience != null
          ? "opacity-60"
          : "opacity-100"
      } hover:bg-[#F5F7F9] dark:hover:bg-[#2D333A] hover:shadow-lg rounded-lg overflow-hidden w-full transition-[all] duration-300 ease-in-out`}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className="px-3 md:px-5 py-2">
        <div className="flex">
          <div className="text-sm font-semibold text-shuoan-gray min-w-[5.6rem] md:min-w-[9.25rem] dark:text-opacity-60 dark:text-shuoan-dark">
            {date}
          </div>
          <div className="border mx-3 border-shuoan-gray dark:border-opacity-60 dark:border-shuoan-gray"></div>
          <div>
            <div className="text-lg font-semibold text-shuoan-green dark:text-shuoan-link">
              {title}
            </div>
            <div className="text-sm font-semibold text-shuoan-gray dark:text-opacity-60 dark:text-shuoan-dark mb-1">
              {company}
            </div>
            <ul className="list-disc pl-5">
              {content.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-shuoan-light dark:text-shuoan-dark mt-2"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="pl-3 flex flex-wrap mt-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg m-1 transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
