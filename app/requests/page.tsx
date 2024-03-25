"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import React from "react";
import Banner from "@/components/Layout/Banner";
import RequestCard from "@/components/RequestCard";
// import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header activeItem={3} />
      <Banner />
      <div className="w-[95%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <RequestCard
          bgColor="bg-[#FAFAFF]"
          contentBg="bg-[#6c66da4d]"
          contentColor="#6B66DA"
        />
        <RequestCard
          bgColor="bg-[#D6FAEE]"
          contentBg="bg-[#34e5a755]"
          contentColor="#34E5A8"
          textColor="#000000"
        />
        <RequestCard
          bgColor="bg-[#FEDCD7]"
          contentBg="bg-[#f84f3948]"
          contentColor="#F84F39"
        />
      </div>
      <div className="md:mt-20 text-center mt-8 mb-8">
        <a
          href=""
          className="bg-[#F84F39] px-4 py-2 rounded-medium md:rounded-full text-white font-rbRegular"
        >
          المزيد من التنصيفات...
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default page;
