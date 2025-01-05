import ElementsSidebarHeader from "@/features/editor/components/elementsSidebarHeader";
import Shape from "@/features/editor/components/shape";
import ToolSidebarClose from "@/features/editor/components/toolSidebarClose";
import { Editor, SelectedTool } from "@/features/editor/types";
import { cn } from "@/lib/utils";
import {
  Circle,
  Diamond,
  Hexagon,
  Pentagon,
  Square,
  Triangle,
} from "lucide-react";
import React from "react";

const ElementSidebar = ({
  selectedTool,
  onChangeSelectedTool,
  editor,
}: {
  selectedTool: SelectedTool;
  onChangeSelectedTool: (tool: SelectedTool) => void;
  editor: Editor | null;
}) => {
  return (
    <aside
      className={cn(
        "w-72 h-full px-2 z-55 transition-ease duration-300 bg-zinc-800",
        selectedTool === "shape" ? " visible" : "hidden "
      )}
    >
      <ElementsSidebarHeader label="Shape" />
      <div className="flex gap-1 overflow-x-auto shape py-2">
        <Shape
          onClick={() => {
            editor?.addRectangle();
          }}
          icon={Square}
        />
        <Shape
          onClick={() => {
            editor?.addCircle();
          }}
          icon={Circle}
        />
        <Shape
          onClick={() => {
            editor?.addTriangle();
          }}
          icon={Triangle}
        />
        <Shape
          onClick={() => {
            editor?.addInverseTriangle();
          }}
          icon={Triangle}
          className="rotate-180"
        />
        <Shape
          onClick={() => {
            editor?.addDiamond();
          }}
          icon={Diamond}
        />
        <Shape onClick={() => {}} icon={Hexagon} />
        <Shape onClick={() => {}} icon={Pentagon} />
      </div>

      <ToolSidebarClose onClick={() => onChangeSelectedTool("select")} />
    </aside>
  );
};

export default ElementSidebar;
