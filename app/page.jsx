"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="w-full">
      <div className="">
        <Navbar />
      </div>
      <HeroSection id="hero" bgColor="bg-slate-400" />
    </main>
  );
}
