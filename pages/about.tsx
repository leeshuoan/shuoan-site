import React, { useState, useEffect, useCallback } from "react";
import ExperienceCard from "@/components/ExperienceCard";
import { ExperienceContext } from "@/constants/constants";
import Head from "next/head";
import Link from "next/link";

const About = (): JSX.Element => {
  const [currentSection, setCurrentSection] = useState("background");
  const [scrollingEnabled, setScrollingEnabled] = useState(true);
  const [selectedExperience, setSelectedExperience] = useState(null as number | null);

  const handleScroll = useCallback(() => {
    if (!scrollingEnabled) {
      return;
    }

    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).clientHeight;
      const sectionBottom = sectionTop + sectionHeight;

      if (
        scrollPosition >= sectionTop - 100 &&
        scrollPosition <= sectionBottom
      ) {
        const sectionId = (section as HTMLElement).id;
        setCurrentSection(sectionId);
      }
    });
  }, [scrollingEnabled]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);

    if (!sectionElement) {
      return;
    }

    const sectionTop = sectionElement.offsetTop;
    const spacingFromTop = 100;

    setScrollingEnabled(false);

    window.scrollTo({
      top: sectionTop - spacingFromTop,
      behavior: "smooth",
    });

    setTimeout(() => {
      setScrollingEnabled(true);
    }, 1000);

    setCurrentSection(section);
  };

  return (
    <>
      <Head>
        <title>About | Lee Shuoan</title>
      </Head>

      <div
        id="about"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:grid md:grid-cols-12 mt-10 mb-2"
      >
        <div className="hidden md:block md:col-span-3">
          <div className="sticky top-24">
            <div className="text-2xl md:text-4xl text-black dark:text-white">Lee Shuoan</div>
            <div className="text-sm md:text-base text-black dark:text-white">
              Software Engineer Intern at Goldman Sachs
            </div>
          </div>

          <div className="hidden md:block mt-10 sticky top-60">
            <div
              onClick={() => scrollToSection("background")}
              className={`flex items-center cursor-pointer mb-2 ${currentSection === "background"
                ? "text-black dark:text-white font-semibold"
                : "text-shuoan-gray"
                }`}
            >
              <div
                className={`h-0.5 ${currentSection === "background"
                  ? "w-16 dark:bg-white bg-black"
                  : "w-6 bg-shuoan-gray"
                  } mr-2 transition-all duration-300`}
              ></div>
              <div className="text-base">Background</div>
            </div>
            <div
              onClick={() => scrollToSection("experience")}
              className={`flex items-center cursor-pointer mb-2 ${currentSection === "experience"
                ? "text-black dark:text-white font-semibold"
                : "text-shuoan-gray"
                }`}
            >
              <div
                className={`h-0.5 ${currentSection === "experience"
                  ? "w-16 dark:bg-white bg-black"
                  : "w-6 bg-shuoan-gray"
                  } mr-2 transition-all duration-300`}
              ></div>
              <div className="text-base">Experience</div>
            </div>
            <div
              onClick={() => scrollToSection("education")}
              className={`flex items-center cursor-pointer mb-2 ${currentSection === "education"
                ? "text-black dark:text-white font-semibold"
                : "text-shuoan-gray"
                }`}
            >
              <div
                className={`h-0.5 ${currentSection === "education"
                  ? "w-16 dark:bg-white bg-black"
                  : "w-6 bg-shuoan-gray"
                  } mr-2 transition-all duration-300`}
              ></div>
              <div className="text-base">Education</div>
            </div>
          </div>
        </div>

        <div className="md:ml-20 md:col-span-9">
          <div
            id="background"
            className="section text-black text-2xl dark:text-white px-3 md:pl-5 md:mb-1"
          >
            Background
          </div>
          <div className="text-base text-shuoan-light dark:text-shuoan-dark px-3 md:pl-5">
            I&#39;m currently a Software Engineer Intern at{" "}
            <span className="text-[#6B96C3] font-semibold">Goldman Sachs</span>.
            I primarily build accessible & responsive frontend applications but
            am also adept and passionate in DevOps and Solution Architecture.
            <br />
            <br />
            I have a deep appreciation for simplicity and minimalistic design.
            With a belief that products do not have to be extravagant; but
            simply functional and intuitive, my passion lies in crafting elegant
            solutions that provide seamless user experiences. As someone who
            appreciates growth, I&#39;m always keen on learning and embracing new
            technologies.
            <br />
            <br />
            When I&#39;m not coding, I&#39;m usually rock climbing or travelling the
            world. Feel free to reach out to me at{" "}
            <Link
              href="mailto:leeshuoan38@gmail..com"
              className="font-semibold hover:text-shuoan-link dark:hover:text-shuoan-link"
            >
              leeshuoan38@gmail.com
            </Link>
            .
          </div>

          <div
            id="experience"
            className="section text-black mt-14 text-2xl dark:text-white px-3 md:pl-5 mb-1"
          >
            Experience
          </div>
          <ExperienceContext.Provider
            value={{ selectedExperience, setSelectedExperience }}
          >
            <ExperienceCard
              title="Software Engineer Intern"
              cardKey={0}
              company="Goldman Sachs • Global Investment Research"
              date="MAY 2023 - JUL 2023"
              content={[
                "Led the development and production release of a search enhancement feature for the firm’s global investment research platform, improving user experience for both internal users and external clients",
                "Attained 1st place in the 2-day internal intern hackathon. Built a platform for portfolio managers to receive equity recommendations and interest rate predictions from federal reserve speeches using OpenAI models",
              ]}
              skills={["AWS", "Java", "React", "Terraform"]}
            />
            <ExperienceCard
              cardKey={1}
              title="Research Assistant"
              company="Singapore Management University"
              date="AUG 2022 - SEP 2022"
              content={[
                "Scaled Machine Learning training and inference for large-scale Android malware detection using a distributed ML cluster (Ray.io) on public clouds (AWS) under professors Don TA and Shar Lwin Khin",
              ]}
              skills={["AWS", "Python"]}
            />
            <ExperienceCard
              cardKey={2}
              title="Credit Risk Analyst Intern"
              company="OCBC Bank • Risk Portfolio Management"
              date="MAY 2022 - AUG 2022"
              content={[
                "Developed dashboards to facilitate the back testing of Basel Internal Ratings Based credit risk models, enabling tracking and evaluation of model performance",
              ]}
              skills={["Python", "SQL", "SAS"]}
            />
          </ExperienceContext.Provider>

          <div
            id="education"
            className="section text-black text-2xl dark:text-white mt-10 px-3 md:px-5 mb-1"
          >
            Education
          </div>
          <div className="mb-14 group hover:bg-[#F5F7F9] dark:hover:bg-[#2D333A] hover:shadow-lg rounded-lg overflow-hidden w-full transition-[all] duration-300 ease-in-out">
            <div className="px-3 md:px-5 py-2">
              <div className="flex">
                <div className="text-sm font-semibold text-shuoan-gray min-w-[5.6rem] dark:text-opacity-60 dark:text-shuoan-dark">
                  2020-2024
                </div>
                <div className="border mx-3 border-shuoan-gray dark:border-opacity-60 dark:border-shuoan-gray"></div>
                <div>
                  <div className="text-lg font-semibold text-shuoan-green dark:text-shuoan-link">
                    Singapore Management University
                  </div>
                  <div className="text-sm font-semibold text-shuoan-gray dark:text-opacity-60 dark:text-shuoan-dark mb-1">
                    Bachelor&#39;s of Science (BSc) Information Systems
                    <br />
                    Majoring in Digitalization & Cloud Solutions and Business
                    Analytics
                  </div>
                  <p className="text-sm text-shuoan-light dark:text-shuoan-dark mt-2">
                    Grade: Magna Cum Laude
                  </p>
                  <ul className="list-disc pl-5">
                    <li className="text-sm text-shuoan-light dark:text-shuoan-dark mt-2">
                      SCIS Dean&#39;s List AY2021/22
                    </li>
                    <li className="text-sm text-shuoan-light dark:text-shuoan-dark mt-1">
                      Ninjavan Code Dojo 2023 | Most Feasible Hack
                    </li>
                    <li className="text-sm text-shuoan-light dark:text-shuoan-dark mt-1">
                      Carro x AWS Hackathon 2022 | 8th place
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
