import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
const PrismLoader = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <div className="hidden">PrismLoader</div>;
};

export default PrismLoader;
