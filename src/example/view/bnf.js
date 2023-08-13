"use strict";

import { BNFLexer } from "occam-lexers";

import View from "../view";
import BNFParser from "../../bnf/parser";

const { bnf } = BNFParser;

export default class BNFView extends View {
  static Lexer = BNFLexer;

  static Parser = BNFParser;

  static initialContent = bnf;  ///

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

