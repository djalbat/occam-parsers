"use strict";

import { BasicLexer } from "occam-lexers";
import { BasicParser } from "../../index";  ///

import View from "../view";

export default class BasicView extends View {
  getNode(tokens) {
    const bnf = this.getBNF(),
          basicParser = BasicParser.fromBNF(bnf),
          node = basicParser.parse(tokens);

    return node;
  }

  static Lexer = BasicLexer;  ///

  static Parser = BasicParser;  ///

  static initialContent = `(1+2).`;

  static defaultProperties = {
    className: "basic"
  };
}
