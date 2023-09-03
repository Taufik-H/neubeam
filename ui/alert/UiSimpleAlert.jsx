"use client";

const UiSimpleAlert = () => {
  return (
    <div className="flex gap-3 justify-center w-full px-10">
      <div className="mt-10 w-52">
        <div className=" bg-slate-800 w-full relative h-12   ">
          <div className="absolute  justify-start gap-3  lg:cursor-pointer  -top-1 -left-1 w-full h-full p-2 flex items-start bg-slate-50 border   border-slate-800">
            <span class="text-green-600">
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
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            Login Success!
            <div className="absolute right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
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

export default UiSimpleAlert;
