"use strict";

import View from "../view";
import BasicLexer from "../basic/lexer";
import BasicParser from "../basic/parser";

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
          basicParser = BasicParser.fromBNF(bnf);

    const node = basicParser.parse(tokens);

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

  static initialContent = `f:x:y
`;

  static defaultProperties = {
    className: "basic"
  };
}
