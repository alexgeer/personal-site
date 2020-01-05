import React, { useState } from "react";
import styled from "styled-components";

let Container = styled.div``;

let SpinningText = styled.h2`
  animation-name: spin, depth;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: ${props => 200 / props.speed}s;
  text-align: center;
  font-size: 60px;
  color: rgb(19, 224, 224);

  @keyframes spin {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(-90deg);
    }
  }
  @keyframes depth {

    0 {
      text-shadow: 0 0 red;
    }
    25% {
      text-shadow: -1px 0 red, -2px 0 red, -3px 0 red, -4px 0 red,
        -5px 0 red;
    }
    50% {
      text-shadow: 0 0 red;
    }
    75% {
      text-shadow: 0 0 red;
    }
    100% {
      text-shadow: 2px 0 red, 3px 0 red, 4px 0 red, 5px 0 red,
        6px 0 red;
    }
  }
`;

//div for the slider input
let SliderWrapper = styled.div`
  width: 100%;
  height: 20px;
  padding: 10px 25%;
  position: center;

  /*LABEL***********************************************************************/
  label {
    position: relative;
    top: 10px;
    opacity: 0;
    transition: 0.3s;
  }

  /*on hover, make label opaque*/
  &:hover {
    label {
      padding: 8px;
      opacity: 100%;
      transition: 0.6s;
      transition-timing-function: cubic-bezier(0.43, 0.79, 0.39, 0.95);
    }
  }

  /*SLIDER==================================================*/

  .slider {
    background: linear-gradient(0.25turn, yellow, papayawhip, red);
    -webkit-appearance: none;
    border-radius: 5px;
    outline: none;
    -webkit-transition: 0.2s;
    display: block;
    width: 100%;
    height: 3px;
    animation: sunrise 2s ease-in;
    -webkit-animation: sunrise 2s cubic-bezier(0.43, 0.79, 0.39, 0.95);
    opacity:0.7;
    @keyframes sunrise {
      from {
        height: 0;
        width: 0;
        opacity:0;
      }
      to {
        width: 100%;
        height: 3px;
        opacity:0.7;
      }
    }
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(0.25turn, yellow, red);
    cursor: pointer;

  }

  .slider::-moz-range-thumb {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(0.25turn, yellow, red);
    cursor: pointer;

  }
`;

let Slider = ({ handleChange, speed, labelText }) => {
  return (
    <SliderWrapper>
      <input
        id="speed"
        type="range"
        min="1"
        max="100"
        value={speed}
        onChange={handleChange}
        className="slider"
      />
      {labelText && <label htmlFor="speed">{labelText}</label>}
    </SliderWrapper>
  );
};

let Spinner = ({ text }) => {
  let [speed, setSpeed] = useState(20);
  let handleChange = event => setSpeed(event.target.value);

  return (
    <Container className="spinner">
      <SpinningText speed={speed}>{text}</SpinningText>
      <Slider handleChange={handleChange} speed={speed}></Slider>
    </Container>
  );
};

export default Spinner;
