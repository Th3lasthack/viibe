import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { Cursor } from "./Cursor";

const SKILLS_LOGO = `
███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝
`;

const OUTPUT_LINES = [
  "",
  "┌ Claude Video Generator",
  "│ Source: AI-powered video creation",
  "│ Status: Video generated successfully",
  "│",
  "└ Duration: 8 seconds | Resolution: 1080x700",
];

export const TerminalContent: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const command = "npx create-video with claude";
  const charsPerSecond = 15;
  const framesPerChar = fps / charsPerSecond;

  const typingEndFrame = command.length * framesPerChar;
  const outputStartFrame = typingEndFrame + fps * 0.5;

  const visibleChars = Math.floor(
    interpolate(frame, [0, typingEndFrame], [0, command.length], {
      extrapolateRight: "clamp",
    })
  );

  const displayedText = command.slice(0, visibleChars);
  const isTyping = visibleChars < command.length;
  const showOutput = frame >= outputStartFrame;

  const framesPerLine = fps * 0.05; // 50ms stagger
  const visibleLines = Math.floor(
    interpolate(
      frame,
      [
        outputStartFrame,
        outputStartFrame + OUTPUT_LINES.length * framesPerLine,
      ],
      [0, OUTPUT_LINES.length],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    )
  );

  return (
    <div className="flex-1 bg-white p-6 font-mono text-4xl overflow-hidden">
      <div className="flex items-center text-[#333]">
        <span className="text-[#2ecc71] font-semibold">~</span>
        <span className="text-[#333] mx-2">$</span>
        <span>{displayedText}</span>
        {!showOutput && <Cursor blinking={!isTyping} />}
      </div>
      {showOutput && (
        <div className="mt-4 text-[#666] text-lg leading-tight">
          <pre className="text-[#333]">{SKILLS_LOGO}</pre>
          {OUTPUT_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="text-[#333]">
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
