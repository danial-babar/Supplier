"use client";
import React from "react";
import { MdLogin } from "react-icons/md";
import Header from "@/components/Layout/Header";
import { GoPeople } from "react-icons/go";
import Link from "next/link";
import { FaCalculator, FaRegIdCard } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
type Props = {};
const Page = (props: Props) => {
  const route = useRouter();
  const dispatch = useDispatch();
  const onFacility = () => {
    dispatch({
      type: "addUserType",
      payload: 2,
    });
    route.push("/create-account");
  };
  const onIndividual = () => {
    dispatch({
      type: "addUserType",
      payload: 1,
    });
    route.push("/create-account");
  };
  return (
    <div dir="rtl">
      <Header />
      <div className="bg-gradient-radial md:pb-28 pb-16 lg:pb-40 from-blue-100 to-pink-50 via-gray-100">
        <div className="text-center w-[95%] mx-auto md:pt-20 pt-8">
          <div className=" text-[#0A102F] lg:text-[45px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
            <span> إنشاء ح</span>
            <span className="rounded-3xl bg-[#BDFFA5] md:pe-[24px] pe-4 py-0">
              ساب جديد
            </span>
            <div className="text-[14px] md:text-[20px] text-gray-700 sm:my-8 my-4 font-rbRegular">
              <p>فضلا قم باختيار نوع الحساب</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[95%] py-5 sm:py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border mx-auto md:mt-0 md:w-[70%] lg:w-[50%] sm:w-[80%] shadow md:shadow-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 space-y-4 md:space-y-6 sm:p-6">
              <h1 className="text-xl relative flex items-center justify-start font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <span className="bg-[#F84F39] bg-opacity-20 md:p-3 p-2 absolute rounded-full"></span>
                <MdLogin className="pe-3 ms-2 text-[30px] md:text-[40px] text-[#F84F39]" />
                إنشاء حساب جديد
              </h1>
              <div
                className="flex items-center border sm:p-3 p-2 rounded-lg hover:outline outline-[#F84F39] outline-1"
                onClick={onIndividual}
              >
                {/* <Link
                  href={{
                    pathname: "/create-account",
                    query: { accountType: 1 },
                  }}
                > */}
                <GoPeople className="h-5 w-5 text-[#F84F39]" />
                <div className="sm:px-3 px-2">
                  <p className=" text-gray-900  hover:text-[#F84F39] font-rbBold">
                    {" "}
                    التسجيل كفرد
                  </p>
                  <button
                    className="text-[16px] text-gray-400 text-start sm:font-rbRegular "
                    type="submit"
                  >
                    يمكنك التسجيل كفرد و تقديم وطلب عرض اسعار
                  </button>
                </div>
                {/* </Link> */}
              </div>
              <div
                className="flex items-center border sm:p-3 p-2 rounded-lg hover:outline outline-[#F84F39] outline-1"
                onClick={onFacility}
              >
                {/* <Link
                  href={{
                    pathname: "/create-account",
                    query: { accountType: 2 },
                  }}
                > */}
                <FaCalculator className="h-5 w-5 text-[#F84F39]" />
                <div className="sm:px-3 px-2">
                  <p className=" text-gray-900  hover:text-[#F84F39] font-rbBold">
                    {" "}
                    التسجيل كممثل منشأة
                  </p>
                  <button
                    className="text-[16px] text-gray-400 sm text-start:sm:font-rbRegular"
                    type="submit"
                  >
                    يمكنك التسجيل وتقديم وطلب عرض سعر بالنيابة عن المنشأة
                  </button>
                </div>
                {/* </Link> */}
              </div>
              {/* <div className="flex items-center border sm:p-3 p-2 rounded-lg hover:outline outline-[#F84F39] outline-1">
                  <FaRegIdCard className="h-5 w-5 text-[#F84F39]" />
                  <div className="sm:px-3 px-2">
                    <p className=" text-gray-900  hover:text-[#F84F39] font-rbBold">
                      {" "}
                      التسجيل كوكيل بيع
                    </p>
                    <button
                      className="text-[16px] text-gray-400 text-start sm:font-rbLight"
                      type="submit"
                    >
                      يمكنك التسجيل كوكيل بيع لإدارة وطرح الاسعار الإلكترونية بكل
                      سهولة
                    </button>
                  </div>
                </div> */}
              <Button
                type="submit"
                className="mt-4 w-full bg-[#F84F39] focus:ring-0 sm:font-rbRegular font-rbLight text-white rounded-lg sm:rounded-3xl px-5 py-2 sm:py-3"
                variant="solid"
              >
                إنشاء حساب
              </Button>

              <div className="text-center mt-4">
                <Link
                  href="/login"
                  className="font-rbRegular text-[#F84F39] underline hover:no-underline"
                >
                  تسجيل دخول
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
