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
   
    <App />
  </Router>,
  document.getElementById("app")
);
