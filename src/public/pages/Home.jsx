import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Spinner from "../components/Spinner";

let Wrapper = styled.div`
  background-image: url("images/hallway-efe-kurnaz.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  /* ************************************************************************S */
  /* the idea here is to have a 2X2 grid of divs on desktop, and 1x4 col on mobile */
`;

let Section1 = styled.section`
  margin: auto;
  text-align: center;
  height: 100vh;
  width: 100%;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  color: whitesmoke;
  #name {
      color: cornsilk;
      font-size: 38px;
    }
  h1 {
    font-size: 52.35px;
    padding-bottom: 50px;


  }
  h2 {
    padding-bottom: 80.9px;
    font-size: 32.36px;
  }
  h3 {
    font-size: 20px;
  }

  text-shadow: 1px 1px 5px rgba(206,206,206,0.62);
  .spinner {
    padding-bottom: 30px;
    position: relative;
    top: 30%;
  }

  @media only screen and (min-width:600px)
  {
    padding-top: 40vh;

  }
`;

let LearnMore = styled.button`
  width: 150px;
  height: 50px;
  margin: 10vh auto 40px auto;
  background: transparent;
  border: 1px solid white;
  transition: 0.2s ease;
  color: white;
  i {
    font-size: 1.2em;
    position: relative;
    left: 10px;
    transition: 0.2s ease;
  }

  &:hover {
    background: white;
    color: black;
    transition: 0.2s ease;
    i {
      color: rgba(0,0,0,0.0);
      transform: rotate(90deg);
    }
  }
`;

let Section2Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  font-size: 100px;

  div {
    text-align: center;
    display: flex;
    font-weight: 600;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    #block3 {
      order: 4;
    }
  }
  /* style the blocks*/
  #block1,
  #block4 {

  }

  /* 2 and 3 get a solid background */
  #block2 {
    background-color: rgba(161,61.8,100,.5);
    color:whitesmoke;


  }
  #block3 {
    background-color: rgba(100,61.8,161,.5);


  }

  /* 1 and 4 get their bg images */
  #block1 {    background-position: 0% 0%; /* Center the image */
  background-size:cover;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-image: url("images/city-crop-1.jpg");
  }

  #block4 {    
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size:cover;
    background-image: url("images/city-crop-2.jpg");
  }

  /* so divs will stack in the flexbox */
  div {
    width: 100%;
    height: 25%;
  }

  /* make a 2X2 grid on desktops */
  @media screen and (min-width: 600px) {
    div {
      width: 50%;
      height: 50%;
    }
  }
`;

let Section2 = ({refProp}) => {
 //colors for the section2 blocks
 let [color1, setColor1] = useState('rgb(100,100,100)')
 let [color2, setColor2] = useState('rgb(200,200,200)')

 //this will execute when the component mounts
 useEffect( () => {
   let timerReaction = () => {
     setColor1(`rgb(${randomRbg()},${randomRbg()},${randomRbg()})`)
     setColor2(color1)

   }

   const interval = setInterval(() => timerReaction(), 250)

   //this will execute when the component unmounts
   return () => {
     clearInterval(interval);
    }
 })


  return (
    <Section2Wrapper id="second">
      <div ref={refProp} id="block1"></div>
      <div style={{color:color1}} id="block2">ANTI</div>
      <div style={{color:color2}} id="block3">DREAM</div>
      <div id="block4"></div>
    </Section2Wrapper>
  );
};

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

const randomRbg = () => Math.floor(Math.random()*1000%255)

function Home() {
  const scrollRef = useRef(null);
  

  const executeScroll = () => scrollToRef(scrollRef);

 

  return (
    <Wrapper className="home">
      <Section1 id="top">
        {/* <Spinner text={"Welcome to My WonderFul Website :)"}></Spinner> */}
        <h1>HELLO.</h1>
        <h2>MY NAME IS <span id='name'>ALEX GEER</span>.</h2>
        <h3>I LOVE TO WRITE ELEGANT LINES OF CODE AND CREATE SIMPLE, PLEASING DESIGNS.</h3>
        <LearnMore onClick={executeScroll}>
          Learn More
          <i className="fa fa-angle-double-right"></i>
        </LearnMore>
      </Section1>
      <Section2 refProp={scrollRef}/>
    </Wrapper>
  );
}

export default Home;
