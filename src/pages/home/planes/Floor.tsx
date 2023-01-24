/* eslint-disable react/no-unknown-property */
import { IFloorArea } from "models";
import { THICKNESS } from "./Options";

export function Floor({ floorXZ }: { floorXZ: IFloorArea }) {
  return (
    <mesh>
      <boxGeometry attach="geometry" args={[floorXZ.x, THICKNESS, floorXZ.z]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
