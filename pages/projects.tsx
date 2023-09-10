import { useState } from "react";
import Head from "next/head";

const projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setHoveredIndex(index);
  };

  return (
    <>
      <Head>
        <title>Projects | Lee Shuoan</title>
      </Head>

      <div
        id="projects"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 mt-10 gap-10"
      >
        <div className="col-span-7 flex gap-3">

          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${hoveredIndex === index ? 'w-full' : hoveredIndex !== null ? ' w-1/6' : 'w-1/3'
                } h-64 w-full flex justify-center bg-white py-2 rounded-lg shadow-md`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                className="object-cover h-full"
                src="/images/test.png"
                alt="reddit"
              />
            </div>

          ))}
        </div>

        <div className="col-span-5">
          <p className="text-2xl dark:text-white">
            Reddit Twitter Big Data Pipeline
          </p>
          <p className="text-md text-[#4C4C4C] dark:text-[#BCBCBC]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            dolorem quam, soluta ipsa laboriosam cum unde iusto amet maxime
            necessitatibus? Odio placeat eius saepe sit corrupti sint
            perferendis, dignissimos reprehenderit.
          </p>
        </div>
      </div>
    </>
  );
};

export default projects;
