import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TCodesnippet, useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "class-variance-authority";
import { useCallback, useMemo } from "react";
import { toast } from "sonner";
import { Icons } from "../Icons";
import Thumbnail from "../Thumbnail";
type TTimelineProps = {
  item: TCodesnippet;
  index?: number;
  isOverlay?: boolean;
};
const TimelineCard = ({ item, index, isOverlay }: TTimelineProps) => {
  const {
    setIsEditMode,
    codeSnippet,
    setCodeSnippet,
    isEditMode,
    activeSnippetId,
    setActiveSnippetId,
  } = useCodeCanvasStore();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const handleEdit = useCallback(() => {
    setIsEditMode(true);
    setActiveSnippetId(item.id);
    const updatedCodeSnippet = codeSnippet.map((snippet) =>
      snippet.id === item.id
        ? { ...snippet, editable: true }
        : { ...snippet, editable: false }
    );
    setCodeSnippet(updatedCodeSnippet);
  }, [item.id, codeSnippet]);

  const handleDelete = useCallback(() => {
    const updatedCodeSnippet = codeSnippet.filter(
      (snippet) => snippet.id !== item.id
    );
    setCodeSnippet(updatedCodeSnippet);
    toast.success("Code deleted successfully");
  }, [item.id, codeSnippet]);

  const variants = cva("w-[350px]", {
    variants: {
      dragging: {
        default: "border-2 border-transparent",
        over: "ring-2 opacity-30",
        edit: "border border-primary",
        overlay: "ring-2 ring-primary",
      },
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isEditActive = useMemo(
    () => isEditMode && item.id === activeSnippetId,
    [activeSnippetId, isEditMode]
  );

  return (
    <Card
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={variants({
        dragging: isEditActive
          ? "edit"
          : isOverlay
          ? "overlay"
          : isDragging
          ? "over"
          : undefined,
      })}
    >
      <CardHeader className="flex flex-row items-center justify-between px-2 py-1 border border-b-muted  !space-y-0.5 ">
        <h1 className="mx-1"> Scene {index ? index + 1 : 1}</h1>
        <Button
          size={"iconXs"}
          className="space-y-0"
          variant={"outline"}
          onClick={handleDelete}
        >
          <Icons.close className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="relative p-2">
        {isEditActive && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full  bg-black/40">
            <Button
              size={"lg"}
              variant={"outline"}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={() => {
                setIsEditMode(false);
                setActiveSnippetId(null);
              }}
            >
              Cancel Edit
            </Button>
          </div>
        )}
        <Thumbnail mode="timeline" title={item.code} />
      </CardContent>
      <Separator />
      <CardFooter className="p-4">
        <Button className="w-full" variant={"outline"} onClick={handleEdit}>
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TimelineCard;
