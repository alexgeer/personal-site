import React from 'react'
import PageWrapper from './layouts/PageWrapper'
import styled from 'styled-components'
let Gallery = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: top;
justify-content: left;

img {
  width: 100%;
  height: auto;
  padding: 2%;
}
`

function Work() {
    return(
    <PageWrapper>
      <h2>Work</h2>
      <div>
        <h3>Innovias | Web Developer Intern | July 2019 - March 2019</h3>
        <p>
          I got my first job the summer before my last semester. Innovias does contracted IT services 
          for small to medium businesses, but they have need of some in-house development for clients and
          the company. This where I cut my teeth on the meat and potatoes of web development: HTTP, APis, RESTful intefaces,
          data modeling.
        </p>
          <p>
            My boss, the owner, was an oldschool Java guy who had become captivated with React and Node. While his architecture
            did tend to get a little overly 'hereditary', his skill and experience at buliding and maintaining
            a library of useful, reusable code was undeniable.
          </p>
        <h4><a href="https://app.the-breakthrough-coach.com/calendar">The Breakthrough Coach</a></h4>
        <h5>A payment and registration React/Node app with an admin 
          control UI for posting, editing, and deleting events.</h5>
          <p>There was an existing app, but I was tasked with refactoring it and ended up rewriting
            80-90% of the original code, including a new DB schema.
          </p>
          <p>The front end was made with React. 
            I wrote all the reusable form input components, using Bootstrap for styling. The main learning
            experience here was using different types of inputs and validating form data.
          </p>
          <p>
            I wrote most of the backend, including the server and the registration/payment module.
            The DB situation was standard CRUD with a RESTful API connected to a MySQL instance. 
            The data environment was fairly rich and broad, so I got to work alot with parsing, stringifying,
            marshalling, and serializing data. 
            Payment processing was handled by a module my boss wrote. The client later asked for an automated
            marketing email system, which I wrote as well.
          </p>
{/* 
          <Gallery>
            <img src="images/tbc1.png" alt=""/>
            <img src="images/tbc2.png" alt=""/>
            <img src="images/tbc3.png" alt=""/>
          </Gallery> */}
      </div>
    </PageWrapper>)
  }

export default Work