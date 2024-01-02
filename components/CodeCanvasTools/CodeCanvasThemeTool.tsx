import React from "react";
import { ComboBox } from "../ComboBox";
import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { themeOptions } from "@/constants/themes";

export default function CodeCanvasThemeTool() {
  const { codeTheme, setCodeTheme } = useCodeCanvasStore();
  return (
    <div>
      <ComboBox
        options={themeOptions}
        value={codeTheme}
        setValue={setCodeTheme}
        placeholder="Select a theme"
        icon="fontIcon"
        id={"canvas"}
      />
    </div>
  );
}
