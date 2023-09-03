import UiSimpleButton from "@/ui/button/UiSimpleButton";
import React from "react";
import beautify from "html";
import ReactDOMServer from "react-dom/server";
import CodeBlock from "@/components/highlighter/CodeBlock";
function SimpleButton() {
  const rawCode = ReactDOMServer.renderToString(<UiSimpleButton />);
  const codeString = beautify.prettyPrint(rawCode, { indent_size: 2 });
  return (
    <div>
      <CodeBlock
        code={codeString}
        language="html"
        componentName={"Simple Button"}
      />
    </div>
  );
}

export default SimpleButton;
