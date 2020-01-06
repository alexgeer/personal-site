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
        <h3><a href="https://app.the-breakthrough-coach.com/calendar">The Breakthrough Coach</a></h3>
        <h4>A payment and registration React/Node app with an admin 
          control UI for posting, editing, and deleting events.</h4>
          <p>There was an existing app, but I was tasked with refactoring it and ended up rewriting
            80-90% of the original code, including a new DB schema.
          </p>
          <p>The front end was made with React. 
            I wrote all the reusable form input components, using Bootstrap for styling.
          </p>
          <p>
            I wrote most of the backend, including the server and the registration/payment module.
            Payment processing was handled by a module my boss wrote. The client later asked for an automated
            marketing email system, which I wrote as well.
          </p>
          <Gallery>
            <img src="images/tbc1.png" alt=""/>
            <img src="images/tbc2.png" alt=""/>
            <img src="images/tbc3.png" alt=""/>
          </Gallery>
      </div>
    </PageWrapper>)
  }

export default Work