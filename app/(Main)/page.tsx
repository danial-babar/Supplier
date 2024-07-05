"use client";
import Banner from "@/components/Layout/Banner";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import PlatformCard from "@/components/PlatformCard";
import RequestCard from "@/components/RequestCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import DownloadAppBanner from "@/components/DownloadAppBanner";
import SupplierPlatform from "@/components/SupplierPlatform";
import Partners from "@/components/Partners";
import { filterLeads, getAllLeads, getCategories } from "@/api/Users";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@nextui-org/react";
import ElectronicSupplierPlatform from "@/components/ElectronicSupplierPlatform";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { initFirebaseMessaging } from "@/firebase/page";
import { getMessaging, onMessage } from "firebase/messaging";
import useFcmToken from "@/utils/hooks/useFCMToken";
import FcmTokenComp from "../../firebaseForeground";
import { toast } from "react-toastify";
type Props = {};
interface Lead {
  id: string;
  status: string;
  // Add other properties if needed
}
const Page = (props: Props) => {
  const [leadsData, setLeadsData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(true);
  const leadsPerPage = 6;
  const router = useRouter();
  const dispatch = useDispatch();
  const messaging = getMessaging();
  const { token, notificationPermissionStatus } = useFcmToken();

  useEffect(() => {
    if (typeof window !== "undefined") {
      initFirebaseMessaging();
    }

    // onMessage(messaging, (payload) => {
    //   // console.log("Message received. ", payload);
    //   toast("Message received");
    //   // ...
    // });
    getLeads(currentPage);
  }, []);

  const handleNextPage = () => {
    
    if (nextPage) {
      getLeads(currentPage + 1);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    
    if (currentPage > 1) {
      getLeads(currentPage - 1);
      setCurrentPage((prevPage: any) => prevPage - 1);
    }
  };

  const getLeads = (page: any) => {
    setLoading(true);
    getAllLeads(page)
      .then((res: Lead[]) => {
        // console.log("res while getting leads", res);
        setLeadsData(res);
        if (res.length < 6) setNextPage(false);
        else setNextPage(true);
      })
      .catch((err) => {
        // console.log("err while getting leads", err);
      })
      .finally(() => setLoading(false));
  };
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const handleSearchClick = (data: any) => {
    // console.log("data filtered", data);
    dispatch({
      type: "addSearchParams",
      payload: data,
    });
    setTimeout(() => {
      router.push("/search");
    }, 0);
  };
  const onLeadCLick = (id: any) => {
    dispatch({
      type: "saveLeadId",
      payload: id,
    });
    router.push("/management");
  };
  //   useEffect(() => {
  //     if ('serviceWorker' in navigator) {
  //         navigator.serviceWorker.addEventListener('message', (event) => {
  //             if (event.data && event.data.type === "addNotification") {
  //                 dispatch({
  //                     type: 'addNotification',
  //                     // payload: event.data.payload
  //                 });
  //             }
  //         });
  //     }
  // }, []);
  return (
    <div>
      {/* <FcmTokenComp /> */}
      <div dir="rtl" className="">
        <Header activeItem={0} />
        <Banner onClick={handleSearchClick} />
        <div className="md:my-24 sm:my-10 mt-10 w-[95%] mx-auto sm:flex justify-between items-center ">
          <h1 className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] relative font-rbBold">
            طلبات{" "}
            <span className="rounded-3xl bg-[#BDFFA5] sm:pe-16 md:pe-20 pe-4 ps-2 h-6 py-0">
              التوريد
            </span>
            <p className="text-[16px] text-[#475467] sm:text-[18px] font-rbRegular sm:font-rbRegular sm:mt-5 mt-3">
              انضم إلينا اليوم واستكشف عالم التوريدات الشيق والمثير.
              <span className="text-[#F84F39] underline font-rbRegular sm:font-rbBold">
                كل طلبات التوريد
              </span>
            </p>
          </h1>
          <div className="flex items-center sm:mb-auto mb-4 sm:justify-start justify-end sm:mt-auto mt-4">
            <button
              className={`${
                nextPage
                  ? "bg-[#6B66DA] text-white "
                  : "bg-[#d2d2d6] text-[#67676a]"
              } rounded-full sm:p-3 p-1 ml-2`}
              onClick={handleNextPage}
            >
              <SlArrowRight className="text-xl md:text-[20px]" />
            </button>
            <button
              className={`${
                currentPage > 1
                  ? "bg-[#6B66DA] text-white "
                  : "bg-[#d2d2d6] text-[#67676a]"
              }   rounded-full sm:p-3 p-1`}
              onClick={handlePrevPage}
            >
              <SlArrowLeft className="text-xl md:text-[20px]" />
            </button>
          </div>
        </div>
        {loading ? (
          <div className="flex w-full  justify-center mb-10 items-center">
            <Spinner />
          </div>
        ) : (
          <div className="">
            <div
              className="w-[95%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
              style={{ direction: "rtl" }}
            >
              <>
                {Array.isArray(leadsData) &&
                  leadsData.length > 0 &&
                  leadsData.map(
                    (item: { id: string; status: string }, index) => {
                      return (
                        <RequestCard
                          key={item.id} // don't forget to add a unique key when mapping over arrays in React
                          bgColor={
                            item?.status == "6" || item?.status == "1"
                              ? "bg-[#FEDCD7]"
                              : item.status == "4"
                              ? "bg-[#D6FAEE]"
                              : "bg-[#FAFAFF]"
                          }
                          contentBg={
                            item?.status == "6" || item?.status == "1"
                              ? "bg-[#f84f3948]"
                              : item.status == "4"
                              ? "bg-[#34e5a755]"
                              : "bg-[#6c66da4d]"
                          }
                          contentColor={
                            item?.status == "6" || item?.status == "1"
                              ? "#F84F39"
                              : item.status == "4"
                              ? "#34E5A8"
                              : "#6B66DA"
                          }
                          // href={{ pathname: "/management", query: { id: item?.id } }}

                          href={`management?${createQueryString(
                            "id",
                            item?.id
                          )}`}
                          // onClick={() => onLeadCLick(item?.id)}
                          data={item}
                          textColor={item?.status == "2" ? "#000000" : ""}
                        />
                      );
                    }
                  )}
              </>
            </div>
            {leadsData?.length < 1 && (
              <div
                className="w-[100%] my-5 px-5 items-center flex justify-center"
                dir="rtl"
              >
                <label className="text-[#656161] text-[16px] font-rbRegular bg-[#f5f4f4] py-1 px-4 rounded-full">
                  لا توجد طلبات متاحة.
                </label>
              </div>
            )}
          </div>
        )}
        <ElectronicSupplierPlatform />
        <DownloadAppBanner />
        <SupplierPlatform />
      </div>
      <Partners />
      <Footer />ٖ
    </div>
  );
};

export default Page;
