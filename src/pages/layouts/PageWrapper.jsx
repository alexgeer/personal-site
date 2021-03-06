import React from "react";
import styled from "styled-components";
import {fadeIn} from '../../styles/anim'


let Wrapper = styled.div`
flex: 1 0 auto;
animation: ${fadeIn} 0.4s;

padding: 65px 8px 0px 8px;;
width: 100%;

display: flex;
flex-direction: column;

 color:${(props) => props.theme.color1};

  h2{
    font-size: 60px;

      @media screen and (min-width:600px) {
      font-size: 70px;
  }
  }

  .page-header {
    text-align: center;
    margin: 30px 0;
    line-height:1;
  }

  .subheader {
    color: ${props => props.theme.color3};
    font-size: 35px;
    margin: 10px auto 20px;
    width: 90%;
    line-height: 1.2;
    min-height: 84px;
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
    text-indent: 0px;
    line-height: 1.4;
}



/* desktop  */
@media only screen and (min-width: 600px) {
    margin: 0 auto;
    padding: 70px 40px 0px 40px;
    max-width: 900px; 

    .page-header {
    margin: 40px auto 10px;
  } 
  }

  @media (orientation: landscape) {
    
}


`;

export default Wrapper;
