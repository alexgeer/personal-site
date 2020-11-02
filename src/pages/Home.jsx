import React, {useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PageWrapper from "./layouts/PageWrapper";
import HeroText from "../components/HeroText";
import { blinking, fadeIn } from "../styles/anim";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LearnMore = styled.button`
  background: unset;
  position: absolute;
  top: 90%;
  right: 47%;
  opacity: 0;
  color: ${({ theme }) => theme.color3};
  animation: ${blinking} 3s infinite;
  animation-delay: 2s;

  z-index: 2;

`;

const Blurb = styled.div`
padding-top: 20px;
height: ${ ({height}) => height }px;
min-height: 400px;

.greeting {
  padding-bottom: 15px;
}
line-height: 2.0;

p {
  margin: 10px 0;
}
a {
  text-decoration: underline;
}

a:hover {color: ${ ({theme}) => theme.color3};}

`

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

function Home({ loading }) {
  const scrollRef = useRef(null);
  const [blurbHeight, setBlurbHeight] = useState(300)
  const executeScroll = () => scrollToRef(scrollRef);

  //we have to use useEffect bc getElementById will return null otherwise
  useEffect( () => {
    
    let w = window.innerHeight
    //TODO getting the height is behaving differently in the dev and prod environments

    let f = window.innerWidth > 600 ? 95 : 159
    let h = document.getElementById("header").offsetHeight
    setBlurbHeight(w - f - h)
  }, [])

  return (
    <PageWrapper className={loading ? "loading" : "loaded"}>
      <HomeContainer>
        <LearnMore  onClick={() => executeScroll()}>
          <i className="fas fa-arrow-circle-down fa-3x"></i>
        </LearnMore>
        <HeroText />
        <Blurb 
        height={blurbHeight}
        ref={scrollRef}>

        <h4 className ="greeting">Hi there.</h4>
         <p>I built this site as a way to show my skills with React. </p> 
         <p> You'll find my resume and work examples on the 'work' page </p>
         <p> The repo for this site is <a href ="https://github.com/alexgeer/personal-site"> here </a> </p>
        </Blurb>
      </HomeContainer>
    </PageWrapper>
  );
}

export default Home;
