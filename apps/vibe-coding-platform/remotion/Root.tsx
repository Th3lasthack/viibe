import React from "react";
import { Composition } from "remotion";
import { Master } from "./components/Master";
import "../app/globals.css";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="VideoGeneration"
        component={Master}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={700}
      />
    </>
  );
};
