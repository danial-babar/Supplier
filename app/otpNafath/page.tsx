"use client"
import Header from "@/components/Layout/Header";
import CommonButton from "@/components/commonButton";
import InputWithIcon from "@/components/inputWithIcon";
import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdLockOutline, } from "react-icons/md";
type Props={};
const page=(props:Props)=>{
    return(
        <div dir="rtl">
        <Header />
        <div className="bg-gradient-radial md:pb-28 pb-16 lg:pb-40 from-blue-100 to-pink-50 via-gray-100">
          <div className="text-center w-[95%] mx-auto md:pt-20 pt-8">
            <div className=" text-[#0A102F] lg:text-[45px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
              <span> رمز ا</span>
              <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 ps-2 pe-4 py-0">
              لتحقق
              </span>
              <div className="text-[14px] md:text-[18px] text-gray-700 sm:mt-8 mt-4 font-rbRegular">
                <p>تم إرسال رمز التحقق إلى تطبيق نفاذ برجاء ادخال الكود</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[95%] py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg dark:border mx-auto md:mt-0 md:w-[45%] sm:w-[70%] shadow md:shadow-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 space-y-4 md:space-y-6 sm:p-6">
                <h1 className="text-xl relative flex items-center justify-start font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  <span className="bg-[#F84F39] bg-opacity-20 md:p-3 p-2 absolute rounded-full"></span>
                  <MdLockOutline className="pe-3 ms-2 text-[30px] md:text-[40px] text-[#F84F39]" />{" "}
                  رمز التحقق 
                </h1>
                <form>
                  {/* <InputWithIcon
                    type="text"
                    placeholder="رمز التحقق"
                    icon={<BsThreeDots className="h-3 w-3 text-[#F84F39]" />}
                  /> */}
                <input type="email" id="email" className="outline-[#11998E] font-rbBold placeholder:text-[#11998E] text-center rounded-lg block w-full md:p-3 p-2.5 bg-[#11998E] bg-opacity-20 border-[#11998E] border-[1.5px]" placeholder="9919993"/>
                 <div className="text-end mt-4">
                 <small className="text-[#F84F39] underline">1:22</small>
                 </div>
                  <div>
                    <CommonButton text="تحقق" bgColor="#F84F39" />
                    <div className="flex items-center  mt-4 justify-center">
                      <hr className="w-full border-t border-red-300 before:w-1/4 before:border-t before:border-r before:border-gray-300 after:w-1/4 after:border-t after:border-l after:border-gray-300 border-dotted" />
                      <div className="mx-2">او</div>
                      <hr className="w-full border-t border-red-300 before:w-1/4 before:border-t before:border-l before:border-gray-300 after:w-1/4 after:border-t after:border-r after:border-gray-300 border-dotted" />
                    </div>
                    <CommonButton
                      text="العودة"
                      bgColor="#11998E"
                    />
                  </div>
  
                  <div className="text-center mt-4">
                    <Link
                      href="#"
                      className="font-rbRegular text-[#F84F39] underline hover:no-underline"
                    >
                     اعادة إرسال الرمز
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default page;