"use client";

import { useEffect, useRef } from "react";
import useEditor from "../hooks/useEditor";
import { fabric } from "fabric";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Toolbar from "./toolbar";
import Footer from "./footer";

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

    return () => {
      canva.dispose();
    };
  }, [init]);

  return (
    <div className="h-full flex flex-col w-full ">
      <Navbar />
      <div className="flex absolute h-[calc(100%- 56px)] w-full flex top-14">
        <Sidebar />
        <main className="flex relative overflow-auto bg-zinc-900 flex-1 flex-col">
          <Toolbar />
          <div className="h-[calc(100%-160px)] bg-zinc-900" ref={workspaceRef}>
            <canvas ref={canvasRef} />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Editor;
