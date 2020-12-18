import React from "react";
import PageWrapper from "./layouts/PageWrapper";
import {Container} from "./layouts/Container";
import styled from 'styled-components'


const Portrait = styled.div`
height: 350px;
padding:20px;
display: flex;
justify-content: center;
img {
  height: 300px;
  width: auto;
  border-radius: 100%;

}
`
function About() {
  return (
    <PageWrapper>
      <Container>
      <h2 className='page-header'>About</h2>
      <Portrait> <img src="images/portrait.jpg"/></Portrait>

      <div className='container-content'>
        <p className='container-text'>
          My name is Alex Geer. I have a CS degree from University of North Florida. 
        </p>
        
       
      </div>
      </Container>
    </PageWrapper>
  );
}

export default About;
