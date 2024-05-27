"use client";
import ElectronicSupplierPlatform from "@/components/ElectronicSupplierPlatform";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import PlatformCard from "@/components/PlatformCard";
import { Questions } from "@/constants/DummyData";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type Props = {};

const Page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header activeItem={4} />
      <div>
        <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto items-center">
          <div className="w-[95%] text-[#0A102F] text-[18px] sm:text-[20px] md:text-[25px] md:mt-0 sm:text-start text-center mt-8 lg:text-[50px] font-rbBold relative">
            الأسئ
            <span className="rounded-3xl bg-[#BDFFA5] pe-4 h-6 py-0">
              لة الشائعة
            </span>
            <div className="text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular text-gray-700 sm:mt-8 mt-5 mb-5">
              <p>
                مجموعة من الاسئلة الشائعة عن منصة{" "}
                <strong className="sm:font-rbBold font-rbRegular">
                  مــوّرد
                </strong>{" "}
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
          {Questions?.map((item, index) => (
            <QuestionAnsersComp item={item} index={index} key={index} />
          ))}
        </div>
        <ElectronicSupplierPlatform />
      </div>
      <Footer />
    </div>
  );
};
const QuestionAnsersComp = ({ item, index }) => {
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
          <p className="text-black sm:text-[18px] text-[16px] font-rbLight sm:font-rbRegular w-[83%] sm:mt-6 mt-4 md:mt-8 mx-auto">
            {item?.A}
          </p>
        )}
      </div>
    </div>
  );
};
export default Page;
