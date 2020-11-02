import React from "react";
import PageWrapper from "./layouts/PageWrapper";
import Container from "./layouts/Container";
import styled from 'styled-components'

const Portrait = styled.img`
height: auto;
width: 300px;
border-radius: 10%;
margin: 0 auto;
`
const PortraitWrapper = styled.div`
height: 356px;
`
function About() {
  return (
    <PageWrapper>
      <Container>
      <h2 className='page-header'>About</h2>
      <Portrait src="images/portrait.jpg"/>

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
