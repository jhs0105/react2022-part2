import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  *,*:before ,*:after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Poppins',"Noto Sans KR","sans-serif";
    background-color: #333;
  }
  input,textarea,button, select{
    font-family: inherit;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  li{
    list-style: none;
  }
  button{
    border:none;
    outline:none;
    font-family: inherit;
    background: none;
  }
  input[type="text"],textarea{
    outline: none;
    border: none;
    background-color: #fff;
    color:#111;
    border-radius: 5px;
    min-height: 50px;
    padding: 0 15px;
  }
  select{
    outline: none;
    border: none;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
  }
  img{
    vertical-align: top;
  }


`;

export default GlobalStyle;
