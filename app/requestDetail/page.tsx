"use client"
import React from "react";
import Imagecarousel from "@/components/slider";
import CategoriesSupply from "@/components/categoriesSupply";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
type Props = {};
const page = (props: Props) => {
  return (
    <div className="" dir="">
        <Header/>
      <Imagecarousel />
      <div dir="rtl">
        <div className="md:my-24 sm:my-10 mt-10 w-[95%] mx-auto sm:flex justify-between items-center ">
          <h1 className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] relative font-rbBold">
            الطلبات ا
            <span className="rounded-3xl bg-[#BDFFA5] pe-2 h-6 py-0">
              لمتشابهة
            </span>
            <p className="text-[16px] sm:text-[18px] sm:w-[60%] font-rbLight sm:font-rbRegular sm:mt-5 mt-3">
              تقدم منصة <span className="font-rbBold">مــوّرد</span> مجموعة متنوعة من المنتجات الأكثر طلبًا في صناعة
              التوريد. نحن متخصصون في توفير حلول فعالة وذات جودة عالية
              لاحتياجاتكم.
            </p>
          </h1>
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
      <div className="w-[95%] shadow-slate-700 sm:pb-12 md:pb-16 lg:pb-24 mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5" dir="rtl">
      <CategoriesSupply text={" هي مجموعة من المواد الاصطناعية التي تمتاز بمرونتها وقابليتها للتشكيل"} />
      <CategoriesSupply text={" المأكولات والمشروبات تشمل جميع الأطعمة والمشروبات التي يتم تناولها للتغذية والاستمتاع بالطعام والشراب."} />
      <CategoriesSupply text={"يشمل هذا التصنيف مجموعة واسعة من الصناعات والقطاعات التي تعتمد على تقديم خدمات للآخرين بدلاً من إنتاج سلع ملموسة."} />
      </div>
      <div dir="rtl">
        <Footer/>
      </div>
    </div>
  );
};
export default page;
