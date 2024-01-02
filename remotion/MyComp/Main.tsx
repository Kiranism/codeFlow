"use client";
import { TCodesnippet, useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import Image from "next/image";
import { useEffect } from "react";
import { AbsoluteFill, Easing } from "remotion";
import { z } from "zod";
import { CompositionProps } from "../../types/constants";
import { CodeSnap } from "./CodeSnap";

export const Main = ({ data }: z.infer<typeof CompositionProps>) => {
  const { codeWallpaper, codeSnippet } = useCodeCanvasStore();

  useEffect(() => {
    useCodeCanvasStore.persist.rehydrate();
  }, []);
  // check for grad
  const grad = codeWallpaper?.toLowerCase().includes("gradient");
  const isCodeSnippets = !!codeSnippet.length;

  return (
    <AbsoluteFill>
      {isCodeSnippets ? (
        grad ? (
          <AbsoluteFill style={{ background: codeWallpaper }} />
        ) : (
          codeWallpaper && (
            <Image src={codeWallpaper as string} layout="fill" alt="codebg" />
          )
        )
      ) : (
        <Image src={"/bg-placeholder.png"} layout="fill" alt="codebg" />
      )}

      <TransitionSeries>
        {Array.isArray(data) ? (
          data?.map((item: Partial<TCodesnippet>, index: number) => (
            <>
              <TransitionSeries.Sequence
                key={item.id}
                durationInFrames={60 * (index + 2)}
              >
                <CodeSnap title={item.code ?? ""} />
              </TransitionSeries.Sequence>

              <TransitionSeries.Transition
                presentation={fade()}
                timing={linearTiming({
                  durationInFrames: 30,
                  easing: Easing.in(Easing.ease),
                })}
              />
            </>
          ))
        ) : (
          <TransitionSeries.Sequence durationInFrames={120}>
            <CodeSnap title={data} />
          </TransitionSeries.Sequence>
        )}
      </TransitionSeries>
    </AbsoluteFill>
  );
};
