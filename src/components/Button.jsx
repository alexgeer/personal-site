import React from "react";
import styled from "styled-components";

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  className,
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export const StyledButton = styled(Button)`
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  text-align: center;
`;

export const LinkButton = styled.a`
  cursor: pointer;
  padding: 12px 8px;  
  border-radius: 5px;
  width: 100%;
  font-size: 1.5em;
  text-decoration: none;
  text-align: center;

  background-color:${({theme}) => theme.color3};
  color: ${({theme}) => theme.background};
  :hover {
      background-color: ${({theme}) => theme.background};
      border: solid 1px ${({theme}) => theme.color3};
      color: ${({theme}) => theme.color3};
  }

`
