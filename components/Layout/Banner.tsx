import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-[95] flex flex-col items-center justify-between py-8 sm:py-10 md:py-14 lg:py-28 bg-gradient-radial from-gray-100 via-gray-50">
      <h1 className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] relative font-rbBold">
        بحث عن طل
        <span className="rounded-3xl bg-[#BDFFA5] pe-3 ">بات التوريد</span>
      </h1>
      <h4 className="text-black w-[95%] opacity-80 tracking-wide sm:opacity-60 text-[16px] sm:text-[18px] md:mt-10 sm:mt-8 mt-4 text-center font-rbLight sm:font-rbRegular">
        تتيح منصة <span className="sm:font-rbBold font-rbRegular">مــوّرد</span>{" "}
        الإلكتروني فرصة مشاركة طلب وعرض سعر الإلكترونية من مختلف مناطق المملكة
      </h4>

      <div className="lg:w-[85%] w-[95%]">
        <div className="md:flex lg:px-5 md:gap-0 gap-5 px-3 items-center parent bg-white shadow-small md:shadow-2xl shadow-[grey] lg:py-2 py-5 rounded-medium lg:rounded-full md:mt-10 sm:mt-8 mt-6 lg:mt-14 text-[12px] font-rbRegular">
          
        <div className="flex items-center md:mb-0 mb-6 md:w-1/5 lg:w-1/4">
          <Image src="/filter1.png" width={20} height={20} alt="" />
          <div>
            <p className="text-gray-400 px-2">التصنيف </p>
            <select
              id="categories"
              className="text-gray-900 text-[16px] focus:ring-blue-500 appearance-none focus:border-none px-2 border-none bg-transparent dark:text-white"
            >
              <option selected>اختر التصنيف</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>

        <div className="flex items-center md:mb-0 mb-6 md:w-1/5 lg:w-1/4">
          <Image src="/filter2.png" width={20} height={20} alt="" />
          <div>
            <p className="text-gray-400 px-2"> المدينة</p>
            <select
              id="countries"
              className="text-gray-900 text-[16px] focus:ring-blue-500 appearance-none focus:border-none px-2 border-none bg-transparent dark:text-white"
            >
              <option selected>اختر المدينة</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>

        <div className="flex items-center md:mb-0 mb-6 md:w-1/3 lg:w-1/4">
          <Image src="/location.png" width={20} height={20} alt="" />
          <div>
            <p className="text-gray-400 px-2"> ترتيب</p>
            <p className="text-[16px] px-1">اختر من الاحدث الي الاقدم</p>
          </div>
        </div>
        <div className="flex items-center md:mb-0 mb-6 md:w-1/6">
          <Image src="/flag.png" width={20} height={20} alt="" />
          <div>
            <p className="text-gray-400 px-2"> حالة الطلب</p>
            <select
              id="order_status"
              className="text-gray-900 focus:ring-blue-500 text-[16px] appearance-none focus:border-none px-2 border-none bg-transparent dark:text-white"
            >
              <option selected>اختر حالة الطلب</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>

        <div className="md:w-auto sm:w-1/2 w-full md:text-start text-end">
          <Link href="/search">
            <div className="bg-[#F84F39] md:p-3 w-full p-2 lg:p-4 rounded-full text-white">
              <CiSearch className="text-[25px]" />
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
