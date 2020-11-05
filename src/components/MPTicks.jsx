import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
// import getAPI from "./DynamicAPI";
import Container from "../pages/layouts/Container";

import {
  XYPlot,
  VerticalBarSeries,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Crosshair
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

  background-color: ${({ theme }) => theme.color2};
  color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => theme.color3};
    color: ${({ theme }) => theme.background};
  }

  &:focus {
    background-color: ${({ theme }) => theme.color3};
  }
`;

const titleFormat = list => {
  let value = list[0];
  if (value) {
    return {
      title: "grade",
      value: value.x
    };
  }
};

function itemsFormat(values) {
  return values.map((v, i) => {
    if (v) {
      return {value: v.y, title: 'count'};
    }
  });
}


const Graph = withTheme(({ data, theme, loaded, yDomain }) => {
  const [crosshairValues, setCrosshairValues] = useState([]);

  return (
    <div>
      <XYPlot
        yDomain={yDomain}
        animation
        xType="ordinal"
        width={window.innerWidth > 600 ? 600 : 300}
        height={300}
        onMouseLeave={() => setCrosshairValues([])}
      >
        <HorizontalGridLines />
        <XAxis style={{ text: { fill: theme.color1 } }} animation={false} />
         <YAxis style={{ text: { fill: theme.color1 } }} />
        <VerticalBarSeries
          onNearestX={(value) => setCrosshairValues([value])}
          color={theme.color3}
          data={data}
        />
        <Crosshair itemsFormat={itemsFormat} titleFormat={titleFormat} values={crosshairValues} />
      </XYPlot>
    </div>
  );
});

// const useMPAPI = (setTicks, setLoaded, setYDomain) => {
//   let mounted = false;
//   useEffect(() => {
//     mounted = true;
//     //we have to define the async func w/i the hook
//     let call = async () => {
//       try {
//         //call dynamic import
//         /**
//          * since the API call only happens in this component we can
//          * greatly diminish the bundle size (33%!!) by splitting the AWS modules import off in its own file
//          */
//         const API = await getAPI();
//         const data = await API.get("api", "/ticks");

//         // //map the routes to the ticks
//         // data.ticks.forEach(t => {
//         //   let found = data.routes.find(r => r.id === t.routeId);
//         //   //add the route to the tick
//         //   t.route = found;
//         // });
     

        
//         if (mounted) {
//           setLoaded(true)
//           let upper = 0 
//           data.routes.forEach(r => upper < r.y ? upper = r.y : null )
//           setYDomain([0, upper])

//           setTimeout( 
//             () => {
//               if(mounted)
//                   setTicks(data)
//               setTimeout( () => {
//                 if(mounted)
//                   setYDomain(undefined)}, 400)
//             }, 200)
//           ;
//         } 
//         // setLoading(false);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     //call it right aways
//     call();
//     return () => {
//       mounted = false;
//     };
//   }, []);
// };

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
  const [loaded, setLoaded] = useState(false);
  const [yDomain, setYDomain] = useState([0,10]);
  const [selected, setSelected] = useState("routes");

  // useMPAPI(setTicks, setLoaded, setYDomain);

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
          
          <div style={{ marginBottom: "15px" }}>
            
            <StyledButton disabled={!loaded} onClick={() => setSelected("routes")}>
              routes
            </StyledButton>
            <StyledButton disabled={!loaded} onClick={() => setSelected("boulders")}>
              boulders
            </StyledButton>
          </div>
          <Graph loaded={loaded} yDomain={yDomain} data={ticks[selected]} />
        </div>
        {/* {loading && <Spinner cnProp = {'spinner'}/>} */}
      </div>
    </StyledContainer>
  );
};

export default MPTicks;
