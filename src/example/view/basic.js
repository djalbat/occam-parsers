"use strict";

import { BasicLexer } from "occam-lexers";
import { BasicParser } from "../../index";  ///

import View from "../view";

const { bnf } = BasicParser,
      { entries } = BasicLexer;

const basicLexer = BasicLexer.fromEntries(entries),
      basicParser = BasicParser.fromBNF(bnf);

export default class BasicView extends View {
  getTokens(content) {
    const tokens = basicLexer.tokenise(content);

    return tokens;
  }

  getNode(tokens) {
    const node = basicParser.parse(tokens);

    return node;
  }

  initialise() {
    this.assignContext();

    const { initialContent } = this.constructor,
          content = initialContent, ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static initialContent = "1+2*3 . 1+2*3 .";

  static defaultProperties = {
    className: "basic"
  };
}
