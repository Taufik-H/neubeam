"use client";
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "@/app/customprism.css";
import CopyButton from "./CopyButton";
import ResponsiveButton from "./ResponsiveButton";
import PreviewCodeButton from "./PreviewCodeButton";
import { Suspense } from "react";

const CodeBlock = ({ code, language, componentName }) => {
  const [showPreview, setShowPreview] = useState(true);
  const [iframeWidth, setIframeWidth] = useState("100%");

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language, showPreview]);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleIframeWidthChange = (size) => {
    const sizes = {
      mobile: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      full: "100%",
    };
    setIframeWidth(sizes[size] || "100%");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {componentName ? componentName : "Component Name"}
      </h1>
      <div className="flex justify-between ">
        <div className="flex gap-2 ">
          <PreviewCodeButton
            onToggle={togglePreview}
            isPreviewing={showPreview}
          />
          <CopyButton code={code} />
        </div>
        <ResponsiveButton onSizeChange={handleIframeWidthChange} />
      </div>
      <div style={{ transition: "width 0.5s ease-in-out", width: iframeWidth }}>
        {showPreview ? (
          <div className="h-[70vh] mt-10 border-2 border-b-4 border-r-4 border-slate-800 rounded-xl overflow-hidden ">
            <Suspense fallback={<div>Loading Component...</div>}>
              <iframe
                srcDoc={`
                  <!doctype html>
                  <html>
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://cdn.tailwindcss.com"></script>
                  </head>
                  <body>
                  <div class="flex justify-center w-full ">
                  ${code}
                  </div>
                  <script>
                  document.body.addEventListener('click', function(e) {
                    if(e.target.tagName === 'A') {
                      e.preventDefault();
                    }
                  });
                </script>
                  </body>
                  </html>
                `}
                title="Component Preview"
                width="100%"
                height="100%"
                className="border-none w-full "
              />
            </Suspense>
          </div>
        ) : (
          <div className="mt-10">
            <pre
              className={`language-${language} h-[70vh] max-h-[70vh] border-2 border-r-4 border-b-4 border-slate-800 rounded-xl overflow-scroll`}
            >
              <code className={`language-${language}`}>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeBlock;
