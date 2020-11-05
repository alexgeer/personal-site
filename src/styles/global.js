import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Oswald|Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Merriweather&display=swap');
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
  
  html, body, #app{
    
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.background};
  }

  header {
    height: 0;
  }
  body, input, button {
    font-family:   ${props => props.theme.font1};
  }
;
  h1, h2, h3, h4, h5 {
    font: 14px   ${props => props.theme.font2};
  }

  h2 {
    font-weight: ${props => props.theme.h2weight}
  }
  
  a {
    color:${props => props.theme.color1};
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  .material-container {
    border: 1px solid rgba(0,0,0,0.3);
    transition: 0.3s ease-in;
    


  }
  .material-container:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .material-h3 {
    font-size: .875rem !important;
    line-height: 2.25rem;
    -webkit-font-smoothing: antialiased;
    font-weight: 500 !important;
    letter-spacing: .0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    
  }

  a.inline-link {
      color: ${props => props.theme.color3}
    }

  a.inline-link:hover {
      text-decoration: underline;
      font-weight: 600;
    }
`;
