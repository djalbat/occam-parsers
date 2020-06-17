"use strict";

import { BNFLexer } from "occam-lexers";

import bnf from "./bnf";
import BNFParser from "../bnf/parser";
import CommonParser from "../common/parser";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class LaTeXParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          laTeXParser = LaTeXParser.fromRules(rules);

    return laTeXParser;
  }

  static fromRules(rules) { return CommonParser.fromRules(LaTeXParser, rules); }

  static fromNothing() { return LaTeXParser.fromBNF(bnf); }
}
