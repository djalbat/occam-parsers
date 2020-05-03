"use strict";

const lexers = require("occam-lexers");

const bnf = require("./bnf"),
      BNFParser = require("../bnf/parser"),
      CommonParser = require("../common/parser");

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class CustomGrammarLexicalPatternParser extends CommonParser {
  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          customGrammarLexicalPatternParser = new CustomGrammarLexicalPatternParser(rules);

    return customGrammarLexicalPatternParser;
  }

  static fromNothing() {
    const customGrammarLexicalPatternParser = CustomGrammarLexicalPatternParser.fromBNF(bnf);

    return customGrammarLexicalPatternParser;
  }
}

Object.assign(CustomGrammarLexicalPatternParser, {
  bnf
});

module.exports = CustomGrammarLexicalPatternParser;
