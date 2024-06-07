"use client";
import React, { useCallback, useEffect, useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { leadsFLow } from "@/api/Users";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  const route = useRouter();
  // const dispatch = useDispatch();
  const [myLeads, setMyLeads] = useState([]);
  const searchParams = useSearchParams();
  const { user } = useSelector((state: any) => state.user);
  useEffect(() => {
    leadsFLow
      .userLeads(user?.id)
      .then((response) => {
        console.log("response while getting user leads", response);
        setMyLeads(response);
      })
      .catch((error) => {
        console.log("error while getting user leads", error);
      });
  }, [user]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div dir="rtl">
      <Header />
      <div className="bg-gradient-radial from-blue-100 to-blue-50 via-gray-50">
        <div className="grid w-[95%] grid-cols-1 md:grid-cols-2 sm:pt-8 pt-5 gap-4 mx-auto items-center">
          <div className="text-[#0A102F] text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold relative">
            جمي
            <span className="rounded-3xl bg-[#BDFFA5] pe-4 h-6 py-0">
              ع الطلبات
            </span>
            <div className="text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular text-gray-700 sm:mt-8 mt-4">
              <p>يمكنك عرض جميع الطلبات المقدمة النشطة والمنتهية</p>
            </div>
            {myLeads?.length == 0 && (
              <div className="mt-4  flex">
                <label className="text-black text-[16px] font-rbRegular">
                  لم تقم بنشر أي طلب حتى الآن-
                  <span
                    className="text-[#F84F39] underline cursor-pointer"
                    onClick={() => route.push("/addRequest")}
                  >
                    {" "}
                    يرجى إنشاء طلبك الأول هنا{" "}
                  </span>
                </label>
              </div>
            )}
          </div>
          <div className="">
            <Image
              src="/request.png"
              height={460}
              width={460}
              alt=""
              className="object-contain target_img mx-auto"
            />
          </div>
        </div>
      </div>
      {myLeads?.length > 0 &&
        myLeads?.map((item: any, index: any) => {
          return (
            <div
              className="bg-gradient-radial from-blue-100 to-pink-50 via-gray-100"
              key={index}
            >
              <div className="w-[95%] mx-auto ">
                <div className="lg:flex mb-8 lg:justify-between justify-center items-center p-6 bg-white rounded-xl shadow-lg hover:bg-gray-100">
                  <div className="flex flex-wrap lg:justify-start justify-evenly gap-4 lg:gap-20 md:gap-12 items-center">
                    <div
                      className="py-1 sm:px-3 text-right px-5 text-[16px] border min-w-[80px] bg-[#F84F39] bg-opacity-20 rounded-full"
                      dir="ltr"
                    >
                      <p className="text-[#F84F39] text-[12px] font-rbRegular items-center justify-center flex">
                        {item?.status_name}
                      </p>
                    </div>
                    <div className="font-rbRegular w-[300px] line-clamp-1 md:font-rbBold sm:text-[20px] text-[16px] md:text-lg sm:text-base">
                      {item?.title}
                    </div>
                    <div className="sm:font-rbBold font-rbRegular text-[12px] mr-2">
                      رقم الطلب
                      <span className="text-[#F84F39] lg:font-rbBold mr-2">
                        {item?.order_no}
                      </span>
                      <span className="mr-2">تاريخ الانتهاء</span>
                      <span className="text-[#F84F39] lg:font-rbBold font-rbRegular mr-2">
                        {"   " + item?.date_expire}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`management?${createQueryString("id", item?.id)}`}
                  >
                    <div
                      className="flex text-[12px] lg:justify-start justify-center items-center lg:mt-0 mt-4 gap-1 font-rbBold cursor-pointer"
                      // onClick={() => onLeadCLick(item?.id)}
                    >
                      عرض التفاصيل الطلب{" "}
                      <FaPlus className="text-[#F84F39] bg-[#F84F39] p-1 bg-opacity-20 rounded-full font-light text-[16px]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

      <Footer />
    </div>
  );
};
export default Page;
