import React from "react";
import CodeBlock from "@/components/highlighter/CodeBlock";
import UiSimpleAlert from "@/ui/alert/UiSimpleAlert";
import ReactDOMServer from "react-dom/server";
import beautify from "html";
const SimpleAlert = () => {
  const rawCode = ReactDOMServer.renderToString(<UiSimpleAlert />);
  const myCodeString = beautify.prettyPrint(rawCode, { indent_size: 2 });
  return (
    <div>
      <CodeBlock code={myCodeString} language="html" />
    </div>
  );
};

export default SimpleAlert;
