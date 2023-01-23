/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Home() {
  const containerStyle = css({
    width: "100%",
    height: "100vh",
    background: "#121212",
    color: "#FFFFFF"
  });
  return <div css={containerStyle}>Home</div>;
}
