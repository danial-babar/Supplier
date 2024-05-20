"use client";

import Banner from "@/components/Layout/Banner";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import PlatformCard from "@/components/PlatformCard";
import RequestCard from "@/components/RequestCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DownloadAppBanner from "@/components/DownloadAppBanner";
import SupplierPlatform from "@/components/SupplierPlatform";
import Partners from "@/components/Partners";
import { filterLeads, getAllLeads, getCategories } from "@/api/Users";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Spinner } from "@nextui-org/react";

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
  const leadsPerPage = 6;
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    getCategoriesList();
  }, []);
  useEffect(() => {
    getLeads(currentPage, leadsPerPage);
  }, [currentPage]);

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leadsData.slice(indexOfFirstLead, indexOfLastLead);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  console.log("current leads", currentLeads);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const getLeads = (page: any, leadsPerPage: any) => {
    setLoading(true);
    getAllLeads()
      .then((res: Lead[]) => {
        console.log("res while getting leads", res);
        if (page === 1) {
          setLeadsData(res);
        } else {
          setLeadsData((prevLeads: Lead[]) => [...prevLeads, ...res]);
        }
        setLeadsData(res);
      })
      .catch((err) => {
        console.log("err while getting leads", err);
      })
      .finally(() => setLoading(false));
  };

  const getCategoriesList = () => {
    getCategories()
      .then((res) => {
        console.log("res while getting categories", res);
      })
      .catch((err) => {
        console.log("err while getting categories", err);
      });
  };
  const handleSearchClick = (data: any) => {
    console.log("data filtered", data);
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
    <div dir="rtl" className="">
      <Header activeItem={0} />
      <Banner onClick={handleSearchClick} />
      <div className="md:my-24 sm:my-10 mt-10 w-[95%] mx-auto sm:flex justify-between items-center ">
        <h1 className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] relative font-rbBold">
          طلبات{" "}
          <span className="rounded-3xl bg-[#BDFFA5] sm:pe-16 md:pe-20 pe-4 ps-2 h-6 py-0">
            التوريد
          </span>
          <p className="text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular sm:mt-5 mt-3">
            انضم إلينا اليوم واستكشف عالم التوريدات الشيق والمثير.
            <span className="text-[#F84F39] underline font-rbLight sm:font-rbBold">
              كل طلبات التوريد
            </span>
          </p>
        </h1>
        <div className="flex items-center sm:mb-auto mb-4 sm:justify-start justify-end sm:mt-auto mt-4">
          <button
            className="bg-[#6B66DA] border-[2px] border-[#6B66DA] text-white rounded-full sm:p-3 p-1"
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(leadsData.length / leadsPerPage)
            }
          >
            <MdKeyboardArrowRight className="text-xl md:text-2xl" />
          </button>
          <button
            className="text-[#6B66DA] ms-3 border-[2px] border-[#6B66DA] rounded-full sm:p-3 p-1"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <MdOutlineKeyboardArrowLeft className="text-xl md:text-2xl" />
          </button>
        </div>
      </div>
      {loading ? (
        <div className="flex w-full  justify-center mb-10 items-center">
          <Spinner />
        </div>
      ) : (
        <div
          className="w-[95%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
          style={{ direction: "rtl" }}
        >
          <>
            {Array.isArray(currentLeads) && currentLeads.length > 0 ? (
              currentLeads.map(
                (item: { id: string; status: string }, index) => {
                  return (
                    <RequestCard
                      key={item.id} // don't forget to add a unique key when mapping over arrays in React
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
                      // href={{ pathname: "/management", query: { id: item?.id } }}
                      onClick={() => onLeadCLick(item?.id)}
                      data={item}
                      textColor={item?.status == "2" ? "#000000" : ""}
                    />
                  );
                }
              )
            ) : (
              <div
                className="w-[100%] my-5 px-5 items-center flex justify-center"
                dir="rtl"
              >
                <label className="text-[#656161] text-[16px] font-rbRegular">
                  لا توجد طلبات متاحة.
                </label>
              </div>
            )}
          </>
        </div>
      )}
      <div className="w-[95%] mx-auto sm:mt-20 md:mt-32 mt-8">
        <div className="text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold text-black text-center">
          <span className="">لماذا منصة مـ</span>
          <span className="rounded-3xl bg-[#BDFFA5] pe-3 md:pe-8">
            وّرد الإلكتروني
          </span>
        </div>
        <h3 className="text-[#475467] text-center text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular mt-8">
          تتيح لك منصة <span className="font-bold">مــوّرد</span> الإلكتروني
          المشاركة في طلبات التوريد المطروحة في أي وقت ومن أي مكان بكل سهولة
        </h3>
        <div className="md:flex mx-auto w-full justify-between items-center mt-6">
          <div className="md:w-1/3">
            <PlatformCard
              icon={"/Icon1.png"}
              title="المشاركة عن بعد"
              description="بإمكانك المزايدة بشكل إلكتروني في أي وقت ومن أي مكان"
            />
            <PlatformCard
              icon={"/Icon2.png"}
              title="تقديم طلب سعر على أكثر من طلب توريد في نفس الوقت"
              description="يمكنك تقديم عرض سعر على عدة طلب توريد مختلف عبر المنصة في نفس الوقت"
            />
          </div>
          <div className="md:w-1/3 sm:mt-0 mt-8">
            <Image
              src={"/mobile.png"}
              alt=""
              width={500}
              height={700}
              className="object-contain mx-auto"
            />
          </div>
          <div className="md:w-1/3">
            <PlatformCard
              icon={"/Icon3.png"}
              title="وسائل دفع إلكترونية"
              description="توفر المنصة وسائل دفع إلكترونية آمنه يمكنك من خلالها شحن محفظتك واسترجاع المبلغ بكل أمان"
            />
            <PlatformCard
              icon={"/Icon4.png"}
              title="الامان والخصوصية"
              description="نحافظ على خصوصية معلوماتك الشخصية وأمانها وسلامتها."
            />
          </div>
        </div>
      </div>
      <DownloadAppBanner />
      <SupplierPlatform />
      <Partners />
      <Footer />ٖ
    </div>
  );
};

export default Page;
