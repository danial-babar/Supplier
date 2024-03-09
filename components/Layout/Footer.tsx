import { Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="bg-[#272737] p-4 md:p-20">
      <div className=" flex flex-col md:flex-row justify-between ">
        <div className="flex-col md:flex-row md:col-span-6 md:w-1/2 ">
          <Link href={"/"}>
            <Image
              src={"/logo-white.png"}
              width={150}
              height={150}
              alt="Logo"
            />
          </Link>
          <p className="text-[#fff] text-[18px] font-rbRegular md:w-3/5 mt-3 leading-7">
            تتيح منصة مـوّرد الإلكتروني فرصة مشاركة المزايدين في المزادات
            الإلكترونية من مختلف مناطق المملكة
          </p>
          <div className="flex flex-wrap md:w-2/5 mt-6">
            <div className="flex flex-col ">
              <h6 className="text-[#fff] text-[12px] font-rbRegular p-3">
                الرئيسية
              </h6>
              <h6 className="text-[#fff] text-[12px] font-rbRegular p-3">
                الأقسام
              </h6>
              <h6 className="text-[#fff] text-[12px] font-rbRegular p-3">
                المزادات
              </h6>
            </div>
            <div className="flex-col mt-0 md:mt-0 md:ml-6 ">
              <h6 className="text-[#fff] text-[12px] font-rbRegular p-3">
                عن مــورد
              </h6>
              <h6 className="text-[#fff] text-[12px] font-rbRegular p-3">
                اسئلة شائعه
              </h6>
              <h6 className="text-[#fff] text-[12px] font-rbRegular p-3">
                تواصل معنا
              </h6>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 md:w-1/2">
          <div className="flex flex-col md:flex-row items-center ">
            <Image
              src={"/footer-icon.png"}
              width={120}
              height={100}
              alt="Logo"
            />
            <div className="mr-5 mt-4 md:mt-0 ">
              <p className="text-[#fff] text-[24px] md:text-[30px] 2xl:text-[40px] font-rbBold">
                النشرة الإخبارية
              </p>
              <p className="text-[#fff] text-[18px] font-rbRegular md:w-full mt-3 leading-7 md-text-[20px] 2xl:text-[20px]">
                انضم إلى قائمتنا البريدية للبقاء على اطلاع دائم بآخر الأخبار
                والأحداث والمزادات التي تقدمها منصة مــوّرد .
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#686868] rounded-full p-2 mt-8">
            <Input
              type="text"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="برجاء ادخال البريد الاكتروني"
              size="sm"
              maxLength={120}
              className="mr-5"
              style={{
                background: "none",
                border: "none",
                outline: "none",
                color: "black",
              }}
              classNames={{
                base: "bg-transparent",
                //behind the input
                inputWrapper: "bg-transparent",
                //
                innerWrapper: "bg-transparent",
                input: [
                  "bg-transparent",
                  // "text-green-100",
                  "placeholder:text-white-",
                ],
                //   inputWrapper: ["bg-transparent", "text-orange"],
              }}
            />
            <div className="p-3 px-5 bg-[#F84F39] text-white text-[16px] font-rbRegular rounded-full ">
              اشتركالان
            </div>
          </div>
          <div className="flex items-end mt-10" dir="ltr">
            <Image
              src={"/Facebook.png"}
              alt=""
              width={12}
              height={20}
              className="mr-10"
            />
            <Image
              src={"/twitter.png"}
              alt=""
              width={20}
              height={20}
              className="mr-10"
            />
            <Image
              src={"/Instagram.png"}
              alt=""
              width={20}
              height={20}
              className="mr-10"
            />
            <Image
              src={"/linkedin.png"}
              alt=""
              width={20}
              height={20}
              className="mr-10"
            />
            <Image
              src={"/youtube.png"}
              alt=""
              width={30}
              height={30}
              className="mr-10"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-t-[#fff] flex p-2 items-center justify-between mt-5 py-5">
        <div className="text-white sm:text-[10px] md:text-[16px] font-rbRegular">
          الشروط والأحكام سياسة الخصوصية
        </div>
        <div className="text-white sm:text-[10px] md:text-[16px] font-rbRegular">
          جميع الحقوق محفوظة - مــوّرد{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
