import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const about = () => {
  return (
    <>
      <Head>
        <title>About | Lee Shuoan</title>
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 mt-14 mb-2 gap-3">
        <div className='col-span-5'>
          <div className="sticky top-28">
            <div className='text-4xl dark:text-white'>Lee Shuoan</div>
            <div className='text-lg dark:text-white'>Software Engineer Intern at Goldman Sachs</div>
          </div>
        </div>

        <div className='col-span-7'>
          <div className='text-2xl dark:text-white'>Background</div>
          <div className='text-lg text-[#868686] dark:text-[#C3C3C3]'>
            I'm currently a Software Engineer Intern at <span className='text-[#6B96C3] font-semibold'>Goldman Sachs</span>. I primarily build accessible & responsive frontend applications but am also adept and passionate in DevOps and Solution Architecture.
            <br /><br />
            I have a deep appreciation for simplicity and minimalistic design. With a belief that products do not have to be extravagant; but simply functional and intuitive, my passion lies in crafting elegant solutions that provide seamless user experiences.
            As someone who appreciates growth, I'm always keen on learning and embracing new technologies.
            <br /><br />
            When I'm not coding, I'm usually rock climbing at a bouldering gym or travelling the world. Feel free to reach out to me at <Link href='mailto:leeshuoan38@gmail..com' className='font-semibold'>leeshuoan38@gmail.com</Link>.
          </div>

          <div className='text-2xl dark:text-white mt-10'>Experience</div>

        </div>
      </div>
    </>
  )
}

export default about