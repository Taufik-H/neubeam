"use client";
import React from "react";
import SimpleAlert from "./SimpleAlert";
import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";

const nunito = Nunito({
  subsets: ["latin"],
  weights: [400, 700],
});
const page = () => {
  return (
    <div className={nunito.className}>
      <div className="w-full border-b border-slate-200">
        <Navbar />
      </div>
      <p className="font-bold text-slate-500 my-10 mx-5">
        Home Component <span className="text-slate-900">Alert</span>
      </p>
      <SimpleAlert />
    </div>
  );
};

export default page;
