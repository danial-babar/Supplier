import React from "react";
import { CiSearch } from "react-icons/ci";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <h1 className="text-black text-4xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-[53px]  font-[900] relative ">
        بحث عن طل
        <span className="rounded-3xl bg-[#BDFFA5] pe-3 h-6 py-1">
          بات التوريد
        </span>
      </h1>
      <h4 className="text-black text-[18px] sm:text-xl md:text-[18px] lg:text-[20px] xl:text-[20px] mt-10 text-center font-bhaji">
        تتيح منصة مــوّرد الإلكتروني فرصة مشاركة طلب وعرض سعر الإلكترونية من
        مختلف مناطق المملكة
      </h4>
      <div className="flex justify-between align-middle">
        <h6 className="bg-[#F84F39]"></h6>
        <h6>
          <CiSearch />
        </h6>
        <h6></h6>
      </div>
    </div>
  );
};

export default Banner;
