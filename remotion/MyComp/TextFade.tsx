import React, { useMemo } from "react";
import { AbsoluteFill } from "remotion";

const outer: React.CSSProperties = {};

export const TextFade: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const container: React.CSSProperties = useMemo(() => {
    return {
      justifyContent: "center",
      alignItems: "center",
    };
  }, []);

  return (
    <AbsoluteFill style={outer}>
      <AbsoluteFill style={container}>
        <div className="bg-black">{children}</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
