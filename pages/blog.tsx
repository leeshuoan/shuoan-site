import Head from 'next/head'
import Link from 'next/link'

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Lee Shuoan</title>
      </Head>

      <div
        id="blog"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  mt-10 gap-8 mb-16"
      >
        <Link href="https://medium.com/@shuoan/scaling-machine-learning-with-ray-io-and-aws-34e7a00f90b0" target='_blank'>
          <div className="group px-3 py-3 hover:bg-[#F5F7F9] dark:hover:bg-[#2D333A] hover:shadow-md rounded-lg overflow-hidden w-full transition-[all] duration-300 ease-in-out">
            <div className="flex">
              <img src='images/aws-ray-cluster.svg' className='object-fill w-1/3 md:w-1/4 lg:w-1/6' />
              <div className='w-2/3 ml-3 md:w-3/4 lg:w-5/6'>
                <div className="text-xl font-semibold text-shuoan-light dark:text-shuoan-dark group-hover:text-shuoan-green group-hover:dark:text-shuoan-link">
                  Scaling Machine Learning with Ray.io and AWS
                </div>
                <div className="text-xs italic text-shuoan-light dark:text-shuoan-dark">
                  Jan 27 2023 | 4 min read
                </div>
                <p className="hidden sm:block text-sm text-shuoan-light dark:text-shuoan-dark mt-2">
                  A guide to set up a basic distributed ML cluster and run it on the cloud to run your Machine Learning Applications
                </p>
                <div className='flex'>
                  <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg mt-2 mr-1">AWS</div>
                  <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg mt-2 mr-1">Distributed Computing</div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href="https://medium.com/@shuoan/centralized-logging-for-multi-module-python-applications-in-aws-lambda-97a106d73feb" target='_blank'>
          <div className="group px-3 py-3 mt-5 hover:bg-[#F5F7F9] dark:hover:bg-[#2D333A] hover:shadow-md rounded-lg overflow-hidden w-full transition-[all] duration-300 ease-in-out">
            <div className="flex">
              <div className='w-2/3 ml-3 md:w-3/4 lg:w-5/6'>
                <div className="text-xl font-semibold text-shuoan-light dark:text-shuoan-dark group-hover:text-shuoan-green group-hover:dark:text-shuoan-link">
                  Centralized Logging for Multi-Module Python Applications in AWS Lambda
                </div>
                <div className="text-xs italic text-shuoan-light dark:text-shuoan-dark">
                  Dec 31 2024 | 2 min read
                </div>
                <p className="hidden sm:block text-sm text-shuoan-light dark:text-shuoan-dark mt-2">
                  Configurations with Log Levels, Log Formats and Context Variables
                </p>
                <div className='flex'>
                  <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg mt-2 mr-1">AWS Lamdbda</div>
                  <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg mt-2 mr-1">Python</div>
                  <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg mt-2 mr-1">Logging</div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <p className="text-base text-center text-shuoan-light dark:text-shuoan-dark mt-10 mb-20">I&#39;m working on writing more, hopefully :&#34;&#34;&#34;</p>
      </div>
    </>
  )
}

export default blog