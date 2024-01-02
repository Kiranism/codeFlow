import React from "react";
import { Input } from "../ui/input";
import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";

export default function CodeCanvasFontSizeTool() {
  const { setFontSize, fontSize } = useCodeCanvasStore();
  return (
    <div>
      <Input
        icon="fontIcon"
        type="number"
        value={fontSize}
        className="w-20"
        onChange={(e) => setFontSize(Number(e.target.value))}
      />
    </div>
  );
}
