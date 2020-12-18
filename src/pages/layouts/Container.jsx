import React, {useState, useEffect } from "react";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .container-header {
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  .container-content {
    display: flex;
    flex-direction: column;

    padding: 10px 15px 15px 15px;
    margin-bottom: 45px;
    transition: height linear .3s;
  }
  .hidden {
      display:none;
  }
  .expander {
      font-size: 50px;
      margin-left: 5px;
      background-color: ${({theme}) => theme.background};
      color: ${({theme}) => theme.color1};
      position: relative;
      top: 2px;
  }
  .container-text {
    margin-bottom: 14px;
  }

  .container-list {
    li {
      margin: 8px;
      color: ${({ theme }) => theme.color3};
      font-size: 18px;
    }
  }
`;

export const ExampleContainer = ({ header, text, children, margin }) => {

  const [showing, setShowing] = useState(false)
    

return ( 
  <Container>
    <div className="container-header">
      <h3>{header}
      <button 
      onClick={()=>setShowing(!showing)} 
      className='expander'>
          {showing ? '-' : '+'}
          </button>
      </h3>
    </div>
    <div className={showing ? "container-content" : "hidden"}>
      <div className="container-text">
        {text.map((t,i) => <p key={i}>{t}</p>)}
      </div>
      {children}
    </div>
  </Container>
)
}
