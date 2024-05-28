import { Button, Spinner } from "@nextui-org/react";
import React from "react";
// import { Loading } from "@nextui-org/react";

type Props = {
  text: string;
  bgColor: string;
  onPress?: (e: any) => void;
  color?: string;
  textColor?: string;
  className?: string;
  marginTop?: string;
  spinnerSize?: any;
  spinnerColor?: any;
  loading?: boolean;
  disable?: boolean;
};

const CommonButton = ({
  color,
  text,
  bgColor,
  onPress,
  textColor,
  className,
  loading,
  spinnerSize,
  spinnerColor,
  disable,
  marginTop
}: Props) => {
  console.log('disable', disable);
  
  return (
    <Button
      type={"button"}
      className={
        className ||
        `${marginTop || "mt-4"} w-full text-[${
          textColor || "#fff"
        }] bg-[${bgColor}] sm:font-rbBold font-rbRegular rounded-lg sm:rounded-3xl px-5 py-2 sm:py-6 ${disable && "pointer-events-none"}`
      }
      onPress={onPress}
    >
      {loading ? (
        <Spinner color={spinnerColor || "white"} size={spinnerSize || "sm"} />
      ) : (
        text
      )}
    </Button>
  );
};

export default CommonButton;
