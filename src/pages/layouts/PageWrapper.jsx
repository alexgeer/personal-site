import React from "react";
import styled from "styled-components";
import {fadeIn} from '../../styles/anim'
let Wrapper = styled.div`
animation: ${fadeIn} 0.4s;
padding: 40px 8px 0px 8px;;
width: 100%;


 color:${(props) => props.theme.color1};

  h2{
      font-size: 70px;
  }

  .page-header {
    margin: 40px 25px;
  }

  .subheader {
    color: ${props => props.theme.color3};
    font-size: 35px;
    margin: 0 auto 20px;
    width: 90%;
  }
  h3 {
      font-size: 40px;
  }

  h4{
    font-size: 30px;
    font-family: ${props => props.theme.font1};
  }

  h5 {
    font-size: 20px;
    color: ${(props) => props.theme.color2};
    font-family: ${props => props.theme.font1};

  }
p{
    /* margin: 25px; */
    color:${(props) => props.theme.color2};
    text-indent: 20px;
}

/* desktop  */
@media only screen and (min-width: 600px) {
    margin: 120px auto 100px;
    padding: 0 40px;

    max-width: 900px;
    display: flex;
    flex-direction: column;
    .page-header {
    margin: 40px auto 10px;
  } 
  }
`;

export default Wrapper;
