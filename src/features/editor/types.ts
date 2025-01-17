export type SelectedTool =
  | "select"
  | "templates"
  | "shape"
  | "text"
  | "settings"
  | "projects"
  | "ai"
  | "remove-bg"
  | "image"
  | "draw"
  | "fill"
  | "stroke-width"
  | "stroke-color"
  | "font"
  | "optacity"
  | "filter";

export type Editor = {
  addRectangle: () => void;
  addCircle: () => void;
  addTriangle: () => void;
  addInverseTriangle: () => void;
  addDiamond: () => void;
};
