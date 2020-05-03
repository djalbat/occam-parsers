"use strict";

const lexers = require("occam-lexers");

const bnf = require("./bnf"),
      BNFParser = require("../bnf/parser"),
      CommonParser = require("../common/parser");

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class BasicParser extends CommonParser {
  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          basicParser = new BasicParser(rules);

    return basicParser;
  }

  static fromRules(rules) {
    const basicParser = new BasicParser(rules);

    return basicParser;
  }

  static fromNothing() {
    const basicParser = BasicParser.fromBNF(bnf);

    return basicParser;
  }
}

Object.assign(BasicParser, {
  bnf
});

module.exports = BasicParser;
