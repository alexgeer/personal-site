import React from "react";
import Home from "./pages/Home";

const About = React.lazy(() =>
  import(/* webpackChunkName: "about" */ "./pages/About")
);
const Examples = React.lazy(() =>
  import(/* webpackChunkName: "examples" */ "./pages/Examples")
);
const Work = React.lazy(() =>
  import(/* webpackChunkName: "work" */ "./pages/Work")
);

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
    label: "/about",
    main: () => (
      <React.Suspense fallback={<div></div>}>
        <About />
      </React.Suspense>
    )
  },
  {
    path: "/examples",
    label: "/eg",
    main: ({ setTheme, setThemeUserSelected, currentTheme }) => (
      <React.Suspense fallback={<div></div>}>
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
    label: "/work",
    main: () => (
      <React.Suspense fallback={<div></div>}>
        <Work />
      </React.Suspense>
    )
  }
  // {
  //     path:'/*',
  //     sidebar: false,
  //     main: () => <NoMatch/>
  // }
];

export default routes;
