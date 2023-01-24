/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { IFloorArea, IFloorStyle } from "models";
import { Floor, WallFront, WallLeft } from "./planes";
import { TopLight } from "./lights";
import { Controller } from "./components";

export default function Home() {
  const [floorXZ, setFloorXZ] = useState<IFloorArea>({
    x: 3,
    z: 2.6
  });
  const [floorStyle, setFloorStyle] = useState<IFloorStyle>({
    name: "",
    src: "",
    color: "#FFFFFF"
  });

  const containerStyle = css({
    width: "100%",
    height: "100vh",
    background: "#121212",
    color: "#FFFFFF"
  });

  return (
    <div css={containerStyle}>
      <Controller
        floorProps={{ floorXZ, setFloorXZ, floorStyle, setFloorStyle }}
      />
      <Canvas
        camera={{ position: [2, 4, 3.5] }}
        gl={{ physicallyCorrectLights: true }}
      >
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <TopLight />

        <WallLeft floorXZ={floorXZ} />
        <WallFront floorXZ={floorXZ} />
        <Floor floorXZ={floorXZ} />
      </Canvas>
    </div>
  );
}
