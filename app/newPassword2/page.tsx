"use client";
import Header from "@/components/Layout/Header";
import InputForm from "@/components/inputForm";
import React from "react";
import { LuPenLine } from "react-icons/lu";
type Props = {};
const page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header />
      <div className="bg-gradient-radial md:pb-28 pb-16 lg:pb-40 from-blue-100 to-pink-50 via-gray-100">
        <div className="text-center w-[95%] mx-auto md:pt-20 pt-8">
          <div className=" text-[#0A102F] lg:text-[45px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
            <span> إنشاء ح</span>
            <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 pe-4 py-0">
              ساب جديد
            </span>
            <div className="text-[14px] md:text-[18px] text-gray-700 sm:my-8 my-4 font-rbRegular">
              <p>برجاء ادخال البيانات المطلوبة</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[95%] py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border mx-auto md:mt-0 md:mb-24 sm:mb-16 mb-8 md:w-[70%] lg:w-[50%] sm:w-[80%] shadow md:shadow-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 space-y-4 md:space-y-6 sm:p-6">
              <h1 className="text-xl relative flex items-center justify-start font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <span className="bg-[#F84F39] bg-opacity-20 md:p-3 p-2 absolute rounded-full"></span>
                <LuPenLine className="pe-3 ms-2 text-[30px] md:text-[40px] text-[#F84F39]" />
                التسجيل كممثل منشأة
              </h1>
            </div>
            <form>
              <div className="px-3 pb-6">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <InputForm placeholder="السجل التجاري" type="text" />
                  <InputForm placeholder="اسم المنشأة" type="text" />
                  <InputForm placeholder="رقم الجوال" type="text" />
                  <InputForm placeholder="البريد الالكتروني" type="text" />
                  <InputForm placeholder="رقم هوية المفاوض" type="text" />
                  <InputForm placeholder="اسم المفاوض" type="text" />
                  <InputForm placeholder="كلمة المرور" type="text" />
                  <InputForm placeholder="تاكيد كلمة المرور" type="text" />
                </div>
                <div>
                  <InputForm placeholder="صفة المفاوض" type="text" />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-[#F84F39] hover:bg-opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 sm:font-rbRegular font-rbLight text-white hover:text-black rounded-lg sm:rounded-3xl px-5 py-2 sm:py-3"
                >
                  تسجيل جديد
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
