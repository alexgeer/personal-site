import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

let Nav = styled.nav`
  width: 100%;

  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */

  display: flex;

  a {
    color: ${(props) => (props).theme.color1};
  }

  @media only screen and (min-width: 600px) {
    margin-top: 37.4px;
    margin-left: 37.4px;
  }

  /*style the ul for mobile*/
  ul {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    background-color: ${(props) => props.theme.navBackground};

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    animation: slide 1.2s cubic-bezier(0.11, 0.82, 0.55, 0.97);

    @keyframes slide {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }

    li:first-child {
      display:none;
    }

    @media only screen and (min-width: 600px) {
      li:first-child {
      display:block;
    }
    }
  }
`;

let ListItem = styled.li`

  @media screen and (min-width: 600px) {
    display: block;
  }
  font: 1.3rem Inconsolata, monospace;
  /* The navigation menu links*************************** */
  display: block;
  text-decoration: none;
  font-size: 25px;
  transition: 0.3s;

  /* Hover effect */
  &:hover {
    font-size: 30px;
    transition: 0.7s;
  }
`;

let BrandContainer = styled.div`
  z-index: 1;
  height: 50px;
  width: 15%;
  animation: dropin 1s cubic-bezier(0.11, 0.82, 0.55, 0.97);
  background-color: ${(props) => props.theme.navBackground};
  padding:5px 8px 0 8px;
  text-align:center;

  a {
    border-top: 5px solid ${props => props.theme.color1};
    display: flex;
    justify-content: center;
  }
  h2 {
  font-size:30px;
    margin-bottom: 20px;
  color: ${({theme}) => theme.color1}
  }



  @media only screen and (min-width: 600px) {
    width: 20%;

    background-color: rgba(0,0,0,0.0);
    border-right: solid 10px ${props => props.theme.color1};
    height: 240px;
    width: 163px;
    padding: 0 30px 15px 15px;

    a {
      flex-direction: column;
      border: none;
    }
    h2 {
      height: 100px;
    font-size: 100px;
  }
  }

  @keyframes dropin {
    0% {
      -webkit-transform: translateY(-300px);
      transform: translateY(-300px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes dropin {
    0% {
      -webkit-transform: translateY(-300px);
      transform: translateY(-300px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes dropin {
    0% {
      -webkit-transform: translateY(-300px);
      transform: translateY(-300px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  /* scroll hiding */
  top: 0;
  transition: top 1s linear;
  width:100%;

  @media only screen and (min-width:600px)
  {
    padding-top:0;
    width:75%;

  min-width:600px;
  }
  &.hidden {
    top: -300px;
  }
`;

function Header({ routes, timing }) {
  let [visible, setVisible] = useState(true);
  let [prevScrollPosition, setPrevScrollPosition] = useState(0);
  
  let handleScroll = () => {

    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPosition > currentScrollPos | currentScrollPos <= 0);
    setPrevScrollPosition(currentScrollPos);
  };

  // did mount
  useEffect(() => window.addEventListener("scroll", handleScroll));
  //will unmount
  useEffect(() => () => window.removeEventListener("scroll", handleScroll));

  let cn = visible ? "" : "hidden";
  return (
    <header>
      <Container className={cn}>
        <BrandContainer>
          <Link to={"/"}>
            <h2>A</h2>
            <h2>G</h2>
          </Link>
        </BrandContainer>
        <Nav>
          <ul className="nav-list">
            {routes.map((route, index) => (
              <ListItem
                key={index}
                timing={(index + 1) / routes.length}
                position={index * 10}
              >
                <Link to={route.path}>{route.label}</Link>
              </ListItem>
            ))}
          </ul>
        </Nav>
      </Container>
    </header>
  );
}

export default Header;
