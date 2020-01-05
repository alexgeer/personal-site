import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Oswald&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0; 
    border: 0;
    box-sizing: border-box;
  }
  
  *:focus {
    outline: 0;
  }
  html{
    scroll-behavior: smooth;
  }
  html, body, #app {
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
    
  }
  body {
    -webkit-font-smoothing: antialiased;
    color:	rgb(255, 255, 153);
    background: #a0a0a0;
  }

  header {
    height: 0;
  }
  body, input, button {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font: 14px 'Oswald', sans-serif;

  }
  a {
    color:cornsilk;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;