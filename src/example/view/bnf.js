"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "../../index";  ///

import View from "../view";

const { bnf } = BNFParser;

export default class BNFView extends View {
  getNode(tokens) {
    const Parser = BNFParser, ///
          parser = Parser.fromNothing(),
          node = parser.parse(tokens);

    return node;
  }

  static Lexer = BNFLexer;  ///

  static Parser = BNFParser;  ///

  static initialContent = bnf;  ///

  static defaultProperties = {
    className: "bnf"
  };
}

