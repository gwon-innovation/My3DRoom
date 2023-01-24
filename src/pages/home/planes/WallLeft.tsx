/* eslint-disable react/no-unknown-property */
import { IFloorArea } from "models";
import { FLOOR_HEIGHT, THICKNESS } from "./Options";

export function WallLeft({ floorXZ }: { floorXZ: IFloorArea }) {
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
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
