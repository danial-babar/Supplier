"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import React, { useEffect, useState } from "react";
import Banner from "@/components/Layout/Banner";
import RequestCard from "@/components/RequestCard";
import { filterLeads, getAllLeads } from "@/api/Users";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
// import Image from "next/image";

type Props = {};

const Page = (props: Props) => {
  const { searchParams } = useSelector((state: any) => state.search);
  const router = useRouter();
  const dispatch = useDispatch();
  const [leadsData, setLeadsData] = useState<Array<any>>([]);

  useEffect(() => {
    getLeads();
  }, []);

  const getLeads = () => {
    getAllLeads()
      .then((res) => {
        console.log("res while getting leads", res);

        setLeadsData(res);

        // setLeadsData(res);
      })
      .catch((err) => {
        console.log("err while getting leads", err);
      });
  };
  const handleSearchClick = (data: any) => {
    dispatch({
      type: "addSearchParams",
      payload: data,
    });
    router.push("/search");
  };
  const onLeadCLick = (id: any) => {
    dispatch({
      type: "saveLeadId",
      payload: id,
    });
    router.push("/management");
  };
  return (
    <div dir="rtl">
      <Header activeItem={3} />
      <Banner onClick={handleSearchClick} />
      <div className="w-[95%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {leadsData.map((item: { id: string; status: string }, index) => {
          return (
            <RequestCard
              key={index}
              bgColor={
                item?.status == "7"
                  ? "bg-[#FEDCD7]"
                  : item.status == "6"
                  ? "bg-[#D6FAEE]"
                  : "bg-[#FAFAFF]"
              }
              contentBg={
                item?.status == "7"
                  ? "bg-[#f84f3948]"
                  : item.status == "6"
                  ? "bg-[#34e5a755]"
                  : "bg-[#6c66da4d]"
              }
              contentColor={
                item?.status == "7"
                  ? "#F84F39"
                  : item.status == "6"
                  ? "#34E5A8"
                  : "#6B66DA"
              }
              onClick={() => onLeadCLick(item?.id)}
              // href={{ pathname: "/management", query: { id: item?.id } }}
              data={item}
              textColor={item?.status == "2" ? "#000000" : ""}
            />
          );
        })}
      </div>
      <div className="md:mt-20 text-center mt-8 mb-8">
        <a
          // href=""
          className="bg-[#F84F39] px-4 py-2 rounded-medium md:rounded-full text-white font-rbRegular"
        >
          المزيد من التنصيفات...
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
