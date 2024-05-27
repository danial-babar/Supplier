import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { IoAdd, IoPricetagSharp } from "react-icons/io5";
import { BsTagFill } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";
type Props = {
  bgColor: string;
  contentColor: string;
  contentBg: string;
  textColor?: string;
  onClick?: () => void;
  href?: any;
  data?: any;
};

const RequestCard = ({
  bgColor,
  contentColor,
  contentBg,
  textColor,
  onClick,
  href,
  data,
}: Props) => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    calculateRemainingTime(data?.date_expire);
  }, [data]);
  const calculateRemainingTime = (expireDate: any) => {
    // console.log('expiry date: ' + expireDate);

    const [day, month, year] = expireDate.split("/").map(Number);

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

  // console.log('remainingDays: ' + remainingTime);

  return (
    <div>
      {/* <Link href={href || '/'}> */}
      <div
        className={`px-5 p-6 ${bgColor} border border-gray-200 rounded-lg shadow`}
      >
        <div className="flex gap-2 justify-around items-center">
          <div
            className={`${contentBg} bg-opacity-20 xl:px-5 px-3 py-2 rounded-full flex items-center`}
          >
            <BsTagFill color={contentColor} size={20} />
            <p
              className={`ms-2 font-rbRegular sm:font-rbBold text-[12px] line-clamp-1 text-[${
                textColor || contentColor
              }]`}
            >
              {data?.category_name}{" "}
            </p>
          </div>
          <div
            className={`${contentBg} bg-opacity-20 px-3 xl:px-5 py-2 rounded-full flex items-center]`}
          >
            {/* <Image src="/location.png" alt="" width={16} height={16} /> */}
            <TiLocationOutline color={contentColor} size={20} />
            <p
              className={`ms-2 text-[10px] md:text-[12px] line-clamp-1 font-rbRegular sm:font-rbBold text-[${
                textColor || contentColor
              }]`}
            >
              {data?.city_name}{" "}
            </p>
          </div>
        </div>
        <h1 className="font-rbBold text-[18px] md:text-[20px] text-[#061C3D] text-center my-6 line-clamp-1">
          {data?.title}
        </h1>

        <p className="font-rbBold text-[16px] text-center line-clamp-1 mt-6 mb-3">
          {data?.status == "1"
            ? "تم انتهاء الطلب"
            : "الوقت المتبقي حتى نهاية الطلب"}
        </p>
        {!(
          remainingTime?.days <= 0 &&
          remainingTime?.hours <= 0 &&
          remainingTime?.minutes <= 0
        ) ? (
          <div
            className={`${contentBg} text-[${
              textColor || contentColor
            }] font-rbBold mx-auto w-[220px] h-[55px] px-4 flex items-center justify-between rounded-xl py-2 text-center bg-opacity-20`}
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
          <div
            className={`${contentBg} text-[${
              textColor || contentColor
            }] font-rbBold mx-auto w-[220px] h-[55px] items-center justify-center flex rounded-xl py-2 text-center bg-opacity-20`}
          >
            <label
              className={`text-[20px] text-[${
                textColor || contentColor
              }] font-rbBold`}
            >
              مغلق
            </label>
            {/* <div className="justify-center text-[20px] flex items-center">
                <span>00</span>
                <span>.00.</span>
                <span>123</span>
              </div>
              <p className="text-[7px]">ريال سعودي</p> */}
          </div>
        )}
        <div className="flex justify-between items-center mb-3 mt-6">
          <div className="flex items-center">
            <FaCircle
              className={`text-[${contentColor}] me-3 text-opacity-30 text-[10px]`}
            />
            <span className="text-[#42526B] font-rbLight">الكمية</span>
          </div>
          <span className="text-[#42526B]  font-rbRegular">
            عدد {data?.quantity} عبوة
          </span>
        </div>
        <hr className="mb-3" />
        <div className="flex justify-between mb-3 items-center">
          <div className="flex items-center">
            <FaCircle
              className={`text-[${contentColor}] me-3 text-opacity-30 text-[10px]`}
            />
            <span className="text-[#42526B] font-rbLight">تاريخ التسليم</span>
          </div>
          <span className="text-[#42526B] ">{data?.date_delivery}</span>
        </div>
        <hr className="mb-3" />
        <div className="flex justify-between mb-3 items-center">
          <div className="flex items-center">
            <FaCircle
              className={`text-[${contentColor}] me-3 text-opacity-30 text-[10px]`}
            />
            <span className="text-[#42526B] font-rbLight"> رقم الطلب</span>
          </div>
          <span className={`text-[${contentColor}] font-rbBold`}>
            {data?.order_no}
          </span>
        </div>
        <hr className="mb-3" />
        <div className="flex justify-between mb-3 items-center">
          <div className="flex items-center">
            <FaCircle
              className={`text-[${contentColor}] me-3 text-opacity-30 text-[10px]`}
            />
            <span className="text-[#42526B] font-rbLight">حالة الطلب</span>
          </div>
          <span className={`text-[${contentColor}]  font-rbBold`}>
            {data?.status_name}
          </span>
        </div>
        <hr className="mb-3" />

        <div className="flex mx-auto text-[#42526B] my-4 text-[12px] w-full justify-end items-center">
          <div className="flex items-center cursor-pointer" onClick={onClick}>
            <label className="font-rbBold cursor-pointer">
              المزيد من التفاصيل
            </label>
            <IoAdd
              className={`text-[16px] bg-white rounded-full ms-2`}
              color={"#F84F39"}
            />
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default RequestCard;
