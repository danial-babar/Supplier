"use client";
import React, { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import ThreeDotedBtn from "@/components/ThreeDotedBtn";
import InputForm from "@/components/inputForm";
import { Select, SelectItem } from "@nextui-org/react";
type Props = {};
const categories = [
  { id: "1", title: "option1" },
  { id: "2", title: "option2" },
  { id: "3", title: "option3" },
];
const Page = (props: Props) => {
  const [inputs, setInputs] = useState({
    firstName: "",
    familyName: "",
    phone: "",
    email: "",
    category: {id:'',title:''},
    description: "",
  });

  const submitRequest = () => {
    const data = new FormData();
    data.append("first_name", inputs.firstName);
    data.append("family_name", inputs.familyName);
    data.append("phone", inputs.phone);
    data.append("email", inputs.email);
    data.append("category", inputs.category.title);
    data.append("description", inputs.description);
  };

  return (
    <div dir="rtl">
      <Header activeItem={5} />
      <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto items-center gradient-background">
        <div className=" text-[#0A102F] text-[20px] sm:mt-4 md:mt-0 mt-4 sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold relative">
          تواص
          <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 pe-4 py-0">
            ل معنا
          </span>
          <div className="text-[18px] sm:text-[18px] text-gray-700 sm:mt-8 mt-4 font-rbLight sm:font-rbRegular">
            <p>لا تتردد في الاتصال بنا مع أي أسئلة أو تعليقات</p>
            <p>
              او التواصل علي البريد الاكتروني
              <strong className="text-[#F84F39] sm:font-rbBold font-rbRegular uppercase underline ps-1 cursor-pointer">
                info@mowarrd.sa
              </strong>
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src="/connect.png"
            height={460}
            width={460}
            alt=""
            className="object-contain target_img mx-auto"
          />
        </div>
      </div>
      <div className="md:w-[70%] w-[95%] mx-auto ">
        <div className="grid sm:grid-cols-3 gap-5 ">
          <ContactCardComp
            image={"/call.png"}
            text1="رقم الهاتف"
            text2="+1-202-555-0177"
          />
          <ContactCardComp
            image={"/telephone.png"}
            text1="الفاكس"
            text2="+1-202-555-0177"
          />
          <ContactCardComp
            image={"/mail.png"}
            text1="البريد الإلكتروني"
            text2="info@mowarrd.sa"
          />
        </div>
      </div>
      <div className="w-full mx-auto md:mt-20 sm:mt-14 mt-8">
        <Image
          src="/map.png"
          width={1000}
          height={200}
          alt=""
          className="object-cover h-56 w-full mx-auto"
        />
      </div>
      <div className="gradient-background">
        <div className="text-center md:pt-20 pt-8">
          <div className=" text-[#0A102F] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[50px] font-rbBold relative">
            <span> نموذج </span>
            <span className="rounded-3xl bg-[#BDFFA5] md:pe-14 lg:pe-24 pe-4 py-0">
              التواصل
            </span>
            <div className="text-[16px] px-4 sm:text-[18px] text-gray-700 sm:mt-8 mt-4 font-rbLight sm:font-rbRegular">
              <p>
                تتيح لك منصة{" "}
                <strong className="sm:font-rbBold font-rbRegular">
                  مــوّرد
                </strong>{" "}
                الإلكتروني المشاركة في طلبات التوريد المطروحة في أي وقت ومن أي
                مكان بكل سهولة
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-[95%] md:pt-16 pt-8 mx-auto">
          <form>
            <div className="grid md:grid-cols-2 gap-5 mx-auto">
              <InputForm
                placeholder="الاسم الأول"
                title="الاسم الأول"
                required
                type={"text"}
                value={inputs?.firstName}
                onchange={(e) =>
                  setInputs({ ...inputs, firstName: e.target.value })
                }
              />
              <InputForm
                placeholder="الاسم العائلة"
                title="الاسم العائلة"
                required
                type={"text"}
                value={inputs?.familyName}
                onchange={(e) =>
                  setInputs({ ...inputs, familyName: e.target.value })
                }
              />
              <InputForm
                placeholder="رقم الجوال"
                title="رقم الجوال"
                required
                type={"text"}
                value={inputs?.phone}
                onchange={(e) =>
                  setInputs({ ...inputs, phone: e.target.value })
                }
              />
              <InputForm
                placeholder="البريد الإلكتروني"
                title="البريد الإلكتروني"
                required
                type={"text"}
                value={inputs?.email}
                onchange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
              <div className="" >
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
                  className="rounded-none bg-lime-500 selectboxForRTL font-rbRegular"

                  // dir="rtl"
                >
                  {categories?.map((item) => (
                    <SelectItem
                      textValue={item?.title.toString()}
                      key={item.id}
                      value={item.id}
                      onClick={() => {
                        setInputs({ ...inputs, category: item });
                       
                      }}
                      className="flex justify-start font-rbRegular text-right  text-[#475467] text-[12px]"
                      dir="rtl"
                    >
                      {item.title}
                    </SelectItem>
                  ))}
                </Select>
                
              </div>
              {/* <ContactUsInput
                label="التصنيف"
                required
                type={"text"}
                value={inputs?.category}
                onchange={(e) =>
                  setInputs({ ...inputs, category: e.target.value })
                }
              /> */}
            </div>
            <div className="mb-5">
              <p className="block mb-2 text-sm font-rbRegular text-gray-900 dark:text-white">
                التفاصيل<span className="text-red-500 ps-2">*</span>
              </p>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full lg:shadow-2xl shadow-sm text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ادخل تفاصيل الطلب"
                value={inputs?.description || ""}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <ThreeDotedBtn title="ارسال الطلب" onclick={() => {}} />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ContactCardComp = ({ image, text1, text2 }) => {
  return (
    <div className=" p-6 text-center bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="">
        <Image
          src={image}
          height={50}
          width={50}
          alt=""
          className="object-contain rounded-lg bg-[#F84F39] bg-opacity-20 p-3 mx-auto"
        />
      </div>
      <p className="text-[14px] sm:text-[18px] text-[#000] text-opacity-80 font-rbRegular my-3">
        {text1}
      </p>
      <small
        className=" text-[14px] sm:text-[16px] lg:text-[18px] font-rbRegular text-[#000] text-opacity-80"
        dir="ltr"
      >
        {text2}
      </small>
    </div>
  );
};

interface inputParams {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  onchange?: (e) => void;
}

const ContactUsInput = ({
  label,
  placeholder,
  required,
  type,
  value,
  onchange,
}: inputParams) => {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-bahijSemibold text-gray-900 dark:text-white">
        {label} {required && <span className="text-red-500 ps-2">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onchange}
        id="repeat-password"
        className="lg:shadow-2xl shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-small focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required={required}
        placeholder={placeholder || label}
      />
    </div>
  );
};

export default Page;
