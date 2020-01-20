import React from "react";
import Lev from "../components/Lev";
import MPTicks from "../components/MPTicks";
import ThemePicker from "../components/ThemePicker";
import PageWrapper from './layouts/PageWrapper'


function Examples({setTheme, setThemeUserSelected, currentTheme}) {
  return (
    <PageWrapper>
      <h2 className='page-header'>Examples</h2>
      <h3 className='subheader'>Some examples of React components, async calls, and so on</h3> 
      <ThemePicker setTheme={setTheme} setThemeUserSelected={setThemeUserSelected} currentTheme={currentTheme}/>
      <Lev/>
      <MPTicks/>
    </PageWrapper>
  );
}

export default Examples;
