"use strict";

import BNFParser from "../bnf/parser";

export default class CustomGrammarBNFParser extends BNFParser {
  static fromNothing() {
    const bnfParser = BNFParser.fromNothing(),
          rules = bnfParser.getRules(),
          customGrammarBNFParser = new CustomGrammarBNFParser(rules);

    return customGrammarBNFParser;
  }
}
