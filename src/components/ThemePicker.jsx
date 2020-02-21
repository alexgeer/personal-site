import React, {useState} from "react";
import styled from "styled-components";
import Container from "../pages/layouts/Container";
import themes from '../styles/themes'

const ThemePicker = ({ className, setTheme, setThemeUserSelected, currentTheme}) => {


    let handleClick = (theme) => {
        setThemeUserSelected(true)
        setTheme(theme)
    }

  return (
    <Container className={className + " material-container"}>
      <div className="container-header">
        <h3 className="material-h3">THEME SELECTOR</h3>
      </div>
      <div className="container-content">
        <div className="container-text">
          <p>To demonstrate a React's "reactivity", the app will change theme based on route. Using the theme picker allows you to see what a theme looks
            like when applied to the whole app. </p>
        </div>
        <div className="themes-container">
          {
              Object.entries(themes).map(([key, val]) => 
                <StyledThemeButton 
                bg={val.background} 
                border={val.color1} 
                hover={val.hover || val.color3}
                key={key} 
                themeKey={key} 
                nameProp={val.name} 
                selected={currentTheme === key}
                handleClick={handleClick}/>)
          }
        </div>
      </div>
    </Container>
  );
};

const ThemeButton = ({className, themeKey, handleClick, selected, nameProp}) =>
<div className={className}>
    <div className={`button-wrapper ${selected && 'selected'}`}>
        <button id={"button-"+themeKey} onClick={e => handleClick(themeKey)}></button>
    </div>
    <label htmlFor={"button-"+themeKey}>
        {nameProp}
    </label>
</div>

const StyledThemeButton = styled(ThemeButton)`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .button-wrapper {
        padding: 8px;
        border-radius: 100%;
    }
    
 

    .button-wrapper:hover {
        background: ${props => props.hover};

    }

    .button-wrapper.selected {
        border: solid 3px ${props => props.hover};
        padding: 5px;
    }
    label {
      width: 100px;
      text-align: center;
    }
    button {
    background-color: ${props => props.bg};
    border: solid 8px ${props => props.border};
    height: 40px;
    width: 40px;
    border-radius: 100%;
    }
`

const StyledThemePicker = styled(ThemePicker)`
  margin-bottom: 30px;

    .container-content {
        margin: 0;

    }
  .themes-container {
    display: flex;
    flex-direction: row;
    padding: 8px;
    justify-content: space-around;
  }
`;

export default StyledThemePicker;
