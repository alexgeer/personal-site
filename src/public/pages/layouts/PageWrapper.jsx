import React from "react";
import styled from "styled-components";

let Wrapper = styled.div`
padding: 80px 15px 15px 15px;
/* desktop  */
  @media only screen and (min-width: 600px) {
    padding: 20vh 15px 10px 15px;
    margin-left: 163px;
  }
 color:cornsilk;

  h2{
      font-size: 70px;
  }

  h3 {
      font-size: 40px;
  }
p{
    margin: 25px;
    color:white;
    text-indent: 20px;
}
`;

export default Wrapper;
