// components/utils/formatCode.ts
import { useClientRenderToString } from "./useClientRenderToString";
import * as beautify from "html";

export function getComponentCode(component: React.JSX.Element): string {
  const rawCode = useClientRenderToString(component);
  const codeString = beautify.prettyPrint(`${rawCode}`, { indent_size: 2 });
  return codeString;
}
