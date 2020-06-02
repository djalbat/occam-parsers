"use strict";

import { BasicLexer } from "occam-lexers";
import { BasicParser } from "../../index";  ///

import View from "../view";

export default class BasicView extends View {
  Lexer = BasicLexer;

  Parser = BasicParser;

  heading = "Basic parser example";

  initialContent = "1+2/3";

  static defaultProperties = {
    className: "basic"
  };
}
