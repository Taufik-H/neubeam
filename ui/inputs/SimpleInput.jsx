import React from "react";

const SimpleInput = () => {
  return (
    <div className="p-4">
      <label for="text" className="text-slate-900">
        Email
      </label>
      <input
        type="text"
        placeholder="Text"
        className="border-2 outline-slate-900 active:outline-slate-900 border-slate-200 w-full p-2"
      />
    </div>
  );
};

export default SimpleInput;
