import React, {useState, useEffect } from "react";
import ThemePicker from "../components/ThemePicker";
import Lev from "../components/Lev";

import { ExampleContainer } from "./layouts/Container";
import PageWrapper from "./layouts/PageWrapper";
import styled from "styled-components";
import { TwitterTimelineEmbed } from "react-twitter-embed";
const StyledThemePicker = styled(ThemePicker)`
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: space-around;

  .container-content {
    margin: 0;
  }
`;

const pickerText = ["Pick a theme and it will be applied to the whole app."];
const botText = [
  "Twitter bot running on Docker image in an EC2 instance that posts random names. Made in python with tweepy.",
];
const levText = [
  "This is the 'edit' distance between two words. Precisely, this means the number of insertions, substitutions, or deletions required for the source string to match the target. e.g. The distance between 'lore' and 'bored' is 2; by substituting 'b' for 'l' and inserting 'd' at the end.",
];

function Examples({ setTheme, setThemeUserSelected, currentTheme }) {
  return (
    <PageWrapper>
      <h2 className="page-header">Examples</h2>
      <h3 className="subheader">
        Some examples of React components and personal projects
      </h3>
      <div className={"space-apart"}>
        <ExampleContainer margin={'0 0 30px 0'} header={"THEME SELECTOR"} text={pickerText}>
          <StyledThemePicker
            setTheme={setTheme}
            setThemeUserSelected={setThemeUserSelected}
            currentTheme={currentTheme}
          />
        </ExampleContainer>
        <ExampleContainer 
          header={"LEVENSHTEIN DISTANCE CALCULATOR"}
          text={levText}
        >
          <Lev />
        </ExampleContainer>
        <ExampleContainer margin={'0 0 30px 0'}
          header={"TWITTER BOT"}
          text={botText}
        >
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="gravitysNameBot"
            theme={currentTheme == "dark" ? "dark" : "light"}
            options={{ height: 400 }}
          />
        </ExampleContainer>
        
      </div>
    </PageWrapper>
  );
}

export default Examples;
