import { useState } from "react";
import Link from "next/link";
import { GithubIcon, CloseIcon } from "@/components/SVGIcons";
import { FaGlobe } from "react-icons/fa";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination, Autoplay]);

const RoadAccidentDashboard = () => {
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
    "/images/road-accident-dashboard-1.png",
    "/images/road-accident-dashboard-2.png",
    "/images/road-accident-dashboard-3.png",
  ];

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
            <img
              className="object-scale-down h-full"
              src={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="md:grid md:grid-cols-12 gap-8 sm:mt-16 ">
        <div className="hidden sm:flex col-span-8 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                hoveredIndex === index
                  ? "w-full"
                  : hoveredIndex !== null
                  ? " w-1/12"
                  : "w-1/3"
              } h-96 flex justify-center bg-white border py-2 rounded-lg cursor-pointer shadow-md`}
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
                <img
                  src={modalImageSrc}
                  alt="Full-scale Image"
                  className="max-h-[calc(100vh-100px)] max-w-[calc(100vw-150px) min-w-[1000px] mx-auto"
                />
                <CloseIcon
                  className="text-gray-600 ml-1 text-3xl w-6 h-6 cursor-pointer"
                  onClick={closeModal}
                />
              </div>
            </div>
          </div>
        )}
        <div className="col-span-4 mt-3 md:mt-0">
          <p className="text-xl text-black dark:text-white">
            Road Accident Dashboard
          </p>
          <p className="text-xs text-shuoan-light dark:text-shuoan-dark italic flex">
            Heavily Inspired by&nbsp;
            <Link
              href={"https://www.tomtom.com/traffic-index/singapore-traffic/"}
              target="_blank"
              className="flex items-center font-semibold text-shuoan-light dark:text-shuoan-dark hover:text-shuoan-link dark:hover:text-shuoan-link"
            >
              tomtom Traffic Index
            </Link>
          </p>
          <p className="text-sm text-shuoan-light dark:text-shuoan-dark mt-2">
            This website provides a real time dashbaord of road accidents in
            Singapore, allowing users to analyse accident patterns by location
            and time of day. Accidents statistics have also been analysed
            providing valuable insight into accident patterns. Public transport
            coverage by bus and train services are also presented for user
            analysis.
          </p>
          <div className="flex mt-1">
            <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg m-1 ml-0  transition-all duration-300">
              AWS
            </div>
            <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg m-1 transition-all duration-300">
              React.js
            </div>
            <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg m-1 transition-all duration-300">
              Tableau
            </div>
          </div>
          <p className="text-sm font-semibold mt-3 ">
            <Link
              href="https://github.com/leeshuoan/road-accidents-dashboard"
              target="_blank"
              className="flex items-center text-shuoan-light dark:text-shuoan-dark hover:text-shuoan-link dark:hover:text-shuoan-link"
            >
              <GithubIcon className="h-8 w-8" />
              Github Repository
            </Link>
            <Link
              href="https://visual-analytics.shuoan.dev/"
              target="_blank"
              className="flex items-center mt-1 ml-1 text-shuoan-light dark:text-shuoan-dark hover:text-shuoan-link dark:hover:text-shuoan-link"
            >
              <FaGlobe className="h-6 w-6 pr-1 mr-1" />
              Website
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RoadAccidentDashboard;
