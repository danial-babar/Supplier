"use client";
import { userFlow } from "@/api/Users";
import DropDownComp from "@/components/DropDownComp";
import Header from "@/components/Layout/Header";
import InputForm from "@/components/inputForm";
import { localstorageService } from "@/utils/LocalStorage.service";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { LuPenLine } from "react-icons/lu";
type Props = {};
const page = (props: Props) => {
  const [formData, setFormData] = useState({
    commercial: "7689",
    facilityName: "دانيال",
    phone: "03457232962",
    email: "danial1@gmail.com",
    negotiatorId: "565789",
    negotiatorName: "Babar",
    password: "1234",
    confirmPassword: "1234",
    characteristics: "ABC",
    user_role_key: { id: "", title: "" },
  });

  const CreateAccount = () => {
    console.log("entered in Create Account");

    const data = new FormData();
    data.append("commercial", formData.commercial);
    data.append("facilityName", formData.facilityName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("negotiatorName", formData.negotiatorName);
    data.append("negotiatorId", formData.negotiatorId);
    data.append("characteristics", formData.characteristics);
    data.append("user_role_key", formData.user_role_key?.title);
    data.append("password", formData.password);
    userFlow
      .createAccount(data)
      .then((response) => {
        console.log("response while creating account", response);
        if (response?.code == "1") {
          localStorage.setItem("user", JSON.stringify(response?.data));
          localstorageService.setToken(response?.data?.token)

        }
      })
      .catch((error) => {
        console.log("error while creating account", error);
      });
  };
  return (
    <div dir="rtl">
      <Header />
      <div className="bg-gradient-radial md:pb-28 pb-16 lg:pb-40 from-blue-100 to-pink-50 via-gray-100">
        <div className="text-center w-[95%] mx-auto md:pt-20 pt-8">
          <div className=" text-[#0A102F] lg:text-[45px] md:text-[34px] sm:text-[22px] text-[14px] relative font-rbBold">
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
                التسجيل كممثل منشأة
              </h1>
            </div>
            <form>
              <div className="px-3 pb-6">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <InputForm
                    placeholder="السجل التجاري"
                    type="text"
                    value={formData?.commercial || ""}
                    onchange={(e: any) =>
                      setFormData({ ...formData, commercial: e.target.value })
                    }
                  />
                  <InputForm
                    placeholder="اسم المنشأة"
                    type="text"
                    value={formData?.facilityName || ""}
                    onchange={(e: any) =>
                      setFormData({ ...formData, facilityName: e.target.value })
                    }
                  />
                  <InputForm
                    placeholder="رقم الجوال"
                    type="text"
                    value={formData?.phone || ""}
                    onchange={(e: any) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <InputForm
                    placeholder="البريد الالكتروني"
                    type="text"
                    value={formData?.email || ""}
                    onchange={(e: any) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <InputForm
                    placeholder="رقم هوية المفاوض"
                    type="text"
                    value={formData?.negotiatorId || ""}
                    onchange={(e: any) =>
                      setFormData({ ...formData, negotiatorId: e.target.value })
                    }
                  />
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
                  />
                  <InputForm
                    placeholder="كلمة المرور"
                    type="password"
                    value={formData?.password || ""}
                    onchange={(e: any) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
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
                  />
                  <InputForm
                    placeholder="تاكيد كلمة المرور"
                    type="text"
                    value={formData?.confirmPassword || ""}
                    onchange={(e: any) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                  <DropDownComp
                    title={"اختر التصنيف"}
                    data={[
                      { id: "1", title: "بائع" },
                      { id: "2", title: "مشتر" },
                    ]}
                    getItemTitle={(item) => item.title}
                    onClick={(item) =>
                      setFormData({ ...formData, user_role_key: item })
                    }
                    selectedItem={formData?.user_role_key?.title || "التصنيف"}
                    hideTitle={true}
                    dropdownBtnClass="flex justify-between items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    containerClass='w-[100%] bg-lime-500'
                    dropdownMenuClass={'w-full bg-green-500'}
                  />
                </div>
                <div>
                  <InputForm
                    placeholder="تاكيد كلمة المرور"
                    type="text"
                    value={formData?.characteristics || ""}
                    onchange={(e: any) =>
                      setFormData({
                        ...formData,
                        characteristics: e.target.value,
                      })
                    }
                  />
                </div>
                <Button
                  className="mt-4 w-full bg-[#F84F39] focus:ring-4 focus:outline-none focus:ring-primary-300 sm:font-rbRegular font-rbLight text-white hover:text-black rounded-lg sm:rounded-3xl px-5 py-2 sm:py-3"
                  onPress={CreateAccount}
                >
                  تسجيل جديد
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
