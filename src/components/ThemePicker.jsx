import React from "react";
import styled from "styled-components";
import themes from "../styles/themes";

const ThemePicker = ({
  className,
  setTheme,
  setThemeUserSelected,
  currentTheme,
}) => {
  let handleClick = (theme) => {
    setThemeUserSelected(true);
    setTheme(theme);
  };
  return (
    <div className={className}>
      {Object.entries(themes).map(([key, val]) => (
        <StyledThemeButton
          bg={val.background}
          border={val.color1}
          hover={val.hover || val.color3}
          key={key}
          themeKey={key}
          nameProp={val.name}
          selected={currentTheme === key}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

const ThemeButton = ({
  className,
  themeKey,
  handleClick,
  selected,
  nameProp,
}) => (
  <div className={className}>
    <div className={`button-wrapper ${selected && "selected"}`}>
      <button
        id={"button-" + themeKey}
        onClick={(e) => handleClick(themeKey)}
      ></button>
    </div>
    {nameProp && <label htmlFor={"button-" + themeKey}>{nameProp}</label>}
  </div>
);

const StyledThemeButton = styled(ThemeButton)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .button-wrapper {
    padding: 8px;
    border-radius: 100%;
  }

  .button-wrapper:hover {
    background: ${(props) => props.hover};
  }

  .button-wrapper.selected {
    border: solid 3px ${(props) => props.hover};
    padding: 5px;
  }
  label {
    width: 100px;
    text-align: center;
  }
  button {
    background-color: ${(props) => props.bg};
    border: solid 8px ${(props) => props.border};
    height: 40px;
    width: 40px;
    border-radius: 100%;
  }
`;



  


export default ThemePicker;
