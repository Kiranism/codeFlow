import { langOptions } from "@/constants/lang";
import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { ComboBox } from "../ComboBox";

export default function CodeLangTool() {
  const { codeLang, setCodeLang } = useCodeCanvasStore();
  return (
    <div>
      <ComboBox
        options={langOptions}
        placeholder="Choose a language"
        icon="code"
        value={codeLang}
        setValue={setCodeLang}
        id={"code lang"}
      />
    </div>
  );
}
