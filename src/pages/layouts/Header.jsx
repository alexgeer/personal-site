import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { navDropIn } from "../../styles/anim";

const Nav = styled.nav`
  width: 100%;
  height: 50px;

  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */

  display: flex;

  a {
    color: ${props => props.theme.color1};
  }

  /* margin-top: 37.4px;
    margin-left: 37.4px; */

  /*style the ul for mobile*/
  ul {
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
  }
`;

const ListItem = styled.li`
  @media screen and (min-width: 600px) {
    display: block;
  }
  /* font: 1.3rem Inconsolata, monospace; */
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

const Brand = styled(Link)`
  z-index: 1;
  height: 50px;
  text-align: center;

  border-top: 5px solid ${props => props.theme.color1};
  display: flex;
  justify-content: center;
  font-size: 30px;
  /* margin-bottom: 20px; */
  color: ${({ theme }) => theme.color1};
`;


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  background-color: ${props => props.theme.navBackground};

  /* scroll hiding */
  top: 0;
  transition: top 1s linear;
  width: 100%;
  padding-top: 20px;

  animation: ${navDropIn} 1s cubic-bezier(0.11, 0.82, 0.55, 0.97);
`;

function Header({ routes, timing }) {
  let [visible, setVisible] = useState(true);
  let [prevScrollPosition, setPrevScrollPosition] = useState(0);

  let handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPosition > currentScrollPos) | (currentScrollPos <= 0)
    );
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
        <Nav>
          <ul className="nav-list">
            <li>
              <Brand to="/">ALEX</Brand>
            </li>
            {routes.map((route, index) => {

              if(route.path === "/")
                  return
              return (
              <ListItem key={index}>
                <Link to={route.path}>{route.label}</Link>
              </ListItem>)
            })}
          </ul>
        </Nav>
      </Container>
    </header>
  );
}

export default Header;
