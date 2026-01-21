import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

interface CursorProps {
  blinking: boolean;
}

export const Cursor: React.FC<CursorProps> = ({ blinking }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = blinking
    ? Math.abs(Math.cos((frame / fps) * Math.PI))
    : 1;

  return (
    <span
      className="w-4 h-10 bg-[#333] ml-0.5 inline-block"
      style={{ opacity }}
    />
  );
};
