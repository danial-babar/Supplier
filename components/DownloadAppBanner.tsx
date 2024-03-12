import Image from "next/image";
import React from "react";

type Props = {};

const DownloadAppBanner = (props: Props) => {
  return (
    <div className="w-full md:flex grid sm:grid-cols-3  justify-between mt-10  p-20">
      <div className="bg-[#34e5a750] w-[450px] px-6 rounded-[20px] py-10">
        <p className="text-black text-[20px] font-rbBold">
          المنتجات الأكثر طلبا للتوريد
        </p>
        <p className="text-black text-[16px] font-rbRegular mt-4">
          تقدم منصة <span className="font-rbBold">مــورد</span> مجموعة متنوعة من
          المنتجات الأكثر طلبًا في صناعة التوريد. نحن متخصصون في توفير حلول
          فعالة وذات جودة عالية لاحتياجاتكم.
        </p>
        <div className="inline-block px-8 p-4 bg-[#34e5a752] min-w-[120px] items-center justify-center rounded-full text-black font-rbBold text-[14px] mt-6 ">
          طلب سعر
        </div>
        <div className="flex mt-8 items-cente px-5">
          <Image src={"/badge.png"} alt="" width={60} height={100} />
          <h1 className="text-[#34E5A8] text-[40px] font-rbBold mr-5">
            الأكثر طلبا{" "}
          </h1>
        </div>
        <div className="flex-wrap mt-6">
          <div className="inline-block px-4 ml-4 p-4 bg-[#34e5a752] min-w-[120px] items-center justify-center rounded-full text-black font-rbBold text-[14px] mt-4">
            المواد البلاستيكية
          </div>
          <div className="inline-block px-4 ml-4 p-4 bg-[#34e5a752] min-w-[120px] items-center justify-center rounded-full text-black font-rbBold text-[14px] mt-4">
            المأكولات والمشروبات
          </div>
          <div className="inline-block px-4 ml-4 p-4 bg-[#34e5a752] min-w-[120px] items-center justify-center rounded-full text-black font-rbBold text-[14px] mt-4">
            الأجهزة الكهربائية
          </div>
          <div className="inline-block px-4 ml-4 p-4 bg-[#34e5a752] min-w-[120px] items-center justify-center rounded-full text-black font-rbBold text-[14px] mt-4">
            أعمال خدمية
          </div>
        </div>
      </div>
      <div className="bg-[#fff] w-[450px] px-6 rounded-[20px] items-center flex-col flex mx-auto justify-between">
        <div className="">
          <p className="text-black text-[20px] font-rbBold text-center mt-2">
            حمل تطبيق منصة مـوّرد الإلكتروني الان لتجربة مزايدة سهلة وسريعة
          </p>
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center p-4  border border-[#F84F39] rounded-full px-5">
              <p className="text-[#F84F39] text-[16px] font-rbBold ml-2">
                تحميل لنظام الاندرويد
              </p>
              <Image src={"/store.png"} alt="" width={20} height={20} />
            </div>
            <div className="flex items-center p-4  bg-[#F84F39] rounded-full px-5">
              <p className="text-[#fff] text-[16px] font-rbBold ml-2">
                تحميل لنظام iOS
              </p>
              <Image src={"/apple.png"} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="bg-[#f84f394b] p-5 rounded-[20px] items-center flex flex-col justify-between py-12">
          <p className="text-[#000]  text-[16px] font-rbBold ml-2 text-center">
            إجمالي وكلاء البيع
          </p>
          <div className="flex items-center justify-between w-full" dir="ltr">
            <h1 className="text-[#000] text-[70px] font-semibold">40+</h1>
            <div className="flex">
              <Image
                src={"/person1.png"}
                className="rounded-full object-contain border-2 border-[#fff] z-[9]"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src={"/person2.png"}
                className="rounded-full object-contain border-2 border-[#fff] ml-[-10px] z-[8]"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src={"/person3.png"}
                className="rounded-full object-contain border-2 border-[#fff] ml-[-10px] z-[7]"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src={"/person4.png"}
                className="rounded-full object-contain border-2 border-[#fff] ml-[-10px] z-[6]"
                width={50}
                height={50}
                alt=""
              />
            </div>
            <br />
          </div>
          <p className="text-black text-[17px] font-rbRegular text-center]">
            نحن نعمل مع شبكة واسعة من الموردين الموثوق <br />
            بهم لضمان توفير المنتجات بأفضل الأسعار وأوقات <br />
            التسليم المناسبة. فإننا نقدم لكم مجموعة متنوعة <br />
            من المنتجات التي تلبي احتياجاتكم. اعتمد على خبرتنا
          </p>
        </div>
      </div>
      <div className="bg-[#a7a3e94d]  w-[450px] px-6 rounded-[20px] py-10">
        <p className="text-black text-[20px] font-rbBold">
          ابدأ طلب توريداتك بكل سهولة
        </p>
        <p className="text-black text-[16px] font-rbRegular mt-4">
          تعرف على خطوات طلب وعرض سعر  من مكانك الآن <br />
          <span className="text-[#6B66DA] underline font-bold">
            تعرف علي المزيد
          </span>
        </p>
        <LearningStepCard
          title="التسجيل في المنصة"
          description="انشئ حسابك على منصة مــوّرد الإلكتروني"
          icon={"/register.png"}
        />
        <LearningStepCard
          title="إضافة و اختيار المنتجات"
          description="قم بـ أضافة منتجاتك او اختيار منتج بكل سهولة"
          icon={"/product.png"}
        />
        <LearningStepCard
          title="بدء طلب سعر"
          description="سدد قيمة المشاركة وابدأ عرض وطلب السعر"
          icon={"/auction.png"}
        />
      </div>
    </div>
  );
};
interface LearningTypes {
  title: string;
  description: string;
  icon: any;
}
const LearningStepCard = ({ title, description, icon }: LearningTypes) => {
  return (
    <div className="bg-[#6c66da1e] p-5 mt-6 px-5 rounded-[10px] flex items-center">
      <div className="bg-[#a7a3e94d] p-2 rounded-[10px]">
        <Image
          src={icon}
          alt=""
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="mr-4">
        <h2 className="text-[#061C3D] text-[18px] font-rbBold">{title}</h2>
        <h2 className="text-[#42526B] text-[14px] font-rbRegular mt-2">{description}</h2>
      </div>
    </div>
  );
};
export default DownloadAppBanner;
