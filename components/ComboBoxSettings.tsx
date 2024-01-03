"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { Icons } from "./Icons";
import SliderKit from "./SliderKit";
import { useEffect } from "react";

export function ComboBoxSettings() {
  const { outerPadding, setOuterPadding, innerPadding, setInnerPadding } =
    useCodeCanvasStore();
  useEffect(() => {
    useCodeCanvasStore.persist.rehydrate();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Icons.settings className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        <DropdownMenuLabel className="flex items-center justify-start gap-2">
          <Icons.theme className="h-4 w-4" /> Outer Padding
        </DropdownMenuLabel>
        <SliderKit value={outerPadding} onValueChange={setOuterPadding} />
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex items-center justify-start gap-2">
          <Icons.theme className="h-4 w-4" /> Inner Padding
        </DropdownMenuLabel>
        <SliderKit value={innerPadding} onValueChange={setInnerPadding} />
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
