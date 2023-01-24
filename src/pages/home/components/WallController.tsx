/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import { IPlaneStyle } from "models";
import { ColorPicker } from "./ColorPicker";
import { WallImageSelector } from "./WallImageSelector";

export interface IWallControllerProps {
  planeStyle: IPlaneStyle;
  setPlaneStyle: Dispatch<SetStateAction<IPlaneStyle>>;
}

export function WallController({
  planeStyle,
  setPlaneStyle
}: IWallControllerProps) {
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
      <div css={floorButtonContainerStlye}>
        <ColorPicker planeStyle={planeStyle} setPlaneStyle={setPlaneStyle} />
        <WallImageSelector
          planeStyle={planeStyle}
          setPlaneStyle={setPlaneStyle}
        />
      </div>
    </div>
  );
}
