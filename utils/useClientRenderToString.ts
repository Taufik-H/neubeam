import { useEffect, useState } from "react";
import { clientRenderToString } from "./clientRenderToString";

type UseClientRenderToString = (
  input: React.JSX.Element | React.JSX.Element[],
  deps?: any[],
) => string[];

export const useClientRenderToString: UseClientRenderToString = (
  input,
  deps = [],
) => {
  const [htmlStringList, setHtmlStringList] = useState<string[]>([]);
  const elementList = Array.isArray(input) ? input : [input];

  useEffect(() => {
    (async () => {
      const markupPromises = elementList.map(clientRenderToString);

      const markup: string[] = await Promise.all(markupPromises);

      if (!setHtmlStringList) {
        return;
      }

      setHtmlStringList(markup);
    })();
  }, deps);

  return htmlStringList;
};
