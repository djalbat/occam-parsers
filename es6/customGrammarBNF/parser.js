"use strict";

import BNFParser from "../bnf/parser";

export default class CustomGrammarBNFParser extends BNFParser {
  static fromRules(rules) { return BNFParser.fromRules(CustomGrammarBNFParser, rules); }

  static fromNothing() {
    const bnfParser = BNFParser.fromNothing(),
          rules = bnfParser.getRules(),
          customGrammarBNFParser = CustomGrammarBNFParser.fromRules(rules);

    return customGrammarBNFParser;
  }
}
