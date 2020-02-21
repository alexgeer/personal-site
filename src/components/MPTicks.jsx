import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getAPI from "./DynamicAPI";
import Spinner from "./LoadingSpinner";

import Container from "../pages/layouts/Container";

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
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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

const Tick = ({ className, tick, open }) => {
  return (
    <div className={className + ' material-container'}>
      <div className="card-header">
        <div className='card-header-img'><img src={tick.route.imgMedium}></img></div>
        <div className='card-header-text'>
          <a className="inline-link" href={tick.route.url}><h4>{tick.route.name}</h4></a>
          <h5>{tick.route.type + ' -- ' + tick.route.rating}</h5>
          </div>
      </div>  
    </div>
  );
};

const StyledTick = styled(Tick)`

    
  .card-header-text{
    padding: 20px;
    h4{
      font-size: 28px;
    }
    h5 {
      font-size: 15px;
    }

  }

  .card-header-img {
    width: 300px;
    height: 200px;
    overflow: hidden;
  }

  overflow: hidden;
  margin-bottom: 20px;


  .tick-header {
    height: 120px;
    padding: 10px;
    display: flex;

    flex-direction: row;
  }

  @media screen and (min-width: 600px )
  {
   
    .card-header-img{
    width: 450px;
    height: 300px;
    }
  }
`;

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
        let data = await API.get("api", "/stocks/MSFT");

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
        <div className="container-text">
          <p className="container-text">
            My four most recent climbs that I bothered to post on Mountain
            Project, pulled from my profile via the {" "}
            <a
              className="inline-link"
              href="https://www.mountainproject.com/data"
            >
              MP data API
            </a>.
          </p>
          <p className="container-text">
            This API call is made on the backend from an AWS lambda function
          </p>
        </div>
        {/* {loading && <Spinner cnProp = {'spinner'}/>} */}

        <TickList>
          {ticks.map(t => (
            <StyledTick tick={t} open={true} key={t.routeId} />
          ))}
        </TickList>
      </div>
    </StyledContainer>
  );
};


export default MPTicks;
