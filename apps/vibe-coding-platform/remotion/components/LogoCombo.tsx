import React from "react";
import {
  AbsoluteFill,
  Series,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";

const AnnouncementText: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill className="flex items-center justify-center">
      <span
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: 60,
          fontWeight: 700,
          color: "#333",
          transform: `scale(${scale})`,
        }}
      >
        AI Video Generation with Claude
      </span>
    </AbsoluteFill>
  );
};

const PoweredBy: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, fps * 0.3], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-8" style={{ opacity }}>
        <div className="text-4xl font-light text-gray-600">
          Powered by Claude + Remotion
        </div>
        <div className="text-2xl text-gray-500">
          Create stunning videos with AI
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const LogoCombo: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={60}>
        <AnnouncementText />
      </Series.Sequence>
      <Series.Sequence durationInFrames={120}>
        <PoweredBy />
      </Series.Sequence>
    </Series>
  );
};
