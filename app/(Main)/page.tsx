"use client";
import Banner from "@/components/Layout/Banner";
import Header from "@/components/Layout/Header";
import RequestCard from "@/components/RequestCard";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div dir="rtl" className="">
      <Header activeItem={0} />
      <Banner/>
      
      <RequestCard/>
    </div>
  );
};

export default page;
