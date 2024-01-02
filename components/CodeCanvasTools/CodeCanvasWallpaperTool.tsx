import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import { ComboBoxWalls } from "../ComboBoxWalls";

export default function CodeCanvasWallpaperTool() {
  const { codeWallpaper, setCodeWallpaper } = useCodeCanvasStore();
  return (
    <div>
      <ComboBoxWalls
        placeholder="Select wallpaper"
        img={codeWallpaper}
        setValue={setCodeWallpaper}
        value={codeWallpaper}
        id="wallpaper"
      />
    </div>
  );
}
