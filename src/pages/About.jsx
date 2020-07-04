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

function About() {
  return (
    <PageWrapper>
      <Container>
      <h2 className='page-header'>About</h2>
      <Portrait src="images/portrait.jpg"/>

      <div className='container-content'>
        <p className='container-text'>
          My name is Alex Geer. I have a CS degree from University of North Florida. I graduated in
          Fall of 2018, magna cum laude with a 3.7 GPA. In no particular order, these are some of my favorite
          courses, which were (un)coincidentally taught by some of my favorite educators:
        </p>
        <ul className='container-text container-list'>
            <li>Data Structures and Algorithms </li>
            <li>Compiler Construction</li>
            <li>Networks and Distributed Systems</li>
            <li>Databases and Data Modeling</li>
            <li>Computer Hardware and Architecture </li>
            <li>Computability and Automata </li>
            <li>Computational Biology</li>
          </ul>
        <p className='container-text'>
          I began pursuing programming after hearing anecdotally (and probably apocryphally) that the
          industry was seeking people with musical backgrounds. I've played classical guitar for 15 years
          and I think musical thinking has given me a great advantage in dealing with the abstract thought
          that is so deeply fundamental to programming. 
        </p>
        <p>
          I've written systems level software, desktop applications, and web applications, but most recently my
          wheelhouse has been in web development. This seems to be a domain where, seemingly in response to the ever increasing
          ubiquity of networked devices, the development tools at our disposal have been undergoing a rapid and 
          exciting evolution over the last decade. A streamlined, power hungry Javascript with its front/back-end frameworks, 
          cloud services offering teams incredible agility, and a collaborative and mutually supportive culture all make 
          it an attractive area of focus. What strikes me most is how these tools enable someone to be quite productive within a
          certain scope very early in their career. The entire industry is at its core truly a collective effort, and I look forward to 
          lending myself to it in whatever ways I can.</p>
      </div>
      </Container>
    </PageWrapper>
  );
}

export default About;
