import * as ABeeZee from "@remotion/google-fonts/ABeeZee";
import * as Inter from "@remotion/google-fonts/Inter";
import * as Poppins from "@remotion/google-fonts/Poppins";
import * as Teko from "@remotion/google-fonts/Teko";

ABeeZee.loadFont();
Inter.loadFont();
Poppins.loadFont();
Teko.loadFont();

export const fontFamilyOptions = [
  { value: ABeeZee.fontFamily, label: "ABeeZee" },
  { value: Inter.fontFamily, label: "Inter" },
  { value: Poppins.fontFamily, label: "Poppins" },
  { value: Teko.fontFamily, label: "Teko" },
];
