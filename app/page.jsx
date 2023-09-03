"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";

export default function Home() {
  const componentsData = [
    { label: "Alert", count: 4 },
    { label: "Buttons", count: 4 },
    { label: "Cards", count: 7 },
    { label: "Badges", count: 3 },
    { label: "Footers", count: 6 },
    { label: "Forms", count: 8 },
    { label: "Breadcrumbs", count: 2 },
  ];
  return (
    <main className="w-full ">
      <div className="absolute h-screen w-screen -z-10 overflow-hidden">
        <Image
          height={564}
          width={1500}
          alt="tailwindbg"
          src={"/assets/bg.svg"}
          className="object-cover h-full w-full absolute"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      <Navbar />

      <HeroSection id="hero" bgColor="" />

      <div className="px-5 mt-10 font-bold text-xs text-center uppercase">
        Components
      </div>

      <section className="my-10 px-5 ">
        <div className="flex flex-wrap gap-3 justify-center">
          {componentsData.map(({ label, count }) => (
            <a
              href={`/components/${label.toLocaleLowerCase()}`}
              key={label}
              className="bg-slate-500 w-full md:w-32 lg:w-72 relative h-32 rounded-lg"
            >
              <div className="absolute text-slate-900 font-thin justify-start gap-3 hover:-top-0 transition-all duration-200 hover:bg-slate-100 lg:cursor-pointer hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-start bg-slate-50 border rounded-lg border-slate-500">
                <div className="w-10 h-10 bg-slate-400 rounded-lg"></div>
                <div className="">
                  <p className="font-bold">{label}</p>
                  <p className="text-xs text-blue-500">{count} components</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
