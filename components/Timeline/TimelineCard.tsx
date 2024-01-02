import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TCodesnippet, useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { cn } from "@/lib/utils";
import Thumbnail from "../Thumbnail";
import { Icons } from "../Icons";
import { toast } from "sonner";

type TTimelineProps = {
  item: TCodesnippet;
  index: number;
};
const TimelineCard = ({ item, index }: TTimelineProps) => {
  const {
    setIsEditMode,
    codeSnippet,
    setCodeSnippet,
    isEditMode,
    activeSnippetId,
    setActiveSnippetId,
  } = useCodeCanvasStore();

  const handleEdit = () => {
    setIsEditMode(true);
    setActiveSnippetId(item.id);
    const updatedCodeSnippet = codeSnippet.map((snippet) =>
      snippet.id === item.id
        ? { ...snippet, editable: true }
        : { ...snippet, editable: false }
    );
    setCodeSnippet(updatedCodeSnippet);
  };

  const handleDelete = () => {
    const updatedCodeSnippet = codeSnippet.filter(
      (snippet) => snippet.id !== item.id
    );
    setCodeSnippet(updatedCodeSnippet);
    toast.success("Code deleted successfully");
  };

  const isEditActive = isEditMode && item.id === activeSnippetId;
  return (
    <Card
      className={cn(
        isEditActive ? "border border-primary" : "border",
        "w-[350px]"
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between px-2 py-1 border border-b-muted  !space-y-0.5 ">
        <h1 className="mx-1"> Scene {index + 1}</h1>
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
