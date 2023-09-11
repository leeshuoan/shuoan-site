import { useState } from "react";
import { GithubIcon, CloseIcon } from "@/components/SVGIcons";

const CorporatePassApplication = () => {
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
    '/images/corporate-pass-application-1.svg',
    '/images/corporate-pass-application-2.svg',
    '/images/corporate-pass-application-3.svg'
  ]

  return (
    <>
      <div className="col-span-6 flex gap-2 mt-16">

      {images.map((image, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${hoveredIndex === index ? 'w-full' : hoveredIndex !== null ? ' w-1/12' : 'w-1/3'
              } h-72 w-full flex justify-center bg-white border py-2 rounded-lg cursor-pointer shadow-md`}
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

      <div className="col-span-6 mt-16">
        <p className="text-2xl dark:text-white">
          Corporate Pass Application
        </p>
        <p className="text-xs text-[#4C4C4C] dark:text-[#BCBCBC] italic">Supported by Singapore Sports School</p>
        <p className="text-sm text-[#4C4C4C] dark:text-[#BCBCBC] mt-2">
          A corporate pass application system that allows for staff to apply for corporate passes. The system manages corporate pass bookings and is able to generate booking confirmation and email reminders emails. It is also able to dynamically generate PDF invoices for each corporate pass booking. 
        </p>
        <div className="flex mt-1">
          <div className="text-xs px-2 py-1 bg-[#3A8A81] bg-opacity-25 text-[#4C4C4C] dark:text-[#BCBCBC] rounded-lg m-1 ml-0  transition-all duration-300">Spring</div>
          <div className="text-xs px-2 py-1 bg-[#3A8A81] bg-opacity-25 text-[#4C4C4C] dark:text-[#BCBCBC] rounded-lg m-1 transition-all duration-300">React</div>
        </div>
        <p className="text-sm font-semibold mt-3 ">
          <a href='https://github.com/leeshuoan/corporate-pass-application' target="_blank" className="flex items-center text-[#4C4C4C] dark:text-[#BCBCBC] hover:text-[#4DBBAC] dark:hover:text-[#4DBBAC]" >
            <GithubIcon className='h-8 w-8' />Github Repository
          </a>
        </p>
      </div>
    </>
  )
}

export default CorporatePassApplication