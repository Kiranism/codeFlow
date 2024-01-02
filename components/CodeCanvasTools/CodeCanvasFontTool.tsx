import { fontFamilyOptions } from "@/constants/data";
import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { ComboBox } from "../ComboBox";

export default function CodeCanvasFontTool() {
  const { fontFamily, setFontFamily } = useCodeCanvasStore();
  return (
    <div>
      <ComboBox
        options={fontFamilyOptions}
        placeholder="Select a font style"
        icon="fontIcon"
        value={fontFamily}
        setValue={setFontFamily}
        id={"font"}
      />
    </div>
  );
}
