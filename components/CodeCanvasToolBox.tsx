import React from "react";
import CodeCanvasFontTool from "./CodeCanvasTools/CodeCanvasFontTool";
import CodeCanvasFontSizeTool from "./CodeCanvasTools/CodeCanvasFontSizeTool";
import CodeCanvasThemeTool from "./CodeCanvasTools/CodeCanvasThemeTool";
import CodeCanvasWallpaperTool from "./CodeCanvasTools/CodeCanvasWallpaperTool";

export default function CodeCanvasToolBox() {
  return (
    <div className="p-2 flex gap-1">
      <CodeCanvasFontTool />
      <CodeCanvasFontSizeTool />
      <CodeCanvasThemeTool />
      <CodeCanvasWallpaperTool />
    </div>
  );
}
