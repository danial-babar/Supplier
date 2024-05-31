import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@nextui-org/react";

type props = {
  styles?: string;
};

const Footer = ({ styles }: props) => {
  const [email, setEmail] = useState("");

  return (
    <div
      className={`bg-[#272737] xl:pt-24 lg:pt-20 md:pt-16 pt-12 pb-5 ${styles}`}
    >
      <div className="w-[95%] mx-auto xl:w-[85%] lg:w-[90%]">
        <div className="flex lg:col-span-7 flex-col md:flex-row justify-between">
          <div className="flex-col md:flex-row md:col-span-6">
            <Link href={"/"}>
              <Image
                src={"/logo-white.png"}
                width={200}
                height={150}
                alt="Logo"
              />
            </Link>
            <p className="text-[#fff] text-[14px] lg:text-[18px] md:text-[16px] font-rbLight sm:font-rbRegular tracking-wide md:w-[85%] lg:w-[75%] mt-3 leading-7">
              تتيح منصة مـوّرد الإلكتروني فرصة مشاركة المزايدين في المزادات
              الإلكترونية من مختلف مناطق المملكة
            </p>
            <div className="flex text-[14px] font-rbLight sm:font-rbRegular text-[#fff] md:w-1/2 md:justify-between justify-start mt-6">
              <div className="flex flex-col tracking-wide gap-5">
                <Link href={"/"}>
                  <p className="cursor-pointer">الرئيسية</p>
                </Link>
                <p>الأقسام</p>
                <p>المزادات</p>
              </div>
              <div className="flex flex-col mr-5 gap-5">
                <Link href={"/about"}>
                  <p className="cursor-pointer">عن مــورد</p>
                </Link>
                <Link href={"/questions"}>
                  <p className="cursor-pointer">اسئلة شائعه</p>
                </Link>
                <Link href={"/connect"}>
                  <p className="cursor-pointer">تواصل معنا</p>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5 md:gap-8 lg:gap-10 xl:gap-14 md:mt-0 mt-8 sm:flex-row md:justify-center justify-start items-center">
              <Image
                src={"/footer-icon.png"}
                width={100}
                height={100}
                alt="Logo"
                className="w-[50px] md:w-[100px]"
              />
              <div className="text-[#fff] mt-4 md:mt-0">
                <p className="text-[18px] tracking-wide md:text-[30px] xl:text-[45px] font-rbRegular sm:font-rbBold">
                  النشرة الإخبارية
                </p>
                <p className="text-[14px] lg:text-[18px] md:text-[16px] tracking-wide font-rbLight sm:font-rbRegular mt-3 leading-7">
                  انضم إلى قائمتنا البريدية للبقاء على اطلاع دائم بآخر الأخبار
                  والأحداث والمزادات التي تقدمها منصة مــوّرد .
                </p>
              </div>
            </div>
            <div
              className="flex items-center bg-[#48485d] rounded-full p-2 pr-4 mt-8"
              dir="rtl"
            >
              <input
                type="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="برجاء ادخال البريد الالكتروني"
                className="bg-transparent flex-1 border-none outline-none focus:border-none focus:outline-none caret-white placeholder:font-rbLight placeholder:text-[#b6b5b5ac] text-white font-rbLight text-right"
              />

              <div className="lg:p-4 md:p-3 sm:p-2 p-2 lg:px-10 md:px-6 px-5 bg-[#F84F39] text-white text-[16px] font-rbRegular rounded-full cursor-pointer">
                اشترك الان
              </div>
            </div>
            <div
              className="flex gap-8 items-center sm:justify-start justify-center md:my-10 my-8 px-2"
              dir="ltr"
            >
              <Image
                src={"/Facebook.png"}
                alt="Facebook"
                width={16}
                height={16}
              />
              <Image
                src={"/twitter.png"}
                alt="Twitter"
                width={16}
                height={16}
              />
              <Image
                src={"/Instagram.png"}
                alt="Instagram"
                width={16}
                height={16}
              />
              <Image
                src={"/linkedin.png"}
                alt="LinkedIn"
                width={16}
                height={16}
              />
              <Image
                src={"/youtube.png"}
                alt="YouTube"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
        <hr className="border-[#858080] border-[1px]" />
        <div className="sm:flex sm:text-start text-center items-center justify-between mt-5 my-5">
          <div className="text-white text-[14px] tracking-wide font-rbLight sm:font-rbRegular">
            <p className="sm:whitespace-pre">
              {"سياسة الخصوصية" + "     " + "الشروط والأحكام"}
            </p>
          </div>
          <div className="text-white text-[14px] tracking-wide sm:font-rbBold">
            <p>جميع الحقوق محفوظة - مــوّرد</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
