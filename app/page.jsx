"use client";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { getComponentsData } from "@/utils/getComponentsData";
export default function Home() {
  const [componentsData, setComponentsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getComponentsData();
      setComponentsData(data);
    }

    fetchData();
  }, []);

  return (
    <main className="">
      <div className="absolute h-screen w-full -z-10 overflow-hidden">
        <Image
          height={564}
          width={1500}
          alt="tailwindbg"
          src="/assets/bg.svg"
          className="object-cover h-full w-full absolute"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      <Navbar />
      <HeroSection id="hero" />

      <div className="px-5 mt-10 font-bold text-xs text-center uppercase">
        Components
      </div>

      <Suspense fallback={<p>Loading feed...</p>}>
        <section className="my-10 px-5">
          <div className="flex flex-wrap gap-3 justify-center">
            {componentsData.map(({ label, count }) => (
              <Link
                key={label}
                href={`/components/${label.toLowerCase()}`}
                className="bg-slate-500 w-full md:w-32 lg:w-72 relative h-32 rounded-lg"
              >
                <div className="absolute text-slate-900 font-thin justify-start gap-3 hover:-top-0 transition-all duration-200 hover:bg-slate-100 lg:cursor-pointer hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-start bg-slate-50 border rounded-lg border-slate-500">
                  <div className="pl-2">
                    <p className="font-bold capitalize">{label}</p>
                    <p className="text-xs text-blue-500">
                      {count} {count === 1 ? "component" : "components"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Suspense>
      <div className="">
        <Footer />
      </div>
    </main>
  );
}
