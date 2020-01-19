import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getAPI from "./DynamicAPI";
import Spinner from "./LoadingSpinner";

import Container from "../pages/layouts/Container";

const TickItem = styled.li``;

let StyledContainer = styled(Container)`
  margin-bottom: 30px;
  width: 100%;

  @media only screen and (min-width: 600px) {
    min-width: 550px;
  }

  p {
    margin: 0;
  }
`;

const TickList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Thumbnail = props => (
  <li className={props.className}>
    <img className="shadow-4" src={props.src} alt="" />
  </li>
);

const StyledThumbnail = styled(Thumbnail)`
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 0 5px;

  border-radius: 5px;

  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const Tick = ({ tick, selected }) => {
  if (selected)
    return (
      <TickItem>
        <ul>
          <li>
            <h4>
              {" "}
              {tick.route.name} -- {tick.route.type} -- {tick.route.rating}
            </h4>
          </li>
          <li>
            <h5>{tick.route.location.join(" | ")}</h5>
          </li>
          <li>
            <p>Date: {tick.date} </p>
          </li>
          <li>
            <p>My notes: {tick.notes} </p>
          </li>
          <li>
            <img src={tick.route.imgSqSmall} />{" "}
          </li>
        </ul>
      </TickItem>
    );

  return <StyledThumbnail className={"thumbnail"} src={tick.route.imgSqSmall} />;
};

const MPTicks = () => {
  let [ticks, setTicks] = useState([]);
  let [loading, setLoading] = useState(true);

  let mounted = false;

  useEffect(() => {
    mounted = true;
    //we have to define the async func w/i the hook
    let call = async () => {
      try {
        //call dynamic import
        /**
         * since the API call only happens in this component we can
         * greatly diminish the bundle size (33%!!) by splitting the AWS modules import off in its own file
         */
        const API = await getAPI();
        let data = await API.get("api", "/ticks");

        //map the routes to the ticks
        data.ticks.forEach(t => {
          let found = data.routes.find(r => r.id === t.routeId);
          //add the route to the tick
          t.route = found;
        });

        //update state
        if (mounted) setTicks(data.ticks);
        // setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    //call it right aways
    call();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <StyledContainer className="material-container">
      <div className="container-header">
        <h3 className="material-h3">MOUNTAIN PROJECT DATA API</h3>
      </div>
      <div className="container-content">
        <div className='container-text'>
        <p>
          My four most recent climbs that I bothered to tick on Mountain
          Project, pulled from the{" "}
          <a href="https://www.mountainproject.com/data">MP data API</a>
        </p>
        <p>This API call is made on the backend from an AWS lambda function</p>
        </div>
        {/* {loading && <Spinner cnProp = {'spinner'}/>} */}

        <TickList>
          {ticks.map(t => (
            <Tick tick={t} key={t.routeId} />
          ))}
        </TickList>
      </div>
    </StyledContainer>
  );
};

const StyledMPTicks = styled(MPTicks)`
  color: purple;
  font-size: 300px;
`;
export default MPTicks;
