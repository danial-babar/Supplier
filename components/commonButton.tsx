import { Button } from "@nextui-org/react";
import React from "react";

type Props = {
  text: string;
  bgColor: string;
  onPress?: (e: any) => void;
  color?: string;
  textColor?: string;
};

const CommonButton = ({ color, text, bgColor, onPress, textColor }: Props) => {
  return (
    <Button
      type="submit"
      className={`mt-4 w-full text-[${
        textColor || "#fff"
      }] bg-[${bgColor}] sm:font-rbRegular font-rbLight rounded-lg sm:rounded-3xl px-5 py-2 sm:py-6`}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};

export default CommonButton;
