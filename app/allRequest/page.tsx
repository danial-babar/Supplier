"use client";
import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header />
      <div className="bg-gradient-radial from-blue-100 to-blue-50 via-gray-50">
        <div className="grid w-[95%] grid-cols-1 md:grid-cols-2 sm:pt-8 pt-5 gap-4 mx-auto items-center">
          <div className="text-[#0A102F] text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold relative">
          جميع 
            <span className="rounded-3xl bg-[#BDFFA5] pe-4 h-6 py-0">الطلبات</span>
            <div className="text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular text-gray-700 sm:mt-8 mt-4">
              <p>يمكنك عرض جميع الطلبات المقدمة النشطة والمنتهية</p>
            </div>
          </div>
          <div className="">
            <Image
              src="/request.png"
              height={460}
              width={460}
              alt=""
              className="object-contain target_img mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-radial from-blue-100 to-pink-50 via-gray-100">
        <div className="w-[95%] mx-auto ">
          <div className="lg:flex mb-8 lg:justify-between justify-center items-center p-6 bg-white rounded-xl shadow-lg hover:bg-gray-100">
            <div className="flex flex-wrap lg:justify-start justify-evenly gap-4 lg:gap-20 md:gap-12 items-center">
              <div
                className="py-1 sm:px-3 px-5 text-[16px] border bg-[#F84F39] bg-opacity-20 rounded-full"
                dir="ltr"
              >
                <p className="text-[#F84F39] text-[12px] font-rbRegular">
                نشط
                </p>
              </div>
              <div className="font-rbRegular md:font-rbBold sm:text-[20px] text-[16px] md:text-lg sm:text-base">
              الاجهزة الالكترونية
              </div>
              <div className="sm:font-rbBold font-rbRegular text-[12px]">
                رقم الطلب{" "}
                <span className="text-[#F84F39] lg:font-rbBold">991999 </span>{" "}
                تاريخ الانتهاء{" "}
                <span className="text-[#F84F39] lg:font-rbBold font-rbRegular">
                  12/03/2028
                </span>
              </div>
            </div>
            <div className="flex lg:justify-start justify-center items-center lg:mt-0 mt-4 gap-1">
              عرض التفاصيل الطلب{" "}
              <FaPlus className="text-[#F84F39] bg-[#F84F39] p-1 bg-opacity-20 rounded-full font-light text-[16px]" />
            </div>{" "}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default page;
