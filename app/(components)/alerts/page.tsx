import ButtonHighliter from "@/components/highlighter/button-highlighter";
import React from "react";

const Alert = () => {
  return (
    <div>
      <ButtonHighliter mode="preview" isPreviewing />
      <ButtonHighliter mode="copy" />
      <ButtonHighliter mode="responsiveness" />
      <ButtonHighliter />
    </div>
  );
};

export default Alert;
