import React from "react";
import { IoAdd, IoPricetagSharp } from "react-icons/io5";
import { BsTagFill } from "react-icons/bs";

type Props = {};

const categoriesSupply = (props: Props) => {
  return (
    <div className="w-[95%] bg-gradient-radial from-gray-100 via-gray-100 pb-8 sm:pb-12 md:pb-16 lg:pb-24 mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      <div
        className={
          "px-5 p-6 bg-white rounded-lg shadow md:shadow-large"
        }
      >
        <div>
          <div className="flex items-center">
            <div className="bg-[#F84F39] bg-opacity-20 text-[#F84F39] px-5 py-2 rounded-full flex items-center">
              {/* <Image src="/heart.png" alt="" width={16} height={16}/> */}
              <BsTagFill size={20} />
              <span className="ms-2 font-rbRegular sm:font-rbBold text-[12px]">
                إجمالي المنتجات 94805
              </span>
            </div>
          </div>
        </div>
        <h1 className="font-rbBold md:text-[20px] my-6">المواد البلاستيكية</h1>
        <p
          className="font-rbRegular text-[16px] text-gray-700"
          style={{ wordSpacing: "10px" }}
        >
          هي مجموعة من المواد الاصطناعية التي تمتاز بمرونتها وقابليتها للتشكيل
          والتصنيع
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
    </div>
  );
};

export default categoriesSupply;
