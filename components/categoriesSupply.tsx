import React from "react";
import { IoAdd } from "react-icons/io5";
import { BsTagFill } from "react-icons/bs";

type Props = {
  text?: string;
};

const CategoriesSupply = ({ text }: Props) => {
  return (
    <div className="p-3 sm:p-5 md:p-6 bg-white rounded-lg shadow md:shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4">
          <div className="bg-[#F84F39] bg-opacity-20 text-[#F84F39] px-3 py-2 rounded-full flex items-center">
            <BsTagFill size={20} />
            <span className="ms-2 font-rbRegular sm:font-rbBold text-[12px]">
              إجمالي المنتجات 94805
            </span>
          </div>
        </div>
        <h1 className="font-rbBold text-[16px] sm:text-[18px] md:text-[20px] my-4">
          المواد البلاستيكية
        </h1>
        <p
          className="font-rbLight sm:font-rbRegular text-[14px] sm:text-[16px] text-gray-700 line-clamp-3"
          style={{ wordSpacing: "5px" }}
        >
          {text}
        </p>
      </div>
      <div className="b p-4 mt-4 sm:mt-6 rounded-lg">
        <p className="font-rbRegular text-[12px] text-gray-400 mb-3">
          إجمالي عروض الاسعار <strong className="text-[#F84F39]">93</strong>{" "}
          إجمالي طلب توريد <strong className="text-[#F84F39]">84</strong>
        </p>
        <hr />
        <div className="flex justify-end items-center mt-4">
          <button className="font-rbBold text-[12px] text-[#42526B]">
            عرض طلبات التوريد
          </button>
          <IoAdd
            className="text-[16px] bg-white rounded-full ms-2"
            color={"#F84F39"}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesSupply;
