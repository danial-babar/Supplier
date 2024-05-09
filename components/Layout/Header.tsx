import Navigation from "@/components/Layout/Navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaRegEnvelope } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { localstorageService } from "@/utils/LocalStorage.service";
import { RxCross1 } from "react-icons/rx";
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

type Props = {
  activeItem?: number;
};

const Header = ({ activeItem }: Props) => {
  const { user } = useSelector((state: any) => state.user);
  const userToken = localstorageService.getToken();
  const router = useRouter();
  console.log("userToken", user);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
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
      if (user?.user_role_key == "vendor")
        alert("يرجى تسجيل الدخول كمشتري قبل إضافة طلب");
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
      className={`w-full py-5 border-b border-b-[#F84F39] px-3 min-h-[60px] transition-opacity false ${
        active && "fixed top-0 left-0 bg-[#fff] z-[9999] sm:px-0 px-3 "
      }`}
      dir="rtl"
    >
      <div className="hidden w-[95%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src={active ? "/logo.png" : "/logo.png"}
              width={150}
              height={150}
              className="lg:w-[150px] w-[120px]"
              alt="Logo"
            />
          </Link>
        </div>
        <Navigation activeItem={activeItem} active={active} />
        {isUser && (
          <div className="flex items-center gap-2 cursor-pointer">
            <div>
              <FaRegEnvelope className="text-[#F84F39] ml-4" />
            </div>
            <div className="">
              <GoPeople className="text-[#F84F39]" />
            </div>
            <Dropdown>
              <DropdownTrigger>
                <div>
                  <p className="text-[##979797] text-[10px] font-rbLight">
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
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem onClick={() => router.push("allRequest")}>
                  <div className="flex items-center w-full">
                    <MdCollectionsBookmark className="text-black text-2xl ml-2" />
                    <span className={`text-black text-[16px] pl-2`}>
                      My Orders
                    </span>
                  </div>
                </DropdownItem>
                <DropdownItem onClick={handleLogout}>
                  <div className="flex items-center w-full">
                    <IoMdLogOut className="text-black text-2xl ml-2" />
                    <span className={`text-black text-[16px] pl-2`}>
                      Logout
                    </span>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )}
        {/* <Link
          href={{ pathname: userToken && isUser ? "/addRequest" : "/login" }}
        > */}
        <div
          className="text-center md:px-3 px-2 xl:py-3 py-2 bg-[#F84F39] rounded-full"
          onClick={onLoginAddReqClicked}
        >
          <h4 className="text-white cursor-pointer lg:w-[120px] w-[90px] text-[14px] lg:text-[16px] font-rbRegular">
            {userToken && isUser ? "طلب سعر" : "تسجيل دخول"}
          </h4>
        </div>
        {/* </Link> */}
      </div>
      <div className="w-full md:hidden flex items-center justify-between">
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
            className="fixed md:hidden w-full h-screen top-0 left-0 z-[9999] bg-[unset]"
            onClick={handleClose}
            id="screen"
          >
            {userToken && isUser ? (
              <div className="fixed bg-[#000] w-[60%] h-screen top-0 right-0 z-[999]">
                <div className="mt-8 px-5">
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
                      <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem onClick={() => router.push("allRequest")}>
                          <div className="flex items-center w-full">
                            <MdCollectionsBookmark className="text-black text-2xl ml-2" />
                            <span className={`text-black text-[16px] pl-2`}>
                              My Orders
                            </span>
                          </div>
                        </DropdownItem>
                        <DropdownItem onClick={handleLogout}>
                          <div className="flex items-center w-full">
                            <IoMdLogOut className="text-black text-2xl ml-2" />
                            <span className={`text-black text-[16px] pl-2`}>
                              Logout
                            </span>
                          </div>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <Navigation activeItem={activeItem} active={active} />
                  <Link
                    href={{
                      pathname: userToken && isUser ? "/addRequest" : "/login",
                    }}
                  >
                    <div className="text-white cursor-pointer p-2 bg-[#F84F39] rounded-full">
                      <h4 className="text-[14px] lg:text-[16px] font-rbRegular">
                        {userToken && isUser ? "طلب سعر" : "تسجيل دخول"}
                      </h4>
                    </div>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
