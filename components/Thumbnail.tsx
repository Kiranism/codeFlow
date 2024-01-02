import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { Thumbnail as RemotionThumbnail } from "@remotion/player";
import React, { useMemo } from "react";
import { z } from "zod";
import { Main } from "../remotion/MyComp/Main";
import {
  CompositionProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
const outer: React.CSSProperties = {
  // borderRadius: "var(--geist-border-radius)",
  overflow: "hidden",
  boxShadow: "0 0 200px rgba(0, 0, 0, 0.15)",
  // marginBottom: 40,
  //   marginTop: 60,
};

const timeline: React.CSSProperties = {
  width: "100",
  objectFit: "cover",
  borderRadius: "6px",
};

type TRemotionThumbnailProps = {
  mode: "timeline" | "canvas";
  title?: string;
};

const Thumbnail = ({ mode, title }: TRemotionThumbnailProps) => {
  const { codeSnippet } = useCodeCanvasStore();
  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      data: mode === "canvas" ? codeSnippet || "" : title || "",
    };
  }, [title, mode, codeSnippet]);
  return (
    <div className="cinematics" style={outer}>
      <RemotionThumbnail
        component={Main}
        frameToDisplay={30}
        inputProps={inputProps}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        compositionHeight={VIDEO_HEIGHT}
        compositionWidth={VIDEO_WIDTH}
        style={timeline}
      />
    </div>
  );
};

export default Thumbnail;
