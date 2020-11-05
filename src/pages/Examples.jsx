import React from "react";
import ThemePicker from "../components/ThemePicker";
import Container from "./layouts/Container";
import PageWrapper from "./layouts/PageWrapper";
import styled from "styled-components";

const StyledThemePicker = styled(ThemePicker)`
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: space-around;

  .container-content {
    margin: 0;
  }
  `

function Examples({ setTheme, setThemeUserSelected, currentTheme }) {
  return (
    <PageWrapper>
      
      <h2 className="page-header">Examples</h2>
      <h3 className="subheader">
        Some examples of React components, async calls, etc
      </h3>
      <Container className={"material-container"}>
        <div className="container-header">
          <h3 className="material-h3">THEME SELECTOR</h3>
        </div>
        <div className="container-content">
          <div className="container-text">
            <p>
              To demonstrate a React's "reactivity", the app will change theme
              based on route. Using the theme picker allows you to see what a
              theme looks like when applied to the whole app.{" "}
            </p>
          </div>
          <StyledThemePicker
            setTheme={setTheme}
            setThemeUserSelected={setThemeUserSelected}
            currentTheme={currentTheme}
          />
        </div>
      </Container>

    </PageWrapper>
  );
}

export default Examples;
