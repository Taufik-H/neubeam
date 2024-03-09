import React from "react";

function FormIcon() {
  return (
    <div className="mt-14 flex w-full justify-center">
      <div className="w-72 rounded-lg border-2 border-slate-900 bg-white shadow-[5px_5px_0_rgb(15,23,42,1)]">
        <div>
          <div className="w-full p-5">
            <h1 className="text-center text-2xl font-bold">Form Icon </h1>

            <div className="my-5">
              <label htmlFor="email" className="block font-bold">
                Email
              </label>
              <div className="relative mt-2 h-10 w-full rounded-lg bg-slate-800">
                <div className="absolute -left-[3px] -top-[3px] flex h-10 w-full items-center overflow-hidden rounded-lg border-2 border-slate-900 bg-white   transition-all duration-200 focus-within:left-0 focus-within:top-0">
                  <label
                    htmlFor="email"
                    className="border-r-2 border-slate-900 px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 100 100"
                    >
                      <path
                        fill="#D35400"
                        fillRule="evenodd"
                        d="M96.015 38.988H4.006c-1.104 0-2 .897-2 2.005v57.001c0 1.108.896 2.006 2 2.006h92.009a2.003 2.003 0 0 0 2.001-2.006V40.993a2.003 2.003 0 0 0-2.001-2.005z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        fill="#ECF0F1"
                        fillRule="evenodd"
                        d="M5 15.974v82.004C5 99.095 5.896 100 7 100h86.001A2.01 2.01 0 0 0 95 97.979V1.99a2.01 2.01 0 0 0-1.999-2.021l-71.997.008L5 15.974z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        d="m40 72l54.997-33L95 45.98L51.028 72H40z"
                        opacity=".1"
                      ></path>
                      <path
                        fill="#F39C12"
                        fillRule="evenodd"
                        d="M2 97.991c0 1.11.895 2.009 2 2.009h92c1.104 0 2-.899 2-2.009V42L50 71L2 42v55.991z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        fill="#F1C40F"
                        fillRule="evenodd"
                        d="m5 15.974l16.001.01V0L5 15.974z"
                        clipRule="evenodd"
                      ></path>
                      <path fill="#F1C40F" d="m2 42l.052 54L50 71L2 42z"></path>
                      <path fill="#E57E22" d="M98 42L50 71l48 25z"></path>
                      <path
                        fillRule="evenodd"
                        d="M98 97.991V96L50 71l47.328 28.482c.409-.367.672-.896.672-1.491zm-96 0V96l48-25L2.672 99.482A1.998 1.998 0 0 1 2 97.991z"
                        clipRule="evenodd"
                        opacity=".3"
                      ></path>
                    </svg>
                  </label>

                  <input
                    autoComplete="off"
                    type="email"
                    id="email"
                    className=" h-full max-w-[200px] overflow-hidden bg-transparent px-3 font-semibold outline outline-0  placeholder:font-medium focus:outline-0"
                  />
                </div>
              </div>
            </div>
            <div className="my-5">
              <label htmlFor="phone" className="block font-bold">
                Phone number
              </label>
              <div className="relative mt-2 h-10 w-full rounded-lg bg-slate-800">
                <div className="absolute -left-[3px] -top-[3px] flex h-10 w-full items-center overflow-hidden rounded-lg border-2 border-slate-900 bg-white   transition-all duration-200 focus-within:left-0 focus-within:top-0">
                  <label
                    htmlFor="phone"
                    className="border-r-2 border-slate-900 px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="#DC1F26"
                        d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z"
                      ></path>
                      <path
                        fill="#EEE"
                        d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-9h36v9z"
                      ></path>
                    </svg>
                  </label>

                  <input
                    autoComplete="off"
                    type="text"
                    id="phone"
                    className=" h-full max-w-[200px] appearance-none overflow-hidden bg-transparent px-3 font-semibold outline outline-0  placeholder:font-medium focus:outline-0"
                  />
                </div>
              </div>
            </div>
            <div className="my-5">
              <label htmlFor="checkbox" className="relative flex items-center">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="peer sr-only"
                  />
                  <div className="h-5 w-10 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-in-out peer-checked:bg-green-500 "></div>
                  <div className=" absolute left-[4px] top-[3px] h-3.5 w-3.5 rounded-full border border-black bg-slate-400 transition-all duration-300 ease-in-out peer-checked:left-[1.4rem] peer-checked:bg-yellow-400"></div>
                </div>
                <span className="ml-2 h-full text-xs">
                  send me notification
                </span>
              </label>
            </div>
            <div className="my-5">
              <button className="w-full rounded-lg border-2 border-slate-800 bg-slate-800 p-2 font-semibold text-white hover:bg-slate-900">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormIcon;
