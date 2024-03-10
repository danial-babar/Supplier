"use client";
import Banner from "@/components/Layout/Banner";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import RequestCard from "@/components/RequestCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl" className="">
      <Header activeItem={0} />
      <Banner />
<div className="my-14 w-[90%] mx-auto flex justify-between items-center ">
<h1 className="text-black text-4xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-[43px]  relative font-rbBold">طلبات        <span className="rounded-3xl bg-[#BDFFA5] pe-20 ps-2 h-6 py-0">
التوريد</span>
      </h1>
      <div className="flex items-center">
        <button className="bg-[#6B66DA] border-[2px] border-[#6B66DA] text-white rounded-full p-3"><MdKeyboardArrowRight className="text-4xl"/></button>
      <button className="text-[#6B66DA] ms-3 border-[2px] border-[#6B66DA] rounded-full p-3"><MdOutlineKeyboardArrowLeft className="text-4xl"/></button>
      </div>
</div>

      <RequestCard />
      <Footer />
    </div>
  );
};

export default page;
