"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import React from "react";
import Image from "next/image";
import PlatformCard from "@/components/PlatformCard";
import DownloadAppBanner from "@/components/DownloadAppBanner";
import Partners from "@/components/Partners";

type Props = {};

const Page = (props: Props) => {
  return (
    <div dir="rtl">
      <Header activeItem={1} />
      <div className="w-[95%] my-6 md:my-20" style={{ direction: "ltr" }}>
        <div className="w-[95%] grid grid-cols-12 items-center">
          <div className="md:col-span-5 col-span-full text-center mx-auto">
            <Image
              src="/total.png"
              height={460}
              width={460}
              alt=""
              className="object-contain target_img"
            />
          </div>
          <div className="md:col-span-7 col-span-full text-end">
            <h3 className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold">
              عــــ
              <span className="rounded-3xl bg-[#BDFFA5] h-6 pb-1">
                ــن مـوّرد
              </span>
            </h3>
            <p className="font-rbRegular text-[16px] md:text-[20px] tracking-wide my-6">
              <strong>موّرد</strong> هي منصة مبتكرة توفر خدمات عرض وطلب أسعار عن
              منتجات متنوعة. تم تصميمها لتيسير عملية التجارة الإلكترونية وتمكين
              الشركات والأفراد من التواصل والتعامل مع بعضهم البعض بسهولة
              وفعالية
            </p>
            <p className="font-rbRegular text-[16px] md:text-[20px] tracking-wide mb-6">
              عند استخدام منصة موّرد، يمكن للمستخدمين عرض منتجاتهم وخدماتهم
              وإظهار تفاصيل حولها، بما في ذلك الصور والوصف والمواصفات. يمكن
              للمستخدمين البحث عن منتجات محددة أو تصفح مجموعة واسعة من الفئات
              والمجالات المختلفة
            </p>
            <p className="font-rbRegular text-[16px] md:text-[20px] tracking-wide] mb-6">
              باستخدام منصة مورد، يمكن للمستخدمين تحقيق العديد من الفوائد. على
              سبيل المثال، يمكنهم الوصول إلى مجموعة كبيرة ومتنوعة من المنتجات
              والخدمات من موردين مختلفين، مما يوفر لهم خيارات واسعة لتلبية
              احتياجاتهم. كما يمكنهم المقارنة بين الأسعار والمواصفات وقراءة
              تقييمات المنتجات من قبل المستخدمين الآخرين لاتخاذ قرار شراء مطابق
              لاحتياجاتهم
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto sm:mt-20 md:mt-32 mt-8">
        <div className="text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold text-black text-center">
          <span className="">لماذا منصة مـ</span>
          <span className="rounded-3xl bg-[#BDFFA5] pe-3 md:pe-8">
            وّرد الإلكتروني
          </span>
        </div>
        <h3 className="text-[#475467] text-center text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular mt-8">
          تتيح لك منصة <span className="font-rbRegular sm:font-bold">مــوّرد</span> الإلكتروني
          المشاركة في طلبات التوريد المطروحة في أي وقت ومن أي مكان بكل سهولة
        </h3>
        <div className="md:flex mx-auto w-full justify-between items-start mt-6">
          <div className="md:w-1/3 mt-10">
            <PlatformCard
              icon={"/Icon2.png"}
              title="المشاركة عن بعد"
              description="بإمكانك المزايدة بشكل إلكتروني في أي وقت ومن أي مكان"
            />
            <PlatformCard
              icon={"/Icon1.png"}
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
          <div className="md:w-1/3 mt-10">
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
        <DownloadAppBanner />
        
      </div>
      <div className="bg-[#F5F5F5] md:py-14 sm:py-10 lg:py-20 py-6">
    <div className="w-[95%] mx-auto">
        <div className="my-10 text-center">
          <div className="text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold">
            <h3>
              <span className="rounded-3xl text-[#0A102F] py-0 bg-[#BDFFA5] ps-5">
                منصة مـوّر
              </span>
              د في أرقام
            </h3>
          </div>
          <p className="text-[#475467] md:mt-8 sm:mt-6 mt-3 font-rbRegular text-[16px] sm:text-[20px]">
            تعرف على أرقام منصة مـورد الإلكتروني
          </p>
        </div>
        <div className="flex items-center gap-1 justify-between">
          <div className="text-center">
            <p className="lg:text-[45px] md:text[32] sm:text[22] text-[12] font-rbRegular sm:font-rbBold">+4000</p>
            <p className="text-[#5D5A88] md:text-[18px] sm:text-[14] text-[10px] font-rbRegular">
              مزادات تم بيعها
            </p>
          </div>
          <div className=" lg:block hidden  min-h-[1em] w-0.5 self-stretch bg-[#dfe0e1]"></div>
          <div className="text-center">
            <p className="lg:text-[45px] md:text[32] sm:text[22] text-[12] font-rbRegular sm:font-rbBold">+30,000</p>
            <p className="text-[#5D5A88] md:text-[18px] sm:text-[14] text-[10px] font-rbRegular">
              إجمالي المستخدمين
            </p>
          </div>
          <div className=" lg:block hidden  min-h-[1em] w-0.5 self-stretch bg-[#dfe0e1]"></div>
          <div className="">
            <p className="lg:text-[45px] md:text[32] sm:text[22] text-[12] font-rbRegular sm:font-rbBold">+85</p>
            <p className="text-[#5D5A88] md:text-[18px] sm:text-[14] text-[10px] font-rbRegular">
              إجمالي العملاء
            </p>
          </div>
          <div className=" lg:block hidden  min-h-[1em] w-0.5 self-stretch bg-[#dfe0e1]"></div>
          <div className="text-center">
            <p className="lg:text-[45px] md:text[32] sm:text[22] text-[12] font-rbRegular sm:font-rbBold">+485</p>
            <p className="text-[#5D5A88] md:text-[18px] sm:text-[14] text-[10px] font-rbRegular">
              إجمالي المنتجات
            </p>
          </div>
        </div>
      </div>
    </div>
      <div className="text-center mt-14 sm:mt-20">
        <h3 className="sm:text-[28px] md:text-[36px] lg:text-[50px] text-[18px] font-rbBold">
          شــ<span className="pe-10 bg-[#BDFFA5] rounded-3xl">ــركــاؤنا</span>
        </h3>
       <div className="my-5">
       <p className="font-rbBold text-[12px] sm:text-[16px] mb-3 text-[#475467]">موثوق به من قبل أكثر من 10,000 جهة داخل المملكة</p>
        <p className="text-[14px] sm:text-[22px]">نفخر بالتعاون مع شركاء منصة مــوّرد الإلكتروني</p>
       </div>
      </div>
      <Partners/>
      <Footer />
    </div>
  );
};

export default Page;
