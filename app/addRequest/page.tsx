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
import {
  Button,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
  image,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { fieldData } from "@/constants/DummyData";
import {
  BASE_URL,
  addLead,
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
import {
  IoIosCalendar,
  IoMdAddCircleOutline,
  IoMdCloseCircle,
} from "react-icons/io";
import Image from "next/image";
import CommonButton from "@/components/commonButton";
import { useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/navigation";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ar } from "date-fns/locale/ar";
registerLocale("ar", ar);

const Page = (props: Props) => {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  const route = useRouter();
  const { user } = useSelector((state: any) => state.user);
  const [categories, setCategories] = useState([{ id: 0, title: "" }]);
  const [products, setProducts] = useState([{ id: 0, title: "" }]);
  const [cities, setCities] = useState([{ id: 0, city_name: "" }]);
  const [status, setStatus] = useState([{ id: 0, name: "" }]);
  const [units, setUnits] = useState([{ id: 0, title: "" }]);
  const [defaultImage, setDefaultImage] = useState();
  const [images, setImages] = useState([]);
  const [dragging, setDragging] = useState<Boolean>(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [inputData, setInputData] = useState({});
  const [selectedDate, setSelectedDate] = useState({
    deliveryDate: null,
    postedDate: null,
    expiryDate: null,
    startDate: null,
  });
  console.log("selcted Date", inputData.postedDate);
  const handelDefaultImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0]; // Get the first selected file
    setDefaultImage(file); // Set the selected file as the default image
  };
  const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImages([...images, ...e.target.files]);
  };
  const handleRemoveImage = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
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
  const GetProducts = async (id: any) => {
    console.log("category ID", id);
    try {
      await api
        .get(`/get_products/${id}`)
        .then((res) => {
          console.log("res while getting products", res);
          setProducts(res?.data?.data);
        })
        .catch((err) => {
          console.log("err while getting products", err);
        });
    } catch (error) {
      console.error("Error while getting products agains category:", error);
      throw error;
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!inputData.title) {
      errors.title = "الرجاء إدخال العنوان";
    }
    if (!inputData.category) {
      errors.category = "الرجاء اختيار التصنيف";
    }
    if (!inputData.city) {
      errors.city = "الرجاء اختيار المدينة";
    }
    // if (!inputData.product) {
    //   errors.product = "الرجاء اختيار المنتج";
    // }
    if (!inputData.quantity) {
      errors.quantity = "الرجاء إدخال الكمية";
    }
    if (!inputData.unit) {
      errors.unit = "الرجاء اختيار وحدة";
    }
    if (!inputData.postedDate) {
      errors.postedDate = "الرجاء اختيار تاريخ النشر";
    }
    if (!inputData.deliveryDate) {
      errors.deliveryDate = "الرجاء اختيار تاريخ التسليم";
    }
    if (!inputData.expiryDate) {
      errors.expiryDate = "الرجاء اختيار تاريخ الانتهاء";
    }
    if (!inputData.startDate) {
      errors.startDate = "الرجاء اختيار تاريخ البدء";
    }
    if (!inputData.description) {
      errors.description = "الرجاء إدخال التفاصيل";
    }
    if (!defaultImage) {
      errors.defImage = "يرجى تحميل الصورة الافتراضية";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  console.log("input errors", errors);

  const submitLead = () => {
    if (validateForm()) {
      setLoading(true);
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
      data.append("min_price", inputData?.minPrice);
      data.append("max_price", inputData?.maxPrice);
      if (images?.length > 0) {
        images.forEach((item) => data.append("other_images[]", item));
      }

      data.append("is_show_price_data", "1");
      console.log("form data", data);

      leadsFLow
        .addLead(data)
        .then((res) => {
          console.log("res while submiting lead data", res);
          if (res?.code == "1") {
            route.push("/allRequest");
          }
          // setUnits(res?.data);
        })
        .catch((err) => {
          console.log("err while submiting lead data", err);
        })
        .finally(() => setLoading(false));
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      submitLead();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex-1" dir="rtl">
      <Header />
      <div className="w-full items-center justify-center mt-8 ">
        <h1 className="text-black text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] relative font-rbBold  text-center">
          اضافة ط<span className="rounded-3xl bg-[#BDFFA5] pe-3 ">لب سعر</span>
        </h1>
        <h4 className="text-[#475467]  tracking-wide sm:opacity-60 text-[20px] sm:text-[20px] md:mt-10 sm:mt-8 mt-4 text-center font-rbLight sm:font-rbRegular">
          برجاء ادخال البيانات المطلوبة
        </h4>
      </div>
      <div className="md:w-[70%] mx-auto w-[95%] pb-5">
        <div className="grid gap-6 mb-6 md:grid-cols-2 my-5" dir="rtl">
          <div className="" dir="rtl">
            <label
              className="text-[#000] font-rbRegular text-[16px]"
              htmlFor="title"
            >
              عنوان الطلب
              <span className="text-[#F84F39] font-rbRegular text-[16px]">
                {" "}
                *
              </span>
            </label>

            <InputForm
              placeholder={"أكتب هنا"}
              type={"text"}
              className="border border-gray-300 text-sm block w-full p-[9px] dark:border-gray-600 dark:placeholder-gray-400 bg:hover-gray-500"
              value={inputData?.title}
              onchange={(e) =>
                setInputData({ ...inputData, title: e.target.value })
              }
              style={{ textAlign: "right" }}
            />
            {errors.title && !inputData?.title && (
              <div className="text-red-500 text-[12px]">{errors.title}</div>
            )}
          </div>
          <div className="" htmlFor="category">
            <label className="text-[#000] font-rbRegular text-[16px]">
              التصنيف
              <span className="text-[#F84F39] font-rbRegular text-[16px]">
                {" "}
                *
              </span>
            </label>
            <Select
              placeholder="إختر ...."
              aria-label="إختر"
              className="rounded-none selectboxForRTL font-rbRegular"

              // dir="rtl"
            >
              {categories?.map((item) => (
                <SelectItem
                  textValue={item?.id.toString()}
                  key={item.id}
                  value={item.id}
                  onClick={() => {
                    setInputData({ ...inputData, category: item });
                    GetProducts(item.id);
                  }}
                  className="flex justify-start font-rbRegular text-right text-[#475467] text-[12px]"
                  dir="rtl"
                >
                  {item.title}
                </SelectItem>
              ))}
            </Select>
            {errors.category && !inputData?.category && (
              <div className="text-red-500 text-[12px]">{errors.category}</div>
            )}
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[16px]"
              htmlFor="city"
            >
              المدينة
              <span className="text-[#F84F39] font-rbRegular text-[16px]">
                {" "}
                *
              </span>
            </label>
            <Select
              placeholder="إختر ...."
              aria-label="إختر"
              className="rounded-none selectboxForRTL font-rbRegular"
            >
              {cities?.map((item) => (
                <SelectItem
                  textValue={item?.id.toString()}
                  key={item.id}
                  value={item.id}
                  onClick={() => setInputData({ ...inputData, city: item })}
                  className="flex justify-start font-rbRegular text-right text-[#475467] text-[12px]"
                >
                  {item.city_name}
                </SelectItem>
              ))}
            </Select>
            {errors.city && !inputData?.city && (
              <div className="text-red-500 text-[12px]">{errors.city}</div>
            )}
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[16px]"
              htmlFor="city"
            >
              المنتج
              {/* <span className="text-[#F84F39] font-rbRegular text-[16px]">
                {" "}
                *
              </span> */}
            </label>
            <Select
              placeholder={products?.length > 0 ? "إختر ...." : "لا يوجد منتج"}
              aria-label="إختر"
              className="rounded-none selectboxForRTL font-rbRegular"
            >
              {
                products?.length > 0
                  ? products?.map((item) => (
                      <SelectItem
                        textValue={item?.id.toString()}
                        key={item.id}
                        value={item.id}
                        onClick={() =>
                          setInputData({ ...inputData, product: item })
                        }
                        className="flex justify-start font-rbRegular text-right text-[#475467] text-[12px]"
                      >
                        {item.title}
                      </SelectItem>
                    ))
                  : null // <SelectItem key={""}>No Product</SelectItem>
              }
            </Select>
            {/* {errors.product && !inputData?.product && (
              <div className="text-red-500 text-[12px]">{errors.product}</div>
            )} */}
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[16px]"
              htmlFor="quantity"
            >
              الكمية
              <span className="text-[#F84F39] font-rbRegular text-[16px]">
                {" "}
                *
              </span>
            </label>

            <InputForm
              placeholder={"أكتب هنا"}
              type={"text"}
              className="border border-gray-300 text-sm block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 bg:hover-gray-500"
              value={inputData?.quantity}
              onchange={(e) =>
                setInputData({ ...inputData, quantity: e.target.value })
              }
              style={{ textAlign: "right" }}
            />
            {errors.quantity && !inputData?.quantity && (
              <div className="text-red-500 text-[12px]">{errors.quantity}</div>
            )}
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[16px]"
              htmlFor="unit"
            >
              وحدة
              <span className="text-[#F84F39] font-rbRegular text-[16px]">
                {" "}
                *
              </span>
            </label>
            <Select
              placeholder="إختر ...."
              aria-label="إختر"
              className="rounded-none selectboxForRTL font-rbRegular "
            >
              {units?.length > 0 &&
                units?.map((item) => (
                  <SelectItem
                    textValue={item?.id.toString()}
                    key={item.id}
                    value={item.id}
                    onClick={() => setInputData({ ...inputData, unit: item })}
                    className="flex justify-start font-rbRegular text-right text-[#475467] text-[12px]"
                  >
                    {item.title}
                  </SelectItem>
                ))}
            </Select>
            {errors.unit && !inputData?.unit && (
              <div className="text-red-500 text-[12px]">{errors.unit}</div>
            )}
          </div>

          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[16px]"
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
              style={{ textAlign: "right" }}
            />
            {errors.minPrice && !inputData?.minPrice && (
              <div className="text-red-500 text-[12px]">{errors.minPrice}</div>
            )}
          </div>
          <div className="">
            <label
              className="text-[#000] font-rbRegular text-[16px]"
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
              style={{ textAlign: "right" }}
            />
            {errors.maxPrice && !inputData?.maxPrice && (
              <div className="text-red-500 text-[12px]">{errors.maxPrice}</div>
            )}
          </div>
          <div className="w-full">
            <label
              className="text-[#000] block font-rbRegular text-[16px]"
              htmlFor="date"
            >
              تاريخ البدء
              <span className="text-[#F84F39] font-rbRegular text-[16px]">
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
              locale="ar"
              minDate={new Date()}
            />
            {errors.startDate && !inputData?.startDate && (
              <div className="text-red-500 text-[12px]">{errors.startDate}</div>
            )}
          </div>

          <div className="w-full">
            <label
              className="text-[#000] block font-rbRegular text-[16px]"
              htmlFor="date"
            >
              تاريخ الانتهاء
              <span className="text-[#F84F39] font-rbRegular text-[16px]">
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
              locale="ar"
              minDate={new Date()}
            />
            {errors.expiryDate && !inputData?.expiryDate && (
              <div className="text-red-500 text-[12px]">
                {errors.expiryDate}
              </div>
            )}
          </div>
          <div className="w-full">
            <label
              className="text-[#000] block font-rbRegular text-[16px]"
              htmlFor="date"
            >
              تاريخ النشر
              <span className="text-[#F84F39] font-rbRegular text-[16px]">
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
              className="w-[100%] border border-gray-300 font-rbRegular p-2 focus:outline-none focus:border-blue-500"
              locale="ar"
              minDate={new Date()}
            />
            {errors.postedDate && !inputData?.postedDate && (
              <div className="text-red-500 text-[12px]">
                {errors.postedDate}
              </div>
            )}
          </div>
          <div className="w-full">
            <label
              className="text-[#000] block font-rbRegular text-[16px]"
              htmlFor="date"
            >
              تاريخ التسليم
              <span className="text-[#F84F39] font-rbRegular text-[16px]">
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
              locale="ar"
              minDate={new Date()}
            />
            {errors.deliveryDate && !inputData?.deliveryDate && (
              <div className="text-red-500 text-[12px]">
                {errors.deliveryDate}
              </div>
            )}
          </div>
        </div>
        <div className="">
          <label
            className="text-[#000] font-rbRegular text-[16px]"
            htmlFor="description"
          >
            تفاصيل الطلب
            <span className="text-[#F84F39] font-rbRegular text-[16px]">
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
          {errors.description && !inputData?.description && (
            <div className="text-red-500 text-[12px]">{errors.description}</div>
          )}
        </div>
        <div>
          <div className="w-full flex justify-between my-6">
            <label className="text-[#000] font-rbRegular text-[16px]">
              صورة افتراضية للمنتج
            </label>
            <div className="" dir="ltr">
              <input
                placeholder="ارفاق الملف"
                type="file"
                accept="image/*"
                id="file"
                className="w-full hidden"
                onChange={handelDefaultImage}
                title="ارفاق الملف"
              />
              <label
                htmlFor="file"
                className="p-1 px-3 bg-white shadow text-[#000] text-[16px] font-rbRegular"
              >
                ارفاق الملف
              </label>
            </div>
          </div>
          {errors.defImage && !defaultImage && (
            <div className="text-red-500 text-[12px]">{errors.defImage}</div>
          )}
          {defaultImage && (
            <div className="">
              <IoMdCloseCircle
                className="absolute bg-white rounded-full"
                color="#F84F39"
                size={20}
                onClick={() => setDefaultImage(null)}
              />
              <Image
                src={URL?.createObjectURL(defaultImage)}
                alt=""
                width={200}
                height={200}
                className="w-[200] md:w-[200] object-cover md:m-2 my-2"
              />
            </div>
          )}
        </div>
        <div className="mt-10">
          <div className="w-full flex justify-between my-6">
            <label className="text-[#000] font-rbRegular text-[16px] ">
              صور إضافية للمنتج ( اختياري )
            </label>
            <div className="" dir="ltr">
              <input
                placeholder="إرفاق الملفات"
                type="file"
                accept="image/*"
                id="files"
                className="w-full hidden"
                onChange={handleImageFileChange}
                multiple
              />
              <label
                htmlFor="files"
                className="p-1 px-3 bg-white shadow text-[#000] text-[16px] font-rbRegular"
              >
                إرفاق الملفات
              </label>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-start">
            {image?.length > 0 &&
              images?.map((item: any, index: number) => (
                <div className="mb-5" key={index}>
                  <IoMdCloseCircle
                    className="absolute bg-white rounded-full"
                    color="#F84F39"
                    size={20}
                    onClick={() => handleRemoveImage(index)}
                  />
                  <Image
                    src={URL.createObjectURL(item)}
                    alt=""
                    width={200}
                    height={200}
                    key={item}
                    className="w-[200] md:w-[200] object-cover md:m-2 my-2 mr-2"
                    style={{ zIndex: -99 }}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="px-3 my-6 ">
          <RadioGroup
            label="نوع الطلب"
            orientation="horizontal"
            dir="rtl"
            defaultValue="publish"
            className="text-[#000]"
            classNames={{ label: "text-[#000] text-[16px] font-rbRegular" }}
          >
            <Radio
              value="publish"
              onClick={() =>
                setInputData({ ...inputData, requestType: "publish" })
              }
              className="font-rbRegular text-[14px] text-[#000] my-1"
            >
              <span className="mr-3">طلب النشر</span>
            </Radio>
            <Radio
              value="draft"
              onClick={() =>
                setInputData({ ...inputData, requestType: "draft" })
              }
              className="font-rbRegular text-[14px] text-[#000]"
            >
              <span className="mr-3">طلب مسودة</span>
            </Radio>
          </RadioGroup>
        </div>
        <div className="w-full items-center  flex justify-center">
          <CommonButton
            text="طلب سعر جديد..."
            onPress={submitLead}
            bgColor="#F84F39"
            className={`mt-4 w-[200px] text-[#fff] bg-[#F84F39] sm:font-rbRegular font-rbLight rounded-lg sm:rounded-3xl px-5 py-2 sm:py-6`}
            loading={loading}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Page;
