import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/global";
import themes from "./styles/themes";

import { Header, Main, Footer} from "./pages/layouts";
import routes from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import { ThemeProvider } from "styled-components";

window.secretMessage = "please hire mme";
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}


const App = withRouter(props => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [themeUserSelected, setThemeUserSelected] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    //delay the scroll until everything is rendered otherwise the window won't scroll to the top
    //this bug only occurs on firefox... i don't yet understand why
    //the cause may be lazy loading the pages based on route

    window.scrollTo(0, 0)

  }, [pathname]);

  // useEffect(() => {
  //   let timer = setTimeout(() => setLoading(false), 5000);

  //   //cleanup
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <Header routes={routes} />
      <Main className="main">
        <Switch>
          {routes.map( (route, index) => (
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
      <Footer/>
      <GlobalStyles />
    </ThemeProvider>
  );
});

export default App;

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById("app")
);
