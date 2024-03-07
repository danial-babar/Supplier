import { NavItems } from "@/constants/NavbarItems";
import React from "react";

type Props = {
  activeItem?: number;
};

const Navigation = ({ activeItem }: Props) => {
  return (
    <div className="block md:flex">
      {NavItems.map((item, index) => {
        return (
          <div key={item.title}>
            <h5
              className={`inline-block text-white md:text-black md:px-2 sm-text-[12px] xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-Inter ${
                activeItem === index && "text-[#F84F39]"
              }`}
            >
              {item.title}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
