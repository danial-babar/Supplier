"use client";
import Banner from "@/components/Layout/Banner";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import RequestCard from "@/components/RequestCard";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header />
      <Banner />
      <div className="flex flex-col items-center bg-gradient-radial from-gray-100 via-gray-50">
        <h1 className="text-black text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[30px] font-rbBold">نتائج البحث</h1>
        <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] font-rbLight sm:font-rbRegular">
            عدد النتائج <span className="text-[#F84F39]">9</span > <span className="text-[#F84F39]">طلبات توريد إعادة البحث</span>
        </p>
      </div>
      <div
        className="w-[95%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-5"
        style={{ direction: "rtl" }}
      >
        <RequestCard
          bgColor="bg-[#FAFAFF]"
          contentBg="bg-[#6c66da4d]"
          contentColor="#6B66DA"
        />
        <RequestCard
          bgColor="bg-[#FAFAFF]"
          contentBg="bg-[#6c66da4d]"
          contentColor="#6B66DA"
        />
        <RequestCard
          bgColor="bg-[#FAFAFF]"
          contentBg="bg-[#6c66da4d]"
          contentColor="#6B66DA"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
