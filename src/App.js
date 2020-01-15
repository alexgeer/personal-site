import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/global";
import themes from "./styles/themes";

import { Header, Main } from "./pages/layouts";
import routes from "./routes";
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";

window.secretMessage = "please hire mme";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Header routes={routes} />
      <Main className="main">
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </Main>
    </div>
  );
};

export default App;

ReactDOM.render(
  <Router>
    <ThemeProvider theme={themes.main}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </Router>,
  document.getElementById("app")
);
