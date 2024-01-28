// clientRenderToString.tsx
import { createRoot } from "react-dom/client";
export const clientRenderToString = (
  element: React.JSX.Element,
): Promise<string> =>
  new Promise((resolve) => {
    const container = document.createElement("p");
    const renderCallback = () => {
      resolve(
        container.firstElementChild
          ? container.firstElementChild.innerHTML
          : "",
      );
    };

    createRoot(container).render(<div ref={renderCallback}>{element}</div>);
  });
