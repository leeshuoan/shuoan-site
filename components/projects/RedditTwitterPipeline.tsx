import Link from "next/link";
import { useState } from "react";
import { GithubIcon } from "@/components/SVGIcons";
import { CloseIcon } from "@/components/SVGIcons";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination, Autoplay]);

const RedditTwitterPipeline = () => {
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
    "/images/reddit-twitter-pipeline-1.svg",
    "/images/reddit-twitter-pipeline-2.svg",
    "/images/reddit-twitter-pipeline-3.svg",
  ];

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="sm:hidden h-72"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              className={`object-scale-down h-full ${
                index == 2 ? "bg-white" : ""
              }`}
              src={image}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="md:grid md:grid-cols-12 gap-8 ">
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
              <img className="object-cover h-full" src={image} loading="lazy" />
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
                  className="max-h-full max-w-[1000px] min-w-[1000px] mx-auto"
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
            Reddit Twitter Big Data Pipeline
          </p>
          <p className="text-sm text-shuoan-light dark:text-shuoan-dark">
            This big data pipeline extracts social media content from platforms
            such as reddit & twitter, allowing users to glean invaluable
            insights across a wide range of topics. The dashboard identifies the
            social movers who shape public sentiment and offers a comprehensive
            overview of the sentiments surrounding those subjects.
          </p>
          <div className="flex mt-1">
            <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg m-1 ml-0  transition-all duration-300">
              AWS
            </div>
            <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg m-1 transition-all duration-300">
              neo4j
            </div>
            <div className="text-xs px-2 py-1 bg-shuoan-green bg-opacity-25 text-shuoan-light dark:text-shuoan-dark rounded-lg m-1 transition-all duration-300">
              Terraform
            </div>
          </div>
          <p className="text-sm font-semibold mt-3 ">
            <Link
              href="https://github.com/leeshuoan/reddit-twitter-big-data-pipeline"
              target="_blank"
              className="flex items-center text-shuoan-light dark:text-shuoan-dark hover:text-shuoan-link dark:hover:text-shuoan-link"
            >
              <GithubIcon className="h-8 w-8" />
              Github Repository
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RedditTwitterPipeline;
