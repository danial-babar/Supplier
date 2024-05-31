import { partners } from "@/constants/PartnersData";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Partners = (props: Props) => {
  return (
    <div className="relative w-[100%] mx-auto">
      <div className="text-center mt-14 sm:mt-20">
        <h3 className="sm:text-[28px] md:text-[36px] lg:text-[50px] text-[18px] font-rbBold">
          شــ<span className="ps-10 bg-[#BDFFA5] rounded-3xl">ــركــاؤنا</span>
        </h3>

        <div className="my-5">
          <p className="sm:font-rbBold font-rbRegular text-[16px] sm:text-[20px] mb-3 text-[#475467]">
            نفخر بالتعاون مع شركاء منصة مــوّرد الإلكتروني
          </p>
          <p className="text-[18px] sm:text-[14px] md:text-[18px] text-black text-opacity-50 sm:font-rbRegular font-rbLight">
            موثوق به من قبل أكثر من 10,000 جهة داخل المملكة
          </p>
        </div>
      </div>
      <div className="md:py-10">
        <Marquee className=" mt-3" direction="right" speed={70} pauseOnHover>
          {partners?.map((item, index) => (
            <Image
              src={item?.url}
              alt=""
              width={100}
              height={100}
              key={index}
              className="mx-10 md:text-[36px] text-[22] lg:text-[50px] grayscale-[100%] w-[80px] sm:w-[100px] md:w-[140px] h-[100px] object-contain tint hover:grayscale-0 transition-opacity cursor-pointer"
            />
          ))}
        </Marquee>
        <Marquee className="w-full mb-3" direction="left" speed={70} pauseOnHover>
          {partners?.reverse()?.map((item, index) => (
            <Image
              src={item.url}
              alt=""
              width={100}
              height={100}
              key={index}
              className="grayscale-[100%] mx-10 md:text-[36px] text-[22px] lg:text-[50px] w-[80px] sm:w-[100px] md:w-[140px] h-[100px] object-contain hover:grayscale-0 transition-opacity cursor-pointer"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
