"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useEditor } from "@/features/editor/hooks/useEditor";
import { fabric } from "fabric";
import Navbar from "@/features/editor/components/navbar";
import Sidebar from "@/features/editor/components/sidebar";
import Toolbar from "@/features/editor/components/toolbar";
import Footer from "@/features/editor/components/footer";
import { SelectedTool } from "@/features/editor/types";
import ElementSidebar from "@/features/editor/components/elementSidebar";

const Editor = () => {
  const { init, editor } = useEditor();

  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);

  const [selectedTool, setSelectedTool] = useState<SelectedTool>("select");

  const onChangeSelectedTool = useCallback(
    (tool: SelectedTool) => {
      if (tool === selectedTool) return setSelectedTool("select");
      if (tool === "draw") {
        //draw
      }
      if (selectedTool === "draw") {
        // exit draw
      }
      setSelectedTool(tool);
    },
    [selectedTool]
  );

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      // This will make sure that the controls of the objects are above the overlay
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    init({
      initialCanvasWrapper: canvasWrapperRef.current!,
      initialCanvas: canvas,
    });

    return () => {
      canvas.dispose();
    };
  }, [init]);

  return (
    <div className="h-full flex flex-col">
      <Navbar
        selectedTool={selectedTool}
        onChangeSelectedTool={onChangeSelectedTool}
      />
      <div className="flex absolute h-[calc(100%-56px)] w-full top-14">
        <Sidebar
          selectedTool={selectedTool}
          onChangeSelectedTool={onChangeSelectedTool}
        />
        <ElementSidebar
          selectedTool={selectedTool}
          onChangeSelectedTool={onChangeSelectedTool}
          editor={editor}
        />
        <main className="flex relative overflow-auto bg-zinc-900 flex-1 flex-col">
          <Toolbar />
          <div
            className="h-[calc(100%-96px)] flex-1 bg-zinc-900"
            ref={canvasWrapperRef}
          >
            <canvas ref={canvasRef} />
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Editor;
