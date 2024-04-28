import React from "react";
import { BsThreeDots } from "react-icons/bs";

type Props = {
  placeholder: string;
  type: "text" | "email" | "password";
  icon: React.ReactNode;
  value?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWithIcon = ({ placeholder, type, icon, value, onchange }: Props) => {
  return (
    <div dir="rtl">
      <div className="relative mt-4">
        <div className="absolute inset-y-0 right-0 flex items-center ps-2 pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 ps-8 placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          value={value}
          onChange={onchange}
        />
      </div>
    </div>
  );
};

export default InputWithIcon;
