"use client";
import React from "react";
import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SimpleButton from "./SimpleButton";
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
        <Link href={"/"}>Home /</Link>
        <span className="text-slate-900">Button</span>
      </p>
      <SimpleButton />
    </div>
  );
};

export default page;
