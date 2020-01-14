import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getAPI from './DynamicAPI'
import Spinner from './LoadingSpinner'


const Tick = ({ tick }) => (
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


const Container = () => {
  let [ticks, setTicks] = useState([]);
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    //we have to define the async func w/i the hook
    let call = async () => {
      try {

        //call dynamic import
        /**
         * since the API call only happens in this component we can
         * greatly diminish the bundle size (33%!!) by splitting the AWS modules import off in its own file
         */
        const API = await getAPI()
        let data = await API.get("api", "/ticks")

        //map the routes to the ticks
        data.ticks.forEach(t => {
          let found = data.routes.find(r => r.id === t.routeId);
          //add the route to the tick
          t.route = found;
        });

        //update state
        setTicks(data.ticks);
        // setLoading(false);

      } catch (err) {console.error(err)}
    };
    //call it right aways
    call();
  }, []);

  return (
    <div>
      <h3>Mountain Project Ticks</h3>
      <p>My four most recent climbs that I bothered to tick on Mountain Project, pulled from the MP data API</p>
      <p>This API call is made on the backend from an AWS lambda function</p>

      {/* {loading && <Spinner cnProp = {'spinner'}/>} */}

      <ul>
        {ticks.map(t => (
          <Tick tick={t} key={t.routeId} />
        ))}
      </ul>
    </div>
  );
};



const StyledContainer = styled(Container)`
color:purple;
font-size: 300px;

`
export default StyledContainer
