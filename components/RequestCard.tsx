import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
type Props = {};

const RequestCard = (props: Props) => {
  return (
    <div
      className="w-[95%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
      style={{ direction: "rtl" }}
    >
      <div className="px-5 p-6 bg-[#f8f7f7] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex gap-2 justify-around items-center">
          <div className="bg-[#F84F39] bg-opacity-20 px-5 py-2 rounded-full flex items-center">
            <Image src="/heart.png" alt="" width={16} height={16} />
            <p className="ms-2 font-rbRegular sm:font-rbBold text-[12px] text-[#F84F39]">
              المأكولات والمشروبات{" "}
            </p>
          </div>
          <div className="bg-[#F84F39] bg-opacity-20 px-3 lg:px-5 py-2 rounded-full flex items-center">
            <Image src="/location.png" alt="" width={16} height={16} />
            <p className="ms-2 text-[12px] font-rbRegular sm:font-rbBold text-[#F84F39]">
              جده{" "}
            </p>
          </div>
        </div>
        <h1 className="font-rbBold md:text-[20px] text-[#061C3D] text-center my-6">
          لابتوب ماك بوك اير 2020 من ابل
        </h1>
        <p className="font-rbRegular tracking-wide  text-[14px] text-[#42526B]">
          شريحة ابل M1 وشاشة ريتينا 13 انش، ذاكرة RAM سعة 8GB، تخزين SSD سعة
          256GB، كيبورد باضاءة خلفية، خاصية Facetime وكاميرا HD وتاتش اي دي.
          يعمل مع ايفون وايباد؛ سبيس جراي
        </p>
        <p className="font-rbBold text-[14px] text-center mt-6 mb-3">
          تم انتهاء الطلب{" "}
        </p>
        <div className="bg-[#F84F39] text-[#F84F39] font-rbBold mx-auto w-[220px] rounded-xl py-2 text-center bg-opacity-20 ">
          <div className="justify-center text-[20px] flex items-center">
            <span>00</span>
            <span>.00.</span>
            <span>123</span>
          </div>
          <p className="text-[7px]">ريال سعودي</p>
        </div>
        <div className="flex justify-between items-center border-b-1 mb-3 mt-6 border-[#cbd6ec]  border-dotted">
          <div className="flex items-center">
            <FaCircle className="text-[#F84F39] me-3 text-opacity-30 text-[10px]" />
            <span className="text-[#42526B] font-rbLight">الكمية</span>
          </div>
          <span className="text-[#42526B]  font-rbRegular">عدد ١٢ عبوة</span>
        </div>
        <div className="flex justify-between mb-3 items-center border-b-1 border-[#cbd6ec]  border-dotted">
          <div className="flex items-center">
            <FaCircle className="text-[#F84F39] me-3 text-opacity-30 text-[10px]" />
            <span className="text-[#42526B] font-rbLight">تاريخ التسليم</span>
          </div>
          <span className="text-[#42526B] ">12/03/2024</span>
        </div>
        <div className="flex justify-between mb-3 items-center border-b-1 border-[#cbd6ec]  border-dotted">
          <div className="flex items-center">
            <FaCircle className="text-[#F84F39] me-3 text-opacity-30 text-[10px]" />
            <span className="text-[#42526B] font-rbLight">حالة الطلب</span>
          </div>
          <span className="text-[#42526B]  font-rbRegular">منتهي</span>
        </div>
        <div className="flex mx-auto my-4 text-[12px] w-full justify-end items-center">
          <button className="font-rbBold">المزيد من التفاصيل</button>
          <CiCirclePlus className="text-[16px] bg-white rounded-full ms-2" />
        </div>
      </div>
      <div className="px-5 p-6 bg-[#D6FAEE] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex gap-2 justify-around items-center">
          <div className="bg-[#F84F39] bg-opacity-20 px-5 py-2 rounded-full flex items-center">
            <Image src="/heart.png" alt="" width={16} height={16} />
            <p className="ms-2 font-rbRegular sm:font-rbBold text-[12px] text-[#F84F39]">
              المأكولات والمشروبات{" "}
            </p>
          </div>
          <div className="bg-[#F84F39] bg-opacity-20 px-3 lg:px-5 py-2 rounded-full flex items-center">
            <Image src="/location.png" alt="" width={16} height={16} />
            <p className="ms-2 text-[12px] font-rbRegular sm:font-rbBold text-[#F84F39]">
              جده{" "}
            </p>
          </div>
        </div>
        <h1 className="font-rbBold md:text-[20px] text-[#061C3D] text-center my-6">
          لابتوب ماك بوك اير 2020 من ابل
        </h1>
        <p className="font-rbRegular tracking-wide  text-[14px] text-[#42526B]">
          شريحة ابل M1 وشاشة ريتينا 13 انش، ذاكرة RAM سعة 8GB، تخزين SSD سعة
          256GB، كيبورد باضاءة خلفية، خاصية Facetime وكاميرا HD وتاتش اي دي.
          يعمل مع ايفون وايباد؛ سبيس جراي
        </p>
        <p className="font-rbBold text-[14px] text-center mt-6 mb-3">
          تم انتهاء الطلب{" "}
        </p>
        <div className="bg-[#F84F39] text-[#F84F39] font-rbBold mx-auto w-[220px] rounded-xl py-2 text-center bg-opacity-20 ">
          <div className="justify-center text-[20px] flex items-center">
            <span>00</span>
            <span>.00.</span>
            <span>123</span>
          </div>
          <p className="text-[7px]">ريال سعودي</p>
        </div>
        <div className="flex justify-between items-center border-b-1 mb-3 mt-6 border-[#cbd6ec]  border-dotted">
          <div className="flex items-center">
            <FaCircle className="text-[#F84F39] me-3 text-opacity-30 text-[10px]" />
            <span className="text-[#42526B] font-rbLight">الكمية</span>
          </div>
          <span className="text-[#42526B]  font-rbRegular">عدد ١٢ عبوة</span>
        </div>
        <div className="flex justify-between mb-3 items-center border-b-1 border-[#cbd6ec]  border-dotted">
          <div className="flex items-center">
            <FaCircle className="text-[#F84F39] me-3 text-opacity-30 text-[10px]" />
            <span className="text-[#42526B] font-rbLight">تاريخ التسليم</span>
          </div>
          <span className="text-[#42526B] ">12/03/2024</span>
        </div>
        <div className="flex justify-between mb-3 items-center border-b-1 border-[#cbd6ec]  border-dotted">
          <div className="flex items-center">
            <FaCircle className="text-[#F84F39] me-3 text-opacity-30 text-[10px]" />
            <span className="text-[#42526B] font-rbLight">حالة الطلب</span>
          </div>
          <span className="text-[#42526B]  font-rbRegular">منتهي</span>
        </div>
        <div className="flex mx-auto my-4 text-[12px] w-full justify-end items-center">
          <button className="font-rbBold">المزيد من التفاصيل</button>
          <CiCirclePlus className="text-[16px] bg-white rounded-full ms-2" />
        </div>
      </div>
      <div className="px-5 p-6 bg-[#FEDCD7] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex gap-2 justify-around items-center">
          <div className="bg-[#F84F39] bg-opacity-20 px-5 py-2 rounded-full flex items-center">
            <Image src="/heart.png" alt="" width={16} height={16} />
            <p className="ms-2 font-rbRegular sm:font-rbBold text-[12px] text-[#F84F39]">
              المأكولات والمشروبات{" "}
            </p>
          </div>
          <div className="bg-[#F84F39] bg-opacity-20 px-3 lg:px-5 py-2 rounded-full flex items-center">
            <Image src="/location.png" alt="" width={16} height={16} />
            <p className="ms-2 text-[12px] font-rbRegular sm:font-rbBold text-[#F84F39]">
              جده{" "}
            </p>
          </div>
        </div>
        <h1 className="font-rbBold md:text-[20px] text-[#061C3D] text-center my-6">
          لابتوب ماك بوك اير 2020 من ابل
        </h1>
        <p className="font-rbRegular tracking-wide  text-[14px] text-[#42526B]">
          شريحة ابل M1 وشاشة ريتينا 13 انش، ذاكرة RAM سعة 8GB، تخزين SSD سعة
          256GB، كيبورد باضاءة خلفية، خاصية Facetime وكاميرا HD وتاتش اي دي.
          يعمل مع ايفون وايباد؛ سبيس جراي
        </p>
        <p className="font-rbBold text-[14px] text-center mt-6 mb-3">
          تم انتهاء الطلب{" "}
        </p>
        <div className="bg-[#F84F39] text-[#F84F39] font-rbBold mx-auto w-[220px] rounded-xl py-2 text-center bg-opacity-20 ">
          <div className="justify-center text-[20px] flex items-center">
            <span>00</span>
            <span>.00.</span>
            <span>123</span>
          </div>
          <p className="text-[7px]">ريال سعودي</p>
        </div>
        <div className="flex justify-between items-center border-b-1 mb-3 mt-6 border-[#cbd6ec]  border-dotted">
          <div className="flex items-center">
            <FaCircle className="text-[#F84F39] me-3 text-opacity-30 text-[10px]" />
            <span className="text-[#42526B] font-rbLight">الكمية</span>
          </div>
          <span className="text-[#42526B]  font-rbRegular">عدد ١٢ عبوة</span>
        </div>
        <div className="flex justify-between mb-3 items-center border-b-1 border-[#cbd6ec]  border-dotted">
          <div className="flex items-center">
            <FaCircle className="text-[#F84F39] me-3 text-opacity-30 text-[10px]" />
            <span className="text-[#42526B] font-rbLight">تاريخ التسليم</span>
          </div>
          <span className="text-[#42526B] ">12/03/2024</span>
        </div>
        <div className="flex justify-between mb-3 items-center border-b-1 border-[#cbd6ec]  border-dotted">
          <div className="flex items-center">
            <FaCircle className="text-[#F84F39] me-3 text-opacity-30 text-[10px]" />
            <span className="text-[#42526B] font-rbLight">حالة الطلب</span>
          </div>
          <span className="text-[#42526B]  font-rbRegular">منتهي</span>
        </div>
        <div className="flex mx-auto my-4 text-[12px] w-full justify-end items-center">
          <button className="font-rbBold">المزيد من التفاصيل</button>
          <CiCirclePlus className="text-[16px] bg-white rounded-full ms-2" />
        </div>
      </div>
     
    </div>
  );
};

export default RequestCard;
