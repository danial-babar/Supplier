"use client";
import { userFlow } from "@/api/Users";
import Header from "@/components/Layout/Header";
import CommonButton from "@/components/commonButton";
import InputForm from "@/components/inputForm";
import InputWithIcon from "@/components/inputWithIcon";
import { localstorageService } from "@/utils/LocalStorage.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoPeople } from "react-icons/go";

import { MdLogin, MdPeopleAlt } from "react-icons/md";
type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState("danial1@gmail.com");
  const [password, setPassword] = useState("1234");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    router.push(`/create-account`);
  };

  const Login = () => {
    if (!email) {
      return alert("Please enter your email");
    }
    if (!password) {
      return alert("Please enter your password");
    }
    setLoading(true);
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    userFlow
      .login(data)
      .then((response) => {
        console.log("response while login account", response);
        if (response?.code == "1") {
          router.push(`/`);
          localStorage.setItem("user", JSON.stringify(response?.data));
          localstorageService.setToken(response?.data?.token);
        }
      })
      .catch((error) => {
        console.log("error while login account", error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div dir="rtl">
      <Header />
      <div className="bg-gradient-radial md:pb-28 pb-16 lg:pb-40 from-blue-100 to-pink-50 via-gray-100">
        <div className="text-center w-[95%] mx-auto md:pt-20 pt-8">
          <div className=" text-[#0A102F] text-[18px] sm:text-[20px] md:text-[25px] lg:text-[50px] font-rbBold relative">
            <span> تـسجيل </span>
            <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 ps-2 pe-4 py-0">
              الـدخول
            </span>
            <div className="text-[16px] sm:text-[18px] font-rbLight sm:font-rbRegular text-gray-700 sm:mt-8 mt-5 mb-5">
              <p>يمكنك الدخول عن طريق حسابك الشخصي او الدخول عبر بوابة نفاذ</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[95%] py-5 sm:py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border mx-auto md:mt-0 md:w-[60%] xl:w-[45%] sm:w-[70%] shadow md:shadow-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-6">
              <h1 className="text-xl relative flex items-center justify-start font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <span className="bg-[#F84F39] bg-opacity-20 md:p-3 p-2 absolute rounded-full"></span>
                <MdLogin className="pe-3 ms-2 text-[30px] md:text-[40px] text-[#F84F39]" />{" "}
                تـسجيل الـدخول
              </h1>
              <div>
                <InputWithIcon
                  type="text"
                  placeholder="أسم المستخدم"
                  icon={<GoPeople className="h-3 w-3 text-[#F84F39]" />}
                  value={email || ""}
                  onchange={(e: any) => setEmail(e.target.value)}
                />
                <InputWithIcon
                  type="password"
                  placeholder="أسم المستخدم"
                  icon={<GoPeople className="h-3 w-3 text-[#F84F39]" />}
                  value={password || ""}
                  onchange={(e: any) => setPassword(e.target.value)}
                />

                <div className="mt-4 flex items-center justify-end">
                  <Link
                    href="#"
                    className="font-rbRegular hover:underline text-[#F84F39]"
                  >
                    هل نسيت كلمة المرور؟
                  </Link>
                </div>
                <div>
                  <CommonButton
                    text="دخول"
                    bgColor="#F84F39"
                    onPress={Login}
                    loading={loading}
                  />
                  <div className="flex items-center  mt-4 justify-center">
                    <hr className="w-full border-t border-red-300 before:w-1/4 before:border-t before:border-r before:border-gray-300 after:w-1/4 after:border-t after:border-l after:border-gray-300 border-dotted" />
                    <div className="mx-2">او</div>
                    <hr className="w-full border-t border-red-300 before:w-1/4 before:border-t before:border-l before:border-gray-300 after:w-1/4 after:border-t after:border-r after:border-gray-300 border-dotted" />
                  </div>
                  <CommonButton
                    text="الدخول عبر بوابة نفاذ"
                    bgColor="#11998E"
                  />
                </div>

                <div className="text-center mt-4">
                  <div
                    onClick={handleClick}
                    className="font-rbRegular text-[#F84F39] underline hover:no-underline cursor-pointer"
                  >
                    انشاء حساب جديد
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
