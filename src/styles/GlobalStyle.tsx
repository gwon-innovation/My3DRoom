import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css");

        ${emotionReset}

        html {
          font-size: 62.5%;
        }

        body {
          background-color: #ffffff;
          width: 100%;
          height: 100%;
          min-height: 100vh;
        }
      `}
    />
  );
}
