import React from "react";

function ButtonGroup() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 md:flex-row">
      <div className="w-36">
        <div className=" relative h-8 w-full bg-slate-800   ">
          <button className="w-53  absolute -left-1  -top-1 flex h-full w-full items-center justify-center gap-3 border border-slate-800 bg-slate-50 p-2 text-xs transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-slate-100  lg:cursor-pointer">
            Button
          </button>
        </div>
      </div>
      <div className="w-36">
        <div className=" relative h-8 w-full rounded-md bg-slate-800  ">
          <button className="w-53  absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-md border border-slate-800 bg-slate-50 p-2 text-xs transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-slate-100  lg:cursor-pointer">
            Button rounded-md
          </button>
        </div>
      </div>

      <div className="w-36">
        <div className=" relative h-8 w-full rounded-lg bg-slate-800  ">
          <button className="w-53  absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-lg border border-slate-800 bg-slate-50 p-2 text-xs transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-slate-100  lg:cursor-pointer">
            Button rounded-lg
          </button>
        </div>
      </div>

      <div className="w-36">
        <div className=" relative h-8 w-full rounded-full bg-slate-800  ">
          <button className="w-53  absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-full border border-slate-800 bg-slate-50 p-2 text-xs transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-slate-100  lg:cursor-pointer">
            Button rounded-full
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
