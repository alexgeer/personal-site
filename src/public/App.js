import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/global";

import { Header, Main } from "./pages/layouts";
import routes from "./routes";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Amplify, { API } from 'aws-amplify';
// import awsconfig from '../aws-exports';

// Amplify.configure(awsconfig);

// const apiTest = async () =>
// {
//   try {

//     const data = await API.get('mp', '/ticks')
//     console.log(data | 'no data')
//   } catch (err) {
//     console.log('error fetching from Lambda API')
//   }
// }

const App = () => {

  useEffect()
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
