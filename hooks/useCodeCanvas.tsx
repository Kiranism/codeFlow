// Importing create function from the Zustand library
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TCodesnippet = {
  id: string;
  code: string;
  language: string;
  editable: boolean;
};
// Defining an interface for the store's state
type TCodeCanvas = {
  fontFamily: string;
  setFontFamily: (fontFamily: string) => void;
  fontSize: number;
  setFontSize: (fontSize: number) => void;
  codeTheme: string;
  setCodeTheme: (codeTheme: string) => void;
  codeWallpaper: string;
  setCodeWallpaper: (codeWallpaper: string) => void;
  codeSnippet: TCodesnippet[];
  setCodeSnippet: (codeSnippet: TCodesnippet[]) => void;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  activeSnippetId: string | null; // Track the ID of the active snippet
  setActiveSnippetId: (val: string | null) => void;
  setCodeLang: (val: string) => void;
  codeLang: string;
};

// create our store
export const useCodeCanvasStore = create<TCodeCanvas>()(
  persist(
    (set) => ({
      fontFamily: "",
      setFontFamily: (fontFamily: string) => set({ fontFamily }),
      fontSize: 18,
      setFontSize: (fontSize: number) => set({ fontSize }),
      codeTheme: "",
      setCodeTheme: (codeTheme: string) => set({ codeTheme }),
      codeWallpaper: "",
      setCodeWallpaper: (codeWallpaper: string) => set({ codeWallpaper }),
      codeSnippet: [],
      setCodeSnippet: (codeSnippet: TCodesnippet[]) => set({ codeSnippet }),
      isEditMode: false,
      setIsEditMode: (val) => set({ isEditMode: val }),
      activeSnippetId: null, // Track the ID of the active snippet
      setActiveSnippetId: (id) => set({ activeSnippetId: id }),
      setCodeLang: (codeLang: string) => set({ codeLang }),
      codeLang: "",
    }),
    { name: "code-store", skipHydration: true }
  )
);
