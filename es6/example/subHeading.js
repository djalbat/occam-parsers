"use strict";

import withStyle from "easy-with-style";  ///

const SubHeading = withStyle.h2`

  margin: 1rem 0 0.5rem 0;
  font-size: 2rem;
  
  :first-of-type {
    margin-top: 0;
  }

`;

export default SubHeading;
