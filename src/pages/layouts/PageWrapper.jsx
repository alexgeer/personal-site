import React from "react";
import styled from "styled-components";
import {fadeIn} from '../../styles/anim'
let Wrapper = styled.div`
animation: ${fadeIn} 0.4s;

padding: 80px 15px 15px 15px;
/* desktop  */
  @media only screen and (min-width: 600px) {
    padding: 20vh 15px 10px 15px;
    margin-left: 163px;
  }

 color:${(props) => props.theme.color1};

  h2{
      font-size: 70px;
  }
  .page-header {
    margin-bottom: 10px;
  }
  h3 {
      font-size: 40px;
  }

  h4{
    font-size: 30px;
  }

  h5 {
    font-size: 20px;
    color: ${(props) => props.theme.color2};
  }
p{
    margin: 25px;
    color:${(props) => props.theme.color2};
    text-indent: 20px;
}
`;

export default Wrapper;
