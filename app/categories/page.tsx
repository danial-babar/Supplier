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
          <div className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold relative">
            التصني
            <span className="rounded-3xl bg-[#BDFFA5] pe-4 h-6 py-0">
              فات الأكثر
            </span>
            <span>طلبا للتوريد</span>
            <p className="text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular sm:mt-4 mt-2">
              تقدم منصة <strong className="sm:font-rbBold font-rbLight">مــوّرد</strong> مجموعة متنوعة من المنتجات
              الأكثر طلبًا في صناعة التوريد.
            </p>
            <p className="text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular mt-2">
              نحن متخصصون في توفير حلول فعالة وذات جودة عالية لاحتياجاتكم
            </p>
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
      <div className="w-[95%] lg:gap-7 bg-gradient-radial from-gray-100 via-gray-100 pb-8 sm:pb-12 md:pb-16 lg:pb-24 mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      <CategoriesSupply text={" هي مجموعة من المواد الاصطناعية التي تمتاز بمرونتها وقابليتها للتشكيل"} />
      <CategoriesSupply text={" المأكولات والمشروبات تشمل جميع الأطعمة والمشروبات التي يتم تناولها للتغذية والاستمتاع بالطعام والشراب."} />
      <CategoriesSupply text={"يشمل هذا التصنيف مجموعة واسعة من الصناعات والقطاعات التي تعتمد على تقديم خدمات للآخرين بدلاً من إنتاج سلع ملموسة."} />
      </div>
      <div className="w-[95%] text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold md:my-20 my-8 text-center relative">
        عرض جميع
        <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 pe-4 h-6 py-0">
          التصنيفات
        </span>
        <p className="text-[16px] sm:text-[18px] text-gray-700 sm:mt-4 mt-2 font-rbLight sm:font-rbRegular">
          تتيح لك منصة <strong className="sm:font-rbBold font-rbLight">مــوّرد</strong> الإلكتروني المشاركة في طلبات
          التوريد المطروحة في أي وقت ومن أي مكان بكل سهولة
        </p>
      </div>
      <div className="w-[95%] lg:gap-7 bg-gradient-radial from-gray-100 via-gray-100 pb-8 sm:pb-12 md:pb-16 lg:pb-24 mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      <CategoriesSupply text={" هي مجموعة من المواد الاصطناعية التي تمتاز بمرونتها وقابليتها للتشكيل"} />
      <CategoriesSupply text={" المأكولات والمشروبات تشمل جميع الأطعمة والمشروبات التي يتم تناولها للتغذية والاستمتاع بالطعام والشراب."} />
      <CategoriesSupply text={"يشمل هذا التصنيف مجموعة واسعة من الصناعات والقطاعات التي تعتمد على تقديم خدمات للآخرين بدلاً من إنتاج سلع ملموسة."} />
      </div>
      <div className="md:mt-20 text-center mt-8 mb-8">
        <a
          href=""
          className="bg-[#F84F39] px-4 py-2 rounded-medium md:rounded-full text-white font-rbRegular"
        >
          المزيد من التنصيفات...
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default page;
