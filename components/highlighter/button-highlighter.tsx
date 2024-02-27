import React, { useState } from "react";

type SizeKey = "mobile" | "sm" | "md" | "lg" | "full";

interface ButtonHighliterProps {
  mode?: "copy" | "preview" | "responsiveness" | "convert";
  onToggle?: () => void;
  isPreviewing?: boolean;
  onSizeChange?: (size: SizeKey) => void;
  code?: string;
  onConvert?: () => void;
}

const ButtonHighliter = (props: ButtonHighliterProps) => {
  const {
    mode,
    onToggle,
    isPreviewing = true,
    onSizeChange,
    code,
    onConvert,
  } = props;
  const [isCopy, setIsCopy] = useState(false);
  const [isConvert, setConvert] = useState(false);
  const [activeSize, setActiveSize] = useState<SizeKey>("full");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.code?.toString() || "");
      setIsCopy(true);
      setTimeout(() => setIsCopy(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleSizeChange = (size: SizeKey) => {
    setActiveSize(size);
    onSizeChange && onSizeChange(size);
  };

  const handleConvert = () => {
    setConvert(!isConvert);

    onConvert && onConvert();
  };

  const buttonStyle = (active: boolean) =>
    `absolute justify-center gap-3 rounded-lg text-lg font-bold transition-all duration-200 hover:-top-0 ${
      active
        ? "flex h-full w-full items-center justify-center bg-slate-900 text-white"
        : " w-53 -left-1 -top-1 flex h-full w-full items-center border border-slate-800 bg-white p-2  hover:-left-0"
    }`;

  if (mode === "preview") {
    return (
      <button
        onClick={onToggle}
        className="relative h-10 w-32 rounded-lg  bg-slate-800"
      >
        <span className="w-53 absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-lg border border-slate-800 bg-white p-2 text-lg font-bold transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-slate-900  hover:text-white">
          {isPreviewing ? "Code" : "View"}
        </span>
      </button>
    );
  } else if (mode === "copy") {
    return (
      <div className="relative h-10 w-32 rounded-lg bg-slate-800 ">
        <button
          onClick={handleCopy}
          className="w-53 absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-lg border border-slate-800 bg-white p-2 text-lg font-bold transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-slate-900 hover:text-white"
        >
          {isCopy ? "Copied!" : "Copy"}
        </button>
      </div>
    );
  } else if (mode === "responsiveness") {
    return (
      <div className="hidden gap-2 md:flex">
        {(["mobile", "sm", "md", "lg", "full"] as SizeKey[]).map((size) => (
          <div
            key={size}
            className="relative h-10 w-32 rounded-lg bg-slate-800 "
          >
            <button
              onClick={() => handleSizeChange(size)}
              className={buttonStyle(activeSize === size)}
            >
              {size}
            </button>
          </div>
        ))}
      </div>
    );
  } else if (mode === "convert") {
    return (
      <div className="relative h-10 w-32 rounded-lg bg-slate-800 ">
        <button
          onClick={handleConvert}
          className="w-53 absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-lg border border-slate-800 bg-white p-2 text-lg font-bold transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-slate-900 hover:text-white"
        >
          {isConvert ? "html" : "JSX"}
        </button>
      </div>
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
