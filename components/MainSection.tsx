import React from "react";
import ResizableSec from "./ResizableSection";
import TimeLine from "./Timeline/TimeLine";

export default function MainSection() {
  return (
    <div className="flex flex-col w-full">
      <ResizableSec />
      <TimeLine />
    </div>
  );
}
