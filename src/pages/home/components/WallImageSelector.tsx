/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import { IPlaneStyle } from "models";
import wall1 from "assets/images/wall1.jpg";
import wall2 from "assets/images/wall2.jpg";
import wall3 from "assets/images/wall3.jpg";

export interface IWallImageSelectorProps {
  planeStyle: IPlaneStyle;
  setPlaneStyle: Dispatch<SetStateAction<IPlaneStyle>>;
}

export function WallImageSelector({
  planeStyle,
  setPlaneStyle
}: IWallImageSelectorProps) {
  const WALL_STYLES = [
    { name: "wall1", src: wall1, color: "" },
    { name: "wall2", src: wall2, color: "" },
    { name: "wall3", src: wall3, color: "" }
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
      {WALL_STYLES.map((wall) => (
        <button
          key={wall.name}
          onClick={() =>
            setPlaneStyle({
              name: wall.name,
              src: wall.src,
              color: planeStyle.color
            })
          }
          type="button"
          css={
            planeStyle.name === wall.name ? selectedButtonStyle : buttonStyle
          }
        >
          <img src={wall.src} alt={wall.name} width="100%" height="100%" />
        </button>
      ))}
    </div>
  );
}
