import React from "react";
import styled from "styled-components";
import Container from "../pages/layouts/Container";
import themes from '../styles/themes'
const ThemePicker = ({ className, setTheme, setThemeUserSelected }) => {

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
        <div className="themes-container">
          {
              Object.entries(themes).map(([key, val]) => 
                <StyledThemeButton bg={val.background} border={val.color1} key={key} theme={key} handleClick={handleClick}/>)
          }
        </div>
      </div>
    </Container>
  );
};

const ThemeButton = ({className, theme, handleClick}) =>
    <div className={className}>
        <button className={"button-"+theme} onClick={e => handleClick(theme)}></button>
        <label htmlFor={"button-"+theme}>{theme}</label>
    </div>


const StyledThemeButton = styled(ThemeButton)`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    justify-content: space-around;
    align-items: center;
    padding: 8px;

  }
`;

export default StyledThemePicker;
