/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import { IFloorArea, IFloorStyle } from "models";
import floor1 from "assets/images/floor1.jpg";
import floor2 from "assets/images/floor2.jpg";
import floor3 from "assets/images/floor3.jpg";
import { ColorPicker } from "./ColorPicker";
import { FloorSizeSlider } from "./FloorSizeSlider";

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
  const FLOOR_STYLES = [
    { name: "floor1", src: floor1, color: "" },
    { name: "floor2", src: floor2, color: "" },
    { name: "floor3", src: floor3, color: "" }
  ];

  const containerStyle = css({
    width: "100%",
    height: "fit-content",
    padding: "0.8rem",
    boxSizing: "border-box",
    background: "#555555",
    borderRadius: "1rem",
    margin: "0.4rem 0"
  });
  const flexRow = css({
    display: "flex",
    alignItems: "center"
  });
  const floorButtonContainerStlye = css(flexRow, {
    width: "100%",
    justifyContent: "space-evenly"
  });
  const floorButtonStyle = css({
    width: "3rem",
    height: "3rem",
    padding: 0,
    border: "none",
    background: "none"
  });
  const floorButtonSelectedStyle = css(floorButtonStyle, {
    border: "4px solid #FFFFFF"
  });

  return (
    <div css={containerStyle}>
      <FloorSizeSlider floorXZ={floorXZ} setFloorXZ={setFloorXZ} />
      <div css={{ height: "1rem" }} />
      <div css={floorButtonContainerStlye}>
        <ColorPicker floorStyle={floorStyle} setFloorStyle={setFloorStyle} />
        {FLOOR_STYLES.map((floor) => (
          <button
            key={floor.name}
            onClick={() => setFloorStyle(floor)}
            type="button"
            css={
              floorStyle.name === floor.name
                ? floorButtonSelectedStyle
                : floorButtonStyle
            }
          >
            <img src={floor.src} alt="Floor1" width="100%" height="100%" />
          </button>
        ))}
      </div>
    </div>
  );
}
