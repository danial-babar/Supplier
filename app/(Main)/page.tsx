"use client";
import Header from "@/components/Layout/Header";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl" className="">
      <Header activeItem={0} />
      <div className="w-full flex flex-col items-center justify-center mt-5">
        <h1 className="text-black text-4xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-[50px] relative ">
          بحث عن طل
          <span className="rounded-full bg-[#BDFFA5] px-2">بات التوريد</span>
        </h1>
        <h4 className="text-black text-[18px] sm:text-xl md:text-[18px] lg:text-[20px] xl:text-[20px] mt-10 text-center">
          تتيح منصة مــوّرد الإلكتروني فرصة مشاركة طلب وعرض سعر الإلكترونية من
          مختلف مناطق المملكة
        </h4>
      </div>
    </div>
  );
};

export default page;
