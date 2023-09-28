import React from "react";
import withContainer from "../wrapper/Container";

function HeroSection(props) {
  return (
    <section className="flex flex-col justify-center items-center w-full ">
      <div className="my-5">
        <div className="bg-slate-700 w-44 h-10  relative border rounded-md border-slate-900 ">
          <p className="flex text-xs justify-center items-center rounded-md bg-white absolute h-10 w-44 px-2 -top-2 right-1 border-2 border-slate-900">
            simple but impactful
          </p>
        </div>
      </div>
      <h1 className="text-5xl font-black ">
        Neu
        <span class="ml-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
          <span class="relative text-white">Beam</span>
        </span>
      </h1>
      <p className="text-center  md:w-9/12 mt-5 text-slate-600  leading-tight">
        <span className="font-bold underline">NeuBeam</span>{" "}
        <span className="font-sans">
          is a collection of free Tailwind CSS components that can be used in
          your next project. With a range of components, you can build your
          unique style for your website, enjoy your daily code development,
          chaww
        </span>
      </p>
    </section>
  );
}

export default withContainer(HeroSection, "", "hero");
