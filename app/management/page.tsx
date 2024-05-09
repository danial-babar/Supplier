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
type Props = {
  searchParams: any;
};
const Page = ({ searchParams }: Props) => {
  const { leadId } = useSelector((state: any) => state.user);
  const { user } = useSelector((state: any) => state.user);
  console.log("leadId", leadId);
  const [isBidSuccess, setIsBidSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [reqPrice, setReqPrice] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const [leadData, setLeadData] = useState({ images: [] });
  const [allBids, setAllBids] = useState([]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const handleNextSlide = () => {
    // Assuming you have two slides for demonstration purposes
    setCurrentSlide((prevSlide) => (prevSlide < 1 ? prevSlide + 1 : 1));
  };
  useEffect(() => {
    if (leadId) {
      singleLeadById(leadId)
        .then((response) => {
          console.log("response while getting single lead", response);
          const sortedBids = response?.bids.sort((a, b) => {
            // Convert the amount strings to numbers for comparison
            const amountA = parseInt(a?.amount);
            const amountB = parseInt(b?.amount);
            return amountA - amountB; // Ascending order
            // For descending order: return amountB - amountA;
          });
          setLeadData(response);
          setAllBids(sortedBids);
          calculateRemainingTime(response?.date_expire);
        })
        .catch((error) => {
          console.log("error while getting single lead", error);
        });
      bidsFLow
        .bidsOnLead(leadId)
        .then((response) => {
          console.log("response while getting bids on a lead", response);
          setAllBids(response);
        })
        .catch((error) => {
          console.log("error while getting bids on a lead", error);
        });
    }
  }, [searchParams?.id,leadId]);

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
        console.log("response while adding bid", reponse);
        setIsBidSuccess(true); // Set bid success state to true
        onOpenChange(); // Close the modal
      })
      .catch((error) => {
        console.log("error while adding bid", error);
      });
  };
  useEffect(() => {
    if (isBidSuccess) {
      // Show alert to the user
      alert("Bid successfully added!");
      // Reset bid success state after showing alert
      setIsBidSuccess(false);
    }
  }, [isBidSuccess]);
  return (
    <div className="">
      <div dir="rtl">
        <Header />
      </div>
      <div>
        <div className="mt-5">
          <div className="lg:flex flex-row items-start lg:gap-12 gap-6 w-[95%] mx-auto">
            <div
              id="indicators-carousel"
              className="relative lg:w-1/2 w-full"
              data-carousel="active"
            >
              <div className="relative h-56 overflow-hidden rounded-lg lg:h-96">
                {leadData?.images.map((image: any, index: number) => (
                  <div
                    key={index}
                    className={`duration-700 ease-in-out ${
                      currentSlide === index ? "" : "hidden"
                    }`}
                    data-carousel-item
                  >
                    <Image
                      src={
                        "https://projects.microrage.com/moward/resources/uploads/lead_images/" +
                        image.filepath
                      }
                      width={500}
                      height={500}
                      className="absolute block w-[500] lg:w-[800px] h-[500] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt={`Slide ${index}`}
                      loading="lazy"
                      // objectPosition="cover"
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="absolute bottom-[50%] start-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={handlePrevSlide}
              >
                <GrLinkPrevious className="text-[30px] text-[#6c66da4d] border-1 border-[#6c66da4d] p-2 rounded-full hover:bg-[#6c66da4d] hover:text-white" />
                <span className="sr-only">Previous</span>
              </button>

              <button
                type="button"
                className="absolute bottom-[50%] end-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={handleNextSlide}
              >
                <GrLinkNext className="text-[30px] text-[#6c66da4d] border-1 border-[#6c66da4d] p-2 rounded-full hover:bg-[#6c66da4d] hover:text-white" />
                <span className="sr-only">Next</span>
              </button>
              {user?.id != leadData?.created_by && (
                <div className="my-5">
                  <Button
                    onClick={() => {
                      if (user?.user_role_key == "buyer") {
                        alert("الرجاء تسجيل الدخول كمورد لتقديم العطاءات");
                      } else onOpen();
                    }}
                    className="sm:font-rbRegular bg-[#F84F39] w-full font-rbLight text-white rounded-lg sm:rounded-3xl px-5 py-2 sm:py-6"
                  >
                    تقديم طلب سعر
                  </Button>
                </div>
              )}
            </div>

            <div className="lg:w-3/4 lg:mt-auto mt-8 w-full">
              <div className="" dir="rtl">
                <div className="sm:flex sm:space-y-0 space-y-5 justify-between items-center">
                  <div className="text-[#6B66DA] bg-[#6B66DA] bg-opacity-20 lg:px-5 px-3 py-1 rounded-full flex items-center">
                    <BsTagFill className="text-[#6B66DA]" size={18} />
                    <p className="lg:ms-2 ms-1 font-rbRegular md:font-rbBold text-[10px]">
                      {leadData?.category_name}{" "}
                    </p>
                  </div>
                  <div className="text-[#6B66DA] bg-[#6B66DA] bg-opacity-20 px-3 lg:px-4 py-1 rounded-full flex items-center">
                    <TiLocationOutline className="text-[#6B66DA]" size={18} />
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
                    <FaCircle className="text-[red] me-3 text-opacity-30 text-[10px]" />
                    <span className="text-[#000] font-rbLight">الكمية</span>
                  </div>
                  <span className="text-[#000] md:font-rbBold font-rbRegular">
                    عدد {leadData?.quantity} عبوة
                  </span>
                </div>
                <hr className="mb-3" />
                <div className="flex justify-between mb-3 items-center">
                  <div className="flex items-center">
                    <FaCircle className="text-[red] me-3 text-opacity-30 text-[10px]" />
                    <span className="text-[#000] font-rbLight">
                      تاريخ التسليم
                    </span>
                  </div>
                  <span className="text-[#000] md:font-rbBold font-rbRegular ">
                    {leadData?.date_delivery}
                  </span>
                </div>
                <hr className="mb-3" />
                <div className="flex mx-auto text-[#000] my-4 text-[12px] w-full justify-between items-center ">
                  <div className="">
                    <button className="font-rbBold">
                      الوقت المتبقي حتى نهاية الطلب
                    </button>
                  </div>
                  {!(
                    remainingTime?.days <= 0 &&
                    remainingTime?.hours <= 0 &&
                    remainingTime?.minutes <= 0
                  ) ? (
                    <div
                      className="flex w-[220px] justify-between items-center text-[#6B66DA] bg-[#6B66DA] font-rbRegular sm:font-rbBold rounded-xl px-3 md:px-7 py-1 sm:py-2 text-center bg-opacity-20"
                      dir="ltr"
                    >
                      <div className="justify-center text-[20px] items-center">
                        <p className="text-[18px]">{remainingTime?.days}</p>
                        <p className="text-[10px] font-rbRegular">يوم</p>
                      </div>
                      <div className="">
                        <RxDotFilled className="text-white" />
                        <RxDotFilled className="text-white" />
                      </div>
                      <div className="justify-center text-[20px] items-center">
                        <p className="text-[18px]">{remainingTime?.hours}</p>
                        <p className="text-[10px] font-rbRegular">ساعة</p>
                      </div>
                      <div className="">
                        <RxDotFilled className="text-white" />
                        <RxDotFilled className="text-white" />
                      </div>
                      <div className="justify-center text-[20px] items-center">
                        <p className="text-[18px]">{remainingTime?.minutes}</p>
                        <p className="text-[10px] font-rbRegular">دقيقة</p>
                      </div>
                    </div>
                  ) : (
                    <div className=" text-[#6B66DA] bg-[#6B66DA] font-rbRegular sm:font-rbBold rounded-xl px-3 md:px-7 py-1 sm:py-2 text-center bg-opacity-20">
                      <div className="justify-center gap-4 md:gap-6 text-[16px] md:text-[20px] flex items-center">
                        <span>00</span>
                        <span>00</span>
                        <span>123</span>
                      </div>
                      <p className="sm:text-[8px] text-[10px]">ريال سعودي</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {user?.id == leadData?.created_by ? (
        <UserDemandMng bidsData={allBids} />
      ) : (
        <LeadDetails text="" />
      )}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        className="pb-4"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader
                className="flex justify-between items-center gap-1"
                dir="rtl"
              >
                <div className="flex items-center">
                  <Image src="/okay-icon.png" width={40} height={40} alt="" />
                  اضافة عرض سعر
                </div>
                <IoCloseCircle
                  color="#F84F39"
                  size={25}
                  onClick={onClose}
                  className="cursor-pointer"
                />
              </ModalHeader>
              <ModalBody>
                <input
                  type="text"
                  placeholder="اضافة سعر"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
                  dir="rtl"
                  value={reqPrice}
                  onChange={(e) => setReqPrice(e.target.value)}
                />
                <CommonButton
                  text="ارسال"
                  bgColor="#F84F39"
                  onPress={add_bid}
                />
                <CommonButton
                  text="الغاء"
                  bgColor="#FEDCD7"
                  onPress={onClose}
                  textColor="#000"
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
    </div>
  );
};
export default Page;
