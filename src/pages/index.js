/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css, keyframes } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image from "src/images/photo/groupPhoto.jpg"
import logo from "src/images/formationLogo.png"

const wrapper = css``

const logoStyle = css`
  position: absolute;
  width: 10vw;
  height: 10vw;
  left: 3vw;
  top: 3vh;
`

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    opacity: 0.5;
  }

  40%, 43% {
    opacity: 0.6;
  }

  70% {
    opacity: 0.3;
  }

  90% {
    opacity: 0.6;
  }
`

const textStyle = css`
  animation: ${bounce} 3s ease infinite;
  position: absolute;
  color: white;
  width: 50vw;
  margin: auto;
  top: 30vh;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.6;
  font-weight: bold;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div css={wrapper}>
      <img css={logoStyle} src={logo} alt="" />
      <p css={textStyle}>
        どうしようもないこんな世の中だけど、僕らには音楽がある。友達がいる。もしきみが今すごくつらいなら僕らと一緒にいたらいい。一緒にグッドミュージックで踊ったり踊らなかったりしよう。ただ一緒にいよう。FORMATIONを組もう。
      </p>
      <div>
        <img src={image} alt="" style={{ display: "block", width: "100%" }} />
      </div>
    </div>
  </Layout>
)

export default IndexPage
