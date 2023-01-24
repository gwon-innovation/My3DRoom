/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FloorController, IFloorControllerProps } from "./FloorController";
import { IWallControllerProps, WallController } from "./WallController";

interface ControllerProps {
  floorProps: IFloorControllerProps;
  leftWallProps: IWallControllerProps;
  frontWallProps: IWallControllerProps;
}

export function Controller({
  floorProps,
  leftWallProps,
  frontWallProps
}: ControllerProps) {
  const controllerStyle = css({
    position: "absolute",
    top: "1.2rem",
    right: "1.2rem",
    marginLeft: "auto",
    padding: "1.2rem",
    boxSizing: "border-box",
    width: "24rem",
    height: "50%",
    background: "#343434",
    borderRadius: "1rem",
    overflow: "auto",
    zIndex: 100
  });

  return (
    <div css={controllerStyle}>
      <p>Floor</p>
      <FloorController
        floorXZ={floorProps.floorXZ}
        setFloorXZ={floorProps.setFloorXZ}
        planeStyle={floorProps.planeStyle}
        setPlaneStyle={floorProps.setPlaneStyle}
      />
      <div css={{ height: "1rem" }} />
      <p>Left Wall</p>
      <WallController
        planeStyle={leftWallProps.planeStyle}
        setPlaneStyle={leftWallProps.setPlaneStyle}
      />
      <div css={{ height: "1rem" }} />
      <p>Front Wall</p>
      <WallController
        planeStyle={frontWallProps.planeStyle}
        setPlaneStyle={frontWallProps.setPlaneStyle}
      />
    </div>
  );
}
