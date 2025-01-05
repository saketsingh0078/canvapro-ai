import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";
type Props = {
  onClick: () => void;
};
const ToolSidebarClose = ({ onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-[21.5%] rounded-full top-1 w-fit h-fit bg-zinc-700 cursor-pointer p-1"
    >
      <X className="size-4" />
    </div>
  );
};
export default ToolSidebarClose;
