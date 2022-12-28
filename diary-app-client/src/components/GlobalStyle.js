import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "GangwonEdu";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  *,*:before ,*:after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: "GangwonEdu";
  }
  input,textarea{
    font-family: inherit;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyle;
