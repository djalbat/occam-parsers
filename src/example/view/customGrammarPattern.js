"use strict";

import View from "../view";

import CustomGrammarPatternLexer from "../../customGrammarPattern/lexer";
import CustomGrammarPatternParser from "../../customGrammarPattern/parser";

const { bnf } = CustomGrammarPatternParser,
      { entries } = CustomGrammarPatternLexer;

export default class CustomGrammarPatternView extends View {
  getTokens(content) {
    const lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          customGrammarPatternLexer = CustomGrammarPatternLexer.fromEntries(entries),
          tokens = customGrammarPatternLexer.tokenise(content);

    return tokens;
  }

  getNode(tokens) {
    const bnf = this.getBNF(),
          customGrammarPatternParser = CustomGrammarPatternParser.fromBNF(bnf),
          node = customGrammarPatternParser.parse(tokens);

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

  static initialContent = `adsf

`;

  static defaultProperties = {
    className: "custom-grammar-pattern",
  };
}
