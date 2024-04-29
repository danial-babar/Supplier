"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { fieldData } from "@/constants/DummyData";
import { getCategories, getCities, getStatus } from "@/api/Users";
import InputForm from "@/components/inputForm";
import DatePicker from "react-datepicker";
type Props = {};
import "react-datepicker/dist/react-datepicker.css";
const page = (props: Props) => {
  const [categories, setCategories] = useState([{ id: 0, title: "" }]);
  const [cities, setCities] = useState([{ id: 0, city_name: "" }]);
  const [sortBy, setSortBy] = useState([{ id: 0, name: "" }]);
  const [status, setstatus] = useState([{ id: 0, name: "" }]);
  const [inputData, setInputData] = useState({ title: "", category: {} });
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    getCategories()
      .then((res) => {
        // console.log("res while getting categories", res);
        setCategories(res?.data);
      })
      .catch((err) => {
        console.log("err while getting categories", err);
      });
    getCities()
      .then((res) => {
        console.log("res while getting cities", res);
        setCities(res?.data);
      })
      .catch((err) => {
        console.log("err while getting cities", err);
      });
    getStatus()
      .then((res) => {
        console.log("res while getting status", res);
        setstatus(res?.data);
      })
      .catch((err) => {
        console.log("err while getting status", err);
      });
  }, []);
  return (
    <div className="" dir="rtl">
      <Header />
      <div className="md:w-[70%] mx-auto w-[95%]">
        <div className="grid gap-6 mb-6 md:grid-cols-2 my-5">
          <div className="">
            <label className="text-[#000] font-rbRegular text-[18px]">
              عنوان
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>

            <InputForm
              placeholder={"abc"}
              type={"text"}
              className="border border-gray-300 text-sm block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 bg:hover-gray-500"
              value={inputData?.title}
              onchange={(e) =>
                setInputData({ ...inputData, title: e.target.value })
              }
            />
          </div>
          <div className="">
            <label className="text-[#000] font-rbRegular text-[18px]">
              التصنيف
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            <Select
              placeholder="إختر ...."
              className="rounded-none selectboxForRTL"
            >
              {categories?.map((item) => (
                <SelectItem
                  key={item.id}
                  value={item.id}
                  onClick={() => setInputData({ ...inputData, category: item })}
                >
                  {item.title}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="">
            <label className="text-[#000] font-rbRegular text-[18px]">
              المدينة
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            <Select
              placeholder="إختر ...."
              className="rounded-none selectboxForRTL"
            >
              {cities?.map((item) => (
                <SelectItem
                  key={item.id}
                  value={item.id}
                  onClick={() => setInputData({ ...inputData, category: item })}
                >
                  {item.city_name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="">
            <label className="text-[#000] font-rbRegular text-[18px]">
              الكمية
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>

            <InputForm
              placeholder={"abc"}
              type={"text"}
              className="border border-gray-300 text-sm block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 bg:hover-gray-500"
              value={inputData?.quantity}
              onchange={(e) =>
                setInputData({ ...inputData, quantity: e.target.value })
              }
            />
          </div>
          <div className="">
            <label className="text-[#000] block font-rbRegular text-[18px]">
              الكمية
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              className="datepicker_w border border-gray-300 text-sm p-2.5 dark:border-gray-600 dark:placeholder-gray-400 bg:hover-gray-500"
            />
          </div>
          <div className="">
            <label htmlFor="">jsdf</label>
            <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
              {fieldData.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="">
            <label htmlFor="">jsdf</label>
            <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
              {fieldData.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="">
            <label htmlFor="">jsdf</label>
            <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
              {fieldData.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="">
            <label htmlFor="">jsdf</label>
            <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
              {fieldData.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="">
            <label htmlFor="">jsdf</label>
            <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
              {fieldData.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="">jsdf</label>
          <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
            {fieldData.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default page;
