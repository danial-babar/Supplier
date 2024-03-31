import React from "react";
import { IoAdd, IoPricetagSharp } from "react-icons/io5";
import { BsTagFill } from "react-icons/bs";

type Props = {
  text: string;
};

const categoriesSupply = ({ text }: Props) => {
  return (

      <div className={"sm:px-5 sm:p-6 p-3 bg-white rounded-lg shadow md:shadow-lg"}>
        <div>
          <div className="flex items-center">
            <div className="bg-[#F84F39] bg-opacity-20 text-[#F84F39] px-5 py-2 rounded-full flex items-center">
              <BsTagFill size={20} />
              <span className="ms-2 font-rbRegular sm:font-rbBold text-[12px]">
                إجمالي المنتجات 94805
              </span>
            </div>
          </div>
        </div>
        <h1 className="font-rbBold text-[16px] sm:text-[18px] md:text-[20px] my-6">المواد البلاستيكية</h1>
        <p
          className="sm:font-rbRegular font-rbLight text-[16px] text-gray-700"
          style={{ wordSpacing: "10px" }}
        >
          {text}
        </p>
        <p className="font-rbRegular text-[12px] text-gray-400 md:mt-14 mt-6 mb-3">
          إجمالي عروض الاسعار <strong className="text-[#F84F39]">93</strong>{" "}
          إجمالي طلب توريد <strong className="text-[#F84F39]">84</strong>
        </p>
        <hr className="" />
        <div className="flex mx-auto my-4 text-[12px] text-[#42526B] w-full justify-end items-center">
          <button className="font-rbBold">عرض طلبات التوريد</button>
          <IoAdd
            className={"text-[16px] bg-white rounded-full ms-2"}
            color={"#F84F39"}
          />
        </div>
      </div>
  );
};

export default categoriesSupply;
