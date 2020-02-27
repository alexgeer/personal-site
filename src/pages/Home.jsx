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
  right: 45%;
  opacity: 0;
  color: ${({ theme }) => theme.color3};
  animation: ${blinking} 3s infinite;
  /* animation-delay: 3s; */

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

a:hover {color: ${ ({theme}) => theme.color3}}

@media screen only and (min-width: 600px) {
  height: 300px;
}
`

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

function Home({ loading }) {
  const scrollRef = useRef(null);
  const [blurbHeight, setBlurbHeight] = useState(300)
  const executeScroll = () => scrollToRef(scrollRef);

  //we have to use useEffect bc getElementById will return null otherwise
  useEffect( () => {
    
    let w = window.innerHeight
    let f = document.getElementById("footer").offsetHeight
    let h = document.getElementById("header").offsetHeight
    console.log(w,f,h)
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
         <p>I built this site as a way to show my skills with React. Since I don't have many projects to show for examples of my work,
         I designed the site to include a few less-than-standard features.</p> 
         <p>The styling library I used, styled-components, has powerful
         theming. To showcase that the theme changes based on route. You can apply a theme to the whole site by using the theme picker,
         which you'll find on the 'e.g' page. </p>
         <p> You'll find my resume and work examples on the 'work' page </p>
         <p> The repo for this site is <a href ="https://github.com/alexgeer/personal-site"> here </a> </p>
        </Blurb>
      </HomeContainer>
    </PageWrapper>
  );
}

export default Home;
