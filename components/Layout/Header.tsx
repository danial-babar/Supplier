import Navigation from "@/components/Layout/Navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaRegEnvelope } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { localstorageService } from "@/utils/LocalStorage.service";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IoMdArrowDropdown, IoMdLogOut } from "react-icons/io";
import { MdCollectionsBookmark } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import WarningModal from "@/common-modals/WarningModal";

type Props = {
  activeItem?: number;
};

const Header = ({ activeItem }: Props) => {
  const { user } = useSelector((state: any) => state.user);
  const userToken = localstorageService.getToken();
  const router = useRouter();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);
  const [warningModal, setWarningModal] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setActive(true);
      } else setActive(false);
    });
  }

  const onFaBarsClick = () => {
    setOpen(!open);
  };
  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === "screen") {
      setOpen(!open);
    }
  };
  const handleProfile = () => {
    setActiveProfile(!activeProfile);
  };
  const onLoginAddReqClicked = () => {
    if (userToken && isUser) {
      if (user?.user_role_key == "vendor") setWarningModal(true);
      else router.push("/addRequest");
    } else {
      router.push("/login");
    }
  };
  const handleLogout = () => {
    console.log("handleLogoute clicked");
    dispatch({
      type: "clearUser",
    });

    // localstorageService.logout();
    router.push("/login");
    Cookies.remove("token");
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (open) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
    }
  }, [open]);
  useEffect(() => {
    if (user?.token) {
      setIsUser(true);
    }
  }, [user]);

  return (
    <div
      className={`w-full py-5 border-b border-b-[#F84F39]  h-[90px] transition-opacity ${
        active && "fixed top-0 left-0 bg-[#fff] z-[9999] sm:px-0 px-3 "
      }`}
      dir="rtl"
    >
      <div className="hidden lg:flex w-[95%] mx-auto items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={150}
              height={150}
              className="lg:w-[150px] w-[120px]"
              alt="Logo"
            />
          </Link>
        </div>
        <Navigation activeItem={activeItem} active={active} />
        {isUser && userToken && (
          <div className="flex items-center gap-2">
            <div>
              <FaRegEnvelope className="text-[#F84F39] ml-4" />
            </div>
            <div className="">
              <GoPeople className="text-[#F84F39]" />
            </div>
            <Dropdown>
              <DropdownTrigger>
                <div>
                  <p className="text-[#979797] text-[10px] font-rbLight">
                    مرحبا بك{" "}
                  </p>
                  <div className="flex items-center">
                    <p className="text-[#161414] text-[14px] font-rbBold">
                      {user?.facilityName || user?.negotiatorName}
                    </p>
                    <IoMdArrowDropdown color="#161414" size={18} />
                  </div>
                </div>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Profile Actions"
                variant="flat"
                dir="rtl"
              >
                <DropdownItem onClick={() => router.push("allRequest")}>
                  <div className="flex items-center w-full">
                    <MdCollectionsBookmark className="text-black text-2xl ml-2" />
                    <span className={`text-black text-[16px] pl-2`}>
                      طلباتي
                    </span>
                  </div>
                </DropdownItem>
                <DropdownItem onClick={handleLogout}>
                  <div className="flex items-center w-full">
                    <IoMdLogOut className="text-black text-2xl ml-2" />
                    <span className={`text-black text-[16px] pl-2`}>
                      تسجيل خروج
                    </span>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )}
        <div
          className="text-center md:px-3 px-2 xl:py-3 py-2 bg-[#F84F39] rounded-full cursor-pointer"
          onClick={onLoginAddReqClicked}
        >
          <h4 className="text-white lg:w-[120px] w-[90px] text-[14px] lg:text-[16px] font-rbRegular">
            {userToken && isUser ? "طلب سعر" : "تسجيل دخول"}
          </h4>
        </div>
      </div>

      <div className=" w-[95%] mx-auto lg:hidden flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image src={"/logo.png"} width={150} height={150} alt="Logo" />
          </Link>
        </div>
        <div>
          <FaBars className="text-2xl cursor-pointer" onClick={onFaBarsClick} />
        </div>
        {open && (
          <div
            className="fixed lg:hidden w-full h-screen top-0 left-0 z-[9999] bg-[unset]"
            onClick={handleClose}
            id="screen"
          >
            <div className="fixed bg-[#000] w-[60%] h-screen top-0 right-0 z-[9999]">
              <div className="mt-8 px-5">
                {userToken && isUser ? (
                  <div className="flex items-center gap-2">
                    <div>
                      <FaRegEnvelope className="text-[#F84F39] ml-4" />
                    </div>
                    <div className="">
                      <GoPeople className="text-[#F84F39]" />
                    </div>
                    <Dropdown>
                      <DropdownTrigger>
                        <div>
                          <p className="text-[#fff] text-[10px] font-rbLight">
                            مرحبا بك{" "}
                          </p>
                          <div className="flex items-center">
                            <p className="text-[#fff] text-[14px] font-rbBold">
                              {user?.facilityName}
                            </p>
                            <IoMdArrowDropdown color="#fff" size={18} />
                          </div>
                        </div>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Profile Actions"
                        variant="flat"
                        dir="rtl"
                      >
                        <DropdownItem onClick={() => router.push("allRequest")}>
                          <div className="flex items-center w-full">
                            <MdCollectionsBookmark className="text-black text-2xl ml-2" />
                            <span className={`text-black text-[16px] pl-2`}>
                              طلباتي
                            </span>
                          </div>
                        </DropdownItem>
                        <DropdownItem onClick={handleLogout}>
                          <div className="flex items-center w-full">
                            <IoMdLogOut className="text-black text-2xl ml-2" />
                            <span className={`text-black text-[16px] pl-2`}>
                              تسجيل خروج
                            </span>
                          </div>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                ) : null}
                <Navigation activeItem={activeItem} active={active} />
                <div
                  className="text-white cursor-pointer p-2 bg-[#F84F39] rounded-full mt-4"
                  onClick={onLoginAddReqClicked}
                >
                  <h4 className="text-[14px] lg:text-[16px] font-rbRegular">
                    {userToken && isUser ? "طلب سعر" : "تسجيل دخول"}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <WarningModal
        buttonText="يغلق"
        isOpen={warningModal}
        onClose={() => setWarningModal(false)}
        onConfirm={() => setWarningModal(false)}
        header="تحذير"
        message="يرجى تسجيل الدخول كمشتري قبل إضافة طلب"
      />
    </div>
  );
};

export default Header;
