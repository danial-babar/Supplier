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
            <Link href={item?.href || "/"}>
              <p
                className={`inline-block cursor-pointer lg:px-3 md:px-2 md:text-[14px] xl:text-[16px] xl:px-5 py-5 md:py-0 ${
                  activeItem === index
                    ? "text-[#F84F39] font-rbBold"
                    : "md:text-black text-white lg:font-rbRegular"
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
