import React from "react";

function SimpleForm() {
  return (
    <div className="mt-14 flex w-full justify-center">
      <div className="w-72 rounded-lg border-2 border-slate-900 bg-white shadow-[5px_5px_0_rgb(15,23,42,1)]">
        <div>
          <div className="w-full p-5">
            <h1 className="text-center text-2xl font-bold">Simple Form</h1>

            <div className="my-5">
              <label htmlFor="email" className="block font-bold">
                Email
              </label>
              <div className="relative mt-2 h-10 w-full rounded-lg bg-slate-800">
                <input
                  autoComplete="off"
                  type="email"
                  id="email"
                  className="absolute -left-[3px] -top-[3px] h-10 w-full rounded-lg border-2 border-slate-900 bg-white px-3 font-semibold outline  outline-0 transition-all duration-200 placeholder:font-medium focus:left-0 focus:top-0  focus:outline-0"
                />
              </div>
            </div>
            <div className="my-5">
              <label htmlFor="email" className="block font-bold">
                Password
              </label>
              <div className="relative mt-2 h-10 w-full rounded-lg bg-slate-800">
                <input
                  type="password"
                  id="password"
                  className="absolute -left-[3px] -top-[3px] h-10 w-full rounded-lg border-2 border-slate-900 bg-white px-3 font-semibold outline  outline-0 transition-all duration-200 placeholder:font-medium focus:left-0 focus:top-0  focus:outline-0"
                />
              </div>
            </div>

            <div className="my-5">
              <button className="w-full rounded-lg border-2 border-slate-800 bg-slate-800 p-2 text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleForm;
