"use strict";

import { BNFLexer } from "occam-lexers";

import bnf from "./bnf";
import BNFParser from "../bnf/parser";
import CommonParser from "../common/parser";
import termDefaultCustomGrammarBNF from "./defaultCustomGrammarBNF/term";
import statementDefaultCustomGrammarBNF from "./defaultCustomGrammarBNF/statement";
import expressionDefaultCustomGrammarBNF from "./defaultCustomGrammarBNF/expression";
import metastatementDefaultCustomGrammarBNF from "./defaultCustomGrammarBNF/metastatement";

export default class FlorenceParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    bnf = `
    
      ${bnf}
      
      ${termDefaultCustomGrammarBNF}
      
      ${expressionDefaultCustomGrammarBNF}
      
      ${statementDefaultCustomGrammarBNF}
      
      ${metastatementDefaultCustomGrammarBNF}
      
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
