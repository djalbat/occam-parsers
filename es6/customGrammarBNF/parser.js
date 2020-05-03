"use strict";

const BNFParser = require("../bnf/parser");

class CustomGrammarBNFParser extends BNFParser {
  static fromNothing() {
    const bnfParser = BNFParser.fromNothing(),
          rules = bnfParser.getRules(),
          customGrammarBNFParser = new CustomGrammarBNFParser(rules);

    return customGrammarBNFParser;
  }
}

module.exports = CustomGrammarBNFParser;
