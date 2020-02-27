import React from "react";
import Home from "./pages/Home";
import styled from 'styled-components'
import {blinking} from './styles/anim'

const About = React.lazy(() =>
  import(/* webpackChunkName: "about" */ "./pages/About")
);
const Examples = React.lazy(() =>
  import(/* webpackChunkName: "examples" */ "./pages/Examples")
);
const Work = React.lazy(() =>
  import(/* webpackChunkName: "work" */ "./pages/Work")
);

const FallBack = ( {className} ) => 
<div className={className}>
  lazy loading chunk...
</div>

const NoMatch = ( {className} ) => 
<div className={className}>
  404 - route not found
  <img src="images/picard.jpg" alt=""/>
</div>

const StyledFallBack = styled(FallBack)`
text-align: center;
height: 1000px;
padding-top: 30%;
animation: ${blinking} .9s infinite;
`
const StyledNoMatch = styled(NoMatch)`
text-align: center;
height: ${window.innerHeight}px;
padding-top: 100px;
img {
  width: 100%;
  height: auto;
  max-width: 700px;
  min-width: 300px;
}
`

const routes = [
  {
    path: "/",
    exact: true,
    label: "/",
    main: () => <Home />
  },
  {
    path: "/about",
    sidebar: () => <div>About</div>,
    label: "about",
    main: () => (
      <React.Suspense fallback={<StyledFallBack/>}>
        <About />
      </React.Suspense>
    )
  },
  {
    path: "/examples",
    label: "eg",
    main: ({ setTheme, setThemeUserSelected, currentTheme }) => (
      <React.Suspense fallback={<StyledFallBack/>}>
        <Examples
          currentTheme={currentTheme}
          setTheme={setTheme}
          setThemeUserSelected={setThemeUserSelected}
        />
      </React.Suspense>
    )
  },
  {
    path: "/work",
    label: "work",
    main: () => (
      <React.Suspense fallback={<StyledFallBack/>}>
        <Work />
      </React.Suspense>
    )
  },
  {
      path:'/*',
      sidebar: false,
      main: () => <StyledNoMatch/>
  }
];

export default routes;
