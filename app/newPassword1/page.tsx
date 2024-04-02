"use client";
import Header from "@/components/Layout/Header";
import CommonButton from "@/components/commonButton";
import InputWithIcon from "@/components/inputWithIcon";
import React from "react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { IoMdLock } from "react-icons/io";
type Props = {};
const page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header />
      <div className="bg-gradient-radial md:pb-28 pb-16 lg:pb-40 from-blue-100 to-pink-50 via-gray-100">
        <div className="text-center w-[95%] mx-auto md:pt-20 pt-8">
          <div className=" text-[#0A102F] text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold relative">
            <span>إنشاء كلمة</span>
            <span className="rounded-3xl bg-[#BDFFA5] ps-2 py-0">
              {" "}
              مرور جديدة
            </span>
            <div className="text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular text-gray-700 sm:mt-8 mt-5 mb-5">
              <p>في حالة الرغبه في إنشاء كلمة مرور جديدة</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[95%] py-5 sm:py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border mx-auto md:mt-0 md:w-[60%] xl:w-[45%] sm:w-[70%] shadow md:shadow-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 space-y-4 md:space-y-6 sm:p-6">
              <h1 className="text-xl relative flex items-center justify-start font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <span className="bg-[#F84F39] bg-opacity-20 md:p-3 p-2 absolute rounded-full"></span>
                <Image
                  src="/stars.png"
                  height={40}
                  width={40}
                  alt=""
                  className="object-contain pe-3 ms-2 star_img "
                />
                كلمة المرور
              </h1>
              <form>
                <InputWithIcon
                  type="text"
                  placeholder="كلمة المرور"
                  icon={<BsThreeDots className="h-3 w-3 text-[#F84F39]" />}
                />
                <InputWithIcon
                  type="text"
                  placeholder="كلمة المرور"
                  icon={<BsThreeDots className="h-3 w-3 text-[#F84F39]" />}
                />
                <div className="mt-4">
                  <CommonButton text="حفظ" bgColor="#F84F39" />
                  <div className="flex items-center  mt-4 justify-center">
                    <hr className="w-full border-t border-red-300 before:w-1/4 before:border-t before:border-r before:border-gray-300 after:w-1/4 after:border-t after:border-l after:border-gray-300 border-dotted" />
                    <div className="mx-2">او</div>
                    <hr className="w-full border-t border-red-300 before:w-1/4 before:border-t before:border-l before:border-gray-300 after:w-1/4 after:border-t after:border-r after:border-gray-300 border-dotted" />
                  </div>
                  <CommonButton text="العودة" bgColor="#11998E" />
                </div>
                <div className="bg-gray-200 sm:p-4 p-1 rounded-md mt-4">
                  <div className="flex items-start">
                    <div className="">
                      <IoMdLock className="text-gray-500 text-[30px] sm:text-[34px]" />
                    </div>
                    <div className="sm:ms-3 ms-2">
                      <ul className="list-inside ">
                        <li className="font-rbRegular sm:mt-1 text-[16px] sm:text-[18px]">يجب انت تحتوي كلمة المرو علي</li>
                        <ol className="list-decimal sm:mt-4 mt-3 sm:font-rbRegular font-rbLight text-[14px] sm:text-[16px] list-inside">
                          <li>يجب أن تتكون كلمة المرور من 8 أحرف على الأقل</li>
                          <li>يجب أن تحتوي على أحرف كبيرة وصغيرة مثال (aA)</li>
                          <li>يجب أن تحتوي على رقم على الأقل</li>
                        </ol>
                      </ul>
                    </div>
                  </div>
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
