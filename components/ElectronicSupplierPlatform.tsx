import Image from 'next/image'
import React from 'react'
import PlatformCard from './PlatformCard'

type Props = {}

const ElectronicSupplierPlatform = (props: Props) => {
  return (
    <div className="w-[95%] mx-auto sm:mt-20 md:mt-32 mt-8">
        <div className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[52px] font-rbBold text-[#0A102F] text-center">
          <span className="">
          لماذا منصة مـوّ
          </span>
          <span className="rounded-3xl bg-[#BDFFA5] pe-3 md:pe-8">
            رد الإلكتروني
          </span>
        </div>
        <h3 className="text-[#475467] text-center text-[16px] sm:text-[20px] font-rbLight sm:font-rbRegular mt-8">
          تتيح لك منصة <span className="font-bold">مــوّرد</span> الإلكتروني
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
          <div className="md:w-1/3 sm:mt-0 mt-8 ">
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
      </div>
  )
}

export default ElectronicSupplierPlatform