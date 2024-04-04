"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "../../index";  ///

import View from "../view";

const { bnf } = BNFParser;

export default class BNFView extends View {
  static Lexer = BNFLexer;

  static Parser = BNFParser;

  static initialContent = `    debug          ::=  <NO_WHITESPACE> [name] ;
`;

  getNode(tokens) {
    const { Parser } = this.constructor,
          parser = Parser.fromNothing(),
          node = parser.parse(tokens);

    return node;
  }

  static defaultProperties = {
    className: "bnf"
  };
}

