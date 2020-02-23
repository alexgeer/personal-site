import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import PageWrapper from "./layouts/PageWrapper";
import HeroText from "../components/HeroText"

let HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;



const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

function Home({ loading }) {
  const scrollRef = useRef(null);
  const [lowerRevealed, setLowerRevealed] = useState(false);
  const executeScroll = () => scrollToRef(scrollRef);

  return (
    <PageWrapper className={loading ? "loading" : "loaded"}>
      <HomeContainer>
        <HeroText/> 
      </HomeContainer>
    </PageWrapper>
  );
}

export default Home;
