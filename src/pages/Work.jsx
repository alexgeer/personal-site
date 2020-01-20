import React from "react";
import PageWrapper from "./layouts/PageWrapper";
import Container from "./layouts/Container";
import styled from "styled-components";

let StackContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 100px;
    height: auto;
    align-self: center;
  }

  div {
    background: white;
    height: 100px;
    padding: 0 20px;
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25%;
    padding: 10px;
  }
`;

let Stack = () => {
  return (
    <StackContainer>
      <div>
        <img src="images/node.png" alt="" />
      </div>
      <div>
        <img src="images/react.png" alt="" />
      </div>
      <div>
        <img src="images/mysql.png" alt="" />
      </div>
      <div>
        <img src="images/express.png" alt="" />
      </div>
    </StackContainer>
  );
};

let ResumeDL = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;

  a {
    font-size: 20px;
    text-decoration: underline;
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.color1};
    border-radius: 8px;
    padding: 12px;
  }

  a:hover {
    background:  ${({ theme }) => theme.color3};
  }

  i {
    margin-left: 8px;
  }
`;

function Work() {
  return (
    <PageWrapper>
      <Container>
        <h2 className="page-header">Work</h2>
        <ResumeDL>
          {" "}
          <a href="pdf/AlexGeerResume.pdf" download>
            AlexGeerResume.pdf
            <i className="fas fa-file-download"></i>
          </a>
        </ResumeDL>
        <div className="container-content">
          <h3>Innovias</h3><a className='inline-link' href="https://www.innovias.com/"><em>www.innovias.com</em></a>
          <h4> Web Developer Intern</h4>
          <h4> July 2018 - March 2019</h4>
          <p className="container-text">
            I got my first job the summer before my last semester. Innovias does
            contracted IT services for small to medium businesses, but they have
            need of some in-house development for clients and the company. This
            where I cut my teeth on the meat and potatoes of web development:
            routing, HTTP, APIs, RESTful interfaces, data modeling, and so on.
            This also where I began learning about and using some of popular JS
            frameworks: React, styled-components, Express , Knex.
          </p>
          <p className="container-text">
            My boss, the owner, was an oldschool Java guy who had become
            captivated with React and Node. While his architecture did tend to
            get a little overly 'hereditary', his skill and experience at
            building and maintaining a library of useful, reusable code was
            undeniable.
          </p>
          <h4 style={{ margin: "0 auto" }}>
            <a href="https://app.the-breakthrough-coach.com/calendar">
              The Breakthrough Coach - Event Calendar and Registration
            </a>
          </h4>
          <Stack />

          <h5>
            A payment and registration React/Node app with an admin control UI
            for posting, editing, and deleting events.
          </h5>
          <p className="container-text">
            There was an existing app, but I was tasked with refactoring it into
            ES6 and ended up rewriting 80-90% of the original code, including a
            new DB schema. 
          </p>
          <p className="container-text">
            The components of the business problem were a calendar to display events to customers, 
            an admin UI to post, edit, and remove events, and a registration process that automatically integrated contact 
            and registration/payment data into their CRM and accounting software. 
          </p>
          <p className="container-text">
            The front end was made with React. I wrote all the reusable form
            input components, using Bootstrap for basic styling. The main
            learning experience here was using different types of inputs and
            validating form data.
          </p>
          <p className="container-text">
            I wrote most of the backend, including the server and the
            registration/payment module. The DB situation was standard CRUD with
            a RESTful API connected to a MySQL instance. The data environment
            was fairly extensive, so I got to work alot with parsing,
            stringifying, marshalling, and serializing different data types.
          </p>
        </div>
      </Container>
    </PageWrapper>
  );
}

export default Work;
