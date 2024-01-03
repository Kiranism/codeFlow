import React from "react";
import { Slider } from "./ui/slider";
import { cn } from "@/lib/utils";

type SliderProps = React.ComponentProps<typeof Slider>;
export default function SliderKit({ className, ...props }: SliderProps) {
  return (
    <Slider
      max={100}
      step={10}
      className={cn("w-[100%] mx-auto p-2", className)}
      {...props}
    />
  );
}
