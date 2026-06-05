"use strict";

import BasicLexer from "../basic/lexer";
import BasicParser from "../basic/parser";

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

  static initialContent = `1+123.`;

  static defaultProperties = {
    className: "basic"
  };
}
