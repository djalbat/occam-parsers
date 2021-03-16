"use strict";

import { BNFLexer } from "occam-lexers";

import bnf from "./bnf";
import BNFParser from "../bnf/parser";
import CommonParser from "../common/parser";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class BasicParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          basicParser = BasicParser.fromRules(rules);

    return basicParser;
  }

  static fromRules(rules) { return CommonParser.fromRules(BasicParser, rules); }

  static fromNothing() { return BasicParser.fromBNF(bnf); }
}
