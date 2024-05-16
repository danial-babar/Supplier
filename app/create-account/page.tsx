"use client";
import { userFlow } from "@/api/Users";
import SuccessModal from "@/common-modals/SuccessModal";
import DropDownComp from "@/components/DropDownComp";
import Header from "@/components/Layout/Header";
import CommonButton from "@/components/commonButton";
import InputForm from "@/components/inputForm";
import { localstorageService } from "@/utils/LocalStorage.service";
import {
  Button,
  Radio,
  RadioGroup,
  useDisclosure,
  useModal,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LuPenLine } from "react-icons/lu";
import { useSelector } from "react-redux";

type Props = {
  searchParams: any;
};

const Page = ({ searchParams }: Props) => {
  const { userType } = useSelector((state: any) => state.userAccount);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const [accountType, setAccountType] = useState(userType || 1);
  const [errors, setErrors] = useState({});
  const [resError, setResError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    commercial: "",
    facilityName: "",
    phone: "",
    email: "",
    negotiatorId: "",
    negotiatorName: "",
    password: "",
    confirmPassword: "",
    characteristics: "",
    user_role_key: "",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateForm = () => {
    const errors = {};
    
    console.log("email validation", emailRegex.test(formData?.email));
    const emailValidation = emailRegex.test(formData.email);
    if (!formData.email) {
      errors.email = "يرجى إدخال البريد الإلكتروني";
    } else if (!emailValidation) {
      errors.emailValid = "البريد الإلكتروني غير صحيح";
    }
    if (!formData.user_role_key) {
      errors.role = "الرجاء تحديد الدور أولاً";
    }
    if (!formData.phone) {
      errors.phone = "يرجى إدخال رقم الجوال";
    }
    if (!formData.negotiatorName) {
      errors.negotiatorName = "الرجاء إدخال اسم المفاوض";
    }
    if (!formData.password) {
      errors.password = "يرجى إدخال كلمة المرور";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const CreateAccount = () => {
    setResError("");
    if (validateForm()) {
      if (formData?.password !== formData?.confirmPassword) {
        return setErrors({
          ...errors,
          confirmPasError: "كلمة المرور غير متطابقة",
        });
      }
      setLoading(true);
      const data = new FormData();
      data.append("commercial", formData.commercial);
      data.append("facilityName", formData.facilityName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("negotiatorName", formData.negotiatorName);
      data.append("negotiatorId", formData.negotiatorId);
      data.append("characteristics", formData.characteristics);
      data.append("user_role_key", formData.user_role_key);
      data.append("password", formData.password);
      userFlow
        .createAccount(data)
        .then((response) => {
          console.log("response while creating account", response);
          if (response?.code === "1") {
            onOpen();
            router.push("/login");
          } else setResError(response?.message);
        })
        .catch((error) => {
          console.log("error while creating account", error);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div dir="rtl">
      <Header />
      <div className="bg-gradient-radial md:pb-28 pb-16 lg:pb-40 from-blue-100 to-pink-50 via-gray-100">
        <div className="text-center w-[95%] mx-auto md:pt-20 pt-8">
          <div className="text-[#0A102F] lg:text-[45px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
            <span> إنشاء ح</span>
            <span className="rounded-3xl bg-[#BDFFA5] md:pe-24 pe-4 py-0">
              ساب جديد
            </span>
            <div className="text-[14px] md:text-[18px] text-gray-700 sm:my-8 my-4 font-rbRegular">
              <p>برجاء ادخال البيانات المطلوبة</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[95%] py-5 sm:py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border mx-auto md:mt-0 md:mb-24 sm:mb-16 mb-8 md:w-[70%] lg:w-[50%] sm:w-[80%] shadow md:shadow-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 space-y-4 md:space-y-6 sm:p-6">
              <h1 className="text-xl relative flex items-center justify-start font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <span className="bg-[#F84F39] bg-opacity-20 md:p-3 p-2 absolute rounded-full"></span>
                <LuPenLine className="pe-3 ms-2 text-[30px] md:text-[40px] text-[#F84F39]" />
                {accountType == 1 ? "سجل كفرد" : "التسجيل كممثل منشأة"}
              </h1>
            </div>
            <div className="px-3 mb-4">
              <RadioGroup
                label="دور المستخدم"
                orientation="horizontal"
                dir="rtl"
              >
                <Radio
                  value="vendor"
                  onClick={() =>
                    setFormData({ ...formData, user_role_key: "vendor" })
                  }
                  className="font-rbRegular text-[14px] text-[#000]"
                >
                  <span className="mr-3">مورد</span>
                </Radio>
                <Radio
                  value="buyer"
                  onClick={() =>
                    setFormData({ ...formData, user_role_key: "buyer" })
                  }
                  className="font-rbRegular text-[14px] text-[#000]"
                >
                  <span className="mr-3">طالب السعر</span>
                </Radio>
              </RadioGroup>
              {errors.role && !formData?.user_role_key && (
                <div className="text-red-500 text-[12px]">{errors.role}</div>
              )}
            </div>
            <form onSubmit={CreateAccount}>
              <div className="px-3 pb-6">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  {accountType == 2 && (
                    <>
                      <InputForm
                        placeholder="السجل التجاري"
                        type="text"
                        value={formData?.commercial || ""}
                        onchange={(e: any) =>
                          setFormData({
                            ...formData,
                            commercial: e.target.value,
                          })
                        }
                        title="السجل التجاري"
                      />
                      <InputForm
                        placeholder="اسم المنشأة"
                        type="text"
                        value={formData?.facilityName || ""}
                        onchange={(e: any) =>
                          setFormData({
                            ...formData,
                            facilityName: e.target.value,
                          })
                        }
                        title="اسم المنشأة"
                      />
                    </>
                  )}
                  <div className="">
                    <InputForm
                      placeholder="رقم الجوال"
                      type="number"
                      value={formData?.phone || ""}
                      onchange={(e: any) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      title="رقم الجوال"
                      required
                    />
                    {errors.phone && !formData?.phone && (
                      <div className="text-red-500 text-[12px]">
                        {errors.phone}
                      </div>
                    )}
                  </div>
                  <div>
                    <InputForm
                      placeholder="البريد الالكتروني"
                      type="email"
                      value={formData?.email || ""}
                      onchange={(e: any) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      title="البريد الالكتروني"
                      required
                    />
                    {errors.email && !formData?.email && (
                      <div className="text-red-500 text-[12px]">
                        {errors.email}
                      </div>
                    )}
                    {errors.emailValid && formData?.email && !emailRegex.test(formData?.email) && (
                      <div className="text-red-500 text-[12px]">
                        {errors.emailValid}
                      </div>
                    )}
                  </div>
                  <div>
                    <InputForm
                      placeholder="رقم هوية ممثل المنشأة"
                      type="number"
                      value={formData?.negotiatorId || ""}
                      onchange={(e: any) =>
                        setFormData({
                          ...formData,
                          negotiatorId: e.target.value,
                        })
                      }
                      title="رقم هوية ممثل المنشأة"
                    />
                  </div>
                  <div>
                    <InputForm
                      placeholder="اسم المفاوض"
                      type="text"
                      value={formData?.negotiatorName || ""}
                      onchange={(e: any) =>
                        setFormData({
                          ...formData,
                          negotiatorName: e.target.value,
                        })
                      }
                      title="اسم المفاوض"
                      required
                    />
                    {errors.negotiatorName && !formData?.negotiatorName && (
                      <div className="text-red-500 text-[12px]">
                        {errors.negotiatorName}
                      </div>
                    )}
                  </div>
                  <div className="">
                    <InputForm
                      placeholder="كلمة المرور"
                      type="password"
                      value={formData?.password || ""}
                      onchange={(e: any) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      title="كلمة المرور"
                      required
                    />
                    {errors.password && !formData?.password && (
                      <div className="text-red-500 text-[12px]">
                        {errors.password}
                      </div>
                    )}
                  </div>
                  <div className="">
                    <InputForm
                      placeholder="تاكيد كلمة المرور"
                      type="password"
                      value={formData?.confirmPassword || ""}
                      onchange={(e: any) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      title="تاكيد كلمة المرور"
                      required
                    />
                    {errors.confirmPasError &&
                      formData?.password !== formData?.confirmPassword && (
                        <div className="text-red-500 text-[12px]">
                          {errors.confirmPasError}
                        </div>
                      )}
                  </div>
                </div>
                {accountType == 2 && (
                  <div>
                    <InputForm
                      placeholder="صفة المفاوض"
                      type="text"
                      value={formData?.characteristics || ""}
                      onchange={(e: any) =>
                        setFormData({
                          ...formData,
                          characteristics: e.target.value,
                        })
                      }
                      title="صفة المفاوض"
                    />
                  </div>
                )}
                {resError && (
                  <label className="text-[#F84F39] text-[12px]">
                    {resError}
                  </label>
                )}
                <CommonButton
                  text="تسجيل جديد"
                  bgColor="#F84F39"
                  onPress={CreateAccount}
                  loading={loading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={isOpen}
        onClose={() => {}}
        onConfirm={() => router.push("/login")}
        header="تم التسجيل بنجاح"
        message="لقد تم إنشاء حسابك بنجاح"
        buttonText={"اذهب لتسجيل الدخول"}
      />
    </div>
  );
};

export default Page;
