import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/global";
import themes from "./styles/themes";

import { Header, Main } from "./pages/layouts";
import routes from "./routes";
import ScrollToTop from "./components/ScrollToTop";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import { ThemeProvider } from "styled-components";

window.secretMessage = "please hire mme";

const App = withRouter(props => {
  let [loading, setLoading] = useState(true);
  let [theme, setTheme] = useState("main");
  let [themeUserSelected, setThemeUserSelected] = useState(false);

  // useEffect(() => {
  //   let timer = setTimeout(() => setLoading(false), 5000);

  //   //cleanup
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    if (!themeUserSelected) {
      switch (props.location.pathname) {
        case "/":
          setTheme("main");
          break;
        case "/about":
          setTheme("main");
          break;
        case "/examples":
          setTheme("bw");
          break;
        case "/work":
          setTheme("blue");
          break;
      }
    }
  });

  return (
    <ThemeProvider theme={themes[theme]}>
      <ScrollToTop />
      <Header routes={routes} />
      <Main className="main">
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main 
                loading={loading} 
              currentTheme={theme} 
              setTheme={setTheme} 
              setThemeUserSelected={setThemeUserSelected} />}
            />
          ))}
        </Switch>
      </Main>
      <GlobalStyles />
    </ThemeProvider>
  );
});

export default App;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
