import { NavItems } from "@/constants/NavbarItems";
import Link from "next/link";
import React from "react";

type Props = {
  activeItem?: number;
  active: boolean;
};

const Navigation = ({ activeItem, active }: Props) => {
  return (
    <div className="block md:flex">
      {NavItems.map((item, index) => {
        return (
          <div key={item.title}>
            <Link href={item?.href}>
            <p
              className={`inline-block cursor-pointer md:px-3 text-[15px] sm-text-[16px] lg:px-5 py-5 md:py-0 ${
                activeItem === index ? "text-[#F84F39] font-rbBold":"md:text-black text-white font-rbRegular"
              }`}
            >
              {item.title}
            </p></Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
