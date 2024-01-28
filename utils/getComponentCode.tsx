import beautify from "js-beautify";

import { useClientRenderToString } from "./useClientRenderToString";

export function getComponentCode(component: React.JSX.Element): string {
  const rawCode = useClientRenderToString(component);
  const codeString = beautify.html_beautify(`${rawCode}`, {
    indent_size: 2,
    indent_char: " ",
    max_preserve_newlines: -1,
    preserve_newlines: false,
    indent_scripts: "separate",
    end_with_newline: true,
    wrap_line_length: 160,
    indent_inner_html: false,
    indent_empty_lines: true,
  });
  return codeString;
}
