import React from "react";
import styled from "styled-components";

const Container = styled.div`

display: flex;
flex-direction: column;

.container-header {
    padding: 10px 20px;
    border-bottom:  1px solid rgba(0,0,0,0.3);
}

.container-content {
    display:flex;
    flex-direction: column;

    padding: 10px 15px 15px 15px;
    margin-bottom: 15px
}

.container-text {
    margin-bottom: 14px;
}
`

export default Container