"use strict";

import BNFParser from "../bnf/parser";

export default class CustomGrammarBNFParser extends BNFParser {
  static fromNothing() {
    const bnfParser = BNFParser.fromNothing(),
          startRule = bnfParser.getStartRule(),
          ruleMap = bnfParser.getRuleMap(),
          customGrammarBNFParser = new CustomGrammarBNFParser(startRule, ruleMap);  ///

    return customGrammarBNFParser;
  }
}
