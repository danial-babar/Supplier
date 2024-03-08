import React from "react";
import { CiSearch } from "react-icons/ci";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <h1 className="text-black text-4xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-[43px]  relative font-rbBold">
        بحث عن طل
        <span className="rounded-3xl bg-[#BDFFA5] pe-3 h-6 py-1">
          بات التوريد
        </span>
      </h1>
      <h4 className="text-black font-rb sm:text-xl md:text-[18px] mt-10 text-center font-[400]">
        تتيح منصة مــوّرد الإلكتروني فرصة مشاركة طلب وعرض سعر الإلكترونية من
        مختلف مناطق المملكة
      </h4>
      <div className="flex justify-between mx-auto items-center">
        <h3>اختر حالة الطلب</h3>
        <h4>اختر حالة الطلب</h4>
        <h5>اختر حالة الطلب</h5>
        <h6 className="bg-[#F84F39] p-5 rounded-full text-white">
        <CiSearch className="text-[30px]"/>
        </h6>
      </div>
    </div>
  );
};

export default Banner;
