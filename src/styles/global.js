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
    background: ${(props) => props.theme.background};
  }

  header {
    height: 0;
  }
  body, input, button {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font: 14px 'Oswald', sans-serif;

  }
  a {
    color:${(props) => props.theme.color1};
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
.shadow-2{
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}
  .shadow-3{
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  }

  .shadow-4 {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  }
`;