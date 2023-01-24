/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FloorController, IFloorControllerProps } from "./FloorController";

interface ControllerProps {
  floorProps: IFloorControllerProps;
}

export function Controller({ floorProps }: ControllerProps) {
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
        floorStyle={floorProps.floorStyle}
        setFloorStyle={floorProps.setFloorStyle}
      />
    </div>
  );
}
