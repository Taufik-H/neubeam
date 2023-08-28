import React, { useState } from "react";

function CopyButton({ code }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <div className="bg-slate-800 w-32 relative h-10 ">
        <button
          onClick={handleCopy}
          className="absolute justify-center gap-3 text-lg font-bold hover:-top-0 transition-all duration-200 hover:bg-slate-900 hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-center bg-white border w-53 hover:text-white border-slate-800"
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default CopyButton;
