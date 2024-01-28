import beautify from "js-beautify";

import { useClientRenderToString } from "./useClientRenderToString";

export function getComponentCode(component: React.JSX.Element): string {
  const rawCode = useClientRenderToString(component);
  const codeString = beautify.html_beautify(`${rawCode}`, {
    indent_size: 2,
    end_with_newline: true,
  });
  return codeString;
}
