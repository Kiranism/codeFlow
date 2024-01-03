// Importing create function from the Zustand library
import { fontFamilyOptions } from "@/constants/data";
import { themeOptions } from "@/constants/themes";
import { codeWallOptions } from "@/constants/walls";
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
  innerPadding: number[];
  outerPadding: number[];
  setInnerPadding: (val: number[]) => void;
  setOuterPadding: (val: number[]) => void;
};

const initialValues: Partial<TCodeCanvas> = {
  activeSnippetId: "",
  codeLang: "",
  codeSnippet: [
    {
      id: Date.now().toString(),
      code: "console.log",
      language: "js",
      editable: false,
    },
  ] as TCodesnippet[],
  codeTheme: "",
  codeWallpaper: "",
  fontFamily: "",
  fontSize: 18,
  isEditMode: false,
};

// create our store
export const useCodeCanvasStore = create<TCodeCanvas>()(
  persist(
    (set) => ({
      fontFamily: fontFamilyOptions[0].value,
      setFontFamily: (fontFamily: string) => set({ fontFamily }),
      fontSize: 18,
      setFontSize: (fontSize: number) => set({ fontSize }),
      codeTheme: themeOptions[0].value,
      setCodeTheme: (codeTheme: string) => set({ codeTheme }),
      codeWallpaper: codeWallOptions[0].value,
      setCodeWallpaper: (codeWallpaper: string) => set({ codeWallpaper }),
      codeSnippet: [
        {
          id: Date.now().toString(),
          code: "console.log",
          language: "js",
          editable: false,
        },
      ],
      setCodeSnippet: (codeSnippet: TCodesnippet[]) => set({ codeSnippet }),
      isEditMode: false,
      setIsEditMode: (val) => set({ isEditMode: val }),
      activeSnippetId: null, // Track the ID of the active snippet
      setActiveSnippetId: (id) => set({ activeSnippetId: id }),
      setCodeLang: (codeLang: string) => set({ codeLang }),
      codeLang: "",
      outerPadding: [40],
      setOuterPadding: (outerPadding: number[]) => set({ outerPadding }),
      innerPadding: [10],
      setInnerPadding: (innerPadding: number[]) => set({ innerPadding }),

      reset: () => {
        set(initialValues);
      },
    }),
    { name: "code-store", skipHydration: true }
  )
);
