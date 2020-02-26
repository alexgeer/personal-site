import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;
 margin: 0px auto;
 padding: 10px 0px 10px 0px;
 background: ${ ({theme}) => theme.navBackground };

  img {
    height: auto;
    width: 50px;
  }

  img, a {
          padding: 5px 0;
      }
  @media only screen and (min-width: 600px){
      flex-direction: row;
     
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a href="mailto:geer.alex@gmail.com">geer.alex@gmail.com</a>
      <a href="https://github.com/alexgeer">
        <img src="images/github.png" />
      </a>
      <a href="tel:1-904-699-5831">1.904.699.5831</a>
    </FooterContainer>
  );
};

export default Footer;