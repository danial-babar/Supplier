"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { leadsFLow } from "@/api/Users";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

type Props = {};

const Page = (props: Props) => {
  const [myLeads, setMyLeads] = useState([]);
  const {user} = useSelector((state:any)=>state.user)
  const router = useRouter();
  const dispatch = useDispatch()
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

  const onLeadCLick = (id: any) => {
    dispatch({
     type:'saveLeadId',
     payload:id
    })
    router.push('/management')
   };
  return (
    <div dir="rtl">
      <Header />
      <div className="bg-gradient-radial from-blue-100 to-blue-50 via-gray-50">
        <div className="grid w-[95%] grid-cols-1 md:grid-cols-2 sm:pt-8 pt-5 gap-4 mx-auto items-center">
          <div className="text-[#0A102F] text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold relative">
            جميع
            <span className="rounded-3xl bg-[#BDFFA5] pe-4 h-6 py-0">
              الطلبات
            </span>
            <div className="text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular text-gray-700 sm:mt-8 mt-4">
              <p>يمكنك عرض جميع الطلبات المقدمة النشطة والمنتهية</p>
            </div>
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
      {myLeads?.map((item: any, index: any) => {
        return (
          <div className="bg-gradient-radial from-blue-100 to-pink-50 via-gray-100" key={index} 
          onClick={()=>onLeadCLick(item?.id)}
          >
            {/* <Link href={{ pathname: "/management", query: { id: item?.id } }}> */}
              <div className="w-[95%] mx-auto ">
                <div className="lg:flex mb-8 lg:justify-between justify-center items-center p-6 bg-white rounded-xl shadow-lg hover:bg-gray-100">
                  <div className="flex flex-wrap lg:justify-start justify-evenly gap-4 lg:gap-20 md:gap-12 items-center">
                    <div
                      className="py-1 sm:px-3 px-5 text-[16px] border bg-[#F84F39] bg-opacity-20 rounded-full"
                      dir="ltr"
                    >
                      <p className="text-[#F84F39] text-[12px] font-rbRegular">
                        {item?.status_name}
                      </p>
                    </div>
                    <div className="font-rbRegular md:font-rbBold sm:text-[20px] text-[16px] md:text-lg sm:text-base">
                      {item?.title}
                    </div>
                    <div className="sm:font-rbBold font-rbRegular text-[12px]">
                      رقم الطلب{" "}
                      <span className="text-[#F84F39] lg:font-rbBold">
                        {" " + item?.order_no}
                      </span>{" "}
                      تاريخ الانتهاء{" "}
                      <span className="text-[#F84F39] lg:font-rbBold font-rbRegular">
                        {" " + item?.date_delivery}
                      </span>
                    </div>
                  </div>
                  <div className="flex lg:justify-start justify-center items-center lg:mt-0 mt-4 gap-1">
                    عرض التفاصيل الطلب{" "}
                    <FaPlus className="text-[#F84F39] bg-[#F84F39] p-1 bg-opacity-20 rounded-full font-light text-[16px]" />
                  </div>{" "}
                </div>
              </div>
            {/* </Link> */}
          </div>
        );
      })}

      <Footer />
    </div>
  );
};
export default Page;
