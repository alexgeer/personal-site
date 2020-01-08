let request = require("request");

const key = "200482368-5035b32ae16f7fd445d1c8d37b38dc0e";

const mpAPI = (cb) => {
  let arg =
    "https://www.mountainproject.com/data/get-ticks" +
    "?email=geer.alex@gmail.com" +
    "&key=" +
    key;

  request(arg, (err1, res1, body1) => {
    if (err1) throw err1;

    let ticks = JSON.parse(res1.body);

    let routeIds =
      "" +
      ticks.ticks[0].routeId +
      "," +
      ticks.ticks[1].routeId +
      "," +
      ticks.ticks[2].routeId +
      "," +
      ticks.ticks[3].routeId;

    let routesArg =
      "https://www.mountainproject.com/data/get-routes?" +
      "routeIds=" +
      routeIds +
      "&key=" +
      key;
    console.log(routesArg);

    request(routesArg, (err2, res2, body2) => {
      if (err2) throw err2;
      console.log(res2);

      let routes;
      routes = JSON.parse(res2.body);
      
      cb(routes, ticks)
    });
  });
};
