import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Lee Shuoan</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="h-[calc(100vh-3.5rem)] pb-16 flex items-center">
          <div>
            <p className="text-2xl md:text-3xl text-black dark:text-white">LEE SHUOAN</p>
            <p className="text-5xl md:text-6xl font-bold bg-gradient-to-tl from-shuoan-link via-[#5EA9BF] via-[#64A0C1] to-[#6B96C3] text-transparent bg-clip-text">
              Software Engineer
              <br />
              Cloud & DevOps Enthusiast
            </p>
            <p className="text-base text-shuoan-light dark:text-shuoan-dark">
              I design and build anything from frontend user interfaces to
              technical infrastructures
              <br />
              Currently, I&#39;m a Software Engineer at{" "}
              <span className="text-[#6B96C3] font-semibold">
                Goldman Sachs
              </span>
            </p>
            <div className="mt-7 text-base">
              <Link
                href="/about"
                className="relative px-2 p-1 text-shuoan-light dark:text-shuoan-dark dark:hover:text-black font-semibold group transition-all duration-300 ease-in-out border border-[#4C4C4C] hover:text-white "
              >
                <span className="relative z-[1]">About Me</span>
                <span className="absolute inset-0 w-0 bg-[#5EA9BF] group-hover:w-full transition-all"></span>
              </Link>
              <Link
                href="/projects"
                className="relative px-2 p-1 text-shuoan-light dark:text-shuoan-dark dark:hover:text-black font-semibold group transition-all duration-300 ease-in-out border border-[#4C4C4C] hover:text-white "
              >
                <span className="relative z-[1]">Projects</span>
                <span className="absolute inset-0 w-0 bg-[#5EA9BF] group-hover:w-full transition-all"></span>
              </Link>
              <Link
                href="/blog"
                className="relative px-2 p-1 text-shuoan-light dark:text-shuoan-dark dark:hover:text-black font-semibold group transition-all duration-300 ease-in-out border border-[#4C4C4C] hover:text-white "
              >
                <span className="relative z-[1]">Blog Posts</span>
                <span className="absolute inset-0 w-0 bg-[#5EA9BF] group-hover:w-full transition-all"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
