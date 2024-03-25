"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { MdLogin, MdPeopleAlt } from "react-icons/md";
type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header />
      <div className="bg-gradient-radial from-blue-100 to-pink-50 via-gray-100">
        <div className="text-center w-[95%] mx-auto md:pt-20 pt-8">
          <div className=" text-[#0A102F] lg:text-[45px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
            <span> تـسجيل </span>
            <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 ps-2 pe-4 py-0">
              الـدخول
            </span>
            <div className="text-[14px] md:text-[18px] text-gray-700 sm:mt-8 mt-4 font-rbRegular">
              <p>يمكنك الدخول عن طريق حسابك الشخصي او الدخول عبر بوابة نفاذ</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[95%] py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border mx-auto md:mt-0 md:w-[45%] sm:w-[70%] shadow md:shadow-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 space-y-4 md:space-y-6 sm:p-6">
              <h1 className="text-xl relative flex items-center justify-start font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <span className="bg-[#F84F39] bg-opacity-20 md:p-3 p-2 absolute rounded-full"></span>
                <MdLogin className="pe-3 ms-2 text-[30px] md:text-[40px] text-[#F84F39]" />{" "}
                تـسجيل الـدخول
              </h1>
              <form>
                <div className="relative mt-4">
                  <div className="absolute inset-y-0 right-0 flex items-center ps-2 pointer-events-none">
                    <GoPeople className="h-3 w-3 text-[#F84F39]" />
                  </div>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 ps-8 placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="أسم المستخدم"
                  />
                </div>

                <div className="relative mt-4">
                  <div className="absolute inset-y-0 right-0 flex items-center ps-2 pointer-events-none">
                    <BsThreeDots className="h-3 w-3 text-[#F84F39]" />
                  </div>
                  <input
                    type="password"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 ps-8 placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="أسم المستخدم"
                  />
                </div>
                <div className="mt-4 flex items-center justify-end">
                  <Link
                    href="#"
                    className="font-rbRegular hover:underline text-[#F84F39]"
                  >
                    هل نسيت كلمة المرور؟
                  </Link>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-[#F84F39] hover:bg-opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 sm:font-rbRegular font-rbLight text-white hover:text-black rounded-lg sm:rounded-3xl px-5 py-2 sm:py-3"
                >
                  دخول
                </button>
                <div className="flex items-center  mt-4 justify-center">
                  <hr className="w-full border-t border-red-300 before:w-1/4 before:border-t before:border-r before:border-gray-300 after:w-1/4 after:border-t after:border-l after:border-gray-300 border-dotted" />
                  <div className="mx-2">او</div>
                  <hr className="w-full border-t border-red-300 before:w-1/4 before:border-t before:border-l before:border-gray-300 after:w-1/4 after:border-t after:border-r after:border-gray-300 border-dotted" />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full bg-[#11998E] hover:bg-opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 sm:font-rbRegular font-rbLight text-white hover:text-black rounded-lg sm:rounded-3xl px-5 py-2 sm:py-3"
                >
                  الدخول عبر بوابة نفاذ
                </button>

                <div className="text-center mt-4">
                  <Link
                    href="#"
                    className="font-rbRegular text-[#F84F39] underline hover:no-underline"
                  >
                    انشاء حساب جديد
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default page;
