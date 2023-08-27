"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Image
        height={564}
        width={1500}
        alt="tailwindbg"
        src={"/assets/bg.svg"}
        className="object-contain w-screen absolute -z-10 opacity-50"
      />
      <div className="">
        <Navbar />
      </div>
      <HeroSection id="hero" bgColor="" />
      <div className="px-10 mt-10 font-bold uppercase">Components</div>
      <section>
        <div className="flex flex-col px-10 my-10  gap-5 justify-center">
          <div className="flex gap-5">
            <div className="bg-white h-32 flex items-start gap-5 p-5 rounded-lg border w-4/12 border-slate-800 border-r-2 border-b-4 ">
              <div className="w-10 h-10 bg-slate-400 rounded-lg"></div>
              <div className="">
                <p className="font-bold">Buttons</p>
                <p className="text-xs text-blue-500">4 components</p>
              </div>
            </div>
            <div className="bg-white h-32 flex items-start gap-5 p-5 rounded-lg border w-4/12 border-slate-800 border-r-2 border-b-4 ">
              <div className="w-10 h-10 bg-slate-400 rounded-lg"></div>
              <div className="">
                <p className="font-bold">Cards</p>
                <p className="text-xs text-blue-500">4 components</p>
              </div>
            </div>
            <div className="bg-white h-32 flex items-start gap-5 p-5 rounded-lg border w-4/12 border-slate-800 border-r-2 border-b-4 ">
              <div className="w-10 h-10 bg-slate-400 rounded-lg"></div>
              <div className="">
                <p className="font-bold">Badges</p>
                <p className="text-xs text-blue-500">4 components</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-white h-32 flex items-start gap-5 p-5 rounded-lg border w-4/12 border-slate-800 border-r-2 border-b-4 ">
              <div className="w-10 h-10 bg-slate-400 rounded-lg"></div>
              <div className="">
                <p className="font-bold">Footers</p>
                <p className="text-xs text-blue-500">4 components</p>
              </div>
            </div>
            <div className="bg-white h-32 flex items-start gap-5 p-5 rounded-lg border w-4/12 border-slate-800 border-r-2 border-b-4 ">
              <div className="w-10 h-10 bg-slate-400 rounded-lg"></div>
              <div className="">
                <p className="font-bold">Forms</p>
                <p className="text-xs text-blue-500">4 components</p>
              </div>
            </div>
            <div className="bg-white h-32 flex items-start gap-5 p-5 rounded-lg border w-4/12 border-slate-800 border-r-2 border-b-4 ">
              <div className="w-10 h-10 bg-slate-400 rounded-lg"></div>
              <div className="">
                <p className="font-bold">Breadcrumbs</p>
                <p className="text-xs text-blue-500">4 components</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
