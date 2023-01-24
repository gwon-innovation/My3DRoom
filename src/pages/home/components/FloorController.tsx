/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import { IFloorArea, IFloorStyle } from "models";
import { ColorPicker } from "./ColorPicker";
import { FloorSizeSlider } from "./FloorSizeSlider";
import { FloorImageSelector } from "./FloorImageSelector";

export interface IFloorControllerProps {
  floorXZ: IFloorArea;
  setFloorXZ: Dispatch<SetStateAction<IFloorArea>>;
  floorStyle: IFloorStyle;
  setFloorStyle: Dispatch<SetStateAction<IFloorStyle>>;
}

export function FloorController({
  floorXZ,
  setFloorXZ,
  floorStyle,
  setFloorStyle
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
        <ColorPicker floorStyle={floorStyle} setFloorStyle={setFloorStyle} />
        <FloorImageSelector
          floorStyle={floorStyle}
          setFloorStyle={setFloorStyle}
        />
      </div>
    </div>
  );
}
