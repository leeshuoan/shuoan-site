import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const About = (): JSX.Element => {
  const [currentSection, setCurrentSection] = useState('background');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).clientHeight;
      const sectionBottom = sectionTop + sectionHeight;

      if (scrollPosition >= sectionTop - 120 && scrollPosition <= sectionBottom) {
        const sectionId = (section as HTMLElement).id;
        console.log(`Scrollbar is in section: ${sectionId}`);
        setCurrentSection(sectionId);
      }
    });
  }, []);

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
    const spacingFromTop = 120;

    window.scrollTo({
      top: sectionTop - spacingFromTop,
      behavior: "smooth"
    });

    setCurrentSection(section);
  }

  return (
    <>
      <Head>
        <title>About | Lee Shuoan</title>
      </Head>

      <div id='scrollable-element' className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 mt-14 mb-2 gap-3">
        <div className='col-span-5'>
          <div className="sticky top-28">
            <div className='text-4xl dark:text-white'>Lee Shuoan</div>
            <div className='text-lg dark:text-white'>Software Engineer Intern at Goldman Sachs</div>
          </div>

          <div className='mt-10 sticky top-60'>
            <div
              onClick={() => scrollToSection('background')}
              className={`flex items-center cursor-pointer mb-2 ${currentSection === 'background' ? 'text-black dark:text-white font-semibold' : 'text-[#868686]'}`}
            >
              <div className={`h-0.5 ${currentSection === 'background' ? 'w-16 dark:bg-white bg-black' : 'w-6 bg-[#868686]'} mr-2 transition-all duration-300`}></div>
              <div className='text-md'>Background</div>
            </div>
            <div
              onClick={() => scrollToSection('experience')}
              className={`flex items-center cursor-pointer mb-2 ${currentSection === 'experience' ? 'text-black dark:text-white font-semibold' : 'text-[#868686]'}`}
            >
              <div className={`h-0.5 ${currentSection === 'experience' ? 'w-16 dark:bg-white bg-black' : 'w-6 bg-[#868686]'} mr-2 transition-all duration-300`}></div>
              <div className='text-md'>Experience</div>
            </div>
            <div
              onClick={() => scrollToSection('education')}
              className={`flex items-center cursor-pointer mb-2 ${currentSection === 'education' ? 'text-black dark:text-white font-semibold' : 'text-[#868686]'}`}
            >
              <div className={`h-0.5 ${currentSection === 'education' ? 'w-16 dark:bg-white bg-black' : 'w-6 bg-[#868686]'} mr-2 transition-all duration-300`}></div>
              <div className='text-md'>Education</div>
            </div>
          </div>
        </div>

        <div className='col-span-7'>
          <div className='section text-2xl dark:text-white' id='background'>Background</div>
          <div className='text-lg text-[#868686] dark:text-[#A5A5A5]'>
            I'm currently a Software Engineer Intern at <span className='text-[#6B96C3] font-semibold'>Goldman Sachs</span>. I primarily build accessible & responsive frontend applications but am also adept and passionate in DevOps and Solution Architecture.
            <br /><br />
            I have a deep appreciation for simplicity and minimalistic design. With a belief that products do not have to be extravagant; but simply functional and intuitive, my passion lies in crafting elegant solutions that provide seamless user experiences.
            As someone who appreciates growth, I'm always keen on learning and embracing new technologies.
            <br /><br />
            When I'm not coding, I'm usually rock climbing at a bouldering gym or travelling the world. Feel free to reach out to me at <Link href='mailto:leeshuoan38@gmail..com' className='font-semibold'>leeshuoan38@gmail.com</Link>.
          </div>

          <div id='experience' className='section text-2xl dark:text-white mt-10'>Experience</div>
          <div id='education' className='section text-2xl dark:text-white mt-10'>Education</div>

        </div>
      </div>
    </>
  );
};

export default About;
