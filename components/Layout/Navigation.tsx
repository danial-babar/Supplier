import { NavItems } from "@/constants/NavbarItems";
import React from "react";

type Props = {
  activeItem: number;
  active: boolean;
};

const Navigation = ({ activeItem, active }: Props) => {
  return (
    <div className="block md:flex">
      {NavItems.map((item, index) => {
        return (
          <div key={item.title}>
            <p
              className={`inline-block cursor-pointer  md:px-2 text-[15px] sm-text-[8px] xl:px-5 py-5 md:py-0 font-[600] font-Inter ${
                activeItem === index
                  ? "text-[#F84F39]"
                  : active
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
