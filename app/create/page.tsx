"use client";
import React from "react";
import Image from "next/image";
import { MdLogin } from "react-icons/md";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
type Props = {};
const page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header />
      <div className="bg-gradient-radial from-blue-100 to-pink-50 via-gray-100">
        <div className="text-center w-[95%] mx-auto md:pt-20 pt-8">
          <div className=" text-[#0A102F] lg:text-[45px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
            <span> إنشاء ح</span>
            <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 pe-4 py-0">
              ساب جديد
            </span>
            <div className="text-[14px] md:text-[18px] text-gray-700 sm:my-8 my-4 font-rbRegular">
              <p>فضلا قم باختيار نوع الحساب</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[95%] py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border mx-auto md:mt-0 md:w-[50%] sm:w-[70%] shadow md:shadow-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 space-y-4 md:space-y-6 sm:p-6">
              <h1 className="text-xl relative flex items-center justify-start font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <span className="bg-[#F84F39] bg-opacity-20 md:p-3 p-2 absolute rounded-full"></span>
                <MdLogin className="pe-3 ms-2 text-[30px] md:text-[40px] text-[#F84F39]" />{" "}
                إنشاء حساب جديد
              </h1>
              <div className="flex items-center border p-3 rounded-lg">
                <Image src="/filter1.png" width={20} height={20} alt="" />
                <div className="px-3">
                  <p className=" text-gray-900 font-rbRegular"> التسجيل كفرد</p>
                  <button
                    className="text-[16px] text-gray-400 font-rbLight"
                    type="submit"
                  >
                    يمكنك التسجيل كفرد و تقديم وطلب عرض اسعار
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default page;
