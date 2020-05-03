"use strict";

import { BasicLexer } from "occam-lexers";

import View from "../view";
import BasicParser from "../../basic/parser";

export default class BasicView extends View {
  Lexer = BasicLexer;

  Parser = BasicParser;

  heading = "Basic parser example";

  initialContent = "1+2/3";

  static defaultProperties = {
    className: "basic"
  };
}
