"use strict";

import { BNFLexer } from "occam-lexers";

import BNFParser from "../../bnf/parser";

import View from "../view";

const { bnf } = BNFParser;

export default class BNFView extends View {
  static Lexer = BNFLexer;

  static Parser = BNFParser;

  static initialContent = bnf; ///

  getParseTree(tokens) {
    let parseTree = null;

    const { Lexer, Parser } = this.constructor,
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          lexer = Lexer.fromEntries(entries),
          parser = Parser.fromNothing(),
          content = this.getContent();

    tokens = lexer.tokenise(content);

    const node = parser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  static defaultProperties = {
    className: "bnf"
  };
}

