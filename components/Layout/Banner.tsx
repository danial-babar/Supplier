import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 sm:py-10 md:py-14 lg:py-28 bg-gradient-radial from-gray-100 via-gray-50">
      <h1 className="text-black text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[43px] relative font-rbBold">
        بحث عن طل
        <span className="rounded-3xl bg-[#BDFFA5] pe-3 h-6 pb-1">
          بات التوريد
        </span>
      </h1>
      <h4 className="text-black font-rb text-[12px] sm:text-[18px] md:mt-10 sm:mt-8 mt-4 text-center font-rbRegular">
        تتيح منصة مــوّرد الإلكتروني فرصة مشاركة طلب وعرض سعر الإلكترونية من
        مختلف مناطق المملكة
      </h4>

      <div className="grid grid-cols-1 bg-white justify-between xl:gap-48 lg:gap-36 gap-5 sm:grid-cols-2 md:grid-cols-3 items-center mx-auto lg:grid-cols-5 md:w-[85%] w-[95%] shadow-small md:shadow-2xl shadow-[grey] md:py-2 py-5 rounded-medium lg:rounded-full md:mt-10 sm:mt-8 mt-6 lg:mt-14 text-[12px] font-rbRegular lg:px-10 md:px-8 sm:px-6 px-4">
        <div className="w-[246px]">
          <div className="flex items-center ">
            <Image src="/filter1.png" width={20} height={20} alt="" />
            <div>
              <p className="text-gray-400 px-2">التصنيف </p>
              <select
                id="categories"
                className="text-gray-900 text-[14px] focus:ring-blue-500 appearance-none focus:border-none px-2 border-none bg-transparent dark:text-white"
              >
                <option selected>اختر التصنيف</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-[246px]">
          <div className="flex items-center">
            <Image src="/filter2.png" width={20} height={20} alt="" />
            <div>
              <p className="text-gray-400 px-2"> المدينة</p>
              <select
                id="countries"
                className="text-gray-900 text-[14px] focus:ring-blue-500 appearance-none focus:border-none px-2 border-none bg-transparent dark:text-white"
              >
                <option selected>اختر المدينة</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-[300px]">
          <div className="flex items-center">
            <Image src="/location.png" width={20} height={20} alt="" />
            <div>
              <p className="text-gray-400 px-2"> ترتيب</p>
              <p className="text-[14px] px-1">اختر من الاحدث الي الاقدم</p>
            </div>
          </div>
        </div>

        <div className="w-[246px]">
          <div className="flex items-center">
            <Image src="/flag.png" width={20} height={20} alt="" />
            <div>
              <p className="text-gray-400 px-2"> حالة الطلب</p>
              <select
                id="order_status"
                className="text-gray-900 focus:ring-blue-500 text-[14px] appearance-none focus:border-none px-2 border-none bg-transparent dark:text-white"
              >
                <option selected>اختر حالة الطلب</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
        <div className="lg:w-[60px] sm:text-start text-center">
          <button className="bg-[#F84F39] lg:w-auto w-[200px] md:p-3 p-2 lg:p-4 rounded-full text-white">
            <CiSearch className="text-[25px]" />
          </button>
        </div>
      </div>
      <div className="w-[95%] my-6 md:my-20" style={{direction:"ltr"}}>
      <div className="grid grid-cols-12 items-center">
  <div className="md:col-span-5">
    <Image
      src="/total.png"
      height={500}
      width={500}
      alt=""
      className="object-contain"
    />
  </div>
  <div className="md:col-span-7 text-end">
    <h3 className="text-black text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[43px] font-rbBold">
      عــــ
      <span className="rounded-3xl bg-[#BDFFA5] h-6 pb-1">
        ــن مـوّرد
      </span>
    </h3>
    <p className="font-rbRegular text-[18px] tracking-tighter my-6">موّرد هي منصة مبتكرة توفر خدمات عرض وطلب أسعار عن منتجات متنوعة. تم تصميمها لتيسير عملية التجارة الإلكترونية وتمكين الشركات والأفراد من التواصل والتعامل مع بعضهم البعض بسهولة وفعالية.</p>
    <p className="font-rbRegular text-[18px] mb-6">عند استخدام منصة موّرد، يمكن للمستخدمين عرض منتجاتهم وخدماتهم وإظهار تفاصيل حولها، بما في ذلك الصور والوصف والمواصفات. يمكن للمستخدمين البحث عن منتجات محددة أو تصفح مجموعة واسعة من الفئات والمجالات المختلفة.</p>
    <p className="font-rbRegular text-[18px] mb-6">باستخدام منصة مورد، يمكن للمستخدمين تحقيق العديد من الفوائد. على سبيل المثال، يمكنهم الوصول إلى مجموعة كبيرة ومتنوعة من المنتجات والخدمات من موردين مختلفين، مما يوفر لهم خيارات واسعة لتلبية احتياجاتهم. كما يمكنهم المقارنة بين الأسعار والمواصفات وقراءة تقييمات المنتجات من قبل المستخدمين الآخرين لاتخاذ قرار شراء مطابق لاحتياجاتهم.</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Banner;
