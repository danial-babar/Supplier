import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <h1 className="text-black text-4xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-[43px]  relative font-rbBold">
        بحث عن طل
        <span className="rounded-3xl bg-[#BDFFA5] pe-3 h-6 pb-1">
          بات التوريد
        </span>
      </h1>
      <h4 className="text-black font-rb sm:text-xl md:text-[18px] mt-14 text-center font-rbRegular">
        تتيح منصة مــوّرد الإلكتروني فرصة مشاركة طلب وعرض سعر الإلكترونية من
        مختلف مناطق المملكة
      </h4>
      <div className="flex w-[80%] md-w-[100%] shadow-2xl shadow-[grey] py-2 rounded-full mt-14 justify-between px-10 items-center">
        <div className="flex items-center">
          <Image src="/filter1.png" className="me-4" width={20} height={20} alt=""/>
          <div><p className="text-gray-400">التصنيف </p><p>اختر التصنيف</p></div>
        </div>
       
        <div className="flex items-center">
        <Image src="/filter2.png" className="me-4" width={20} height={20} alt=""/>
        <div><p className="text-gray-400"> المدينة</p> <p>اختر المدينة</p></div>
        </div>
       
        <div className="flex items-center">
        <Image src="/location.png" className="me-4" width={20} height={20} alt=""/>
        <div><p className="text-gray-400"> ترتيب</p><p>اختر من الاحدث الي الاقدم</p></div>
        </div>
       
        <div className="flex items-center">
        <Image src="/flag.png" className="me-4" width={20} height={20} alt=""/>
        <div><p className="text-gray-400"> حالة الطلب</p><p>اختر حالة الطلب</p></div>
        </div>
        <h6 className="bg-[#F84F39] p-5 rounded-full text-white">
        <CiSearch className="text-[25px]"/>
        </h6>
      </div>
    </div>
  );
};

export default Banner;
