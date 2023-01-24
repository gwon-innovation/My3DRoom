/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction, useState } from "react";
import { ChromePicker } from "react-color";
import { IPlaneStyle } from "models";

export interface IColorPickerProps {
  planeStyle: IPlaneStyle;
  setPlaneStyle: Dispatch<SetStateAction<IPlaneStyle>>;
}

export function ColorPicker({ planeStyle, setPlaneStyle }: IColorPickerProps) {
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const handleClick = () => {
    setShowColorPicker(!showColorPicker);
  };
  const handleClose = () => {
    setShowColorPicker(false);
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleChange = (color: any) => {
    setPlaneStyle({ name: "", src: "", color: color.hex });
  };

  const buttonStyle = css({
    width: "3rem",
    height: "3rem",
    padding: 0,
    border: "none",
    background: planeStyle.color
  });
  const buttonSelectedStyle = css(buttonStyle, {
    border: "4px solid #FFFFFF"
  });
  const popoverStyle = css({
    position: "relative",
    top: "4rem",
    left: "-4rem"
  });
  const coverStyle = css({
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px"
  });

  return (
    <button
      onClick={handleClick}
      type="button"
      css={planeStyle.name ? buttonStyle : buttonSelectedStyle}
    >
      {showColorPicker ? (
        <div css={popoverStyle}>
          <div onClick={handleClose} css={coverStyle} />
          <ChromePicker
            color={planeStyle.color ? planeStyle.color : "white"}
            onChange={handleChange}
          />
        </div>
      ) : null}
    </button>
  );
}
