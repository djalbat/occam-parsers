"use strict";

import { BNFLexer } from "occam-lexers";

import BNFParser from "../../bnf/parser";

import View from "../view";

const { bnf } = BNFParser;

export default class BNFView extends View {
  static Lexer = BNFLexer;

  static Parser = BNFParser;

  static initialContent = `
  
    rule ::= "blah" (1) ;
  
  `;

  getNode(tokens) {
    const { Lexer, Parser } = this.constructor,
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          lexer = Lexer.fromEntries(entries),
          parser = Parser.fromNothing(),
          content = this.getContent();

    tokens = lexer.tokenise(content); ///

    const node = parser.parse(tokens);

    return node;
  }

  static defaultProperties = {
    className: "bnf"
  };
}

