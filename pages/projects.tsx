import RedditTwitterPipeline from "@/components/projects/RedditTwitterPipeline";
import AuthenticationSystem from "@/components/projects/AuthenticationSystem";
import CorporatePassApplication from "@/components/projects/CorporatePassApplication";
import RoadAccidentDashboard from "@/components/projects/RoadAccidentDashboard";
import Head from "next/head";

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Lee Shuoan</title>
      </Head>

      <div
        id="projects"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-16"
      >
        <RedditTwitterPipeline />
        <AuthenticationSystem />
        <CorporatePassApplication />
        <RoadAccidentDashboard />

      </div >
      <p className="text-base text-center text-shuoan-light dark:text-shuoan-dark mb-20">View more projects at my <a href="https://github.com/leeshuoan" target='_blank' className="font-semibold hover:text-shuoan-link dark:hover:text-shuoan-link">Github</a>!</p>
    </>
  );
};

export default projects;
