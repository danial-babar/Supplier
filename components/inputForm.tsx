import { Input } from "@nextui-org/react";
import React from "react";

type Props = {
  placeholder: string;
  type: any;
  value?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  title?: string;
};

const InputForm = ({
  placeholder,
  type,
  className,
  value,
  onchange,
  required,
  title,
}: Props) => {
  return (
    <div dir="rtl">
      {title && (
        <label className="text-[#000] block font-rbRegular text-[16px] mb-1">
          {title}
          {required && (
            <span className="text-[#F84F39] font-rbRegular text-[16px]">
              {" "}
              *
            </span>
          )}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={
          className ||
          `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
        }
        required={required || false}
        value={value}
        onChange={onchange}
        lang="ar"
        dir="rtl"
      />
    </div>
  );
};

export default InputForm;
