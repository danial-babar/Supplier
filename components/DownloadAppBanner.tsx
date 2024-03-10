import Image from "next/image";
import React from "react";

type Props = {};

const DownloadAppBanner = (props: Props) => {
  return (
    <div className="w-full md:flex grid sm:grid-cols-3  justify-between mt-10 items-start">
      <div className="bg-[#9cefd290] w-[400px] px-6 rounded-[20px] py-10">
        <p className="text-black text-[16px] font-rbBold">
          المنتجات الأكثر طلبا للتوريد
        </p>
        <p className="text-black text-[14px] font-rbRegular">
          تقدم منصة <span className="font-rbBold">مــورد</span> مجموعة متنوعة من
          المنتجات الأكثر طلبًا في صناعة التوريد. نحن متخصصون في توفير حلول
          فعالة وذات جودة عالية لاحتياجاتكم.
        </p>
        <div className="p-4 bg-[#79e5bf] w-[120px] flex items-center justify-center rounded-full text-black font-rbBold text-[14px] mt-4">
          طلب سعر
        </div>
        <div className="flex mt-5 items-cente px-5">
          <Image src={"/badge.png"} alt="" width={60} height={100} />
          <h1 className="text-[#34E5A8] text-[40px] font-rbBold mr-5">
            الأكثر طلبا{" "}
          </h1>
        </div>
      </div>
      <div className="bg-[#e49d94] p-5"></div>
      <div className="bg-[#a7a3e9] p-5"></div>
    </div>
  );
};

export default DownloadAppBanner;
