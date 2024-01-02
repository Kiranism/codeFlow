"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { codeWallOptions, gradientOptions } from "@/constants/walls";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Icons } from "./Icons";

type TComboBoxProps = {
  placeholder: string;
  options?: { value: string; label: string }[];
  icon?: keyof typeof Icons;
  img?: string;
  value: string;
  id: string;
  setValue: (value: string) => void;
};

export function ComboBoxWalls({ value, setValue }: TComboBoxProps) {
  const isGradient = value?.toLowerCase().includes("gradient");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-1 pl-1">
          {isGradient ? (
            <div className={cn("w-6 h-6 rounded-full", value)} />
          ) : (
            <Image
              src={
                !!value.length
                  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}/${value}`
                  : `${process.env.NEXT_PUBLIC_VERCEL_URL}/bg-placeholder.png`
              }
              width={30}
              height={30}
              alt="Selected wallpaper"
              className="rounded-full object-fill h-6 w-6"
            />
          )}
          <span>Select a Wallpaper</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Icons.theme className="h-4 w-4" /> Background
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Tabs defaultValue="Wallpapers">
          <TabsList className="w-full">
            <TabsTrigger value="Wallpapers" className="w-1/2">
              Wallpapers
            </TabsTrigger>
            <TabsTrigger value="Gradients" className="w-1/2">
              Gradients
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Wallpapers">
            <div className="grid grid-cols-6 gap-2 cursor-pointer">
              {codeWallOptions.map((option) => (
                <Image
                  src={option.value}
                  key={option.value}
                  alt="wallpaper"
                  height={50}
                  width={50}
                  className="rounded-md object-cover h-10 w-10"
                  onClick={() => setValue(option.value)}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Gradients">
            <div className="grid grid-cols-6 gap-2 cursor-pointer">
              {gradientOptions.map((option) => (
                <div
                  key={option.value}
                  style={{
                    background: option.value,
                  }}
                  className={cn("rounded-md object-cover h-10 w-10")}
                  onClick={() => setValue(option.value)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
