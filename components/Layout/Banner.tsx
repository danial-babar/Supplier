import { getCategories, getCities, getStatus } from "@/api/Users";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import DropDownComp from "../DropDownComp";

type Props = {
  onClick: (data: any) => void;
  onReSearchClick?: (data: any) => void;
  search?: boolean;
  results?: number;
};

const Banner = ({ onClick, search, results, onReSearchClick }: Props) => {
  const [categories, setCategories] = useState([{ id: 0, title: "" }]);
  const [cities, setCities] = useState([{ id: 0, city_name: "" }]);
  const [sortBy, setSortBy] = useState([{ id: 0, name: "" }]);
  const [status, setstatus] = useState([{ id: 0, name: "" }]);
  const [dropdownData, setDropdownData] = useState({
    category: { id: 0, title: "" },
    city: { id: 0, city_name: "" },
    sortBy: { id: '0', name: "" },
    status: { id: 0, name: "" },
  });

  const onSearchPress = () => {
    const data = {
      category: dropdownData?.category?.id,
      city: dropdownData?.city?.id,
      sortBy: dropdownData?.sortBy?.id,
      status: dropdownData?.status?.id,
    };
    onClick(data);
  };

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res?.data);
      })
      .catch((err) => {
        console.log("err while getting categories", err);
      });
    getCities()
      .then((res) => {
        setCities(res?.data);
      })
      .catch((err) => {
        console.log("err while getting cities", err);
      });
    getStatus()
      .then((res) => {
        setstatus(res?.data);
      })
      .catch((err) => {
        console.log("err while getting status", err);
      });
  }, []);

  return (
    <div className="w-[95%] flex flex-col items-center justify-between py-8 sm:py-10 md:py-14 lg:py-28 banner-gradient">
      <h1 className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] relative font-rbBold">
        بحث عن طل
        <span className="rounded-3xl bg-[#BDFFA5] pe-3 ">بات التوريد</span>
      </h1>
      <h4 className="text-black w-[95%] opacity-80 tracking-wide sm:opacity-60 text-[16px] sm:text-[18px] md:mt-10 sm:mt-8 mt-4 text-center font-rbLight sm:font-rbRegular">
        تتيح منصة <span className="sm:font-rbBold font-rbRegular">مــوّرد</span>{" "}
        الإلكتروني فرصة مشاركة طلب وعرض سعر الإلكترونية من مختلف مناطق المملكة
      </h4>

      <div className="lg:w-[80%] w-[95%]">
        <div className="md:flex lg:px-5 md:gap-0 gap-5 px-3 items-center parent bg-white shadow-small md:shadow-2xl shadow-[grey] lg:py-2 py-5 rounded-medium lg:rounded-full md:mt-10 sm:mt-8 mt-6 lg:mt-14 text-[12px] font-rbRegular">
          <div className="flex items-center md:mb-0 mb-6 md:w-1/5 lg:w-1/4">
            <Image src="/filter1.png" width={20} height={20} alt="" />
            <DropDownComp
              title={"التصنيف"}
              data={categories}
              getItemTitle={(item) => item.title}
              onClick={(item) =>
                setDropdownData({ ...dropdownData, category: item })
              }
              selectedItem={dropdownData?.category?.title || "اختر التصنيف"}
              dropdownBtnClass={`max-w-[220px] justify-start`}
            />
          </div>

          <div className="flex items-center md:mb-0 mb-6 md:w-1/5 lg:w-1/4">
            <Image src="/location.png" width={20} height={20} alt="" />
            <DropDownComp
              title={"المدينة"}
              data={cities}
              getItemTitle={(item) => item.city_name}
              onClick={(item) =>
                setDropdownData({ ...dropdownData, city: item })
              }
              selectedItem={dropdownData?.city?.city_name || "اختر المدينة"}
              dropdownBtnClass={`max-w-[220px] justify-start`}
            />
          </div>

          <div className="flex items-center md:mb-0 mb-6 md:w-1/3 lg:w-1/4">
            <Image src="/filter2.png" width={20} height={20} alt="" />
            <DropDownComp
              title={"ترتيب"}
              data={[
                { id: '0', name: "الأحدث إلى الأقدم" },
                { id: '1', name: "من الأقدم إلى الأحدث" },
              ]}
              getItemTitle={(item) => item.name}
              onClick={(item) =>
                setDropdownData({ ...dropdownData, sortBy: item })
              }
              selectedItem={
                dropdownData?.sortBy?.name || "اختر من الاحدث الي الاقدم"
              }
              dropdownBtnClass={`max-w-[220px] justify-start`}
            />
          </div>

          <div className="flex items-center md:mb-0 mb-6 md:w-1/6">
            <Image src="/flag.png" width={20} height={20} alt="" />
            <DropDownComp
              title={"حالة الطلب"}
              data={status}
              getItemTitle={(item) => item.name}
              onClick={(item) =>
                setDropdownData({ ...dropdownData, status: item })
              }
              selectedItem={dropdownData?.status?.name || "اختر حالة الطلب"}
              dropdownBtnClass={`max-w-[220px] justify-start`}
            />
          </div>

          <div className="md:w-auto sm:w-1/2 w-full md:text-start text-end">
            <div
              className="bg-[#F84F39] md:p-3 w-full p-2 lg:p-4 rounded-full text-white cursor-pointer"
              onClick={onSearchPress}
            >
              <CiSearch className="text-[25px]" />
            </div>
          </div>
        </div>
      </div>
      {search && results > 0 && (
        <div className="items-center text-center mt-10">
          <h1 className="text-[#000] text-[28px] font-rbBold">نتائج البحث</h1>
          <p className="text-[#000] text-[20px] font-rbRegular">
            عدد النتائج{" "}
            <span className="text-[#F84F39] text-[20px] font-rbBold">
              {results}{" "}
            </span>
            طلبات توريد{" "}
            <span
              className="text-[#F84F39] text-[20px] font-rbBold underline cursor-pointer"
              onClick={onReSearchClick}
            >
              إعادة البحث{" "}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Banner;
