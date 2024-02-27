const RoundedAlert = () => {
  return (
    <div className="flex w-full justify-center gap-3 px-10">
      <div className="mt-10 w-52">
        <div className=" relative h-12 w-full rounded-lg bg-slate-800   ">
          <div className="absolute  -left-1 -top-1 flex  h-full  w-full items-start justify-start gap-3 rounded-lg border border-slate-800 bg-white p-2   lg:cursor-pointer">
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            Login Success!!!
            <div className="absolute right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
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

export default RoundedAlert;
