"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import PlatformCard from "@/components/PlatformCard";
import { Questions } from "@/constants/DummyData";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header activeItem={4} />
      <div>
        <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto items-center">
          <div className="w-[95%] text-[#0A102F] lg:text-[45px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
            الأسئ
            <span className="rounded-3xl bg-[#BDFFA5] pe-4 h-6 py-0">
              لة الشائعة
            </span>
            <div className="text-[14px] md:text-[18px] text-gray-700 sm:mt-8 mt-4 font-rbRegular">
              <p>
                مجموعة من الاسئلة الشائعة عن منصة <strong>مــوّرد</strong>{" "}
              </p>
              <p>
                اعرف وافهم اكثر عن المنصة ومعرفه خطوات عرض سعر او طلب توريد .
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src="/question.png"
              height={460}
              width={460}
              alt=""
              className="object-contain target_img mx-auto"
            />
          </div>
        </div>
        <div className="mt-12">
          {Questions?.map((item, index) => {
            const [open, setOpen] = useState(false);
            return (
              <div key={index}>
                <div
                  className={`w-[95%] mx-auto ${
                    open ? "bg-[#FAFAFF]" : "bg-[#ffff]"
                  } border-b border-b-[#DDDCF8] py-4 sm:py-8`}
                >
                  <div className="flex w-[95%] mx-auto items-center justify-between">
                    <div className="flex items-center text-[18px] text-black justify-between">
                      <p className="font-rbBold text-[#F84F39] md:me-10 sm:me-6 me-3 text-[20px] sm:text-[24px] md:text-[30px]">
                        {index < 10 ? `0${index + 1}` : index + 1}{" "}
                      </p>
                      <p className="font-rbRegular md:text-[20px] text-[16px] md:font-rbBold">
                        {item?.Q}
                      </p>
                    </div>
                    <div
                      className={`sm:p-3 p-1 rounded-full items-center justify-center flex cursor-pointer ${
                        open ? "bg-[#F84F39]" : "border border-[#F84F39]"
                      }`}
                      onClick={() => setOpen(!open)}
                    >
                      {open ? (
                        <IoMdClose className="text-[#fff] text-[16px] sm:text-[20px]" />
                      ) : (
                        <FaPlus className="text-[#F84F39] text-[12px] sm:text-[20px]" />
                      )}
                    </div>
                  </div>
                  {open && (
                    <p className="text-black md:text-[18px] text-[14px] font-rbLight sm:font-rbRegular w-[83%] sm:mt-6 mt-4 md:mt-8 mx-auto">
                      {item?.A}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[95%] mx-auto sm:p-5 p-2 sm:mt-20 md:mt-32 mt-8">
        <div className="lg:text-[45px] md:text-[36px] sm:text-[28] text-[18px] text-black font-rbBold text-center">
          <span className="">لماذا منصة مـ</span>
          <span className="rounded-3xl bg-[#BDFFA5] pe-3 md:pe-8">
            وّرد الإلكتروني
          </span>
        </div>
        <h3 className="text-[#475467] text-center text-[14px] md:text-[18px] font-rbRegular mt-8">
          تتيح لك منصة <span className="font-bold">مــوّرد</span> الإلكتروني
          المشاركة في طلبات التوريد المطروحة في أي وقت ومن أي مكان بكل سهولة
        </h3>
        <div className="md:flex mx-auto w-full justify-between items-center mt-6">
          <div className="md:w-1/3">
            <PlatformCard
              icon={"/Icon1.png"}
              title="المشاركة عن بعد"
              description="بإمكانك المزايدة بشكل إلكتروني في أي وقت ومن أي مكان"
            />
            <PlatformCard
              icon={"/Icon2.png"}
              title="تقديم طلب سعر على أكثر من طلب توريد في نفس الوقت"
              description="يمكنك تقديم عرض سعر على عدة طلب توريد مختلف عبر المنصة في نفس الوقت"
            />
          </div>
          <div className="md:w-1/3 sm:mt-0 mt-8">
            <Image
              src={"/mobile.png"}
              alt=""
              width={500}
              height={700}
              className="object-contain mx-auto"
            />
          </div>
          <div className="md:w-1/3">
            <PlatformCard
              icon={"/Icon3.png"}
              title="وسائل دفع إلكترونية"
              description="توفر المنصة وسائل دفع إلكترونية آمنه يمكنك من خلالها شحن محفظتك واسترجاع المبلغ بكل أمان"
            />
            <PlatformCard
              icon={"/Icon4.png"}
              title="الامان والخصوصية"
              description="نحافظ على خصوصية معلوماتك الشخصية وأمانها وسلامتها."
            />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
