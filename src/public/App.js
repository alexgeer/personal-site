import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/global";

import { Header, Main } from "./pages/layouts";
import routes from "./routes";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
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
    <App />
    <GlobalStyles />
  </Router>,
  document.getElementById("app")
);
