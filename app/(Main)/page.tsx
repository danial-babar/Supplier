"use client";
import Banner from "@/components/Layout/Banner";
import Header from "@/components/Layout/Header";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl" className="">
      <Header activeItem={0} />
      <Banner/>
    </div>
  );
};

export default page;
