"use strict";

const lexers = require("occam-lexers");

const bnf = require("./bnf"),
      BNFParser = require("../bnf/parser"),
      CommonParser = require("../common/parser");

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class PlainParser extends CommonParser {
  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          plainParser = new PlainParser(rules);

    return plainParser;
  }

  static fromNothing() {
    const plainParser = PlainParser.fromBNF(bnf);

    return plainParser;
  }
}

Object.assign(PlainParser, {
  bnf
});

module.exports = PlainParser;
