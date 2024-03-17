import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-between py-8 sm:py-10 md:py-14 lg:py-28 bg-gradient-radial from-gray-100 via-gray-50">
      <h1 className="text-black text-[16px] sm:text-[20px] md:text-[25px] lg:text-[50px] relative font-rbBold">
        بحث عن طل
        <span className="rounded-3xl bg-[#BDFFA5] pe-3 ">
          بات التوريد
        </span>
      </h1>
      <h4 className="text-black opacity-60 font-rb text-[16px] sm:text-[19px] md:mt-10 sm:mt-8 mt-4 text-center font-rbRegular">
        تتيح منصة <span className="font-rbBold">مــوّرد</span> الإلكتروني فرصة مشاركة طلب وعرض سعر الإلكترونية من
        مختلف مناطق المملكة
      </h4>

      <div className="grid grid-cols-1 lg:px-5 px-3 justify-between items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 parent bg-white md:w-[85%] w-[95%] shadow-small md:shadow-2xl shadow-[grey] lg:py-2 py-5 rounded-medium lg:rounded-full md:mt-10 sm:mt-8 mt-6 lg:mt-14 text-[12px] font-rbRegular">
        
          <div className="flex items-center">
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
        
       
          <div className="flex items-center">
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
      

     
          <div className="flex items-center ">
            <Image src="/location.png" width={20} height={20} alt="" />
            <div>
              <p className="text-gray-400 px-2"> ترتيب</p>
              <p className="text-[16px] px-1">اختر من الاحدث الي الاقدم</p>
            </div>
          </div>
          <div className="flex items-center lg:mr-24">
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
     
        <div className=" lg:w-[60px] sm:text-start text-center">
          <Link href="/search">
            <div className="bg-[#F84F39] md:p-3 w-full lg:w-[60px] p-2 lg:p-4 rounded-full text-white">
              <CiSearch className="text-[25px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
