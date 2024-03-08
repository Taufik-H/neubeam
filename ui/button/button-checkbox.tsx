import React from "react";

function Checkbox() {
  return (
    <div className="mt-52">
      <label className="relative border-2">
        <input
          type="checkbox"
          className=" forced-colors:appearance-auto h-10 w-10 appearance-none border-none accent-pink-500 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
        />
      </label>
    </div>
  );
}

export default Checkbox;
