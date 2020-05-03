"use strict";

import withStyle from "easy-with-style";  ///

import { Textarea } from "easy";

export default withStyle(Textarea)`

  border: 1px solid darkgrey;
  height: 24rem;
  resize: vertical;
  padding: 0.25rem;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  white-space: pre;
  font-family: monospace;
  margin-bottom: 1rem;

`;
