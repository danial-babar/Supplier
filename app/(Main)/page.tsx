"use client";

import Banner from "@/components/Layout/Banner";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import PlatformCard from "@/components/PlatformCard";
import RequestCard from "@/components/RequestCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";
import React from "react";
import DownloadAppBanner from "@/components/DownloadAppBanner";

type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl" className="">
      <Header activeItem={0} />
      <Banner />
      <div className="my-14 w-[90%] mx-auto flex justify-between items-center ">
        <h1 className="text-black text-4xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-[43px]  relative font-rbBold">
          طلبات{" "}
          <span className="rounded-3xl bg-[#BDFFA5] pe-20 ps-2 h-6 py-0">
            التوريد
          </span>
        </h1>
        <div className="flex items-center">
          <button className="bg-[#6B66DA] border-[2px] border-[#6B66DA] text-white rounded-full p-3">
            <MdKeyboardArrowRight className="text-4xl" />
          </button>
          <button className="text-[#6B66DA] ms-3 border-[2px] border-[#6B66DA] rounded-full p-3">
            <MdOutlineKeyboardArrowLeft className="text-4xl" />
          </button>
        </div>
      </div>
      <RequestCard />
      <div className="w-full flex flex-col items-center p-5 mt-10">
        <p className="text-black sm:text-[12px] text-[22px] md:text-4xl lg:text-6xl xl:text-[43px]  relative font-rbBold">
          لماذا منصة مـوّ{" "}
          <span className="rounded-3xl bg-[#BDFFA5] pe-3 h-6 pb-1">
            رد الإلكتروني
          </span>
        </p>
        <h3 className="text-black text-center text-[16px] sm:text-[12px] md:text-[18px] lg:text-[20px] xl:text-[22pxpx] font-rbRegular mt-10">
          تتيح لك منصة مــوّرد الإلكتروني المشاركة في طلبات التوريد المطروحة في
          أي وقت ومن أي مكان بكل سهولة
        </h3>
        <div className="w-full md:flex  justify-between mt-10 items-start">
          <div className="col-span-4">
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
          <div className="col-span-4">
            <Image src={"/mobile.png"} alt="" width={400} height={700} />
          </div>
          <div className="col-span-4">
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
      <DownloadAppBanner />
      <Footer />ٖ
    </div>
  );
};

export default page;
