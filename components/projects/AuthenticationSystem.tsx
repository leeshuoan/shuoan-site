import { useState } from "react";
import Link from "next/link";
import { GithubIcon, CloseIcon } from "@/components/SVGIcons";
import { FaFilePdf } from 'react-icons/fa';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination, Autoplay]);

const AuthenticationSystem = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const handleHover = (index: number) => {
    setHoveredIndex(index);
  };

  const openModal = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const images = [
    '/images/authentication-system-1.svg',
    '/images/authentication-system-2.svg',
    '/images/authentication-system-3.svg',
  ]

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="sm:hidden h-72 mt-10"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img className="object-scale-down h-full" src={image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="md:grid md:grid-cols-12 gap-8 sm:mt-16 ">
        <div className="hidden sm:flex col-span-6 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${hoveredIndex === index ? 'w-full' : hoveredIndex !== null ? ' w-1/12' : 'w-1/3'
                } h-72 flex justify-center bg-white border py-2 rounded-lg cursor-pointer shadow-md`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openModal(image)}
            >
              <img className="object-cover h-full" src={image} />
            </div>
          ))}
        </div>
        {modalVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="modal-content bg-white p-2 rounded-lg text-center relative flex">
                <img src={modalImageSrc} alt="Full-scale Image" className="max-h-[calc(100vh-100px)] max-w-[calc(100vw-150px) min-w-[1000px] mx-auto" />
                <CloseIcon className="text-gray-600 ml-1 text-3xl w-6 h-6 cursor-pointer" onClick={closeModal} />
              </div>
            </div>
          </div>
        )}
        <div className="col-span-6 mt-3 md:mt-0">
          <p className="text-xl text-black dark:text-white">
            Authentication System
          </p>
          <p className="text-xs text-shuoan-light dark:text-shuoan-dark italic">Supported by Ascenda Loyalty</p>
          <p className="text-sm text-shuoan-light dark:text-shuoan-dark mt-2">
            Leveraging AWS Cloud security best practices, this custom authentication service is able to enrol customers and provide account ownership verification. Custom user authentication via a Hosted Login and the SSO of partnered bank&#39;s is available and secured with the signing and encryption of JWTs.
            Management of user roles and permissions is done through an admin control panel and JWKS Endpoints are included for communication with partner’s backend services
          </p>
          <div className="flex mt-1">
            <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg m-1 ml-0  transition-all duration-300">AWS</div>
            <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg m-1 transition-all duration-300">Vue.js</div>
            <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg m-1 transition-all duration-300">Spring</div>
          </div>
          <p className="text-sm font-semibold mt-3 ">
            <Link href='https://github.com/leeshuoan/authentication-system' target="_blank" className="flex items-center text-shuoan-light dark:text-shuoan-dark hover:text-shuoan-link dark:hover:text-shuoan-link" >
              <GithubIcon className='h-8 w-8' />Github Repository
            </Link>
            <Link href='documents/authentication-system.pdf' target="_blank" className="flex items-center mt-1 ml-1 text-shuoan-light dark:text-shuoan-dark hover:text-shuoan-link dark:hover:text-shuoan-link" >
              <FaFilePdf className='h-6 w-6 mr-1' />Technical Documentation
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default AuthenticationSystem