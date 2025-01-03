"use client";

import { useEffect, useRef } from "react";
import useEditor from "../hooks/useEditor";
import { fabric } from "fabric";

const Editor = () => {
  const { init } = useEditor();
  const workspaceRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canva = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    init({
      initialWorkspace: workspaceRef.current!,
      initialCanvas: canva,
    });
  }, []);

  return (
    <div className="h-full flex flex-col w-full ">
      <div className="h-full flex-1 bg-neutral-800" ref={workspaceRef}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Editor;
