import React from "react";
import Highlighter from "../highlighter/highlighter";

const ListComponents = ({ code, name }: { code: string; name: string }) => {
  return (
    <div>
      <Highlighter code={code} language="html" componentName={name} />
    </div>
  );
};

export default ListComponents;
