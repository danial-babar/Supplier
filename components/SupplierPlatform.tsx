import React from "react";

type Props = {};

const supplierPlatform = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5] md:py-14 sm:py-10 lg:py-20 py-6">
    <div className="w-[95%] mx-auto">
        <div className="my-10 text-center">
          <div className="font-rbBold sm:text-[28px] md:text-[36px] lg:text-[50px] text-[18px]">
            <h3>
              {" "}
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
      <div className="text-center mt-14 sm:mt-20">
        <h3 className="sm:text-[28px] md:text-[36px] lg:text-[50px] text-[18px] font-rbBold">
          شــ<span className="pe-10 bg-[#BDFFA5] rounded-3xl">ــركــاؤنا</span>
        </h3>
       <div className="my-5">
       <p className="font-rbBold text-[12px] sm:text-[16px] mb-3 text-[#475467]">موثوق به من قبل أكثر من 10,000 جهة داخل المملكة</p>
        <p className="text-[14px] sm:text-[22px]">نفخر بالتعاون مع شركاء منصة مــوّرد الإلكتروني</p>
       </div>
      </div>
    </div>
  );
};

export default supplierPlatform;
