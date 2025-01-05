import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

const SidebarItem = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className="flex items-center px-2 py-3 text-stone-300 flex-col gap-1 w-full h-full aspect-video"
    >
      <Icon
        className={cn("shrink-0", isActive ? "stroke-cyan-600  rounded" : "")}
      />
      <span className="text-sm font-medium">{label}</span>
    </Button>
  );
};

export default SidebarItem;
