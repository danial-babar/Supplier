import { arabicNumbers } from "@/constants/DummyData";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { LuArrowUpToLine } from "react-icons/lu";

type Props = {
  bidsData?: [];
};

const UserDemandMng = ({ bidsData }: Props) => {
  return (
    <div>
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
            تقدم منصة <span className="font-rbBold">مــوّرد</span> مجموعة متنوعة
            من المنتجات الأكثر طلبًا في صناعة التوريد. نحن متخصصون في توفير حلول
            فعالة وذات جودة عالية لاحتياجاتكم.
          </p>
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:mb-auto mb-4 sm:justify-start justify-end md:mt-auto mt-5">
          <Button className="border-[#F84F39] bg-white sm:w-auto w-full px-8 sm:px-14 border-1 rounded-full text-[#F84F39]">
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
            <p className="text-end font-rbRegular text-gray-800">
              احصائيات علي الطلب
            </p>
            <div className="flex mt-3 items-center gap-5 justify-between">
              <div>
                <div className="text-[10px] my-2 flex items-center gap-7">
                  <p>123.00.00 ريال سعودي</p>
                  <div className="flex items-center gap-2">
                    <p>المورد الاول</p>
                    <FaCircle className="text-green-500" />
                  </div>
                </div>
                <div className="text-[10px] mb-2 flex items-center gap-7">
                  <p>123.00.00 ريال سعودي</p>
                  <div className="flex items-center gap-2">
                    <p>المورد الاول</p>
                    <FaCircle className="text-red-500" />
                  </div>
                </div>
                <div className="text-[10px] mb-2 flex items-center gap-7">
                  <p>123.00.00 ريال سعودي</p>
                  <div className="flex items-center gap-2">
                    <p>المورد الاول</p>
                    <FaCircle className="text-purple-500" />
                  </div>
                </div>
              </div>
              <Image src="/chart.png" width={90} height={90} alt="" />
            </div>
          </div>
          <div className="bg-white shadow-md md:w-1/3 md:mb-0 mb-5 border-1 rounded-lg px-4 pt-2 m-2 h-48">
            <p className="text-end font-rbRegular mb-3 text-gray-800">
              اعلي سعر حتي الان
            </p>
            <div className="bg-[#34E5A8] font-rbBold mx-auto py-5 rounded-xl text-center bg-opacity-20">
              <div className="w-[125px] mx-auto">
                <p className="text-[7px] text-start">ريال سعودي</p>
                <div className="justify-center text-[30px] flex items-center">
                  <span>123</span>
                  <span>.00.</span>
                  <span>00</span>
                </div>
              </div>
              <span className="text-[7px] rounded-full bg-[#34E5A8] px-2 py-1 bg-opacity-5">
                ريال سعودي
              </span>
            </div>
          </div>
          <div className="bg-[#6B66DA] bg-opacity-20 md:mb-0 mb-5 border-1 md:w-1/3 flex justify-between flex-col shadow-md rounded-lg p-4 m-2 h-48">
            <div>
              <p className="text-end font-rbRegular mb-3 text-gray-800">
                إجراءات علي الطلب
              </p>
              <p className="text-end text-[7px]">
                من تاريخ 12/03/2024 الي تاريخ 14/03/2024
              </p>
            </div>
            <div className="flex bg-[#6B66DA] p-2 rounded-xl items-center justify-between">
              <div className="flex">
                <Image
                  src={"/person1.png"}
                  className="rounded-full groupOfImage object-contain border-2 border-[#fff] z-[9]"
                  width={30}
                  height={30}
                  alt=""
                />
                <Image
                  src={"/person2.png"}
                  className="rounded-full groupOfImage object-contain border-2 border-[#fff] ml-[-10px] z-[8]"
                  width={30}
                  height={30}
                  alt=""
                />
                <Image
                  src={"/person3.png"}
                  className="rounded-full groupOfImage object-contain border-2 border-[#fff] ml-[-10px] z-[7]"
                  width={30}
                  height={30}
                  alt=""
                />
                <Image
                  src={"/person4.png"}
                  className="rounded-full groupOfImage object-contain border-2 border-[#fff] ml-[-10px] z-[6]"
                  width={30}
                  height={30}
                  alt=""
                />
              </div>
              <p className="text-white">
                <strong>400</strong> اجراء
              </p>
            </div>
          </div>
        </div>
        <div
          className="md:my-24 sm:my-10 mt-10 w-[95%] mx-auto md:flex justify-between items-center "
          dir="rtl"
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
                <th scope="col" className="px-6 py-3">
                  افضل سعر
                </th>
                <th scope="col" className="px-6 py-3">
                  المورد
                </th>
                <th scope="col" className="px-6 py-3">
                  التاريخ
                </th>
                <th scope="col" className="px-6 py-3">
                  أفضل سعر
                </th>
                <th scope="col" className="px-6 py-3">
                  الاجراء
                </th>
              </tr>
            </thead>
            {bidsData?.map((bid, index) => {
              return (
                <tbody className="text-[#000]" key={index}>
                  <tr className="bg-white border-b text-nowrap dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex items-center text-[#34E5A8] font-rbRegular md:font-rbBold gap-1">
                        <LuArrowUpToLine /> {bid?.amount} ريال سعودي
                      </div>
                    </th>
                    <td className="px-6 py- 4 font-rbRegular md:font-rbBold ">
                      المورد {arabicNumbers[index]}
                    </td>
                    <td className="px-6 py-4">{bid?.created_date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center md:font-rbBold font-rbRegular">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                        أفضل سعر
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-[#6B66DA] lg:px-4 px-3 bg-[#6B66DA] bg-opacity-20 py-2 rounded-full text-center">
                        <p className="text-[12px] font-rbRegular md:font-rbBold">
                          اتمام الصفقة
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
            لم يقم أحد بالمزايدة على طلبك بعد.
          </label>
        </div>
      )}
    </div>
  );
};

export default UserDemandMng;
