/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/**********************
 * Example get method *
 **********************/

app.get("/ticks", function(req, res) {
  // Add your code here
  let key = "200482368-5035b32ae16f7fd445d1c8d37b38dc0e";
  let arg =
    "https://www.mountainproject.com/data/get-ticks" +
    "?email=geer.alex@gmail.com" +
    "&key=" +
    key;

  request(arg, (err1, res1, body1) => {
    if(err1)
      res.json(err1)
      
    let ticks;

    try {
      ticks = JSON.parse(r.body);
    } catch (err) {
      res.json({ err });
    }

    let routeIds = "";

    routeIds +=
      ticks.ticks[0].routeId +
      "," +
      ticks.ticks[1].routeId +
      "," +
      ticks.ticks[2].routeId +
      "," +
      ticks.ticks[3].routeId;

    let routesArg =
      "https://www.mountainproject.com/data/getRoutes?" +
      "routeIds=" +
      routeIds +
      "&key=" +
      key;
    
    request(routesArg, (err2, res2, body2) => {
      if(err2)
        res.json(err2)
        
      try {
        let routes = JSON.parse(res.body);
      } catch (err) {
        res.json({ err });
      }

      try {
        let climbs = [];
        climbs[0] = {
          tick: ticks[0],
          route: routes[0]
        };
        climbs[1] = {
          tick: ticks[1],
          route: routes[1]
        };
        climbs[2] = {
          tick: ticks[2],
          route: routes[2]
        };
        climbs[3] = {
          tick: ticks[3],
          route: routes[3]
        };
      } catch (err) {
        res.json({ err });
      }

      res.json({ climbs, url: req.url });
    });
  });
});

app.get("/ticks/*", function(req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/ticks", function(req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/ticks/*", function(req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/ticks", function(req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/ticks/*", function(req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/ticks", function(req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/ticks/*", function(req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function() {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
