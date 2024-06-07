import { NavItems } from "@/constants/NavbarItems";
import Link from "next/link";
import React from "react";

type Props = {
  activeItem?: number;
  active: boolean;
};

const Navigation = ({ activeItem, active }: Props) => {
  return (
    <div className="block lg:flex">
      {NavItems.map((item, index) => {
        return (
          <div key={item.title}>
            <Link href={item?.href || "/"}>
              <p
                className={`inline-block cursor-pointer lg:px-3 md:px-2 sm:text-[12px] md:text-[14px] xl:text-[16px] xl:px-5 py-5 lg:py-0 ${
                  activeItem === index
                    ? "text-[#F84F39] font-rbBold"
                    : "lg:text-black text-white lg:font-rbRegular"
                }`}
              >
                {item.title}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
