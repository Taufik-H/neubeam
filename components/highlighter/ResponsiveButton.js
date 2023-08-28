import React, { useState } from "react";

function ResponsiveButton({ onSizeChange }) {
  const [activeSize, setActiveSize] = useState("full");

  const handleSizeChange = (size) => {
    setActiveSize(size);
    onSizeChange(size);
  };

  return (
    <div className="hidden md:flex gap-2">
      {["mobile", "sm", "md", "lg", "full"].map((size) => (
        <div key={size} className="bg-slate-800 w-32 relative h-10 ">
          <button
            onClick={() => handleSizeChange(size)}
            className={`absolute justify-center gap-3 text-lg font-bold hover:-top-0 transition-all duration-200 ${
              activeSize === size
                ? "bg-slate-900 text-white flex items-center justify-center w-full h-full"
                : "bg-white hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-center border w-53  border-slate-800"
            } `}
          >
            {size}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ResponsiveButton;
