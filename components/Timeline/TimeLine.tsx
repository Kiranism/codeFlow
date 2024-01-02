"use client";
import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import TimelineCard from "./TimelineCard";
import { useEffect } from "react";

export default function TimeLine() {
  const { codeSnippet } = useCodeCanvasStore();
  useEffect(() => {
    useCodeCanvasStore.persist.rehydrate();
  }, []);

  return (
    <div className="flex gap-10 text-black p-10">
      {codeSnippet?.map((item, index) => (
        <TimelineCard item={item} key={item.id} index={index} />
      ))}
    </div>
  );
}
