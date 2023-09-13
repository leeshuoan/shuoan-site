import { useState } from "react";
import { GithubIcon } from "@/components/SVGIcons";
import { CloseIcon } from '@/components/SVGIcons';

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
    '/images/reddit-twitter-pipeline-1.svg',
    '/images/reddit-twitter-pipeline-2.svg',
    '/images/reddit-twitter-pipeline-3.svg',
  ]

  return (
    <>
      <div className="col-span-6 flex gap-2">

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
              <img src={modalImageSrc} alt="Full-scale Image" className="max-h-full max-w-[1000px] min-w-[1000px] mx-auto" />
              <CloseIcon className="text-gray-600 ml-1 text-3xl w-6 h-6 cursor-pointer" onClick={closeModal} />
            </div>
          </div>
        </div>
      )}

      <div className="col-span-6">
        <p className="text-xl dark:text-white">
          Reddit Twitter Big Data Pipeline
        </p>
        <p className="text-sm text-[#4C4C4C] dark:text-[#BFBFBF]">
          This big data pipeline extracts social media content from platforms such as reddit & twitter, allowing users to glean invaluable insights across a wide range of topics. The dashboard identifies the social movers who shape public sentiment and offers a comprehensive overview of the sentiments surrounding those subjects.
        </p>
        <div className="flex mt-1">
          <div className="text-xs px-2 py-1 bg-[#3A8A81] bg-opacity-25 text-[#4C4C4C] dark:text-[#BFBFBF] rounded-lg m-1 ml-0  transition-all duration-300">AWS</div>
          <div className="text-xs px-2 py-1 bg-[#3A8A81] bg-opacity-25 text-[#4C4C4C] dark:text-[#BFBFBF] rounded-lg m-1 transition-all duration-300">neo4j</div>
          <div className="text-xs px-2 py-1 bg-[#3A8A81] bg-opacity-25 text-[#4C4C4C] dark:text-[#BFBFBF] rounded-lg m-1 transition-all duration-300">Terraform</div>
        </div>
        <p className="text-sm font-semibold mt-3 ">
          <a href='https://github.com/leeshuoan/reddit-twitter-big-data-pipeline' target="_blank" className="flex items-center text-[#4C4C4C] dark:text-[#BFBFBF] hover:text-[#4DBBAC] dark:hover:text-[#4DBBAC]" >
            <GithubIcon className='h-8 w-8' />Github Repository
          </a>
        </p>
      </div>
    </>
  )
}

export default RedditTwitterPipeline