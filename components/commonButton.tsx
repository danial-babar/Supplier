import { Button } from "@nextui-org/react";
import React from "react";

type Props = {
  text: string;
  bgColor: string;
};

const CommonButton = ({ text, bgColor}:Props) => {
  return (
    <Button
      type="submit"
      className={`mt-4 w-full bg-[${bgColor}] sm:font-rbRegular font-rbLight text-white rounded-lg sm:rounded-3xl px-5 py-2 sm:py-6`}
    >
      {text}
    </Button>
  );
};

export default CommonButton;
