import React from "react";

function UiSimpleButton() {
  return (
    <div className="flex gap-3 h-screen justify-center items-center w-full">
      <div className="w-36">
        <div className=" bg-slate-800 w-full relative h-8   ">
          <p className="absolute  justify-center gap-3  text-xs hover:-top-0 transition-all duration-200 hover:bg-slate-100 lg:cursor-pointer hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-center bg-slate-50 border w-53  border-slate-800">
            Button
          </p>
        </div>
      </div>
      <div className="w-36">
        <div className=" bg-slate-800 w-full relative h-8 rounded-md  ">
          <p className="absolute  justify-center gap-3 rounded-md text-xs hover:-top-0 transition-all duration-200 hover:bg-slate-100 lg:cursor-pointer hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-center bg-slate-50 border w-53  border-slate-800">
            Button rounded-md
          </p>
        </div>
      </div>

      <div className="w-36">
        <div className=" bg-slate-800 w-full relative h-8 rounded-lg  ">
          <p className="absolute  justify-center gap-3 rounded-lg text-xs hover:-top-0 transition-all duration-200 hover:bg-slate-100 lg:cursor-pointer hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-center bg-slate-50 border w-53  border-slate-800">
            Button rounded-lg
          </p>
        </div>
      </div>

      <div className="w-36">
        <div className=" bg-slate-800 w-full relative h-8 rounded-full  ">
          <p className="absolute  justify-center gap-3 rounded-full text-xs hover:-top-0 transition-all duration-200 hover:bg-slate-100 lg:cursor-pointer hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-center bg-slate-50 border w-53  border-slate-800">
            Button rounded-full
          </p>
        </div>
      </div>
    </div>
  );
}

export default UiSimpleButton;
