/* eslint-disable react/no-unknown-property */
import { IFloorArea, IFloorStyle } from "models";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { THICKNESS } from "./Options";

interface FloorProps {
  floorXZ: IFloorArea;
  floorStyle: IFloorStyle;
}

function FloorWithImage({ floorXZ, floorStyle }: FloorProps) {
  const colorMap = useLoader(
    THREE.TextureLoader,
    floorStyle.src
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

export function Floor({ floorXZ, floorStyle }: FloorProps) {
  if (floorStyle.name) {
    return <FloorWithImage floorXZ={floorXZ} floorStyle={floorStyle} />;
  }
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[floorXZ.x, THICKNESS, floorXZ.z]} />
      <meshStandardMaterial
        attach="material"
        roughness={0.5}
        metalness={0.5}
        color={floorStyle.color}
      />
    </mesh>
  );
}
