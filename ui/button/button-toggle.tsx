import React from "react";

function ButtonToggle() {
  return (
    <div className="mt-20 flex w-full items-center justify-center justify-items-center font-bold text-white ">
      <label htmlFor="checkbox" className="relative flex items-center">
        <input type="checkbox" id="checkbox" className="peer sr-only" />
        <div className=" absolute left-[4px] top-[5px] h-3.5 w-3.5 rounded-full border border-black bg-slate-400 transition-all duration-300 ease-in-out peer-checked:left-[1.4rem] peer-checked:bg-yellow-400"></div>
        <div className="h-5 w-10 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-in-out peer-checked:bg-green-500 "></div>
        <span className="ml-2">Click me</span>
      </label>
    </div>
  );
}

export default ButtonToggle;
