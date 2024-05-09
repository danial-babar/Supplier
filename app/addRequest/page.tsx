"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import React, {
  ChangeEvent,
  DragEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Select, SelectItem, Textarea, image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { fieldData } from "@/constants/DummyData";
import {
  getCategories,
  getCities,
  getProductsById,
  getStatus,
  getUnits,
  leadsFLow,
} from "@/api/Users";
import InputForm from "@/components/inputForm";
import DatePicker from "react-datepicker";
type Props = {};
import "react-datepicker/dist/react-datepicker.css";
import { IoIosCalendar, IoMdAddCircleOutline } from "react-icons/io";
import Image from "next/image";
import CommonButton from "@/components/commonButton";
import { useSelector } from "react-redux";
const Page = (props: Props) => {
  const { user } = useSelector((state: any) => state.user);
  const [categories, setCategories] = useState([{ id: 0, title: "" }]);
  const [products, setProducts] = useState([{ id: 0, title: "" }]);
  const [cities, setCities] = useState([{ id: 0, city_name: "" }]);
  const [status, setStatus] = useState([{ id: 0, name: "" }]);
  const [units, setUnits] = useState([{ id: 0, title: "" }]);
  const [defaultImage, setDefaultImage] = useState();
  const [images, setImages] = useState([]);
  const [dragging, setDragging] = useState<Boolean>(false);
  const fileInputRef = useRef(null);
  const [inputData, setInputData] = useState({
    title: "",
    category: {},
    description: "",
  });
  const [selectedDate, setSelectedDate] = useState({
    deliveryDate: null,
    postedDate: null,
    expiryDate: null,
    startDate: null,
  });
  console.log("selcted Date", inputData.postedDate);
  const handelDefaultImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0]; // Get the first selected file
    console.log("Selected file:", file); // Log the selected file object
    setDefaultImage(file); // Set the selected file as the default image
  };
  const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImages([...images, ...e.target.files]);
  };
  const formatDate = (date: any) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

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
        setStatus(res?.data);
      })
      .catch((err) => {
        console.log("err while getting status", err);
      });
    getUnits()
      .then((res) => {
        console.log("res while getting units", res);
        setUnits(res?.data);
      })
      .catch((err) => {
        console.log("err while getting units", err);
      });
  }, []);
  const GetProducts = (id: any) => {
    console.log("category ID", id);

    getProductsById(id)
      .then((res) => {
        console.log("res while getting products", res);
        setProducts(res?.data);
      })
      .catch((err) => {
        console.log("err while getting products", err);
      });
  };
  const submitLead = () => {
    const data = new FormData();
    data.append("title", inputData.title);
    data.append("city_id", inputData.city?.id);
    data.append("category_id", inputData.category?.id);
    data.append("product_id", inputData.product?.id);
    data.append("description", inputData?.description);
    data.append("quantity", inputData.quantity);
    data.append("unit", inputData.unit?.id);
    data.append("date_posted", inputData.postedDate);
    data.append("date_start", inputData.startDate);
    data.append("date_expire", inputData.expiryDate);
    data.append("date_delivery", inputData.deliveryDate);
    data.append("created_by", user?.id);
    data.append("default_image", defaultImage);
    data.append("status", inputData?.status?.id);
    data.append("price_min", inputData?.minPrice);
    data.append("price_max", inputData?.maxPrice);
    if (images?.length > 0) {
      images.forEach((item) => data.append("other_images[]", item));
    }

    data.append("is_show_price_data", "1");
    console.log("form data", data);

    leadsFLow
      .addLead(data)
      .then((res) => {
        console.log("res while submiting lead data", res);
        setUnits(res?.data);
      })
      .catch((err) => {
        console.log("err while submiting lead data", err);
      });
  };

  return (
    <div className="flex-1" dir="rtl">
      <Header />
      <div className="w-full items-center justify-center mt-8">
        <h1 className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] relative font-rbBold  text-center">
          اضافة ط<span className="rounded-3xl bg-[#BDFFA5] pe-3 ">لب سعر</span>
        </h1>
        <h4 className="text-black w-[95%] opacity-80 tracking-wide sm:opacity-60 text-[16px] sm:text-[18px] md:mt-10 sm:mt-8 mt-4 text-center font-rbLight sm:font-rbRegular">
          برجاء ادخال البيانات المطلوبة
        </h4>
      </div>
      <div className="md:w-[70%] mx-auto w-[95%] pb-5">
        <div className="grid gap-6 mb-6 md:grid-cols-2 my-5">
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[18px]"
              htmlFor="title"
            >
              عنوان
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>

            <InputForm
              placeholder={"إختر ...."}
              type={"text"}
              className="border border-gray-300 text-sm block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 bg:hover-gray-500"
              value={inputData?.title}
              onchange={(e) =>
                setInputData({ ...inputData, title: e.target.value })
              }
            />
          </div>
          <div className="" htmlFor="category">
            <label className="text-[#000] font-rbRegular text-[18px]">
              التصنيف
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            <Select
              placeholder="إختر ...."
              aria-label="إختر"
              className="rounded-none selectboxForRTL"
            >
              {categories?.map((item) => (
                <SelectItem
                  key={item.id}
                  value={item.id}
                  onClick={() => {
                    setInputData({ ...inputData, category: item });
                    GetProducts(item.id);
                  }}
                >
                  {item.title}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[18px]"
              htmlFor="city"
            >
              المدينة
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            <Select
              placeholder="إختر ...."
              aria-label="إختر"
              className="rounded-none selectboxForRTL"
            >
              {cities?.map((item) => (
                <SelectItem
                  key={item.id}
                  value={item.id}
                  onClick={() => setInputData({ ...inputData, city: item })}
                >
                  {item.city_name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[18px]"
              htmlFor="city"
            >
              المنتج
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            <Select
              placeholder="إختر ...."
              aria-label="إختر"
              className="rounded-none selectboxForRTL"
            >
              {products?.map((item) => (
                <SelectItem
                  key={item.id}
                  value={item.id}
                  onClick={() => setInputData({ ...inputData, product: item })}
                >
                  {item.title}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[18px]"
              htmlFor="quantity"
            >
              الكمية
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>

            <InputForm
              placeholder={"إختر ...."}
              type={"text"}
              className="border border-gray-300 text-sm block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 bg:hover-gray-500"
              value={inputData?.quantity}
              onchange={(e) =>
                setInputData({ ...inputData, quantity: e.target.value })
              }
            />
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[18px]"
              htmlFor="unit"
            >
              وحدة
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            <Select
              placeholder="إختر ...."
              aria-label="إختر"
              className="rounded-none selectboxForRTL"
            >
              {units?.length > 0 &&
                units?.map((item) => (
                  <SelectItem
                    key={item.id}
                    value={item.id}
                    onClick={() => setInputData({ ...inputData, unit: item })}
                  >
                    {item.title}
                  </SelectItem>
                ))}
            </Select>
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[18px]"
              htmlFor="status"
            >
              حالة
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            <Select
              placeholder="إختر ...."
              aria-label="إختر"
              className="rounded-none selectboxForRTL"
            >
              {status?.map((item) => (
                <SelectItem
                  key={item.id}
                  value={item.id}
                  onClick={() => setInputData({ ...inputData, status: item })}
                >
                  {item.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[18px]"
              htmlFor="title"
            >
              اقل سعر
            </label>

            <InputForm
              placeholder={"اقل سعر"}
              type={"text"}
              className="border border-gray-300 text-sm block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 bg:hover-gray-500"
              value={inputData?.minPrice}
              onchange={(e) =>
                setInputData({ ...inputData, minPrice: e.target.value })
              }
            />
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[18px]"
              htmlFor="title"
            >
              اعلي سعر
            </label>

            <InputForm
              placeholder={"اعلي سعر"}
              type={"text"}
              className="border border-gray-300 text-sm block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 bg:hover-gray-500"
              value={inputData?.maxPrice}
              onchange={(e) =>
                setInputData({ ...inputData, maxPrice: e.target.value })
              }
            />
          </div>
          <div className="w-full">
            <label
              className="text-[#000] block font-rbRegular text-[18px]"
              htmlFor="date"
            >
              تاريخ النشر
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            {/* <div className="relative"> */}
            <DatePicker
              wrapperClassName={"w-[100%]"}
              showIcon
              icon={
                <span className="absolute inset-y-0 left-2 flex items-center">
                  <IoIosCalendar />
                </span>
              }
              selected={selectedDate?.postedDate}
              onChange={(date: any) => {
                const selectedDateTime = new Date(date);
                // Clear the time part
                selectedDateTime.setHours(0, 0, 0, 0);
                setSelectedDate({
                  ...selectedDate,
                  postedDate: selectedDateTime,
                });
                const formattedDate = formatDate(date);
                setInputData({ ...inputData, postedDate: formattedDate });
              }}
              dateFormat="dd-MM-yyyy" // Update date format here
              placeholderText="dd/mm/yyyy"
              className="w-[100%] border border-gray-300  p-2 focus:outline-none focus:border-blue-500"
            />

            {/* <span className="absolute inset-y-0 left-2 flex items-center pr-3">
                <IoIosCalendar />
              </span> 
            </div>*/}
          </div>
          <div className="w-full">
            <label
              className="text-[#000] block font-rbRegular text-[18px]"
              htmlFor="date"
            >
              تاريخ التسليم
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            <DatePicker
              wrapperClassName={"w-[100%]"}
              showIcon
              icon={
                <span className="absolute inset-y-0 left-2 flex items-center">
                  <IoIosCalendar />
                </span>
              }
              selected={selectedDate?.deliveryDate}
              onChange={(date: any) => {
                setSelectedDate({ ...selectedDate, deliveryDate: date });
                const formattedDate = formatDate(date);
                setInputData({ ...inputData, deliveryDate: formattedDate });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yyyy"
              className="w-[100%] border border-gray-300  px-4 p-2 focus:outline-none focus:border-blue-500"
            />
            <span className="absolute inset-y-0 left-2 flex items-center pr-3">
              <IoIosCalendar />
            </span>
          </div>
          <div className="w-full">
            <label
              className="text-[#000] block font-rbRegular text-[18px]"
              htmlFor="date"
            >
              تاريخ الانتهاء
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            <DatePicker
              wrapperClassName={"w-[100%]"}
              showIcon
              icon={
                <span className="absolute inset-y-0 left-2 flex items-center">
                  <IoIosCalendar />
                </span>
              }
              selected={selectedDate?.expiryDate}
              onChange={(date: any) => {
                setSelectedDate({ ...selectedDate, expiryDate: date });
                const formattedDate = formatDate(date);
                setInputData({ ...inputData, expiryDate: formattedDate });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yyyy"
              className="w-[100%] border border-gray-300  px-4 p-2 focus:outline-none focus:border-blue-500"
            />
            <span className="absolute inset-y-0 left-2 flex items-center pr-3">
              <IoIosCalendar />
            </span>
          </div>
          <div className="w-full">
            <label
              className="text-[#000] block font-rbRegular text-[18px]"
              htmlFor="date"
            >
              تاريخ البدء
              <span className="text-[#F84F39] font-rbRegular text-[18px]">
                {" "}
                *
              </span>
            </label>
            <DatePicker
              wrapperClassName={"w-[100%]"}
              showIcon
              icon={
                <span className="absolute inset-y-0 left-2 flex items-center">
                  <IoIosCalendar className="h-auto" />
                </span>
              }
              selected={selectedDate?.startDate}
              onChange={(date: any) => {
                setSelectedDate({ ...selectedDate, startDate: date });
                const formattedDate = formatDate(date);
                setInputData({ ...inputData, startDate: formattedDate });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yyyy"
              className="w-[100%] border border-gray-300  px-4 p-2 focus:outline-none focus:border-blue-500"
            />
            <span className="absolute inset-y-0 left-2 flex items-center pr-3">
              <IoIosCalendar />
            </span>
          </div>
        </div>
        <div className="">
          <label
            className="text-[#000] font-rbRegular text-[18px]"
            htmlFor="description"
          >
            التفاصيل
            <span className="text-[#F84F39] font-rbRegular text-[18px]">
              {" "}
              *
            </span>
          </label>

          <Textarea
            placeholder={"ادخل تفاصيل الطلب"}
            type={"text"}
            className="border border-gray-300 text-sm block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 bg:hover-gray-500 font-rbRegular"
            value={inputData?.description}
            onChange={(e) =>
              setInputData({ ...inputData, description: e.target.value })
            }
          />
        </div>
        <div className="w-full flex justify-between my-6">
          <label className="text-[#000] font-rbRegular text-[18px]">
            صورة مميزة
          </label>
          <div className="" dir="ltr">
            <input
              placeholder="ارفاق الملف"
              type="file"
              accept="image/*"
              id="file"
              className="w-full"
              onChange={handelDefaultImage}
              title="ارفاق الملف"
            />
            {defaultImage && (
              <Image
                src={URL?.createObjectURL(defaultImage)}
                alt=""
                width={200}
                height={200}
                className="w-[200] md:w-[200] object-cover md:m-2 my-2"
              />
            )}
          </div>
        </div>
        <div className="w-full flex justify-between my-6">
          <label className="text-[#000] font-rbRegular text-[18px]">
            صور إضافية
          </label>
          <div className="" dir="ltr">
            <input
              placeholder="ارفاق الملف"
              type="file"
              accept="image/*"
              id="file"
              className="w-full"
              onChange={handleImageFileChange}
              multiple
            />
            <div className="flex items-center">
              {image?.length > 0 &&
                images?.map((item: any) => (
                  <Image
                    src={URL.createObjectURL(item)}
                    alt=""
                    width={200}
                    height={200}
                    key={item}
                    className="w-[200] md:w-[200] object-cover md:m-2 my-2"
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="w-full items-center  flex justify-center">
          <CommonButton
            text="ارسال الطلب..."
            onPress={submitLead}
            bgColor="#F84F39"
            className={`mt-4 w-[200px] text-[#fff] bg-[#F84F39] sm:font-rbRegular font-rbLight rounded-lg sm:rounded-3xl px-5 py-2 sm:py-6`}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Page;
