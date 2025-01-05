import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

const Shape = ({
  icon: Icon,
  onClick,
  className,
}: {
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div className={cn("cursor-pointer", className)} onClick={onClick}>
      <Icon className="size-16 stroke-0 fill-white" />
    </div>
  );
};

export default Shape;
