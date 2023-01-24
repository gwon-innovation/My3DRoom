/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import { IFloorStyle } from "models";
import floor1 from "assets/images/floor1.jpg";
import floor2 from "assets/images/floor2.jpg";
import floor3 from "assets/images/floor3.jpg";

export interface IFloorImageSelectorProps {
  floorStyle: IFloorStyle;
  setFloorStyle: Dispatch<SetStateAction<IFloorStyle>>;
}

export function FloorImageSelector({
  floorStyle,
  setFloorStyle
}: IFloorImageSelectorProps) {
  const FLOOR_STYLES = [
    { name: "floor1", src: floor1, color: "" },
    { name: "floor2", src: floor2, color: "" },
    { name: "floor3", src: floor3, color: "" }
  ];

  const containerStyle = css({
    display: "flex",
    alignItems: "center"
  });
  const buttonStyle = css({
    width: "3rem",
    height: "3rem",
    padding: 0,
    border: "none",
    background: "none"
  });
  const selectedButtonStyle = css(buttonStyle, {
    border: "4px solid #FFFFFF"
  });

  return (
    <div css={containerStyle}>
      {FLOOR_STYLES.map((floor) => (
        <button
          key={floor.name}
          onClick={() => setFloorStyle(floor)}
          type="button"
          css={
            floorStyle.name === floor.name ? selectedButtonStyle : buttonStyle
          }
        >
          <img src={floor.src} alt="Floor1" width="100%" height="100%" />
        </button>
      ))}
    </div>
  );
}
