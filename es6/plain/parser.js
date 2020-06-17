"use strict";

import { BNFLexer } from "occam-lexers";

import bnf from "./bnf";
import BNFParser from "../bnf/parser";
import CommonParser from "../common/parser";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class PlainParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          plainParser = PlainParser.fromRules(rules);

    return plainParser;
  }

  static fromRules(rules) { return CommonParser.fromRules(PlainParser, rules); }

  static fromNothing() { return PlainParser.fromBNF(bnf); }
}
