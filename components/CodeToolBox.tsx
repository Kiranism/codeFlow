import CodeLangTool from "./CodeCanvasTools/CodeLangTool";

export default function CodeToolBox({ isEditMode }: { isEditMode: boolean }) {
  return (
    <div className="relative p-2 flex gap-1">
      <CodeLangTool />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {isEditMode ? "Edit Mode" : null}
      </h1>
    </div>
  );
}
