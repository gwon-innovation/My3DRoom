/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import { IFloorArea, IPlaneStyle } from "models";
import { ColorPicker } from "./ColorPicker";
import { FloorSizeSlider } from "./FloorSizeSlider";
import { FloorImageSelector } from "./FloorImageSelector";

export interface IFloorControllerProps {
  floorXZ: IFloorArea;
  setFloorXZ: Dispatch<SetStateAction<IFloorArea>>;
  planeStyle: IPlaneStyle;
  setPlaneStyle: Dispatch<SetStateAction<IPlaneStyle>>;
}

export function FloorController({
  floorXZ,
  setFloorXZ,
  planeStyle,
  setPlaneStyle
}: IFloorControllerProps) {
  const containerStyle = css({
    width: "100%",
    height: "fit-content",
    padding: "0.8rem",
    boxSizing: "border-box",
    background: "#555555",
    borderRadius: "1rem",
    margin: "0.4rem 0"
  });
  const floorButtonContainerStlye = css({
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly"
  });

  return (
    <div css={containerStyle}>
      <FloorSizeSlider floorXZ={floorXZ} setFloorXZ={setFloorXZ} />
      <div css={{ height: "1rem" }} />
      <div css={floorButtonContainerStlye}>
        <ColorPicker planeStyle={planeStyle} setPlaneStyle={setPlaneStyle} />
        <FloorImageSelector
          planeStyle={planeStyle}
          setPlaneStyle={setPlaneStyle}
        />
      </div>
    </div>
  );
}
