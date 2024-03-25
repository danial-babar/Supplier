"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import CategoriesSupply from "@/components/categoriesSupply";
// import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header activeItem={2} />
      <div>

        <div className="md:my-24 sm:my-10 mt-10 w-[95%] mx-auto sm:flex justify-between items-center ">
          <div className="text-black lg:text-[50px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
            التصني
            <span className="rounded-3xl bg-[#BDFFA5] pe-4 h-6 py-0">
              فات الأكثر
            </span>
            <span>طلبا للتوريد</span>
            <p className="text-[14px] md:text-[18px] sm:mt-4 mt-2 font-rbRegular">
              تقدم منصة <strong>مــوّرد</strong> مجموعة متنوعة من المنتجات الأكثر طلبًا في صناعة
              التوريد. 
            </p>
              <p className="text-[14px] md:text-[18px] mt-2 font-rbRegular">نحن متخصصون في توفير حلول فعالة وذات جودة عالية لاحتياجاتكم</p>
          </div>
          <div className="flex items-center sm:mb-auto mb-4 sm:justify-start justify-end sm:mt-auto mt-4">
            <button className="bg-[#6B66DA] border-[2px] border-[#6B66DA] text-white rounded-full sm:p-3 p-1">
              <MdKeyboardArrowRight className="text-xl md:text-2xl" />
            </button>
            <button className="text-[#6B66DA] ms-3 border-[2px] border-[#6B66DA] rounded-full sm:p-3 p-1">
              <MdOutlineKeyboardArrowLeft className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>
      </div>
        <CategoriesSupply/>
        <div className="w-[95%] text-black lg:text-[50px] md:text-[34px] md:my-20 my-8 sm:text-[22px] text-[14px] text-center relative font-rbBold">
        عرض جميع 
            <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 pe-4 h-6 py-0">
            التصنيفات
            </span>
            <p className="text-[14px] md:text-[18px] text-gray-700 sm:mt-4 mt-2 font-rbRegular">
              تتيح لك منصة <strong>مــوّرد</strong> الإلكتروني المشاركة في طلبات التوريد المطروحة في أي وقت ومن أي مكان بكل سهولة
            </p>
          </div>
          <CategoriesSupply/>
          <div className="md:mt-20 text-center mt-8 mb-8">
            <a href="" className="bg-[#F84F39] px-4 py-2 rounded-medium md:rounded-full text-white font-rbRegular">المزيد من التنصيفات...</a>
          </div>
      <Footer />
    </div>
  );
};

export default page;
