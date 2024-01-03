"use client";
import { Check, ChevronsUpDown, LucideIcon } from "lucide-react";
import * as React from "react";

import Image from "next/image";
import { cn } from "./../lib/utils";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import { Command, CommandGroup, CommandItem } from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type TComboBoxProps = {
  placeholder: string;
  options: { value: string; label: string }[];
  icon?: keyof typeof Icons;
  img?: string;
  value: string;
  id: string;
  setValue: (value: string) => void;
};
export function ComboBox({
  options,
  placeholder,
  icon,
  img,
  value,
  setValue,
  id,
}: TComboBoxProps) {
  const [open, setOpen] = React.useState(false);

  const SelectedIcon = (Icons as unknown as { [key: string]: LucideIcon })[
    icon ?? "add"
  ];

  const selectedOptionLabel = options.find(
    (option) => option.value.toUpperCase() === value.toUpperCase()
  )?.label;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] pl-1 justify-between"
        >
          <div className="flex items-center gap-1">
            <span>
              {img ? (
                <Image
                  src={img}
                  width={30}
                  height={30}
                  alt="wallpaper"
                  className="rounded-full object-fill h-6 w-6"
                />
              ) : (
                <SelectedIcon className="h-5 w-5" />
              )}
            </span>
            <span>{value ? selectedOptionLabel : placeholder}</span>
          </div>

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search option..." /> */}
          {/* <CommandEmpty>No option found.</CommandEmpty> */}
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  setValue(
                    currentValue?.toUpperCase() === value.toUpperCase()
                      ? ""
                      : currentValue
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value?.toUpperCase() === option.value?.toUpperCase()
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
