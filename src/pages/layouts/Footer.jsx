import React from "react";
import styled from "styled-components";


const pickFilter = (name) => {

  if(name === 'dark'){
    return 'invert(1)'
  } else {
    return 'none'
  }

}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0px auto;
  background: ${({ theme }) => theme.footerBackground || theme.navBackground};
  width: 100%;
  /*stick to bottom of main*/
  flex-shrink: 0;
  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    filter: ${({theme}) => pickFilter(theme.name)}
  }

  a {
    text-align: center;
    width: 200px;
    display: flex;
    justify-content: center;
    padding: 5px 0;

  }

  span {
    
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    height: 80px
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <a href="mailto:geer.alex@gmail.com">geer.alex@gmail.com</a>
      <a href="https://github.com/alexgeer">
        <img src="images/github.png" />
      </a>
    </FooterContainer>
  );
};

export default Footer;
