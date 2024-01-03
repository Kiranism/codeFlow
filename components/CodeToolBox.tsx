import CodeLangTool from "./CodeCanvasTools/CodeLangTool";
import { Icons } from "./Icons";
import { Button } from "./ui/button";

export default function CodeToolBox({
  isEditMode,
  onChange,
}: {
  isEditMode: boolean;
  onChange: (val: string) => void;
}) {
  return (
    <div className="relative p-2 flex justify-between items-center gap-1">
      <CodeLangTool />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary font-bold">
        {isEditMode ? "Edit Mode" : null}
      </h1>
      <Button size={"iconXs"} variant={"outline"} onClick={() => onChange("")}>
        <Icons.trash className="w-4 h-4" />
      </Button>
    </div>
  );
}
