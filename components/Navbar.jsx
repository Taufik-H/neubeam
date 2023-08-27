import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";
function Navbar() {
  return (
    <nav className="  px-10 py-3  w-full flex justify-between items-center">
      <h1 className="font-semibold">Tailwindbrutalism</h1>
      <div className="flex gap-3">
        <div className=" bg-orange-500 w-32 relative h-8 rounded-full  ">
          <p className="absolute text-orange-500 font-thin justify-center gap-3 text-xs hover:-top-0 transition-all duration-200 hover:bg-slate-100 lg:cursor-pointer hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-center bg-slate-50 border w-53 rounded-full border-orange-500">
            <BiCoffeeTogo size={15} />
            Support
          </p>
        </div>
        <div className=" bg-slate-800 w-24 relative h-8 rounded-full  ">
          <p className="absolute font-thin justify-center gap-3 text-xs hover:-top-0 transition-all duration-200 hover:bg-slate-100 lg:cursor-pointer hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-center bg-slate-50 border w-53 rounded-full border-slate-800">
            <AiFillGithub size={15} />
            Star
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
