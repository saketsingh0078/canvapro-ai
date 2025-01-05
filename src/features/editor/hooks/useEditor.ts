import { useCallback, useState } from "react";
import { fabric } from "fabric";
import { useAutoResize } from "./useAutoResize";
import { init } from "next/dist/compiled/webpack/webpack";

const useEditor = () => {
  const [canvasWrapper, setCanvasWrapper] = useState<HTMLDivElement | null>(
    null
  );

  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useAutoResize({ canvasWrapper, canvas });

  const init = useCallback(
    ({
      initialWorkspace,
      initialCanvas,
    }: {
      initialWorkspace: HTMLDivElement;
      initialCanvas: fabric.Canvas;
    }) => {
      fabric.Object.prototype.set({
        borderColor: "#8b3dff",
        cornerColor: "#fff",
        borderScaleFactor: 2.5,
        cornerStyle: "circle",
        transparentCorners: false,
      });

      const defaultCanvasWorkspace = new fabric.Rect({
        width: 1080,
        height: 1920,
        name: "defaultCanvasWorkspace",
        fill: "white",
        selectable: false,
        hasControls: false,
        shadow: new fabric.Shadow({
          color: "rgba(0,0,0,0.3)",
          blur: 10,
        }),
      });

      initialCanvas.setHeight(initialWorkspace.offsetHeight);
      initialCanvas.setWidth(initialWorkspace.offsetWidth);

      initialCanvas.add(defaultCanvasWorkspace);
      initialCanvas.centerObject(defaultCanvasWorkspace);

      initialCanvas.clipPath = defaultCanvasWorkspace;

      setCanvasWrapper(initialWorkspace);
      setCanvas(initialCanvas);

      const rectObject = new fabric.Rect({
        width: 100,
        height: 220,
        fill: "red",
      });

      initialCanvas.add(rectObject);
      initialCanvas.centerObject(rectObject);

      console.log("initialisation init");
    },
    []
  );
  return { init };
};

export default useEditor;
