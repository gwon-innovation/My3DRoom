/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IFloorArea } from "models";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IFloorControllerProps {
  floorXZ: IFloorArea;
  setFloorXZ: Dispatch<SetStateAction<IFloorArea>>;
}

export function FloorController({
  floorXZ,
  setFloorXZ
}: IFloorControllerProps) {
  const handleInputX = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFloorXZ({ x: Number(value), z: floorXZ.z });
  };
  const handleInputY = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFloorXZ({ x: floorXZ.x, z: Number(value) });
  };

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

  return (
    <div css={containerStyle}>
      <div css={flexRow}>
        <p>x </p>
        <div css={{ width: "1rem" }} />
        <input
          onChange={handleInputX}
          type="range"
          min={1}
          max={10}
          step={0.1}
          value={floorXZ.x}
        />
        <div css={{ width: "1rem" }} />
        <p>{floorXZ.x}</p>
      </div>
      <div css={flexRow}>
        <p>y </p>
        <div css={{ width: "1rem" }} />
        <input
          onChange={handleInputY}
          type="range"
          min={1}
          max={10}
          step={0.1}
          value={floorXZ.z}
        />
        <div css={{ width: "1rem" }} />
        <p>{floorXZ.z}</p>
      </div>
    </div>
  );
}
