/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { IFloorArea, IPlaneStyle } from "models";
import { Floor, WallFront, WallLeft } from "./planes";
import { TopLight } from "./lights";
import { Controller } from "./components";

export default function Home() {
  const [floorXZ, setFloorXZ] = useState<IFloorArea>({
    x: 3,
    z: 2.6
  });
  const [planeStyle, setPlaneStyle] = useState<IPlaneStyle>({
    name: "",
    src: "",
    color: "#FFFFFF"
  });
  const [leftWallStyle, setLeftWallStyle] = useState<IPlaneStyle>({
    name: "",
    src: "",
    color: "#FFFFFF"
  });
  const [frontWallStyle, setFrontWallStyle] = useState<IPlaneStyle>({
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
        floorProps={{ floorXZ, setFloorXZ, planeStyle, setPlaneStyle }}
        leftWallProps={{
          planeStyle: leftWallStyle,
          setPlaneStyle: setLeftWallStyle
        }}
        frontWallProps={{
          planeStyle: frontWallStyle,
          setPlaneStyle: setFrontWallStyle
        }}
      />
      <Canvas
        camera={{ position: [2, 4, 3.5] }}
        gl={{ physicallyCorrectLights: true }}
      >
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <TopLight />

        <WallLeft floorXZ={floorXZ} planeStyle={leftWallStyle} />
        <WallFront floorXZ={floorXZ} planeStyle={frontWallStyle} />
        <Floor floorXZ={floorXZ} planeStyle={planeStyle} />
      </Canvas>
    </div>
  );
}
