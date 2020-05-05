"use strict";

import { BNFLexer } from "occam-lexers";

import bnf from "./bnf";
import BNFParser from "../bnf/parser";
import CommonParser from "../common/parser";

import { termBNF, expressionBNF, statementBNF, metastatementBNF } from "./defaultCustomGrammar";

export default class FlorenceParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    bnf = `
    
      ${bnf}
      
      ${termBNF}
      
      ${expressionBNF}
      
      ${statementBNF}
      
      ${metastatementBNF}
      
    `; ///

    const bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          florenceParser = new FlorenceParser(rules);

    return florenceParser;
  }

  static fromNothing() {
    const florenceParser = FlorenceParser.fromBNF(bnf);

    return florenceParser;
  }
}
