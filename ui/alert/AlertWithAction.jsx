"use client";
const AlertWithAction = () => {
  return (
    <div className="flex w-full justify-center gap-3 px-10">
      <div className="mt-10 w-4/12">
        <div className=" relative h-28 w-full bg-slate-800   ">
          <div className="absolute  -left-1 -top-1  flex  h-full w-full items-start justify-start gap-3 border border-slate-800 bg-slate-50 p-2   lg:cursor-pointer">
            <div className="w-full">
              <p className="font-semibold">Please allow the permission</p>
              <p className="text-sm text-slate-500 ">
                click the comfirmation button below
              </p>

              <div className="mt-3 flex  justify-end gap-3">
                <button className="  border border-slate-900 bg-yellow-500 px-4 py-1 font-medium text-white transition-all duration-200 hover:bg-yellow-600">
                  Block
                </button>
                <button className="  border border-slate-900 bg-green-500 px-4 py-1 font-medium text-white transition-all duration-200 hover:bg-green-600">
                  Allow
                </button>
              </div>
            </div>
            <div className="absolute right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertWithAction;
