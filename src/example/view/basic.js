"use strict";

import { BasicLexer } from "occam-lexers";
import { BasicParser } from "../../index";  ///

import View from "../view";

const { bnf } = BasicParser,
      { entries } = BasicLexer;

export default class BasicView extends View {
  getTokens(content) {
    const lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          basicLexer = BasicLexer.fromEntries(entries),
          tokens = basicLexer.tokenise(content);

    return tokens;
  }

  getNode(tokens) {
    const bnf = this.getBNF(),
          basicParser = BasicParser.fromBNF(bnf),
          node = basicParser.parse(tokens);

    return node;
  }

  initialise() {
    this.assignContext();

    const { initialContent } = this.constructor,
          lexicalEntries = entries, ///
          content = initialContent; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static initialContent = `(n+n)
`;

  static defaultProperties = {
    className: "basic"
  };
}
