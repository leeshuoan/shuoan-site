import React, { useState, useEffect, useCallback } from "react";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";
import { ExperienceContext, EducationContext } from "@/constants/constants";
import Head from "next/head";
import Link from "next/link";

const About = (): JSX.Element => {
  const [currentSection, setCurrentSection] = useState("background");
  const [scrollingEnabled, setScrollingEnabled] = useState(true);
  const [selectedExperience, setSelectedExperience] = useState(
    null as number | null
  );
  const [selectedEducation, setSelectedEducation] = useState(
    null as number | null
  );

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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:grid md:grid-cols-12 mt-10 mb-2"
      >
        <div className="hidden md:block md:col-span-2">
          <div className="sticky top-24">
            <div className="text-2xl md:text-4xl text-black dark:text-white">
              Lee Shuoan
            </div>
            <div className="text-sm md:text-base text-black dark:text-white">
              Software Engineer at Goldman Sachs
            </div>
          </div>

          <div className="hidden md:block mt-10 sticky top-60">
            <div
              onClick={() => scrollToSection("background")}
              className={`flex items-center cursor-pointer mb-2 ${
                currentSection === "background"
                  ? "text-black dark:text-white font-semibold"
                  : "text-shuoan-gray"
              }`}
            >
              <div
                className={`h-0.5 ${
                  currentSection === "background"
                    ? "w-16 dark:bg-white bg-black"
                    : "w-6 bg-shuoan-gray"
                } mr-2 transition-all duration-300`}
              ></div>
              <div className="text-base">Background</div>
            </div>
            <div
              onClick={() => scrollToSection("experience")}
              className={`flex items-center cursor-pointer mb-2 ${
                currentSection === "experience"
                  ? "text-black dark:text-white font-semibold"
                  : "text-shuoan-gray"
              }`}
            >
              <div
                className={`h-0.5 ${
                  currentSection === "experience"
                    ? "w-16 dark:bg-white bg-black"
                    : "w-6 bg-shuoan-gray"
                } mr-2 transition-all duration-300`}
              ></div>
              <div className="text-base">Experience</div>
            </div>
            <div
              onClick={() => scrollToSection("education")}
              className={`flex items-center cursor-pointer mb-2 ${
                currentSection === "education"
                  ? "text-black dark:text-white font-semibold"
                  : "text-shuoan-gray"
              }`}
            >
              <div
                className={`h-0.5 ${
                  currentSection === "education"
                    ? "w-16 dark:bg-white bg-black"
                    : "w-6 bg-shuoan-gray"
                } mr-2 transition-all duration-300`}
              ></div>
              <div className="text-base">Education</div>
            </div>
          </div>
        </div>

        <div className="md:ml-20 md:col-span-10">
          <div
            id="background"
            className="section text-black text-2xl dark:text-white px-3 md:pl-5 md:mb-1"
          >
            Background
          </div>
          <div className="text-base text-shuoan-light dark:text-shuoan-dark px-3 md:pl-5">
            I&#39;m currently a Software Engineer at{" "}
            <span className="text-[#6B96C3] font-semibold">Goldman Sachs</span>.
            I primarily build accessible & responsive frontend applications but
            am also adept and passionate in DevOps and Solution Architecture.
            <br />
            <br />
            I have a deep appreciation for simplicity and minimalistic design.
            With a belief that products do not have to be extravagant; but
            simply functional and intuitive, my passion lies in crafting elegant
            solutions that provide seamless user experiences. As someone who
            appreciates growth, I&#39;m always keen on learning and embracing
            new technologies.
            <br />
            <br />
            When I&#39;m not coding, I&#39;m usually rock climbing or travelling
            the world. Feel free to reach out to me at{" "}
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
              title="Software Engineer"
              cardKey={0}
              company="Goldman Sachs • Global Investment Research"
              date="JUN 2024 - PRESENT"
              content={[
                "Maintaining and building the tools used by research analysts globally to write and publish research insights",
                "Contributed to migrating an legacy SecDB system to AWS using Lambda functions, ECS, and MongoDB Atlas",
                "Implemented authentication and authorization flows using PKCE with OAuth 2.0, OpenAPI definitions for access control, and policy enforcement via OPA",
                // "Contributed to a Gen AI project orchestrating LLM calls and OpenSearch vector database queries, built Lambda functions for vector index creation and embedding generation"
              ]}
              skills={["AWS", "Java", "React", "Slang", "MongoDB", "OpenSearch", "Terraform"]}
            />
            <ExperienceCard
              title="Software Engineer Intern"
              cardKey={1}
              company="Goldman Sachs • Global Investment Research"
              date="MAY 2023 - JUL 2023"
              content={[
                "Led the development and production release of a search enhancement feature for the firm’s global investment research platform, improving user experience for both internal users and external clients",
                "Attained 1st place in the 2-day internal intern hackathon. Built a platform for portfolio managers to receive equity recommendations and interest rate predictions from federal reserve speeches using OpenAI models",
              ]}
              skills={["AWS", "Java", "React", "Terraform"]}
            />
            <ExperienceCard
              cardKey={2}
              title="Research Assistant"
              company="Singapore Management University"
              date="AUG 2022 - SEP 2022"
              content={[
                "Scaled Machine Learning training and inference for large-scale Android malware detection using a distributed ML cluster (Ray.io) on public clouds (AWS) under professors Don TA and Shar Lwin Khin",
              ]}
              skills={["AWS", "Python"]}
            />
            <ExperienceCard
              cardKey={3}
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
          <EducationContext.Provider
            value={{ selectedEducation, setSelectedEducation }}
          >
            <EducationCard
              cardKey={0}
              institution="Singapore Management University"
              date="2020-2024"
              degree="Bachelor's of Science (BSc) Information Systems"
              majors={[
                "Digitalization & Cloud Solutions",
                "Business Analytics",
              ]}
              grade="Magna Cum Laude"
              achievements={[
                "SCIS Dean's List AY2021/22",
                "Huawei ICT Competition 2024 (AI Innovation) | APAC Regional Finalists, 3rd place",
                "Ninjavan Code Dojo 2023 | Most Feasible Hack",
                "Carro x AWS Hackathon 2022 | 8th place",
              ]}
            />
            <EducationCard
              cardKey={1}
              institution="Sungkyunkwan University"
              date="AUG 2023 - DEC 2023"
              degree="International Student Exchange Programme"
              majors={["Data Science"]}
              grade="4.00/4.50"
              achievements={[]}
            />
          </EducationContext.Provider>
        </div>
      </div>
    </>
  );
};

export default About;
