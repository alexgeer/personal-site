import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import getAPI from "./DynamicAPI";

import Container from "../pages/layouts/Container";
import {
  XYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from "react-vis";

const StyledContainer = styled(Container)`
  margin-bottom: 30px;
  width: 100%;

  @media only screen and (min-width: 600px) {
    min-width: 550px;
  }

  p {
    margin: 0;
  }
`;

const StyledButton = styled.button`
  width: 70px;
  height: 30px;

  margin: 0 10px;
  border-radius: 5px;

  background-color:${ ({theme}) => theme.color2};
  color: ${ ({theme}) => theme.background};

  &:hover {
    background-color: ${ ({theme}) => theme.color3};
    color: ${ ({theme}) => theme.background};

  }
`
const Graph = withTheme(({ data, theme }) => {
  return (
    <div>
      <XYPlot
        yDomain={[0, 15]}
        animation
        xType="ordinal"
        width={window.innerWidth > 600 ? 600 : 300}
        height={300}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis style={{text:{fill:theme.color1}}} animation={false}/>
        <YAxis style={{text:{fill:theme.color1}}} />
        <VerticalBarSeries color={theme.color3} data={data} />
      </XYPlot>
    </div>
  );
})

const useMPAPI = (setTicks, cleanUp) => {
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
        const data = await API.get("api", "/ticks");

        // //map the routes to the ticks
        // data.ticks.forEach(t => {
        //   let found = data.routes.find(r => r.id === t.routeId);
        //   //add the route to the tick
        //   t.route = found;
        // });

        let temp = {
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

        data.routes.forEach(r => {
          let d;
          if (r.type !== "Boulder")
            d = temp.routes.find(e => r.rating.startsWith(e.x));
          else d = temp.boulders.find(e => r.rating.startsWith(e.x));

          if (d === undefined) return;

          d.y++;
        });
        //update state
        if (mounted) setTicks(temp);
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
};

const MPTicks = () => {
  //initial value for tick data
  let temp = {
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

  const [ticks, setTicks] = useState(temp);
  const [selected, setSelected] = useState('routes');

  useMPAPI(setTicks);

  return (
    <StyledContainer className="material-container">
      <div className="container-header">
        <h3 className="material-h3">MOUNTAIN PROJECT DATA API</h3>
      </div>
      <div className="container-content">
        <div className="container-text">
          <p className="container-text">
            Visualization of climbs that I bothered to post on Mountain Project,
            pulled from my profile via the{" "}
            <a
              className="inline-link"
              href="https://www.mountainproject.com/data"
            >
              MP data API
            </a>
            .
          </p>
          <p className="container-text">
            The data is fetched from Mountain Project on my serverless backend
            from an AWS lambda and delivered to the app. The graph is made using
            react-vis, a component library built around d3, and is developed by
            Uber.
          </p>
          <StyledButton onClick={() => setSelected('routes')}>routes</StyledButton>
          <StyledButton onClick={() => setSelected('boulders')}>boulders</StyledButton>
          <Graph data={ticks[selected]} />
        </div>
        {/* {loading && <Spinner cnProp = {'spinner'}/>} */}
      </div>
    </StyledContainer>
  );
};

export default MPTicks;
