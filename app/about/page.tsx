'use client'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import React from 'react'
import Image from "next/image";
import PlatformCard from '@/components/PlatformCard';
import DownloadAppBanner from '@/components/DownloadAppBanner';
type Props = {}

const page = (props: Props) => {
  return (
    <div dir='rtl'>
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
            <h3 className="text-black text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[43px] font-rbBold">
              عــــ
              <span className="rounded-3xl bg-[#BDFFA5] h-6 pb-1">
                ــن مـوّرد
              </span>
            </h3>
            <p className="font-rbRegular text-[16px] md:text-[20px] tracking-wide my-6">
              <strong>موّرد</strong> هي منصة مبتكرة توفر خدمات عرض وطلب أسعار عن منتجات متنوعة.
              تم تصميمها لتيسير عملية التجارة الإلكترونية وتمكين الشركات
              والأفراد من التواصل والتعامل مع بعضهم البعض بسهولة وفعالية.
            </p>
            <p className="font-rbRegular text-[16px] md:text-[20px] tracking-wide mb-6">
              عند استخدام منصة موّرد، يمكن للمستخدمين عرض منتجاتهم وخدماتهم
              وإظهار تفاصيل حولها، بما في ذلك الصور والوصف والمواصفات. يمكن
              للمستخدمين البحث عن منتجات محددة أو تصفح مجموعة واسعة من الفئات
              والمجالات المختلفة.
            </p>
            <p className="font-rbRegular text-[16px] md:text-[20px] tracking-wide] mb-6">
              باستخدام منصة مورد، يمكن للمستخدمين تحقيق العديد من الفوائد. على
              سبيل المثال، يمكنهم الوصول إلى مجموعة كبيرة ومتنوعة من المنتجات
              والخدمات من موردين مختلفين، مما يوفر لهم خيارات واسعة لتلبية
              احتياجاتهم. كما يمكنهم المقارنة بين الأسعار والمواصفات وقراءة
              تقييمات المنتجات من قبل المستخدمين الآخرين لاتخاذ قرار شراء مطابق
              لاحتياجاتهم.
            </p>
          </div>
        </div>
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
        <DownloadAppBanner/>
      </div>
        <Footer />
    </div>
  )
}

export default page