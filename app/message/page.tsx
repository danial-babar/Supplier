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
        <div className="grid w-[95%] grid-cols-1 md:grid-cols-2 gap-4 mx-auto items-center">
          <div className="text-[#0A102F] lg:text-[45px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
            رسالة
            <span className="rounded-3xl bg-[#BDFFA5] pe-4 h-6 py-0">جديد</span>
            <div className="text-[14px] md:text-[18px] text-gray-700 sm:mt-8 mt-4 font-rbRegular">
              <p>يمكنك الان استقبال الرسائل حول عرض التوريد الخاص بك</p>
            </div>
          </div>
          <div className="">
            <Image
              src="/message.png"
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
          <div className="xl:flex mb-8 xl:justify-between justify-center items-center p-6 bg-white rounded-xl shadow-lg hover:bg-gray-100">
            <div className="flex flex-wrap xl:justify-start justify-evenly gap-4 md:gap-12 items-center">
              <div
                className="flex py-2 items-center md:px-5 px-3 justify-center text-[16px] xl:justify-end border bg-[#F84F39] bg-opacity-20 rounded-full"
                dir="ltr"
              >
                <p className="text-[#F84F39] block me-1 text-[12px] font-rbRegular">
                  11/03/2024 : 11:10 am
                </p>
                <Image src={"/calender.png"} alt="" width={14} height={14} />
              </div>
              <div className="font-rbRegular md:font-rbBold md:text-lg sm:text-base">
                رسالة جديدة
              </div>
              <div className="font-rbRegular text-gray-600 md:text-lg sm:text-xs sm:text-xs">
                لقد حصلت علي رساله جديدة
              </div>
              <div className="lg:font-rbRegular sm:text-[16px] xl:text-[18px] text-[14px]">
                رقم الطلب{" "}
                <span className="text-[#F84F39] lg:font-rbBold">991999 </span>{" "}
                تاريخ الانتهاء{" "}
                <span className="text-[#F84F39] lg:font-rbBold font-rbRegular">
                  12/03/2028
                </span>
              </div>
            </div>
            <div className="flex xl:justify-start justify-center items-center xl:mt-0 mt-4 gap-1">
              عرض التفاصيل الطلب{" "}
              <FaPlus className="text-[#F84F39] bg-[#F84F39] p-1 bg-opacity-20 rounded-full font-light text-[16px]" />
            </div>{" "}
          </div>
          <div className="xl:flex mb-8 justify-between items-center p-6 bg-white rounded-xl shadow-lg hover:bg-gray-100">
            <div className="flex flex-wrap gap-4 md:gap-12 items-center">
              <div
                className="flex py-2 items-center md:px-5 px-3 justify-center text-[16px] xl:justify-end border bg-[#F84F39] bg-opacity-20 rounded-full"
                dir="ltr"
              >
                <p className="text-[#F84F39] block me-1 text-[12px] font-rbRegular">
                  11/03/2024 : 11:10 am
                </p>
                <Image src={"/calender.png"} alt="" width={14} height={14} />
              </div>
              <div className="font-rbRegular md:font-rbBold md:text-lg sm:text-base">
                رسالة جديدة
              </div>
              <div className="font-rbRegular text-gray-600 md:text-lg sm:text-xs sm:text-xs">
                لقد حصلت علي رساله جديدة
              </div>
              <div className="lg:font-rbRegular sm:text-[16px] xl:text-[18px] text-[14px]">
                رقم الطلب{" "}
                <span className="text-[#F84F39] lg:font-rbBold">991999 </span>{" "}
                تاريخ الانتهاء{" "}
                <span className="text-[#F84F39] lg:font-rbBold font-rbRegular">
                  12/03/2028
                </span>
              </div>
            </div>
            <div className="flex items-center xl:mt-0 mt-4 gap-1">
              عرض التفاصيل الطلب{" "}
              <FaPlus className="text-[#F84F39] bg-[#F84F39] p-1 bg-opacity-20 rounded-full font-light text-[16px]" />
            </div>{" "}
            {/* Show 'aa' on large screens, hide on others */}
          </div>
          <div className="xl:flex mb-8 justify-between items-center p-6 bg-white rounded-xl shadow-lg hover:bg-gray-100">
            <div className="flex flex-wrap gap-4 md:gap-12 items-center">
              <div
                className="flex py-2 items-center md:px-5 px-3 justify-center text-[16px] xl:justify-end border bg-[#F84F39] bg-opacity-20 rounded-full"
                dir="ltr"
              >
                <p className="text-[#F84F39] block me-1 text-[12px] font-rbRegular">
                  11/03/2024 : 11:10 am
                </p>
                <Image src={"/calender.png"} alt="" width={14} height={14} />
              </div>
              <div className="font-rbRegular md:font-rbBold md:text-lg sm:text-base">
                رسالة جديدة
              </div>
              <div className="font-rbRegular text-gray-600 md:text-lg sm:text-xs sm:text-xs">
                لقد حصلت علي رساله جديدة
              </div>
              <div className="lg:font-rbRegular sm:text-[16px] xl:text-[18px] text-[14px]">
                رقم الطلب{" "}
                <span className="text-[#F84F39] lg:font-rbBold">991999 </span>{" "}
                تاريخ الانتهاء{" "}
                <span className="text-[#F84F39] lg:font-rbBold font-rbRegular">
                  12/03/2028
                </span>
              </div>
            </div>
            <div className="flex items-center xl:mt-0 mt-4 gap-1">
              عرض التفاصيل الطلب{" "}
              <FaPlus className="text-[#F84F39] bg-[#F84F39] p-1 bg-opacity-20 rounded-full font-light text-[16px]" />
            </div>{" "}
            {/* Show 'aa' on large screens, hide on others */}
          </div>
          <div className="xl:flex mb-8 justify-between items-center p-6 bg-white rounded-xl shadow-lg hover:bg-gray-100">
            <div className="flex flex-wrap gap-4 md:gap-12 items-center">
              <div
                className="flex py-2 items-center md:px-5 px-3 justify-center text-[16px] xl:justify-end border bg-[#F84F39] bg-opacity-20 rounded-full"
                dir="ltr"
              >
                <p className="text-[#F84F39] block me-1 text-[12px] font-rbRegular">
                  11/03/2024 : 11:10 am
                </p>
                <Image src={"/calender.png"} alt="" width={14} height={14} />
              </div>
              <div className="font-rbRegular md:font-rbBold md:text-lg sm:text-base">
                رسالة جديدة
              </div>
              <div className="font-rbRegular text-gray-600 md:text-lg sm:text-xs sm:text-xs">
                لقد حصلت علي رساله جديدة
              </div>
              <div className="lg:font-rbRegular sm:text-[16px] xl:text-[18px] text-[14px]">
                رقم الطلب{" "}
                <span className="text-[#F84F39] lg:font-rbBold">991999 </span>{" "}
                تاريخ الانتهاء{" "}
                <span className="text-[#F84F39] lg:font-rbBold font-rbRegular">
                  12/03/2028
                </span>
              </div>
            </div>
            <div className="flex items-center xl:mt-0 mt-4 gap-1">
              عرض التفاصيل الطلب{" "}
              <FaPlus className="text-[#F84F39] bg-[#F84F39] p-1 bg-opacity-20 rounded-full font-light text-[16px]" />
            </div>{" "}
            {/* Show 'aa' on large screens, hide on others */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default page;
