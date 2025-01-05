import SidebarItem from "@/features/editor/components/sidebarItem";
import {
  CloudUpload,
  Folder,
  PanelsLeftBottom,
  Settings,
  Shapes,
  Type,
  Wand,
} from "lucide-react";
import React from "react";
import { SelectedTool } from "@/features/editor/types";

type props = {
  selectedTool: SelectedTool;
  onChangeSelectedTool: (tool: SelectedTool) => void;
};

const Sidebar = ({ selectedTool, onChangeSelectedTool }: props) => {
  return (
    <aside className="flex flex-col bg-zinc-900 w-18 h-full overflow-y-auto">
      <div className="flex flex-col gap-2">
        <SidebarItem
          icon={PanelsLeftBottom}
          label="Design"
          isActive={selectedTool === "templates"}
          onClick={() => {
            onChangeSelectedTool("templates");
          }}
        />
        <SidebarItem
          icon={Shapes}
          label="Elements"
          isActive={selectedTool === "shape"}
          onClick={() => {
            onChangeSelectedTool("shape");
          }}
        />
        <SidebarItem
          icon={Type}
          label="Text"
          isActive={selectedTool === "text"}
          onClick={() => {
            onChangeSelectedTool("text");
          }}
        />
        <SidebarItem
          icon={CloudUpload}
          label="Uploads"
          isActive={selectedTool === "image"}
          onClick={() => {
            onChangeSelectedTool("image");
          }}
        />
        <SidebarItem
          icon={Folder}
          label="Folders"
          isActive={selectedTool === "projects"}
          onClick={() => {
            onChangeSelectedTool("projects");
          }}
        />
        <SidebarItem
          icon={Wand}
          label="AI"
          isActive={selectedTool === "ai"}
          onClick={() => {
            onChangeSelectedTool("ai");
          }}
        />
        <SidebarItem
          icon={Settings}
          label="Settings"
          isActive={selectedTool === "settings"}
          onClick={() => {
            onChangeSelectedTool("settings");
          }}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
