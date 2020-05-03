"use strict";

import { BNFLexer } from "occam-lexers";

import bnf from "./bnf";
import BNFParser from "../bnf/parser";
import CommonParser from "../common/parser";

export default class CustomGrammarLexicalPatternParser extends CommonParser {
  static fromBNF(bnf) {
    const bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          tokens = bnfLexer.tokensFromBNF(bnf),
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
