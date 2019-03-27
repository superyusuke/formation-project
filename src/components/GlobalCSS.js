import React from "react"
import { Global, css } from "@emotion/core"
import emotionReset from "emotion-reset"
// import { MenuContent } from "src/content/Content";

const GlobalCSS = () => {
  // const { menuState } = useContext(MenuContent);
  // メニューを開いた時用のやつ
  const menuState = true
  return (
    <Global
      styles={css`
        ${emotionReset}
        body {
          margin: 0;
          overflow: ${menuState ? "hidden" : "visible"};
          background: red;
        }
        * {
          font-weight: normal;
          font-family: "Hiragino Kaku Gothic ProN", "游ゴシック Medium", meiryo,
            sans-serif;
        }
      `}
    />
  )
}

export default GlobalCSS
