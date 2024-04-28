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
type Props = {
  searchParams: any;
};
const page = ({ searchParams }: Props) => {
  const user = JSON.parse(localStorage.getItem("user"))
console.log('user', user);
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
  console.log("idddddddddd", searchParams);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const handleNextSlide = () => {
    // Assuming you have two slides for demonstration purposes
    setCurrentSlide((prevSlide) => (prevSlide < 1 ? prevSlide + 1 : 1));
  };
  useEffect(() => {
    singleLeadById(searchParams?.id)
      .then((response) => {
        console.log("response while getting single lead", response);
        setLeadData(response);
        calculateRemainingTime(response?.date_expire);
      })
      .catch((error) => {
        console.log("error while getting single lead", error);
      });
  }, []);

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
    const data =  new FormData()
    data.append('lead_id', leadData?.id)
    data.append('user_id', leadData?.id)
    data.append('amount', reqPrice)
    data.append('created_by', leadData?.created_by)
    bidsFLow
      .addBid(data)
      .then((reponse) => {
        console.log("response while adding bid", reponse);
        setIsBidSuccess(true); // Set bid success state to true
        onOpenChange(); // Close the modal
      })
      .catch((error) => {
        console.log("error while adding bid",error);
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
                      className="absolute block w-full lg:w-[800px] h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt={`Slide ${index}`}
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
              <div className="my-5">
                <Button
                  onClick={onOpen}
                  className="sm:font-rbRegular bg-[#F84F39] w-full font-rbLight text-white rounded-lg sm:rounded-3xl px-5 py-2 sm:py-6"
                >
                  تقديم طلب سعر
                </Button>
              </div>
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
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:mb-auto mb-4 sm:justify-start justify-end md:mt-auto mt-5">
            <Button className="border-[#F84F39] bg-white sm:w-auto w-full px-8 sm:px-14 border-1 rounded-full text-[#F84F39]">
              ايقاف الطلب
            </Button>
            <Button className="text-[#fff] sm:w-auto w-full rounded-full px-8 sm:px-14 bg-[#F84F39]">
              الغاء الطلب
            </Button>
          </div>
        </div>
      </div>
      <div
        className="w-[95%] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg"
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
          <tbody className="text-[#000]">
            <tr className="bg-white border-b text-nowrap dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center text-[#34E5A8] font-rbRegular md:font-rbBold gap-1">
                  <LuArrowUpToLine /> 123.00.00 ريال سعودي
                </div>
              </th>
              <td className="px-6 py-4 font-rbRegular md:font-rbBold ">
                المورد الاول
              </td>
              <td className="px-6 py-4">12/03/2024 - 3:00pm</td>
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
        </table>
      </div>
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
export default page;
