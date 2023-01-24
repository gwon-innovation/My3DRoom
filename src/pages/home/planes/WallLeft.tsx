/* eslint-disable react/no-unknown-property */
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { IFloorArea, IPlaneStyle } from "models";
import { FLOOR_HEIGHT, THICKNESS } from "./Options";

interface WallLeftProps {
  floorXZ: IFloorArea;
  planeStyle: IPlaneStyle;
}

function WallLeftWithImage({ floorXZ, planeStyle }: WallLeftProps) {
  const colorMap = useLoader(
    THREE.TextureLoader,
    planeStyle.src
  ) as THREE.Texture;
  return (
    <mesh
      position={[
        -floorXZ.x / 2 - THICKNESS / 2,
        FLOOR_HEIGHT / 2 - THICKNESS / 2,
        0
      ]}
    >
      <boxGeometry
        attach="geometry"
        args={[THICKNESS, FLOOR_HEIGHT, floorXZ.z]}
      />
      <meshStandardMaterial
        attach="material"
        roughness={0.5}
        metalness={0}
        map={colorMap || null}
      />
    </mesh>
  );
}

export function WallLeft({ floorXZ, planeStyle }: WallLeftProps) {
  if (planeStyle.name) {
    return <WallLeftWithImage floorXZ={floorXZ} planeStyle={planeStyle} />;
  }
  return (
    <mesh
      position={[
        -floorXZ.x / 2 - THICKNESS / 2,
        FLOOR_HEIGHT / 2 - THICKNESS / 2,
        0
      ]}
    >
      <boxGeometry
        attach="geometry"
        args={[THICKNESS, FLOOR_HEIGHT, floorXZ.z]}
      />
      <meshStandardMaterial
        attach="material"
        roughness={0.5}
        metalness={0}
        color={planeStyle.color}
      />
    </mesh>
  );
}
