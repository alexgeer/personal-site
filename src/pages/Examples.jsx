import React from "react";
import Lev from "../components/Lev";
import MPTicks from "../components/MPTicks";
import PageWrapper from './layouts/PageWrapper'


function Examples() {
  return (
    <PageWrapper>
      <h2 className='page-header'>Examples</h2>
      <Lev/>
      <MPTicks/>
    </PageWrapper>
  );
}

export default Examples;
