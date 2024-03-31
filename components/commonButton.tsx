import React from "react";

type Props = {
  text: string;
  bgColor: string;
};

const CommonButton = ({ text, bgColor}:Props) => {
  return (
    <button
      type="submit"
      className={`mt-4 w-full bg-[${bgColor}] hover:bg-opacity-70 focus:outline-none focus:ring-primary-300 sm:font-rbRegular font-rbLight text-white hover:text-black rounded-lg sm:rounded-3xl px-5 py-2 sm:py-3`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
