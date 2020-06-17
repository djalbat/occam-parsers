"use strict";

import { BNFLexer } from "occam-lexers";

import bnf from "./bnf";
import BNFParser from "../bnf/parser";
import CommonParser from "../common/parser";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class MetaJSONParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          metaJSONParser = MetaJSONParser.fromRules(rules);

    return metaJSONParser;
  }

  static fromRules(rules) { return CommonParser.fromRules(MetaJSONParser, rules); }

  static fromNothing() { return MetaJSONParser.fromBNF(bnf); }
}
