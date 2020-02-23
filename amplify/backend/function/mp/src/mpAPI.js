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
    const ticks = JSON.parse(res1.body).ticks;

    //map the tick list to a list of just ids and join with ','
    const routeIds = ticks.map(x => x.routeId).join();

    const routesArg = url.format({
      protocol: "https",
      hostname: "mountainproject.com",
      pathname: "/data/get-routes",
      query: {
        routeIds,
        key
      }
    });


    request(routesArg, (err2, res2) => {
      if (err2) throw err2;

      let ticks = JSON.parse(res2.body).routes

      let body = {
        routes: [
          { x: "5.6", y: 0 },
          { x: "5.7", y: 0 },
          { x: "5.8", y: 0 },
          { x: "5.9", y: 0 },
          { x: "5.10", y: 0 },
          { x: "5.11", y: 0 },
          { x: "5.12", y: 0 }
        ],
        boulders: [
          { x: "V0", y: 0 },
          { x: "V1", y: 0 },
          { x: "V2", y: 0 },
          { x: "V3", y: 0 },
          { x: "V4", y: 0 },
          { x: "V5", y: 0 },
          { x: "V6", y: 0 }
        ]
      };

      ticks.forEach(t => {
        let d;
        
        if (t.type !== "Boulder")
          d = body.routes.find(e => t.rating.startsWith(e.x));
        else d = body.boulders.find(e => t.rating.startsWith(e.x));

        if (d === undefined) return;

        d.y++;
      });
      //send only the routes
      cb(body);
    });
  });
};

module.exports = mpAPI;
