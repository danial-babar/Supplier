"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import CommonButton from "@/components/commonButton";
import ImageCarousel from "@/components/slider";
import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { LuArrowUpToLine } from "react-icons/lu";
type Props = {};
const page = (props: Props) => {
  return (
    <div className="">
      <Header />
      <ImageCarousel />
      <div
        className="md:my-24 sm:my-10 mt-10 w-[95%] mx-auto md:flex justify-between items-center "
        dir="rtl"
      >
        <h1 className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] relative font-rbBold">
          ادارة ال
          <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 sm:pe-14 pe-8 h-6 py-0">
            طلب
          </span>
          <p className="text-[16px] sm:text-[18px] sm:w-[85%] lg:w-[60%] font-rbLight sm:font-rbRegular sm:mt-5 mt-3">
            تقدم منصة <span className="font-rbBold">مــوّرد</span> مجموعة متنوعة
            من المنتجات الأكثر طلبًا في صناعة التوريد. نحن متخصصون في توفير حلول
            فعالة وذات جودة عالية لاحتياجاتكم.
          </p>
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:mb-auto mb-4 sm:justify-start justify-end md:mt-auto mt-5">
          <Button className="border-[#F84F39] bg-white sm:w-auto w-full px-8 sm:px-14 border-1 rounded-full text-[#F84F39]">
            ايقاف الطلب
          </Button>
          <Button className="text-[#fff] sm:w-auto w-full rounded-full px-8 sm:px-14 bg-[#F84F39]">
            الغاء الطلب
          </Button>
        </div>
      </div>
      <div className="my-5 w-[95%] mx-auto">
      <div className="flex flex-wrap justify-between">
      <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-40">
        <p>text</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-40">
        <p>text</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-40">
        <p>text</p>
      </div>
    </div>
      </div>
      <div
        className="w-[95%] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg"
        dir="rtl"
      >
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="md:text-xl text-small border-b-1 text-[black] uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                افضل سعر
              </th>
              <th scope="col" className="px-6 py-3">
                المورد
              </th>
              <th scope="col" className="px-6 py-3">
                التاريخ
              </th>
              <th scope="col" className="px-6 py-3">
                أفضل سعر
              </th>
              <th scope="col" className="px-6 py-3">
                الاجراء
              </th>
            </tr>
          </thead>
          <tbody className="text-[#000]">
            <tr className="bg-white border-b text-nowrap dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center text-[#34E5A8] font-rbRegular md:font-rbBold gap-1">
                  <LuArrowUpToLine /> 123.00.00 ريال سعودي
                </div>
              </th>
              <td className="px-6 py-4 font-rbRegular md:font-rbBold ">
                المورد الاول
              </td>
              <td className="px-6 py-4">12/03/2024 - 3:00pm</td>
              <td className="px-6 py-4">
                <div className="flex items-center md:font-rbBold font-rbRegular">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  أفضل سعر
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-[#6B66DA] lg:px-4 px-3 bg-[#6B66DA] bg-opacity-20 py-2 rounded-full text-center">
                  <p className="text-[12px] font-rbRegular md:font-rbBold">
                    اتمام الصفقة
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div dir="rtl">
        <Footer />
      </div>
    </div>
  );
};
export default page;
