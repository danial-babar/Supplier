"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { fieldData } from "@/constants/DummyData";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="" dir="rtl">
      <Header />
 <div className="md:w-[70%] mx-auto w-[95%]">
 <div className="grid gap-6 mb-6 md:grid-cols-2 my-5">
        <div className="">
          <label htmlFor="">jsdf</label>
          <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
            {fieldData.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="">
          <label htmlFor="">jsdf</label>
          <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
            {fieldData.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="">
          <label htmlFor="">jsdf</label>
          <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
            {fieldData.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="">
          <label htmlFor="">jsdf</label>
          <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
            {fieldData.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="">
          <label htmlFor="">jsdf</label>
          <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
            {fieldData.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="">
          <label htmlFor="">jsdf</label>
          <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
            {fieldData.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="">
          <label htmlFor="">jsdf</label>
          <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
            {fieldData.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="">
          <label htmlFor="">jsdf</label>
          <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
            {fieldData.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="w-full">
          <label htmlFor="">jsdf</label>
          <Select placeholder="ldkf" className="rounded-none selectboxForRTL">
            {fieldData.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
 </div>
      <Footer />
    </div>
  );
};
export default page;
