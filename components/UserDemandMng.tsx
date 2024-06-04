import { arabicNumbers } from "@/constants/DummyData";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useRef } from "react";
import { FaCircle } from "react-icons/fa";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  bidsData: [];
  onComplete?: (id: string) => void;
  disable?: boolean;
  start?: string;
  end?: string;
};

const UserDemandMng = ({
  bidsData,
  onComplete,
  disable,
  start,
  end,
}: Props) => {
  const tableRef = useRef(null);

  const handleScrollToTable = () => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
      toast.info("أكمل الصفقة هنا");
    }
  };

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div
        className="md:my-24 sm:my-10 mt-10 w-[95%] mx-auto md:flex justify-between items-center "
        dir="rtl"
      >
        <h1 className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] relative font-rbBold">
          ادارة ال
          <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 sm:pe-14 pe-8 h-6 py-0">
            طلب
          </span>
          <p className="text-[16px] sm:text-[18px] sm:w-[85%] lg:w-[60%] font-rbLight sm:font-rbRegular sm:mt-5 mt-3">
            يمكن عرض تقارير طلبات الاسعار المقدمة من قبل الوكلاء وعرض اعلي
            الاسعار المقدمة
          </p>
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:mb-auto mb-4 sm:justify-start justify-end md:mt-auto mt-5">
          <Button
            className="border-[#F84F39] bg-white sm:w-auto w-full px-8 sm:px-14 border-1 rounded-full text-[#F84F39]"
            onClick={handleScrollToTable}
          >
            ايقاف الطلب
          </Button>
          <Button className="text-[#fff] sm:w-auto w-full rounded-full px-8 sm:px-14 bg-[#F84F39]">
            الغاء الطلب
          </Button>
        </div>
      </div>
      <div className="my-5 w-[95%] mx-auto">
        <div className="md:flex justify-between">
          <div className="bg-white shadow-md md:mb-0 mb-5 border-1 md:w-1/3 rounded-lg px-4 py-2 m-2 h-48">
            <p className="md:text-[20px] text-end lg:text-[24px] font-rbRegular text-gray-800">
              احصائيات علي الطلب
            </p>
            <div className="flex mt-3 items-center gap-5 justify-between">
              <div className="">
                {bidsData.slice(0, 3).map((item, index) => {
                  const colors = ["#45e5aa", "#F54F37", "#6b65db"];
                  return (
                    <BestPrices
                      amount={item?.amount}
                      index={index}
                      color={colors[index]}
                    />
                  );
                })}
              </div>
              <Image src="/chart.png" width={90} height={90} alt="" />
            </div>
          </div>
          <div className="bg-white shadow-md md:w-1/3 md:mb-0 mb-5 border-1 rounded-lg px-4 pt-2 m-2 h-48">
            <p className="md:text-[20px] lg:text-[24px] text-[16px] text-end font-rbRegular mb-3 text-gray-800">
              اعلي سعر حتي الان
            </p>
            <div className="bg-[#34E5A8] font-rbBold mx-auto py-5 rounded-xl text-center bg-opacity-20">
              <div className="w-[125px] mx-auto">
                <p className="text-[14px] font-rbRegular text-start">
                  ريال سعودي
                </p>
                <div className="justify-center text-[30px] flex items-center">
                  {bidsData.length > 0
                    ? parseFloat(bidsData[0]?.amount).toFixed(2)
                    : "0"}
                </div>
              </div>
              <span
                className={`text-[14px] font-rbRegular rounded-full bg-[#34E5A8] px-4 py-1 bg-opacity-40 cursor-pointer ${
                  disable && "pointer-events-none"
                }`}
                onClick={() => onComplete(bidsData[0]?.id)}
              >
                {disable ? "الفائز" : "اتمام الصفقة"}
              </span>
            </div>
          </div>
          <div className="bg-[#6B66DA] bg-opacity-20 md:mb-0 mb-5 border-1 md:w-1/3 flex justify-between flex-col shadow-md rounded-lg p-4 m-2 h-48">
            <div>
              <p className="md:text-[20px] text-end lg:text-[24px] font-rbRegular text-gray-800">
                إجراءات علي الطلب
              </p>
              <p className="text-end mt-1 text-[12px] text-[#71778d] font-rbRegular">
                من تاريخ {start} الي تاريخ {end}
              </p>
            </div>
            <div className="flex bg-[#6B66DA] p-2 rounded-xl items-center justify-between">
              <div className="flex"></div>
              <p className="text-white">
                <strong>{bidsData?.length}</strong> اجراء
              </p>
            </div>
          </div>
        </div>
        <div
          className="md:my-24 sm:my-10 mt-10 w-[95%] mx-auto md:flex justify-between items-center "
          dir="rtl"
          ref={tableRef}
        >
          <h1 className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] relative font-rbBold">
            <span> عروض</span>{" "}
            <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 sm:pe-14 pe-8 h-6 py-0">
              الاسعار
            </span>
            <p className="text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular sm:mt-5 mt-3">
              سينم عرض الاسعار من اقل سعرا الي الاعلي سعرا
            </p>
          </h1>
        </div>
      </div>
      {bidsData?.length > 0 ? (
        <div
          className="w-[95%] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg mb-5"
          dir="rtl"
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="md:text-xl text-small border-b-1 text-[black] uppercase">
              <tr>
                <th scope="col" className="px-6 py-3 font-rbBold">
                  افضل سعر
                </th>
                <th scope="col" className="px-6 py-3 font-rbBold">
                  المورد
                </th>
                <th scope="col" className="px-6 py-3 font-rbBold">
                  التاريخ
                </th>
                <th scope="col" className="px-6 py-3 font-rbBold">
                  أفضل سعر
                </th>
                <th scope="col" className="px-6 py-3 font-rbBold">
                  الاجراء
                </th>
              </tr>
            </thead>
            {bidsData?.map((bid, index) => {
              const bestPrice = index == 0 || index == 1 || index == 2;
              const disabled = disable && bid?.is_winner != "1";
              return (
                <tbody className="text-[#000]" key={index}>
                  <tr className="bg-white border-b text-nowrap dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div
                        className={`flex items-center ${
                          disabled
                            ? "text-[#808080]"
                            : bestPrice
                            ? "text-[#34E5A8]"
                            : "text-[#F84F39]"
                        } font-rbRegular md:font-rbBold gap-1`}
                      >
                        {bestPrice ? (
                          <LuArrowUpToLine />
                        ) : (
                          <LuArrowDownToLine />
                        )}
                        {bid?.amount} ريال سعودي
                      </div>
                    </th>
                    <td
                      className={`px-6 py- 4 font-rbRegular md:font-rbBold ${
                        disabled ? "text-[#808080]" : "text-[#000]"
                      }`}
                    >
                      المورد {arabicNumbers[index]}
                    </td>
                    <td
                      className={`px-6 py-4 ${
                        disabled ? "text-[#808080]" : "text-[#000]"
                      }`}
                    >
                      {bid?.created_date}
                    </td>
                    <td className="px-6 py-4">
                      {index == 0 && (
                        <div className="flex items-center md:font-rbBold font-rbRegular">
                          <div
                            className={`h-2.5 w-2.5 rounded-full ${
                              disabled ? "bg-[#808080]" : "bg-[#34E5A8]"
                            } me-2`}
                          ></div>
                          أفضل سعر
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`text-[${
                          disabled ? "#808080" : "#6B66DA"
                        }] lg:px-4 px-3 bg-[#6B66DA] bg-opacity-20 py-2 rounded-full text-center cursor-pointer ${
                          disable && "pointer-events-none"
                        }`}
                        onClick={() => onComplete(bid?.id)}
                      >
                        <p className="text-[12px] font-rbRegular md:font-rbBold">
                          {bid?.is_winner == "1" ? "الفائز" : "اتمام الصفقة"}
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      ) : (
        <div
          className="w-[100%] my-5 px-5 items-center flex justify-center"
          dir="rtl"
        >
          <label className="text-[#656161] text-[16px] font-rbRegular">
            لايوجد عروض سعر لطلبك حتى الان
          </label>
        </div>
      )}
    </div>
  );
};

export default UserDemandMng;
const BestPrices = ({ amount, index, color }) => {
  return (
    <div className="text-[10px] my-2 flex items-center gap-7 justify-between">
      <p className="text-[10px] text-[#14213D] font-rbRegular">
        {amount} ريال سعودي
      </p>
      <div className="flex items-center gap-2">
        <p className="text-[10px] text-[#14213D] font-rbRegular">
          {arabicNumbers[index]}
        </p>
        <FaCircle color={color} />
      </div>
    </div>
  );
};
