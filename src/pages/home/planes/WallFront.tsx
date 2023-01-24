/* eslint-disable react/no-unknown-property */
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { IFloorArea, IPlaneStyle } from "models";
import { FLOOR_HEIGHT, THICKNESS } from "./Options";

interface WallFrontProps {
  floorXZ: IFloorArea;
  planeStyle: IPlaneStyle;
}

function WallFrontWithImage({ floorXZ, planeStyle }: WallFrontProps) {
  const colorMap = useLoader(
    THREE.TextureLoader,
    planeStyle.src
  ) as THREE.Texture;
  return (
    <mesh
      position={[
        -THICKNESS / 2,
        FLOOR_HEIGHT / 2 - THICKNESS / 2,
        -floorXZ.z / 2 - THICKNESS / 2
      ]}
    >
      <boxGeometry
        attach="geometry"
        args={[floorXZ.x + THICKNESS, FLOOR_HEIGHT, THICKNESS]}
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

export function WallFront({ floorXZ, planeStyle }: WallFrontProps) {
  if (planeStyle.name) {
    return <WallFrontWithImage floorXZ={floorXZ} planeStyle={planeStyle} />;
  }
  return (
    <mesh
      position={[
        -THICKNESS / 2,
        FLOOR_HEIGHT / 2 - THICKNESS / 2,
        -floorXZ.z / 2 - THICKNESS / 2
      ]}
    >
      <boxGeometry
        attach="geometry"
        args={[floorXZ.x + THICKNESS, FLOOR_HEIGHT, THICKNESS]}
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
