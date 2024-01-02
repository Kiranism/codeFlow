"use client";
import { TCodesnippet, useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import Image from "next/image";
import { Fragment, useEffect } from "react";
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
            <Image
              src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/${codeWallpaper}`}
              fill
              alt="codebg"
            />
          )
        )
      ) : (
        <Image
          src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/bg-placeholder.png`}
          fill
          alt="codebg"
        />
      )}

      <TransitionSeries>
        {Array.isArray(data) ? (
          data?.map((item: Partial<TCodesnippet>, index: number) => (
            <Fragment key={item.id}>
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
            </Fragment>
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
