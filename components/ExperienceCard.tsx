import React from 'react';

interface ExperienceCardProps {
  company: string;
  date: string;
  title: string;
  content: string[];
  skills: string[]; 
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, date, title, content, skills }: ExperienceCardProps) => {
  return (
    <div className="mb-4 group hover:bg-[#EAEEF2] dark:hover:bg-[#2D333A] hover:shadow-lg rounded-lg overflow-hidden w-full transition-[all] duration-300 ease-in-out">
      <div className="px-5 py-2">
        <div className='flex'>
          <div className="text-sm font-semibold text-[#A5A5A5] min-w-[142px] dark:text-opacity-60 dark:text-[#A5A5A5]">{date}</div>
          <div className="border mx-3 border-[#A5A5A5] dark:border-opacity-60 dark:border-[#A5A5A5]"></div>
          <div>
              <div className="text-lg font-semibold text-[#3A8A81] dark:text-[#4DB8AC]">{title}</div>
              <div className="text-sm font-semibold text-[#A5A5A5] dark:text-opacity-60 dark:text-[#A5A5A5] mb-1">{company}</div>
              <ul className="list-disc pl-5">
                {content.map((item, index) => (
                  <li key={index} className="text-sm text-[#656565] dark:text-[#A5A5A5] mt-2">{item}</li>
                ))}
              </ul>
              <div className="pl-3 flex flex-wrap mt-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="text-xs px-2 py-1 bg-[#3A8A81] bg-opacity-25 text-[#656565] dark:text-[#A5A5A5] rounded-lg m-1 transition-all duration-300"
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
}

export default ExperienceCard;
