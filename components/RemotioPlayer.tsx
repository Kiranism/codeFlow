"use client";
import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { Player } from "@remotion/player";
import React, { useEffect, useMemo } from "react";
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

const player: React.CSSProperties = {
  width: "100%",
  maxHeight: "500px",
};

type TRemotionPlayerProps = {
  autoPlay: boolean;
  controls: boolean;
  mode: "timeline" | "canvas";
  title?: string;
};

export default function RemotioPlayer({
  autoPlay,
  controls,
  mode,
  title,
}: TRemotionPlayerProps) {
  // const [text, setText] = useState<string>(title);
  const { codeSnippet } = useCodeCanvasStore();
  useEffect(() => {
    useCodeCanvasStore.persist.rehydrate();
  }, []);
  console.log("codeSnippet", codeSnippet);
  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      data: mode === "canvas" ? codeSnippet || "" : title || "",
    };
  }, [title, mode, codeSnippet]);

  const codeSnipLength = codeSnippet?.length === 0 ? 1 : codeSnippet?.length;
  return (
    <div className="cinematics" style={outer}>
      <Player
        component={Main}
        inputProps={inputProps}
        durationInFrames={DURATION_IN_FRAMES * codeSnipLength}
        fps={VIDEO_FPS}
        compositionHeight={VIDEO_HEIGHT}
        compositionWidth={VIDEO_WIDTH}
        style={player}
        controls={controls}
        autoPlay={autoPlay}
        loop
      />
    </div>
  );
}
