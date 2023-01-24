/* eslint-disable react/no-unknown-property */
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { FLOOR_HEIGHT } from "../planes/Options";

// 천장 조명
export function TopLight() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const topLightRef = useRef<THREE.PointLight>(null!);
  useHelper(topLightRef, THREE.PointLightHelper, 1, "red");
  return (
    <pointLight
      ref={topLightRef}
      position={[0, FLOOR_HEIGHT, 0]}
      intensity={1}
      power={300}
    />
  );
}
