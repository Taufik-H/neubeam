"use client";
import React, { useState } from "react";

interface ButtonHighliterProps {
  /**
   * set the mode to @argument "copy" or "preview" or "responsiveness"
   */
  mode?: "copy" | "preview" | "responsiveness";
  /**
   *
   * @returns void @argument onToggle is only for preview mode
   */
  onToggle?: () => void;
  /**
   *
   * @returns boolean with true as default @argument isPreviewing is only for preview mode
   */
  isPreviewing?: boolean | true;
  /**
   *
   * @returns void @argument onSizeChange is only for responsiveness mode
   * @argument size is one of "mobile" | "sm" | "md" | "lg" | "full"
   */
  onSizeChange?: (size: string) => void;
}

const ButtonHighliter = ({ ...ButtonHighliter }: ButtonHighliterProps) => {
  const [isCopy, setIsCopy] = useState(false);
  const [activeSize, setActiveSize] = useState("full");
  /**
   * @description handleCopy
   * copy code to clipboard
   */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("ayay");
      setIsCopy(true);
      setTimeout(() => setIsCopy(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  /**
   * @description handleSizeChange
   * change size of preview
   */
  const handleSizeChange = (size: string) => {
    setActiveSize(size);
    ButtonHighliter.onSizeChange && ButtonHighliter.onSizeChange(size);
  };
  if (ButtonHighliter.mode === "preview") {
    return (
      <>
        <button
          onClick={ButtonHighliter.onToggle}
          className="relative h-10 w-32 rounded-lg  bg-slate-800"
        >
          <span className="w-53 absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-lg border border-slate-800 bg-white p-2 text-lg font-bold transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-slate-900  hover:text-white">
            {ButtonHighliter.isPreviewing ? "Code" : "View"}
          </span>
        </button>
      </>
    );
  } else if (ButtonHighliter.mode === "copy") {
    return (
      <>
        <div className="relative h-10 w-32 rounded-lg bg-slate-800 ">
          <button
            onClick={handleCopy}
            className="w-53 absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-lg border border-slate-800 bg-white p-2 text-lg font-bold transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-slate-900 hover:text-white"
          >
            {isCopy ? "Copied!" : "Copy"}
          </button>
        </div>
      </>
    );
  } else if (ButtonHighliter.mode === "responsiveness") {
    return (
      <>
        <div className="hidden gap-2 md:flex">
          {["mobile", "sm", "md", "lg", "full"].map((size) => (
            <div
              key={size}
              className="relative h-10 w-32 rounded-lg bg-slate-800 "
            >
              <button
                onClick={() => handleSizeChange(size)}
                className={`absolute justify-center gap-3 rounded-lg text-lg font-bold transition-all duration-200 hover:-top-0 ${
                  activeSize === size
                    ? "flex h-full w-full items-center justify-center bg-slate-900 text-white"
                    : " w-53 -left-1 -top-1 flex h-full w-full items-center border border-slate-800 bg-white p-2  hover:-left-0"
                } `}
              >
                {size}
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="w-fit rounded-lg border border-orange-400 bg-orange-50 p-3">
      <p>
        set the button <span className="font-bold">mode</span> first!
      </p>
      <p>
        <span className="font-bold">mode :</span> "copy", "preview",
        "responsiveness" first!
      </p>
    </div>
  );
};

export default ButtonHighliter;
