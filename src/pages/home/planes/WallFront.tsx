/* eslint-disable react/no-unknown-property */
import { IFloorArea } from "models";
import { FLOOR_HEIGHT, THICKNESS } from "./Options";

export function WallFront({ floorXZ }: { floorXZ: IFloorArea }) {
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
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
