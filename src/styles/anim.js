import React from "react";

import { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {opacity: 0.0;}
    to {opacity: 1;}
`

const navDropIn = keyframes`
 0% {
      -webkit-transform: translateY(-300px);
      transform: translateY(-300px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
`


export {fadeIn, navDropIn}