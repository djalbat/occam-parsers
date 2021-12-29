"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "../../index";  ///

import View from "../view";

const { bnf } = BNFParser;

export default class BNFView extends View {
  Lexer = BNFLexer;

  Parser = BNFParser;

  initialContent = bnf; ///

  getParseTree() {
    let parseTree = null;

    const lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          lexer = this.Lexer.fromEntries(entries),
          parser = this.Parser.fromNothing(),
          content = this.getContent(),
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  static defaultProperties = {
    className: "bnf"
  };
}

