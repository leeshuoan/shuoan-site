import RedditTwitterPipeline from "@/components/projects/RedditTwitterPipeline";
import AuthenticationSystem from "@/components/projects/AuthenticationSystem";
import CorporatePassApplication from "@/components/projects/CorporatePassApplication";
import Head from "next/head";

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Lee Shuoan</title>
      </Head>

      <div
        id="projects"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 mt-10 gap-8 mb-16"
      >
        <RedditTwitterPipeline />
        <AuthenticationSystem />
        <CorporatePassApplication />

      </div >
      <p className="text-md text-center text-[#4C4C4C] dark:text-[#BCBCBC] mb-20">View more projects at my <a href="https://github.com/leeshuoan" className="font-semibold hover:text-[#4DBBAC] dark:hover:text-[#4DBBAC]">Github</a>!</p>
    </>
  );
};

export default projects;
