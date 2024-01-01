import Image from "next/image";
import React from "react";
import Card from "./Card";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-5">
      <div className="relative w-full flex justify-center -z-10">
        <Image
          src={"/pattern-light.svg"}
          width={1440}
          height={500}
          alt="background"
          className="object-cover w-11/12 lg:w-8/12 object-center absolute"
        />
      </div>
      <Card
        hover={true}
        width="w-48"
        height="h-10"
        rounded="rounded-xl"
        className="mt-10 "
      >
        <p className="font-semibold">Simple but impactful</p>
      </Card>

      <h1 className="font-bold text-7xl ">
        Neu{" "}
        <span className=" before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
          <span className="relative text-white">Beam</span>
        </span>
      </h1>
      <p className="text-center w-11/12 text-xs md:text-[16px] lg:w-6/12">
        <span className="underline  font-bold mr-2">
          <Link href="#">NeuBeam</Link>
        </span>
        is a collection of free Tailwind CSS components that can be used in your
        next project. With a range of components, you can build your unique
        style for your website, enjoy your daily code development, chaww
      </p>
    </div>
  );
};

export default Hero;
