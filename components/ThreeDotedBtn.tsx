import React from "react";
import { BsThreeDots } from "react-icons/bs";

type Props = { title: string; onclick?: () => void };

const ThreeDotedBtn = ({ title, onclick }: Props) => {
  return (
    <div className="md:mt-20 text-center mt-8 mb-8 w-full items-center justify-center flex">
      <div
        className="bg-[#F84F39] self-center justify-center p-4 px-10 text-[14px] cursor-pointer flex items-center rounded-medium md:rounded-full text-white font-rbRegular"
        onClick={onclick}
      >
        {title}
        <BsThreeDots color="white" size={30} className="mr-1" />
      </div>
    </div>
  );
};

export default ThreeDotedBtn;
