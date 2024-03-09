import Navigation from "@/components/Layout/Navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
// import DropDown from "./DropDown";
import { RxCross1 } from "react-icons/rx";
type Props = {
  activeItem: number;
};

const Header = ({ activeItem }: Props) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
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
  return (
    <div
      className={`w-full py-5 border-b border-b-[#F84F39] min-h-[60px] transition-opacity false ${
        active && "fixed top-0 left-0 bg-[#272737] z-[9999]"
      }`}
>
      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image src={active?"/logo-white.png":"/logo.png" } width={150} height={150} alt="Logo" />
          </Link>
        </div>
        <Navigation activeItem={activeItem} active={active}/>
        <div className="text-center px-3 py-2  bg-[#F84F39] rounded-full" >
          <h4 className="text-white cursor-pointer w-[120px] text-[16px] font-[600]">تسجيل دخول</h4>
        </div>
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
            <div className="fixed bg-[#000] w-[60%] h-screen top-0 right-0 z-[999]">
              <div className="mt-20 p-5">
                <Navigation activeItem={activeItem} active={active}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
