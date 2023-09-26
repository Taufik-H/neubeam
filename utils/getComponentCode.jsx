import ReactDOMServer from "react-dom/server";
import beautify from "html";

export function getComponentCode(component) {
  const rawCode = ReactDOMServer.renderToString(component);
  const codeString = beautify.prettyPrint(rawCode, { indent_size: 2 });
  return codeString;
}
