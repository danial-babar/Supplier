import { Spinner } from "@nextui-org/react";
import React from "react";

type Props = {
  color?: any;
  size?: any;
};

const Loader = ({ color, size }: Props) => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Spinner color={color || "primary"} size={size || "lg"} />
    </div>
  );
};

export default Loader;
