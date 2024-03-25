"use client";
import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header activeItem={5} />
      <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 md:mt-3 mt-6 gap-4 mx-auto items-center">
        <div className=" text-[#0A102F] lg:text-[45px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
          تواص
          <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 pe-4 py-0">
            ل معنا
          </span>
          <div className="text-[14px] md:text-[18px] text-gray-700 sm:mt-8 mt-4 font-rbRegular">
            <p>لا تتردد في الاتصال بنا مع أي أسئلة أو تعليقات</p>
            <p>
              او التواصل علي البريد الاكتروني{" "}
              <strong className="text-[#F84F39] uppercase">
                info@mowarrd.sa
              </strong>
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src="/connect.png"
            height={460}
            width={460}
            alt=""
            className="object-contain target_img mx-auto"
          />
        </div>
      </div>
      <div className="md:w-[70%] w-[95%] mx-auto">
        <div className="grid sm:grid-cols-3 gap-5 ">
          <div className="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="">
              <Image
                src="/call.png"
                height={50}
                width={50}
                alt=""
                className="object-contain rounded-lg bg-[#F84F39] bg-opacity-20 p-3 mx-auto"
              />
            </div>
            <p className="font-rbRegular my-3">البريد الإلكتروني</p>
            <small>info@mowarrd.sa</small>
          </div>
          <div className="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="">
              <Image
                src="/call.png"
                height={50}
                width={50}
                alt=""
                className="object-contain rounded-lg bg-[#F84F39] bg-opacity-20 p-3 mx-auto"
              />
            </div>
            <p className="font-rbRegular my-3">البريد الإلكتروني</p>
            <small>info@mowarrd.sa</small>
          </div>
          <div className="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="">
              <Image
                src="/call.png"
                height={50}
                width={50}
                alt=""
                className="object-contain rounded-lg bg-[#F84F39] bg-opacity-20 p-3 mx-auto"
              />
            </div>
            <p className="font-rbRegular my-3">البريد الإلكتروني</p>
            <small>info@mowarrd.sa</small>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto md:mt-20 sm:mt-14 mt-8">
        <Image
          src="/map.png"
          width={1000}
          height={1000}
          alt=""
          className="object-contain map_img mx-auto"
        />
      </div>
      <div className="bg-gradient-radial from-blue-100 to-pink-50 via-gray-100">
        <div className="text-center md:pt-20 pt-8">
          <div className=" text-[#0A102F] lg:text-[45px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
            <span> نموذج </span>
            <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 pe-4 py-0">
              التواصل
            </span>
            <div className="text-[14px] md:text-[18px] text-gray-700 sm:mt-8 mt-4 font-rbRegular">
              <p>
                تتيح لك منصة <strong>مــوّرد</strong> الإلكتروني المشاركة في
                طلبات التوريد المطروحة في أي وقت ومن أي مكان بكل سهولة
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-[95%] md:pt-16 pt-8 mx-auto">
          <form>
            <div className="grid md:grid-cols-2 gap-5 mx-auto">
              <div className="mb-5">
                <label className="block mb-2 text-sm font-rbRegular text-gray-900 dark:text-white">
                  الاسم الأول<span className="text-red-500 ps-2">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="lg:shadow-2xl shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-small focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="اسم العائلة"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-rbRegular text-gray-900 dark:text-white">
                  الاسم العائلة<span className="text-red-500 ps-2">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  className="lg:shadow-2xl shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-small focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-rbRegular text-gray-900 dark:text-white">
                  التصنيف<span className="text-red-500 ps-2">*</span>
                </label>
                <input
                  type="password"
                  id="repeat-password"
                  className="lg:shadow-2xl shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-small focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-rbRegular text-gray-900 dark:text-white">
                  تاريخ الميلاد<span className="text-red-500 ps-2">*</span>
                </label>
                <input
                  type="password"
                  id="repeat-password"
                  className="lg:shadow-2xl shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-small focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-rbRegular text-gray-900 dark:text-white">
                  رقم الجوال<span className="text-red-500 ps-2">*</span>
                </label>
                <input
                  type="password"
                  id="repeat-password"
                  className="lg:shadow-2xl shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-small focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-rbRegular text-gray-900 dark:text-white">
                  البريد الإلكتروني<span className="text-red-500 ps-2">*</span>
                </label>
                <input
                  type="password"
                  id="repeat-password"
                  className="lg:shadow-2xl shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-small focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-rbRegular text-gray-900 dark:text-white">
                التفاصيل<span className="text-red-500 ps-2">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full lg:shadow-2xl shadow-sm text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ادخل تفاصيل الطلب"
              ></textarea>
            </div>
            <div className="md:mt-20 text-center pb-12 mt-8">

                <Link href="/message">
              <button className="bg-[#F84F39] px-4 py-2 rounded-medium md:rounded-full text-white font-rbRegular">
                المزيد من التنصيفات...
              </button>
                </Link>

            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default page;
