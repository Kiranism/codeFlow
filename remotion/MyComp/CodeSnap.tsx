"use client";
import { Button } from "@/components/ui/button";
import { themeOptions } from "@/constants/themes";
import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import React, { useEffect, useMemo } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

export const CodeSnap: React.FC<{ title: string }> = ({ title }) => {
  const { fontSize, fontFamily, codeTheme, innerPadding, outerPadding } =
    useCodeCanvasStore();
  useEffect(() => {
    useCodeCanvasStore.persist.rehydrate();
  }, []);

  const titleStyle: React.CSSProperties = useMemo(() => {
    return { fontFamily, fontSize, padding: innerPadding[0] * 2 };
  }, [fontSize, fontFamily, innerPadding]);

  const activeThemeFind =
    themeOptions?.find(
      (val) => val.value.toUpperCase() === codeTheme.toUpperCase()
    ) || themeOptions[0];
  const activeTheme = activeThemeFind.theme;

  const themeBackgroundColor = activeTheme.hljs.background;
  // theme={tokyoNightInit({ settings: { fontFamily } })}
  return (
    <div
      style={{ margin: outerPadding[0] * 2 }}
      className="w-full flex flex-col rounded-xl  text-white overflow-hidden shadow-xl"
    >
      <header
        style={{
          backgroundColor: String(themeBackgroundColor),
          filter: "brightness(1.2)",
        }}
        className="flex items-center justify-between  px-2 py-2 -mb-1 text-white text-sm select-none"
      >
        {/* <span className="font-bold">CodeNation</span>   */}
        <div className="flex w-full m-1 justify-end  gap-1">
          <Button className="bg-[#FF5F56] w-[12px] h-[12px] rounded-full p-0 hover:bg-[#FF3B30]" />
          <Button className="bg-[#FFBD2E] w-[12px] h-[12px] rounded-full p-0 hover:bg-[#FFA500]" />
          <Button className="bg-[#27C93F] w-[12px] h-[12px] rounded-full p-0 hover:bg-[#11AD34]" />
        </div>
      </header>

      <SyntaxHighlighter
        language="javascript"
        style={activeTheme}
        codeTagProps={{ style: { fontFamily: titleStyle.fontFamily } }}
        customStyle={{ height: "100%", ...titleStyle }}
      >
        {title}
      </SyntaxHighlighter>
    </div>
  );
};
