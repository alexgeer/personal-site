import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "../styles/anim";

let Wrapper = styled.div`
  &.loading {
    transform: translateZ(0);
  background-image: url("images/hallway-efe-kurnaz-min.jpg");
  filter:blur(20px);
  }

  &.loaded {
    animation: sharpen .7s both;
  @keyframes sharpen {
    from {
      background-image: url("images/hallway-efe-kurnaz-min.jpg");
      filter: blur(20px);
    }
    to {
      filter: blur(0px);
      background-image: url("images/hallway-efe-kurnaz.jpg");

    }
  }
  
  }
  background-image: url("images/hallway-efe-kurnaz.jpg");
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
`;

let Section1 = styled.section`
  margin: auto;
  text-align: center;
  height: ${window.innerHeight}px;
  width: 100%;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.landingTextColor};
  #name {
    color: ${props => props.theme.color1};
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

  text-shadow: 1px 1px 5px rgba(206, 206, 206, 0.62);
  .spinner {
    padding-bottom: 30px;
    position: relative;
    top: 30%;
  }

  @media only screen and (min-width: 600px) {
    padding-top: 40vh;
  }
`;

let LearnMore = styled.button`
  width: 150px;
  height: 50px;
  margin: 15px auto;
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
      color: rgba(0, 0, 0, 0);
      transform: rotate(90deg);
    }
  }
`;

let Section2Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;

  div {
    width: 100%;
    height: 25%;

    font-weight: 600;
    font-size: 20vw;
    line-height: 18vw;
    text-align: center;
    padding-top: 30px;

    margin: 0 auto;

    overflow: hidden;
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: wrap;
  }

  /* make a 2X2 grid on desktops */
  @media screen and (min-width: 600px) {
    div {
      padding-top: 0;
      font-size: 25vh;
      line-height: 25vh;
      width: 50%;
      height: 50%;
    }
  }

  /*TODO: fix this  */
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
    background-color: rgba(161, 61.8, 100, 0.5);
    color: whitesmoke;
  }
  #block3 {
    background-color: rgba(100, 61.8, 161, 0.5);
  }

  /* 1 and 4 get their bg images */
  #block1 {
    background-attachment: fixed;
    background-size: cover;
    background-position: 50% 60%;
    background-image: url("images/city2.jpg");
  }

  #block4 {
    background-attachment: fixed;
    background-size: cover;
    background-position: 50% 60%;
    background-image: url("images/city2.jpg");
  }
`;

const words = [
  "YOU",
  "RESULTS",
  "HEALTH",
  "GUARANTEE",
  "DISCOVER",
  "PROVEN",
  "SAFETY",
  "SAVE",
  "NEW",
  "BEST",
  "NOW",
  "FREE",
  "INCREASE",
  "TRY",
  "OPPORTUNITY",
  "EASIEST",
  "COMPARE",
  "UNIQUE"
];

const randomRbg = () => Math.floor((Math.random() * 1000) % 255);
const randomWord = () =>
  words[Math.floor((Math.random() * 100) % words.length)];

let Section2 = ({ refProp }) => {
  //colors for the section2 blocks
  let [color1, setColor1] = useState("rgb(100,100,100)");
  let [color2, setColor2] = useState("rgb(200,200,200)");

  let [word1, setWord1] = useState(words[0]);
  let [word2, setWord2] = useState(words[words.length - 1]);

  //this will execute when the component mounts
  useEffect(() => {
    let timerReaction = () => {
      setColor1(`rgb(${randomRbg()},${randomRbg()},${randomRbg()})`);
      setColor2(color1);

      setWord1(randomWord());
      setWord2(randomWord());
    };

    const interval = setInterval(() => timerReaction(), 500);

    //this will execute when the component unmounts
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Section2Wrapper id="second">
      <div ref={refProp} id="block1"></div>
      <div style={{ color: color1 }} id="block2">
        {word1}
      </div>
      <div style={{ color: color2 }} id="block3">
        {word2}
      </div>
      <div id="block4"></div>
    </Section2Wrapper>
  );
};

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

function Home() {
  const scrollRef = useRef(null);
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    let timer = setTimeout(()=> setLoading(false), 1000)

    //cleanup
    return () => clearTimeout(timer)
  }, [])

  const executeScroll = () => scrollToRef(scrollRef);

  return (
    <Wrapper className={loading ? "loading" : "loaded"}>
      <Section1 id="top">
        {/* <Spinner text={"Welcome to My WonderFul Website :)"}></Spinner> */}
        <h1>HELLO.</h1>
        <h2>
          MY NAME IS <span id="name">ALEX GEER</span>.
        </h2>
        <h3>
          I LIKE TO WRITE ELEGANT LINES OF CODE AND CREATE SIMPLE, PLEASING
          DESIGNS.
        </h3>
        <LearnMore onClick={executeScroll}>
          Learn More
          <i className="fa fa-angle-double-right"></i>
        </LearnMore>
      </Section1>
      <Section2 refProp={scrollRef} />
    </Wrapper>
  );
}

export default Home;
