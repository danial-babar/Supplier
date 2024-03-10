import Image from "next/image";
import React from "react";

type Props = {
  icon: any;
  title: string;
  description: string;
};

const PlatformCard = ({ icon, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center mt-14 ">
      <div className="flex w-[50px] h-[50px] bg-white border border-[#F84F39] rounded-full items-center justify-center">
        <Image src={icon} alt="" width={25} height={25} />
      </div>
      <h4 className="text-black text-[16px] sm:text-[12px] md:text-[18px] lg:text-[20px] xl:text-[22pxpx] text-center w-[60%] mt-3 font-rbBold">
        {title}
      </h4>
      <p className="text-black text-[16px] sm:text-[12px] md:text-[18px] lg:text-[20px] xl:text-[22pxpx] text-center w-[60%] mt-3 font-rbRegular">{description}</p>
    </div>
  );
};

export default PlatformCard;
