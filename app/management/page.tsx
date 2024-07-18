"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import CommonButton from "@/components/commonButton";
import ImageCarousel from "@/components/slider";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import { LuArrowUpToLine } from "react-icons/lu";
import { FaCircle } from "react-icons/fa";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import { TiLocationOutline } from "react-icons/ti";
import { BsTagFill } from "react-icons/bs";
import { bidsFLow, singleLeadById } from "@/api/Users";
import { RxDotFilled } from "react-icons/rx";
import { IoCloseCircle } from "react-icons/io5";
import UserDemandMng from "@/components/UserDemandMng";
import CategoriesSupply from "@/components/CategoriesSupply";
import LeadDetails from "@/components/LeadDetails";
import { useSelector } from "react-redux";
import Loader from "@/components/Loader";
import WarningModal from "@/common-modals/WarningModal";
import SuccessModal from "@/common-modals/SuccessModal";
import { useRouter, useSearchParams } from "next/navigation";
type Props = {
  searchParams: any;
};
const Page = ({}: Props) => {
  const router = useRouter();
  // const { leadId } = useSelector((state: any) => state.user);
  const { user } = useSelector((state: any) => state.user);
  const searchParams = useSearchParams();
  // console.log("searchParams", searchParams.get("id"));

  const leadId = searchParams.get("id");
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isBidWaringOpen, setIsBidWaringOpen] = useState(false);
  const [successBid, setSuccessBid] = useState(false);
  const [completeDealModal, setCompleteDealModal] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [completeLoading, setCompleteLoading] = useState(false);
  const [completeDealId, setCompleteDealId] = useState("");
  const [warningMsg, setWarningMsg] = useState("");
  const [reqPrice, setReqPrice] = useState("");
  const [bidError, setBidError] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const [leadData, setLeadData] = useState([]);
  const [allBids, setAllBids] = useState([]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const handleNextSlide = () => {
    // Assuming you have two slides for demonstration purposes
    setCurrentSlide((prevSlide) =>
      prevSlide < leadData?.images?.length - 1
        ? prevSlide + 1
        : leadData?.images?.length - 1
    );
  };
  useEffect(() => {
    if (leadId) {
      GetSinlgeLead();
    } else setLoading(false);
  }, [leadId]);

  const GetSinlgeLead = () => {
    singleLeadById(leadId, user?.id)
      .then((response) => {
        // console.log("response while getting single lead", response);
        if (response?.bids?.length > 0) {
          const sortedBids = response?.bids.sort((a, b) => {
            // Convert the amount strings to numbers for comparison
            const amountA = parseInt(a?.amount);
            const amountB = parseInt(b?.amount);
            return amountA - amountB; // Ascending order
            // For descending order: return amountB - amountA;
          });
          setAllBids(sortedBids);
        }
        setLeadData(response);
        calculateRemainingTime(response?.date_expire);
      })
      .catch((error) => {
        console.log("error while getting single lead", error);
      })
      .finally(() => setLoading(false));
  };
  const calculateRemainingTime = (expireDate: any) => {
    const [day, month, year] = expireDate?.split("/")?.map(Number);

    // Month is 0-based in JavaScript Date objects, so subtract 1 from the month
    const expirationTime: any = new Date(year, month - 1, day);
    const currentTime: any = new Date();

    const timeDifference = expirationTime - currentTime;

    // Convert time difference to days, hours, and minutes
    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const remainingMinutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    setRemainingTime({
      days: remainingDays,
      hours: remainingHours,
      minutes: remainingMinutes,
    });
  };

  const add_bid = () => {
    const data = new FormData();
    data.append("lead_id", leadData?.id);
    data.append("user_id", user?.id);
    data.append("amount", reqPrice);
    data.append("created_by", leadData?.created_by);
    bidsFLow
      .addBid(data)
      .then((reponse) => {
        // console.log("response while adding bid", reponse);
        onBidSuccess();
        onOpenChange();
      })
      .catch((error) => {
        console.log("error while adding bid", error);
      })
      .finally(() => setReqPrice(""));
  };
  const onBidSuccess = () => {
    setSuccessBid(true);
  };
  const handleCompleteBid = (id: string) => {
    setCompleteLoading(true);

    const data = new FormData();
    data.append("bid_id", id);
    bidsFLow
      .completeDeal(data)
      .then((reponse) => {
        // console.log("response while completing bid", reponse);
        setCompleted(true);
      })
      .catch((error) => {
        console.log("error while completing bid", error);
      })
      .finally(() => setCompleteLoading(false));
  };
  return (
    <div className="">
      <div dir="rtl">
        <Header />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            {user?.id != leadData?.created_by && allBids?.length > 0 && (
              <div
                className="w-full sm:flex sm:flex-row flex-col justify-center items-center sm:justify-between p-5 bg-[#D6FAEE]"
                dir="rtl"
              >
                <div className="flex items-center">
                  <Image
                    src={"/message.png"}
                    alt="icon"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <label className="text-[#000000] text-[16px] font-rbBold">
                    اقل سعر حتي الان{" "}
                  </label>
                </div>
                <div className="flex flex-col w-[220px] justify-between items-center  bg-[#34E5A8]  rounded-xl px-3 md:px-7 py-1 sm:py-2 text-center bg-opacity-20">
                  <label className="text-[#000000] text-[16px] font-rbBold">
                    {parseFloat(allBids[0]?.amount)}
                  </label>
                  <label className="text-[#000000] text-[10px] font-rbRegular">
                    ريال سعودي
                  </label>
                </div>
              </div>
            )}
            <div className="mt-5">
              <div className="lg:flex flex-row items-start lg:gap-12 gap-6 w-[95%] mx-auto ">
                <div
                  id="indicators-carousel"
                  className="relative lg:w-1/2 w-full "
                  data-carousel="active"
                >
                  <div className="relative md:h-[550px] h-[300px]  overflow-hidden rounded-lg ">
                    {leadData?.images?.length > 0 &&
                      leadData?.images.map((image: any, index: number) => (
                        <div
                          key={index}
                          className={`duration-700 ease-in-out ${
                            currentSlide === index ? "" : "hidden"
                          }`}
                          data-carousel-item
                        >
                          <Image
                            src={
                              "https://manage.mowarrd.sa/resources/uploads/lead_images/" +
                              image.filepath
                            }
                            width={600}
                            height={500}
                            className="absolute block h-auto w-[600px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Slide ${index}`}
                            loading="lazy"
                            // objectPosition="cover"
                          />
                          {leadData?.images?.length > 1 && (
                            <div className="p-1 flex items-center absolute z-[1] right-10 bottom-8">
                              {leadData?.images?.map(
                                (item: any, index: number) => {
                                  return (
                                    <div
                                      className={`w-2 h-2 rounded-full mx-1 ${
                                        currentSlide == index
                                          ? "bg-[#F84F39]"
                                          : "border border-[#F84F39]"
                                      }`}
                                      key={index}
                                    ></div>
                                  );
                                }
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                  {leadData?.images?.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="absolute bottom-[50%] start-0 z-[1] flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev
                        onClick={handlePrevSlide}
                      >
                        <GrLinkPrevious className="text-[30px] text-[#e2e1e1]  shadow shadow-[#65656584] border-1 border-[#fff] p-2 rounded-full hover:bg-[#efe1e19b] hover:text-white" />
                        <span className="sr-only">Previous</span>
                      </button>

                      <button
                        type="button"
                        className="absolute bottom-[50%] end-0 z-[1]flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next
                        onClick={handleNextSlide}
                      >
                        <GrLinkNext className="text-[30px] text-[#e2e1e1]  shadow shadow-[#65656584] border-1 border-[#fff] p-2 rounded-full hover:bg-[#efe1e19b] hover:text-white" />
                        <span className="sr-only">Next</span>
                      </button>
                    </>
                  )}
                  {leadData?.user_already_bid == "1" ? (
                    <div
                      className="my-5 bg-[#F84F39] items-center justify-center flex-auto p-2 rounded-lg"
                      dir="rtl"
                    >
                      <p className="text-[#fff] font-rbRegular text-[14px] sm:text-[16px] my-1 ">
                        لقد قمت بالفعل بتقديم عرض على هذا الطلب
                      </p>
                      <p className="text-[#fff] font-rbRegular text-[14px] sm:text-[16px] my-1 ">
                        سعر العرض المقدم :
                        <span className="font-rbBold ps-1">
                          {leadData?.user_bid_amount}{" "}
                        </span>
                        ريال سعودي
                      </p>
                    </div>
                  ) : (
                    leadData?.is_won != 1 &&
                    user?.id != leadData?.created_by &&
                    !(
                      remainingTime?.days <= 0 &&
                      remainingTime?.hours <= 0 &&
                      remainingTime?.minutes <= 0
                    ) && (
                      <div className="my-5">
                        <Button
                          onClick={() => {
                            if (user?.user_role_key == "buyer") {
                              setIsBidWaringOpen(true);
                              setWarningMsg(
                                "الرجاء تسجيل الدخول كمورد لتقديم العطاءات"
                              );
                            } else if (!user?.token) router.push("/login");
                            else onOpen();
                          }}
                          className="sm:font-rbRegular bg-[#F84F39] w-full font-rbLight text-white rounded-lg sm:rounded-3xl px-5 py-2 sm:py-6"
                        >
                          تقديم طلب سعر
                        </Button>
                      </div>
                    )
                  )}
                </div>

                <div className="lg:w-3/4 mt-8 w-full ">
                  <div className="" dir="rtl">
                    <div className="sm:flex sm:space-y-0 space-y-5 justify-between items-center">
                      <div className="text-[#6B66DA] bg-[#6B66DA] bg-opacity-20 lg:px-5 px-3 py-1 rounded-full flex items-center">
                        <BsTagFill className="text-[#6B66DA]" size={18} />
                        <p className="lg:ms-2 ms-1 font-rbRegular md:font-rbBold text-[10px]">
                          {leadData?.category_name}{" "}
                        </p>
                      </div>
                      <div className="text-[#6B66DA] bg-[#6B66DA] bg-opacity-20 px-3 lg:px-4 py-1 rounded-full flex items-center">
                        <TiLocationOutline
                          className="text-[#6B66DA]"
                          size={18}
                        />
                        <p className="lg:ms-2 ms-1 text-[10px] font-rbRegular md:font-rbBold">
                          {leadData?.city_name}
                        </p>
                      </div>
                      <div className="text-[#6B66DA] bg-[#6B66DA] bg-opacity-20 px-3 lg:px-4 py-1 rounded-full flex items-center">
                        <p className="text-[10px] font-rbRegular md:font-rbBold">
                          رقم الطلب {leadData?.order_no}
                        </p>
                      </div>
                      <div className="text-[#6B66DA] bg-[#6B66DA] bg-opacity-20 px-3 lg:px-4 py-1 rounded-full flex items-center">
                        <p className="text-[10px] font-rbRegular md:font-rbBold">
                          حالة الطلب {leadData?.status_name}
                        </p>
                      </div>
                    </div>
                    <div className="md:mb-10 mb-5">
                      <h1 className="font-rbBold text-[18px] md:text-[20px] text-[#061C3D] my-6">
                        {leadData?.title}
                      </h1>
                      <p className="sm:font-rbRegular sm:text-start text-center mb-5 font-rbLight tracking-wide text-[#42526B]">
                        {leadData?.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mb-3 mt-6">
                      <div className="flex items-center">
                        <FaCircle className="text-[#6B66DA33] me-3 text-opacity-30 text-[10px]" />
                        <span className="text-[#000] font-bahijRegular">
                          الكمية
                        </span>
                      </div>
                      <span className="text-[#000] md:font-rbBold font-rbRegular">
                        عدد {leadData?.quantity} عبوة
                      </span>
                    </div>
                    <hr className="mb-3" />
                    <div className="flex justify-between mb-3 items-center">
                      <div className="flex items-center">
                        <FaCircle className="text-[#6B66DA33] me-3 text-opacity-30 text-[10px]" />
                        <span className="text-[#000] font-bahijRegular">
                          تاريخ التسليم
                        </span>
                      </div>
                      <span className="text-[#000] md:font-rbBold font-rbRegular ">
                        {leadData?.date_delivery}
                      </span>
                    </div>
                    <hr className="mb-3" />
                    <div className="flex mx-auto text-[#000] my-4 text-[16px] w-full justify-between items-center ">
                      <div className="">
                        <button className="font-rbBold">
                          الوقت المتبقي حتى نهاية الطلب
                        </button>
                      </div>
                      {
                        !(
                          remainingTime?.days <= 0 &&
                          remainingTime?.hours <= 0 &&
                          remainingTime?.minutes <= 0
                        ) ? (
                          <>
                            {leadData?.is_won ? (
                              <label className="text-[20px] text-[#6B66DA] font-rbBold">
                                فاز
                              </label>
                            ) : leadData?.status == "7" ? (
                              <label className="text-[20px] text-[#6B66DA] font-rbBold">
                                {leadData?.status_name}
                              </label>
                            ) : (
                              <div
                                className="flex w-[220px] justify-between items-center text-[#6B66DA] bg-[#6B66DA] font-rbRegular sm:font-rbBold rounded-xl px-3 md:px-7 py-1 sm:py-2 text-center bg-opacity-20"
                                dir="ltr"
                              >
                                <div className="justify-center text-[20px] items-center">
                                  <p className="text-[18px]">
                                    {remainingTime?.days}
                                  </p>
                                  <p className="text-[10px] font-rbRegular">
                                    يوم
                                  </p>
                                </div>
                                <div className="">
                                  <RxDotFilled className="text-white" />
                                  <RxDotFilled className="text-white" />
                                </div>
                                <div className="justify-center text-[20px] items-center">
                                  <p className="text-[18px]">
                                    {remainingTime?.hours}
                                  </p>
                                  <p className="text-[10px] font-rbRegular">
                                    ساعة
                                  </p>
                                </div>
                                <div className="">
                                  <RxDotFilled className="text-white" />
                                  <RxDotFilled className="text-white" />
                                </div>
                                <div className="justify-center text-[20px] items-center">
                                  <p className="text-[18px]">
                                    {remainingTime?.minutes}
                                  </p>
                                  <p className="text-[10px] font-rbRegular">
                                    دقيقة
                                  </p>
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          <label className="text-[20px] text-[#F84F39] font-rbBold">
                            مغلق
                          </label>
                        )
                        // <div className=" text-[#6B66DA] bg-[#6B66DA] font-rbRegular sm:font-rbBold rounded-xl px-3 md:px-7 py-1 sm:py-2 text-center bg-opacity-20">
                        //   <div className="justify-center gap-4 md:gap-6 text-[16px] md:text-[20px] flex items-center">
                        //     <span>00</span>
                        //     <span>00</span>
                        //     <span>123</span>
                        //   </div>
                        //   <p className="sm:text-[8px] text-[10px]">
                        //     ريال سعودي
                        //   </p>
                        // </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {user?.id == leadData?.created_by ? (
            <UserDemandMng
              bidsData={allBids}
              onComplete={(id) => {
                setCompleteDealId(id);
                setCompleteDealModal(true);
              }}
              start={leadData?.date_start}
              end={leadData?.date_expire}
              disable={leadData?.is_won}
              lead_id={leadData?.id}
            />
          ) : (
            <LeadDetails text="" />
          )}
          <Modal
            isOpen={isOpen}
            onOpenChange={() => {
              setReqPrice("");
              setBidError("");
              onOpenChange();
            }}
            hideCloseButton
            className="pb-4 self-center z-[999]"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader
                    className="flex justify-between items-center gap-1"
                    dir="rtl"
                  >
                    <div className="flex items-center">
                      <Image
                        src="/okay-icon.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                      اضافة عرض سعر
                    </div>
                    <IoCloseCircle
                      color="#F84F39"
                      size={25}
                      onClick={() => {
                        setReqPrice("");
                        setBidError("");
                        onClose();
                      }}
                      className="cursor-pointer"
                    />
                  </ModalHeader>
                  <ModalBody>
                    <div className="" dir="rtl">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] sm:text-[12px] text-[#0A102F] font-rbRegular">
                          الحد الأدنى للسعر هو{" "}
                          <span className="font-rbBold">
                            {leadData?.min_price}
                          </span>
                        </label>
                        <label className="text-[10px] sm:text-[12px] text-[#0A102F] font-rbRegular">
                          الحد الأقصى للسعر هو{" "}
                          <span className="font-rbBold">
                            {leadData?.max_price}
                          </span>
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="اضافة سعر"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 my-4"
                        dir="rtl"
                        value={reqPrice}
                        onChange={(e: any) => {
                          const value = e.target.value;
                          setReqPrice(value);
                          // if (!value || isNaN(parseInt(value))) {
                          //   setReqPrice(value);
                          //   setBidError("");
                          // } else if (parseInt(value) <= leadData?.max_price) {
                          //   setReqPrice(value);
                          //   setBidError("");
                          // } else {
                          //   setBidError(
                          //     "لا يمكن أن يكون السعر أكثر من الحد الأقصى للسعر"
                          //   );
                          // }
                        }}
                      />
                      {bidError && (
                        <label className="text-[12px] text-[#F84F39] font-rbLight">
                          {bidError}
                        </label>
                      )}
                    </div>
                    <CommonButton
                      text="ارسال"
                      bgColor="#F84F39"
                      onPress={() => {
                        if (parseInt(reqPrice) > leadData?.max_price) {
                          setBidError(
                            "لا يمكن أن يكون السعر أكثر من الحد الأقصى للسعر"
                          );
                        } else if (parseInt(reqPrice) < leadData?.min_price) {
                          setBidError(
                            "لا يمكن أن يكون السعر أقل من الحد الأدنى للسعر"
                          );
                        } else add_bid();
                      }}
                      disable={!reqPrice || parseInt(reqPrice) < 1}
                      marginTop={"mt-[0px]"}
                    />
                    <CommonButton
                      text="الغاء"
                      bgColor="#FEDCD7"
                      onPress={() => {
                        setReqPrice("");
                        setBidError("");
                        onClose();
                      }}
                      textColor="#000"
                      marginTop={"mt-[0px]"}
                    />
                  </ModalBody>
                  {/* <ModalFooter> */}

                  {/* </ModalFooter> */}
                </>
              )}
            </ModalContent>
          </Modal>
          <div dir="rtl">
            <Footer />
          </div>
        </>
      )}
      <WarningModal
        header="تحذير"
        message={warningMsg}
        buttonText="يغلق"
        isOpen={isBidWaringOpen}
        onClose={() => setIsBidWaringOpen(false)}
        onConfirm={() => setIsBidWaringOpen(false)}
      />

      <WarningModal
        header="تأكيد"
        message={
          completed ? "لقد أكملت الصفقة بنجاح." : "هل تريد إتمام الصفقات؟"
        }
        buttonText="تأكيد"
        isOpen={completeDealModal}
        onClose={() => setCompleteDealModal(false)}
        onConfirm={() => {
          if (!completed) handleCompleteBid(completeDealId);
          else {
            setCompleteDealModal(false);
            setCompleted(false);
            GetSinlgeLead();
          }
        }}
        loading={completeLoading}
      />
      <SuccessModal
        header="تهانينا"
        message={"تم إرسال عرض السعر بنجاح"}
        buttonText="تأكيد"
        isOpen={successBid}
        onClose={() => setSuccessBid(false)}
        onConfirm={() => setSuccessBid(false)}
      />
    </div>
  );
};
export default Page;
