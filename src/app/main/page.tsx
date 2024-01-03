"use client";
import React from "react";
import Banner from "@/components/main/banner/Banner";
import Nav from "@/components/main/nav/Nav";
import Popular from "@/components/main/popular/Popular";
import Recent from "@/components/main/recent/Recent";

export default function page() {
  return (
    <>
      <Nav />
      <Banner />
      <div className="container mt-[10rem]">
        <Popular />
      </div>
    </>
  );
}
