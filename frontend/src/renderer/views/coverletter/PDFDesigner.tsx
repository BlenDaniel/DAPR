import { useEffect, useState } from "react";

import { Designer } from "@pdfme/ui";
import { useCoverStore } from "../../../State";
import { fontData } from "../../../utils/Utils";
import useRef from "react";

export default function PDFDesigner() {
  const { template, triggerRender, setTriggerRender, setTemplate } =
    useCoverStore();

  useEffect(() => {
    // ComponentDidMount equivalent - Instantiate the Designer once the component is mounted.
    const domContainer = document.getElementById("container");
    // Call the fontData function and pass the result to options.font
    fontData().then((font) => {
      const designer = new Designer({
        domContainer,
        template,
        options: { font },
      });
      setTriggerRender(false);
      designer.onChangeTemplate((template) => {
        setTemplate(template);
      });
      // ComponentWillUnmount equivalent - Cleanup the designer instance when the component is unmounted.
      return () => {
        designer.destroy();
      };
    });
  }, [triggerRender ? template : null]);

  return (
    <div id="container">
      {/* The designer will be rendered inside this container */}
    </div>
  );
}
