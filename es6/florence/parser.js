"use strict";

import { BNFLexer } from "occam-lexers";

import bnf from "./bnf";
import BNFParser from "../bnf/parser";
import CommonParser from "../common/parser";
import termDefaultBNF from "./defaultBNF/term";
import statementDefaultBNF from "./defaultBNF/statement";
import expressionDefaultBNF from "./defaultBNF/expression";
import metastatementDefaultBNF from "./defaultBNF/metastatement";

export default class FlorenceParser extends CommonParser {
  static fromBNF(bnf) {
    bnf = `
    
      ${bnf}
      
      ${termDefaultBNF}
      
      ${expressionDefaultBNF}
      
      ${statementDefaultBNF}
      
      ${metastatementDefaultBNF}
      
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

Object.assign(FlorenceParser, {
  bnf
});
