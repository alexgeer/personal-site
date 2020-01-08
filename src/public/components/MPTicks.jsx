import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { API } from "aws-amplify";
const mpApiCall = () => {
  let call = async () => {
    try {
      const data = await API.get("api", "/ticks");
      console.log(data);
    } catch (err) {}
  };
};

let Tick = ({ tick }) => (
  <li>
    <ul>
      <li><h4> {tick.route.name} -- {tick.route.type} -- {tick.route.rating}</h4></li>
<li><h5>{tick.route.location.join(' | ')}</h5></li>
      <li><p>Date: {tick.date} </p></li>
      <li><p>My notes: {tick.notes} </p></li>
      <li>
        <img src={tick.route.imgSmall}  />{" "}
      </li>
    </ul>
  </li>
);

let Container = () => {
  let [ticks, setTicks] = useState([]);
  let [routes, setRoutes] = useState([]);

  console.log(ticks);

  useEffect(() => {
    //we have to define the async func w/i the hook
    let call = async () => {
      try {
        const data = await API.get("api", "/ticks");
        console.log(data);
        data.ticks.forEach(t => {
          let found = data.routes.find(r => r.id === t.routeId);
          //add the route to the tick
          t.route = found;
        });

        setTicks(data.ticks);
        console.log(ticks);
      } catch (err) {}
    };
    //call it right aways
    call();
  }, []);

  return (
    <div>
      <h3>Mountain Project Ticks</h3>
      <p>My four most recent climbs that I bothered to tick on Mountain Project, pulled from the MP data API</p>
      <p>This API call is made on the backend from an AWS lambda function</p>
      <ul>
        {ticks.map(t => (
          <Tick tick={t} key={t.routeId} />
        ))}
      </ul>
    </div>
  );
};

export default Container;
