/* eslint-disable react/no-unknown-property */
import { IFloorArea, IPlaneStyle } from "models";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { THICKNESS } from "./Options";

interface FloorProps {
  floorXZ: IFloorArea;
  planeStyle: IPlaneStyle;
}

function FloorWithImage({ floorXZ, planeStyle }: FloorProps) {
  const colorMap = useLoader(
    THREE.TextureLoader,
    planeStyle.src
  ) as THREE.Texture;
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[floorXZ.x, THICKNESS, floorXZ.z]} />
      <meshStandardMaterial
        attach="material"
        map={colorMap || null}
        roughness={0.5}
        metalness={0.5}
      />
    </mesh>
  );
}

export function Floor({ floorXZ, planeStyle }: FloorProps) {
  if (planeStyle.name) {
    return <FloorWithImage floorXZ={floorXZ} planeStyle={planeStyle} />;
  }
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[floorXZ.x, THICKNESS, floorXZ.z]} />
      <meshStandardMaterial
        attach="material"
        roughness={0.5}
        metalness={0.5}
        color={planeStyle.color}
      />
    </mesh>
  );
}
