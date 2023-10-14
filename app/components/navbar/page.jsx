"use client";
import React from "react";
import CodeBlock from "@/components/highlighter/CodeBlock";
import { getComponentCode } from "@/utils/getComponentCode";
import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { navbars } from "@/constant/componentList";

const nunito = Nunito({
  subsets: ["latin"],
  weights: [400, 700],
});

const ComponentWithCode = ({ component, name }) => {
  const codeString = getComponentCode(component);
  return (
    <div>
      <CodeBlock code={codeString} language="html" componentName={name} />
    </div>
  );
};

const page = () => {
  return (
    <div className={nunito.className}>
      <div className="w-full border-b border-slate-200">
        <Navbar />
      </div>
      <p className="font-bold text-slate-500 my-10 mx-5">
        <Link href={"/"}>Home /</Link>
        <span className="text-slate-900">Components</span>
      </p>
      {navbars.map((item, index) => (
        <ComponentWithCode key={index} {...item} />
      ))}
    </div>
  );
};

export default page;
