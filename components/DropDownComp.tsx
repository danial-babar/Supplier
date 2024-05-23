import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  dropdown,
} from "@nextui-org/react";

type Props = {};

interface DropDownProps<T> {
  title: string;
  selectedItem: string;
  data: T[];
  getItemTitle: (item: T) => string;
  onClick?: (item: T) => void;
  variant?: any;
  dropdownBtnClass?: string;
  dropdownMenuClass?: string;
  hideTitle?: boolean;
  containerClass?: string;
}
const DropDownComp = <T,>({
  title,
  data,
  getItemTitle,
  onClick,
  selectedItem,
  variant,
  dropdownBtnClass,
  dropdownMenuClass,
  hideTitle,
  containerClass,
}: DropDownProps<T>) => {
  return (
    <div className={containerClass}>
      {!hideTitle && <p className="text-gray-400 px-2">{title}</p>}
      <Dropdown className="w-full " dir="rtl">
        <DropdownTrigger className="bg-blue-400">
          <Button
            variant={variant || "light"}
            className="sm:w-[130px] md:w-[110px] lg:w-[180px] justify-start pr-2  sm:text-[12px] md:text-[9px] lg:text-[14px] text-[10px]"
          >
            {selectedItem}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Action event example"
          className={dropdownMenuClass || "max-h-[200px] overflow-auto hide-scrollbar"}
        >
          {data?.map((item: any, index: number) => (
            <DropdownItem key={index} onClick={() => onClick?.(item)}>
              {getItemTitle(item)}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropDownComp;
