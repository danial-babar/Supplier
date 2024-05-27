import Image from "next/image";
import React from "react";

type Props = {};

const DownloadAppBanner = (props: Props) => {
  return (
    <div className="w-[95%] grid lg:grid-cols-3 gap-5 md:grid-cols-2 mx-auto md:justify-between justify-center md:my-16 mt-8">
      <div className="bg-[#66e6b950] xl:px-5 px-3 pt-8 xl:pt-12 pb-5 rounded-[20px]">
        <p className="text-black opacity-80 text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] font-rbBold">
          المنتجات الأكثر طلبا للتوريد
        </p>
        <p className="text-black text-[16px] font-rbLight sm:font-rbRegular mt-4">
          تقدم منصة <span className="font-rbLight sm:font-rbBold">مــورد</span> مجموعة متنوعة من
          المنتجات الأكثر طلبًا في صناعة التوريد. نحن متخصصون في توفير حلول
          فعالة وذات جودة عالية لاحتياجاتكم.
        </p>
        <div className="text-center sm:text-[16px] text-[14px] sm:inline-block lg:px-10 px-8 xl:py-4 py-2 bg-[#4aeeb452] min-w-[120px] items-center justify-center rounded-full text-black font-rbBold mt-6 ">
          طلب سعر
        </div>
        <div className="flex mt-5 items-center sm:justify-start justify-center px-3 lg:px-5">
          <Image
            src={"/badge.png"}
            alt=""
            className="download_app"
            width={55}
            height={55}
          />
          <h1 className="text-[#34E5A8] md:text-[28px] sm:text-[22px] text-[18px] lg:text-[32px] xl:text-[45px] font-rbBold mr-5">
            الأكثر طلبا{" "}
          </h1>
        </div>
        <div className="grid mt-5 xl:grid-cols-2 grid-cols-1 justify-center gap-3">
          
            <p className="inline-block xl:px-3 px-2 py-3 xl:py-4 text-center bg-[#4aeeb452] items-center justify-center rounded-medium lg:rounded-full text-black font-rbRegular lg:font-rbBold text-[16px] lg:text-[12px]">
              المواد البلاستيكية
            </p>
         
          
            <p className="inline-block xl:px-3 px-2 py-3 xl:py-4 text-center bg-[#4aeeb452] items-center justify-center rounded-medium lg:rounded-full text-black font-rbRegular lg:font-rbBold text-[16px] lg:text-[12px]">
              المأكولات والمشروبات
            </p>
         
          
            <p className="inline-block xl:px-3 px-2 py-3 xl:py-4 text-center bg-[#4aeeb452] items-center justify-center rounded-medium lg:rounded-full text-black font-rbRegular lg:font-rbBold text-[16px] lg:text-[12px]">
              الأجهزة الكهربائية
            </p>
         
          
            <p className="inline-block xl:px-3 py-3 xl:py-4 text-center bg-[#4aeeb452] items-center justify-center rounded-medium lg:rounded-full text-black font-rbRegular lg:font-rbBold text-[16px] lg:text-[12px] xl:text-[14px]">
              أعمال خدمية
            </p>
         
        </div>
      </div>
      <div className="bg-[#fff] flex flex-col justify-between mt-5 rounded-[20px]">
      <div className="text-center">
          <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] font-rbBold ">
            حمل تطبيق منصة مـوّرد الإلكتروني الان لتجربة مزايدة سهلة وسريعة
          </p>
        </div>
        <div className="xl:flex items-center justify-center gap-1 my-5">
          <div className="flex py-2 lg:py-3 xl:mb-0 mb-4 lg:px-6 items-center justify-center xl:justify-start border border-[#F84F39] rounded-full">
            <p className="text-[#F84F39]  me-1 text-[16px] font-rbBold">
              تحميل لنظام الاندرويد
            </p>
            <Image src={"/store.png"} alt="" width={14} height={14} />
          </div>
          <div className="flex py-2 lg:py-3 lg:px-6 items-center justify-center border border-[#F84F39] xl:justify-start bg-[#F84F39] rounded-full">
            <p className="text-[#fff] me-1 text-[16px] font-rbBold">
              تحميل لنظام iOS
            </p>
            <Image src={"/apple.png"} alt="" width={14} height={14} />
          </div>
        </div>
        <div className="bg-[#f8604b4b] lg:px-5 px-3 shadow md:shadow-large rounded-[20px] items-center flex flex-col justify-between py-5 xl:py-8">
          <p className="text-[#000]  text-[18px] font-rbBold ml-2 text-center">
            إجمالي وكلاء البيع
          </p>
          <div
            className="flex items-center xl:gap-3 gap-2 mx-auto my-5 justify-center"
            dir="ltr"
          >
            <h1 className="text-[#000] lg:text-[55px] xl:text-[65px] sm:text-[42px] text-[22px] font-rbRegular">
              40+
            </h1>
            <div className="flex">
              <Image
                src={"/person1.png"}
                className="rounded-full groupOfImage object-contain border-2 border-[#fff] z-[9]"
                width={47}
                height={47}
                alt=""
              />
              <Image
                src={"/person2.png"}
                className="rounded-full groupOfImage object-contain border-2 border-[#fff] ml-[-10px] z-[8]"
                width={47}
                height={47}
                alt=""
              />
              <Image
                src={"/person3.png"}
                className="rounded-full groupOfImage object-contain border-2 border-[#fff] ml-[-10px] z-[7]"
                width={45}
                height={45}
                alt=""
              />
              <Image
                src={"/person4.png"}
                className="rounded-full groupOfImage object-contain border-2 border-[#fff] ml-[-10px] z-[6]"
                width={45}
                height={45}
                alt=""
              />
            </div>
            <br />
          </div>
          <p className="text-black text-[16px] font-rbLight sm:font-rbRegular text-center]">
            نحن نعمل مع شبكة واسعة من الموردين الموثوق بهم لضمان توفير المنتجات
            بأفضل الأسعار وأوقات التسليم المناسبة. فإننا نقدم لكم مجموعة متنوعة
            من المنتجات التي تلبي احتياجاتكم. اعتمد على خبرتنا
          </p>
        </div>
      </div>
      <div className="bg-[#a7a3e94d] flex flex-col justify-between xl:px-5 px-3 pb-5 pt-8 lg:pt-12 rounded-[20px]">
        <div className="">
          <p className="text-black opacity-80 text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] font-rbBold">
            ابدأ طلب توريداتك بكل سهولة
          </p>
        </div>
        <div className="">
          <p className="text-black opacity-60 text-[16px] font-rbLight sm:font-rbRegular mt-4">
            تعرف على خطوات طلب وعرض سعر  من مكانك الآن <br />
          </p>
          <p className="text-[#6B66DA] opacity-100 underline font-rbRegular sm:font-rbBold">
            تعرف علي المزيد
          </p>
        </div>
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
    <div className="bg-[#6c66da1e] lg:p-3 p-2 mt-5 rounded-[10px] flex items-center">
      <div className="bg-[#a7a3e94d] p-2 rounded-[10px]">
        <Image
          src={icon}
          alt=""
          width={32}
          height={32}
          className="object-contain p-1"
        />
      </div>
      <div className="mr-4">
        <h2 className="text-[#061C3D] text-[14px] md:text-[18px] font-rbBold">{title}</h2>
        <h2 className="text-[#42526B] text-[14px] font-rbRegular mt-2">
          {description}
        </h2>
      </div>
    </div>
  );
};
export default DownloadAppBanner;
