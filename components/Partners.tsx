import { partners } from "@/constants/Partners";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Partners = (props: Props) => {
  return (
    <div className="relative w-[90%] mx-auto">
      <div className="md:py-10">
        <Marquee className=" mt-3" direction="right" speed={70}>
          {partners?.map((item, index) => (
            <Image
              src={item?.url}
              alt=""
              width={100}
              height={100}
              key={index}
              className="mx-10 md:text-[36px] text-[22] lg:text-[50px] grayscale-[100%] w-[80px] sm:w-[100px] md:w-[140px] h-[100px] object-contain hover:grayscale-0 transition-opacity cursor-pointer"
            />
          ))}
        </Marquee>
        <Marquee className="w-full mb-3" direction="left" speed={90}>
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
