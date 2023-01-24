/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction, useState } from "react";
import { ChromePicker } from "react-color";
import { IFloorStyle } from "models";

export interface IColorPickerProps {
  floorStyle: IFloorStyle;
  setFloorStyle: Dispatch<SetStateAction<IFloorStyle>>;
}

export function ColorPicker({ floorStyle, setFloorStyle }: IColorPickerProps) {
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const handleClick = () => {
    setShowColorPicker(!showColorPicker);
  };
  const handleClose = () => {
    setShowColorPicker(false);
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleChange = (color: any) => {
    setFloorStyle({ name: "", src: "", color: color.hex });
  };

  const buttonStyle = css({
    width: "3rem",
    height: "3rem",
    padding: 0,
    border: "none",
    background: floorStyle.color
  });
  const buttonSelectedStyle = css(buttonStyle, {
    border: "4px solid #FFFFFF"
  });
  const popoverStyle = css({
    position: "relative",
    top: "4rem",
    left: "-3rem"
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
      css={floorStyle.name ? buttonStyle : buttonSelectedStyle}
    >
      {showColorPicker ? (
        <div css={popoverStyle}>
          <div onClick={handleClose} css={coverStyle} />
          <ChromePicker
            color={floorStyle.color ? floorStyle.color : "white"}
            onChange={handleChange}
          />
        </div>
      ) : null}
    </button>
  );
}
