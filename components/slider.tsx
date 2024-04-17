"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Header from "./Layout/Header";
import Image from "next/image";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { BsTagFill } from "react-icons/bs";
import Banner from "./Layout/Banner";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

type Props = {};

const ImageCarousel = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const handleNextSlide = () => {
    // Assuming you have two slides for demonstration purposes
    setCurrentSlide((prevSlide) => (prevSlide < 1 ? prevSlide + 1 : 1));
  };

  return (
    <div>
      <div className="mt-5">
        <div className="lg:flex flex-row items-start lg:gap-12 gap-6 w-[95%] mx-auto">
          <div
            id="indicators-carousel"
            className="relative lg:w-1/2 w-full"
            data-carousel="active"
          >
            <div className="relative h-56 overflow-hidden rounded-lg lg:h-96">
              <div
                className={`duration-700 ease-in-out ${
                  currentSlide === 0 ? "" : "hidden"
                }`}
                data-carousel-item
              >
                <Image
                  src="/slider1.png"
                  width={500}
                  height={500}
                  className="absolute block w-full lg:w-[500px] h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="Slide 0"
                />
              </div>
              <div
                className={`duration-700 ease-in-out ${
                  currentSlide === 1 ? "" : "hidden"
                }`}
                data-carousel-item
              >
                <Image
                  src="/slider1.png"
                  width={500}
                  height={500}
                  className="absolute block w-full lg:w-[500px] h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="Slide 1"
                />
              </div>
            </div>
            <div className="absolute flex -translate-x-1/2 lg:top-[72%] top-[70%] right-0 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className={`w-3 h-3 bg-transparent hover:bg-[red] border-1 border-[red] rounded-full ${
                  currentSlide === 0 ? "bg-[red]" : ""
                }`}
                aria-current={currentSlide === 0 ? "true" : "false"}
                aria-label="Slide 0"
                data-carousel-slide-to="0"
                onClick={() => setCurrentSlide(0)}
              ></button>
              <button
                type="button"
                className={`w-3 h-3 bg-transparent hover:bg-[red] border-1 border-[red] rounded-full ${
                  currentSlide === 1 ? "bg-[red]" : ""
                }`}
                aria-current={currentSlide === 1 ? "true" : "false"}
                aria-label="Slide 1"
                data-carousel-slide-to="1"
                onClick={() => setCurrentSlide(1)}
              ></button>
            </div>
            <button
              type="button"
              className="absolute bottom-[55%] start-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={handlePrevSlide}
            >
              <GrLinkPrevious className="text-[30px] text-white border-1 border-[#fff] p-2 rounded-full hover:bg-white hover:text-black" />
              <span className="sr-only">Previous</span>
            </button>
            <button
              type="button"
              className="absolute bottom-[55%] end-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={handleNextSlide}
            >
              <GrLinkNext className="text-[30px] text-white border-1 border-[#fff] p-2 rounded-full hover:bg-white hover:text-black" />
              <span className="sr-only">Next</span>
            </button>

            <div className="my-5">
              <Button className="sm:font-rbRegular bg-[#F84F39] w-full font-rbLight text-white rounded-lg sm:rounded-3xl px-5 py-2 sm:py-6">
                تقديم طلب سعر
              </Button>
            </div>
          </div>
          <div className="lg:w-3/4 lg:mt-auto mt-8 w-full">
            <div className="" dir="rtl">
              <div className="sm:flex sm:space-y-0 space-y-5 justify-between items-center">
                <div className="text-[#6B66DA] bg-[#6B66DA] bg-opacity-20 lg:px-5 px-3 py-1 rounded-full flex items-center">
                  <BsTagFill className="text-[#6B66DA]" size={18} />
                  <p className="lg:ms-2 ms-1 font-rbRegular md:font-rbBold text-[10px]">
                    المأكولات والمشروبات{" "}
                  </p>
                </div>
                <div className="text-[#6B66DA] bg-[#6B66DA] bg-opacity-20 px-3 lg:px-4 py-1 rounded-full flex items-center">
                  <TiLocationOutline className="text-[#6B66DA]" size={18} />
                  <p className="lg:ms-2 ms-1 text-[10px] font-rbRegular md:font-rbBold">
                    الرياض
                  </p>
                </div>
                <div className="text-[#6B66DA] bg-[#6B66DA] bg-opacity-20 px-3 lg:px-4 py-1 rounded-full flex items-center">
                  <p className="text-[10px] font-rbRegular md:font-rbBold">
                    رقم الطلب 991999
                  </p>
                </div>
                <div className="text-[#6B66DA] bg-[#6B66DA] bg-opacity-20 px-3 lg:px-4 py-1 rounded-full flex items-center">
                  <p className="text-[10px] font-rbRegular md:font-rbBold">
                    حالة الطلب نشط حاليا
                  </p>
                </div>
              </div>
              <div className="md:mb-10 mb-5">
                <h1 className="font-rbBold text-[18px] md:text-[20px] text-[#061C3D] my-6">
                  لابتوب ماك بوك اير 2020 من ابل
                </h1>
                <p className="sm:font-rbRegular sm:text-start text-center mb-5 font-rbLight tracking-wide text-[#42526B]">
                  شريحة ابل M1 وشاشة ريتينا 13 انش، ذاكرة RAM سعة 8GB، تخزين SSD
                  سعة 256GB، كيبورد باضاءة خلفية، خاصية Facetime وكاميرا HD
                  وتاتش اي دي. يعمل مع ايفون وايباد؛ سبيس جراي
                </p>
                <p className="sm:font-rbRegular sm:text-start text-center font-rbLight tracking-wide text-[#42526B]">
                  شريحة ابل M1 وشاشة ريتينا 13 انش، ذاكرة RAM سعة 8GB، تخزين SSD
                  سعة 256GB، كيبورد باضاءة خلفية، خاصية Facetime وكاميرا HD
                  وتاتش اي دي. يعمل مع ايفون وايباد؛ سبيس جراي
                </p>
              </div>
              <div className="flex justify-between items-center mb-3 mt-6">
                <div className="flex items-center">
                  <FaCircle className="text-[red] me-3 text-opacity-30 text-[10px]" />
                  <span className="text-[#000] font-rbLight">الكمية</span>
                </div>
                <span className="text-[#000] md:font-rbBold font-rbRegular">
                  عدد 12 عبوة
                </span>
              </div>
              <hr className="mb-3" />
              <div className="flex justify-between mb-3 items-center">
                <div className="flex items-center">
                  <FaCircle className="text-[red] me-3 text-opacity-30 text-[10px]" />
                  <span className="text-[#000] font-rbLight">
                    تاريخ التسليم
                  </span>
                </div>
                <span className="text-[#000] md:font-rbBold font-rbRegular ">
                  12/03/2024
                </span>
              </div>
              <hr className="mb-3" />
              <div className="flex mx-auto text-[#000] my-4 text-[12px] w-full justify-between items-center">
                <div className="">
                  <button className="font-rbBold">
                    الوقت المتبقي حتى نهاية الطلب
                  </button>
                </div>
                <div className=" text-[#6B66DA] bg-[#6B66DA] font-rbRegular sm:font-rbBold rounded-xl px-3 md:px-7 py-1 sm:py-2 text-center bg-opacity-20">
                  <div className="justify-center gap-4 md:gap-6 text-[16px] md:text-[20px] flex items-center">
                    <span>00</span>
                    <span>00</span>
                    <span>123</span>
                  </div>
                  <p className="sm:text-[8px] text-[10px]">ريال سعودي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
