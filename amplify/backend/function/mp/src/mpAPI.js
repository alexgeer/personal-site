let request = require("request");
let url = require("url");

const key = "200482368-5035b32ae16f7fd445d1c8d37b38dc0e";
const email = "geer.alex@gmail.com";

const mpAPI = cb => {
  let arg = url.format({
    protocol: "https",
    hostname: "mountainproject.com",
    pathname: "/data/get-ticks",
    query: {
      email,
      key
    }
  });
  
  request(arg, (err1, res1, body1) => {
    if (err1) throw err1;

    //res.body should be
    // {
    //   average,
    //   highest,
    //   ticks: []
    // }
    //parse the body and get the tick list
    let ticks = JSON.parse(res1.body).ticks;

    //map the tick list to a list of just ids and join with ','
    let routeIds = ticks.map(x => x.routeId).join();

    let routesArg = url.format({
      protocol: "https",
      hostname: "mountainproject.com",
      pathname: "/data/get-routes",
      query: {
        routeIds,
        key
      }
    });


    request(routesArg, (err2, res2, body2) => {
      if (err2) throw err2;

      let routes;
      routes = JSON.parse(res2.body).routes;
      cb(ticks, routes);
    });
  });
};

module.exports = mpAPI;
