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
import SupplierPlatform from "@/components/SupplierPlatform";
import Partners from "@/components/Partners";

type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl" className="">
      <Header activeItem={0} />
      <Banner />
      <div className="md:my-24 sm:my-10 mt-10 w-[95%] mx-auto sm:flex justify-between items-center ">
        <h1 className="text-black lg:text-[43px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
          طلبات{" "}
          <span className="rounded-3xl bg-[#BDFFA5] sm:pe-16 md:pe-20 pe-4 ps-2 h-6 py-0">
            التوريد
          </span>
          <p className="text-[14px] md:text-[16px] sm:mt-4 mt-2 font-rbRegular">
            انضم إلينا اليوم واستكشف عالم التوريدات الشيق والمثير.{" "}
            <span className="text-[#F84F39] underline font-rbBold">
              كل طلبات التوريد
            </span>
          </p>
        </h1>
        <div className="flex items-center sm:mb-auto mb-4 sm:justify-start justify-end sm:mt-auto mt-4">
          <button className="bg-[#6B66DA] border-[2px] border-[#6B66DA] text-white rounded-full sm:p-3 p-1">
            <MdKeyboardArrowRight className="text-xl md:text-2xl" />
          </button>
          <button className="text-[#6B66DA] ms-3 border-[2px] border-[#6B66DA] rounded-full sm:p-3 p-1">
            <MdOutlineKeyboardArrowLeft className="text-xl md:text-2xl" />
          </button>
        </div>
      </div>
      <RequestCard />
      <div className="w-[95%] mx-auto sm:p-5 p-2 sm:mt-20 md:mt-32 mt-8">
  <div className="lg:text-[45px] md:text-[36px] sm:text-[28] text-[18px] text-black font-rbBold text-center">
    <span className="">
    لماذا منصة مـ
    </span>
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
      <Image src={"/mobile.png"} alt="" width={500} height={700} className="object-contain mx-auto" />
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

      <DownloadAppBanner />
      <SupplierPlatform />
      <Partners />
      <Footer />ٖ
    </div>
  );
};

export default page;
