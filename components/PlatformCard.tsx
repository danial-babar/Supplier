import Image from "next/image";
import React from "react";

type Props = {
  icon: any;
  title: string;
  description: string;
};

const PlatformCard = ({ icon, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center md:mt-14 sm:mt-10 mt-8">
      <div className="flex w-[50px] h-[50px] bg-white border border-[#F84F39] rounded-full items-center justify-center">
        <Image src={icon} alt="" width={25} height={25} />
      </div>
      <h4 className="text-black text-[16px] sm:text-[12px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-center w-[100%] md:w-[90%] lg:w-[85%] xl:w-[80%] sm:mt-4 mt-5 font-rbBold">
        {title}
      </h4>
      <p className="text-[#475467] text-[16px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-center w-[100%] md:w-[90%] lg:w-[85%] xl:w-[80%] my-3 font-rbRegular">
        {description}
      </p>
    </div>
  );
};

export default PlatformCard;
