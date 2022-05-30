"use strict";

import withStyle from "easy-with-style";  ///

import { Textarea } from "easy";

export default withStyle(Textarea)`

  border: 1px solid darkgrey;
  height: 24rem;
  resize: vertical;
  padding: 0.25rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  white-space: pre;
  font-family: monospace;

`;
