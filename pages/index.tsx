import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lee Shuoan</title>
      </Head>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='h-[calc(100vh-3.5rem)] flex items-center'>
          <div className=''>
            <p className='text-3xl dark:text-white'>LEE SHUOAN</p>
            <p className='text-6xl dark:text-white font-bold'>Software Engineer</p>
            <p className='text-6xl dark:text-white font-bold'>Cloud & DevOps Enthusiast</p>
            <p className='text-2xl text-[#868686]'>I design and build anything from frontend user interfaces to technical infrastructures<br/>Currently, I'm a Software Engineer Intern at <span className='text-[#6B96C3]'>Goldman Sachs</span></p>
          </div>
        </div>
      </div>
    </>

  )
}
