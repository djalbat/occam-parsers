"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";

import BNFView from "./example/view/bnf";
import BasicView from "./example/view/basic";
import CustomGrammarPatternView from "./example/view/customGrammarPattern";

const { renderStyles } = withStyle;

let View;

const body = new Body(),
      example = window.location.search.substring(1);  ///

switch (example) {
  case "bnf" : View = BNFView; break;
  case "basic" : View = BasicView; break;
  case "custom-grammar-pattern" : View = CustomGrammarPatternView; break;
}

renderStyles();

body.mount(

  <View/>

);
