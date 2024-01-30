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
                <div className="text-xl font-semibold text-[#4C4C4C] dark:text-[#BCBCBC] group-hover:text-[#3A8A81] group-hover:dark:text-[#4DB8AC]">
                  Scaling Machine Learning with Ray.io and AWS
                </div>
                <div className="text-xs italic text-[#4C4C4C] dark:text-[#BCBCBC]">
                  Jan 27 2023 | 14 min read
                </div>
                <p className="hidden sm:block text-sm text-[#4C4C4C] dark:text-[#BCBCBC] mt-2">
                  A guide to set up a basic distributed ML cluster and run it on the cloud to run your Machine Learning Applications
                </p>
                <div className='flex'>
                  <div className="text-xs px-2 py-1 bg-[#3A8A81] bg-opacity-25 text-[#4C4C4C] dark:text-[#BCBCBC] rounded-lg mt-2 mr-1">AWS</div>
                  <div className="text-xs px-2 py-1 bg-[#3A8A81] bg-opacity-25 text-[#4C4C4C] dark:text-[#BCBCBC] rounded-lg mt-2 mr-1">Distributed Computing</div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <p className="text-base text-center text-[#4C4C4C] dark:text-[#BCBCBC] mt-10 mb-20">I&#39;m working on writing more, hopefully :&#34;&#34;&#34;</p>
      </div>
    </>
  )
}

export default blog