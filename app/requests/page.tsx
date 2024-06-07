"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Banner from "@/components/Layout/Banner";
import RequestCard from "@/components/RequestCard";
import { filterLeads } from "@/api/Users";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@nextui-org/react";
import Loader from "@/components/Loader";
import ThreeDotedBtn from "@/components/ThreeDotedBtn";

type Props = {};

const Page = (props: Props) => {
  const { searchParams } = useSelector((state: any) => state.search);

  const router = useRouter();
  const dispatch = useDispatch();
  const [leadsData, setLeadsData] = useState<Array<any>>([]);
  const [filterParams, setFilterParams] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [moreLoading, setMoreLoading] = useState(false);
  const [finishFlag, setFinishFlag] = useState(true);
  const [page, setPage] = useState(0);

  const isFetching = useRef(false);

  useEffect(() => {
    handleSearchClick(searchParams);
    return () => {
      dispatch({ type: "clearSearchParams" });
    };
  }, [searchParams, dispatch]);

  const handleSearchClick = async (data: any, resetPage = false) => {
    if (isFetching.current) return;
    isFetching.current = true;

    // setLoading(true);
    if (resetPage) {
      setPage(1);
      setSearchLoading(true);
    }

    const finalData = { ...data, page: resetPage ? 1 : page + 1 };
    if (!resetPage) setPage(page + 1);
    try {
      const response = await filterLeads(finalData);
      console.log("leads response", response);

      setLeadsData((prevLeads) =>
        resetPage ? response : [...prevLeads, ...response]
      );
      setFinishFlag(response.length >= 15);
    } catch (error) {
      console.error("Error while filtering", error);
    } finally {
      setSearchLoading(false);
      setLoading(false);
      setMoreLoading(false);
      isFetching.current = false;
      // setPage(page + 1);
    }
  };

  const handleMoreClick = () => {
    if (isFetching.current) return;

    setMoreLoading(true);
    const newPage = page + 1;
    setPage(newPage);
    handleSearchClick({ ...filterParams, page: page });
  };

  const onLeadClick = (id: any) => {
    dispatch({
      type: "saveLeadId",
      payload: id,
    });
    router.push("/management");
  };
  const queryParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(queryParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [queryParams]
  );
  return (
    <div dir="rtl">
      <Header activeItem={3} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Banner
            onClick={(data) => {
              setFilterParams(data);
              handleSearchClick(data, true);
            }}
            search={
              !searchLoading &&
              Object.keys(filterParams).length > 0 &&
              Object.values(filterParams).some((value) => value !== 0)
            }
            results={leadsData[0]?.total}
            onReSearchClick={(data) => {
              // setFilterParams(data);
              handleSearchClick(filterParams, true);
            }}
            text1="طـلبا"
            text2="ت التوريد"
          />
          {searchLoading ? (
            <div className="flex w-full justify-center mb-10">
              <Spinner />
            </div>
          ) : (
            <>
              {leadsData.length > 0 ? (
                <div className="w-[95%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                  {leadsData.map((item, index) => (
                    <RequestCard
                      key={index}
                      bgColor={
                        item.status == "7"
                          ? "bg-[#FEDCD7]"
                          : item.status == "6"
                          ? "bg-[#D6FAEE]"
                          : "bg-[#FAFAFF]"
                      }
                      contentBg={
                        item.status == "7"
                          ? "bg-[#f84f3948]"
                          : item.status == "6"
                          ? "bg-[#34e5a755]"
                          : "bg-[#6c66da4d]"
                      }
                      contentColor={
                        item.status == "7"
                          ? "#F84F39"
                          : item.status == "6"
                          ? "#34E5A8"
                          : "#6B66DA"
                      }
                      // onClick={() => onLeadClick(item.id)}
                      href={`management?${createQueryString("id", item?.id)}`}
                      data={item}
                      textColor={item.status == "2" ? "#000000" : ""}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="w-[100%] mb-10 px-5 items-center flex justify-center"
                  dir="rtl"
                >
                  <label className="text-[#656161] text-[16px] font-rbRegular">
                    لم يتم العثور على بيانات مقابل البحث
                  </label>
                </div>
              )}
              {leadsData.length > 0 && finishFlag && (
                <ThreeDotedBtn
                  title="المزيد من التنصيفات..."
                  onclick={handleMoreClick}
                  loading={moreLoading}
                />
                // <div
                //   className="md:mt-20 text-center mt-8 mb-8"
                //   onClick={handleMoreClick}
                // >
                //   <a className="bg-[#F84F39] px-4 py-2 rounded-medium md:rounded-full text-white font-rbRegular">
                //     {moreLoading ? (
                //       <Spinner color="white" size="sm" />
                //     ) : (
                //       " المزيد من التنصيفات..."
                //     )}
                //   </a>
                // </div>
              )}
            </>
          )}
          <Footer styles="mt-6" />
        </>
      )}
    </div>
  );
};

export default Page;
