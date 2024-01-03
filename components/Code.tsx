import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { langOptions } from "@/constants/lang";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { toast } from "sonner";
import CodeToolBox from "./CodeToolBox";
import { Icons } from "./Icons";
import { Button } from "./ui/button";

function Code() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const { codeSnippet, setCodeSnippet, isEditMode, setIsEditMode, codeLang } =
    useCodeCanvasStore();

  const onChange = React.useCallback((val: string) => {
    setValue(val);
  }, []);
  const handleAddCodeSnap = () => {
    setCodeSnippet([
      ...codeSnippet,
      {
        id: Date.now().toString(),
        code: value,
        language: "js",
        editable: false,
      },
    ]);
  };

  const handleEditCodeSnap = () => {
    const updatedCodeSnippet = codeSnippet.map((snippet) =>
      snippet.editable ? { ...snippet, code: value } : snippet
    );
    setCodeSnippet(updatedCodeSnippet);
    toast.success("Code updated successfully");
    setIsEditMode(false);
  };

  const editableSnippet = codeSnippet.find((snippet) => snippet.editable);
  const displayValue = isEditMode ? editableSnippet?.code : value;

  const matchActiveLang =
    langOptions.find(
      (lang) => lang.value.toUpperCase() === codeLang.toUpperCase()
    ) || langOptions[0];

  const activeLang = matchActiveLang?.extensions;

  return (
    <div className="relative">
      <CodeToolBox isEditMode={isEditMode} onChange={onChange} />

      <CodeMirror
        value={displayValue}
        theme={vscodeDark}
        height="500px"
        extensions={activeLang}
        onChange={onChange}
      />
      <div className="absolute bottom-5 right-5">
        {isEditMode ? (
          <Button
            size={"xs"}
            onClick={handleEditCodeSnap}
            className="flex gap-1 items-center"
          >
            <Icons.check className="h-4 w-4" />
            Save edits
          </Button>
        ) : (
          <Button size={"xs"} variant={"secondary"} onClick={handleAddCodeSnap}>
            <Icons.timeline className="h-4 w-4" /> Add to timeline
          </Button>
        )}
      </div>
    </div>
  );
}
export default Code;
