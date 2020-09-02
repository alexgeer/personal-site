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
    background: ${({ theme }) => theme.color3};
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

        <div className="container-content">
          <h3>Innovias</h3>

          <h3>{"{Web Developer}"}</h3>
          <h4> (July 2018 - March 2019)</h4>
          <ul className="container-list">
            <li>+React,Node,MySQL</li>
            <li>+Business Integration</li>
            <li>+Payment Processing</li>
            <li>+Custom CRMs</li>
          </ul>

         
        </div>
      </Container>
    </PageWrapper>
  );
}

export default Work;
