"use strict";

import { BNFLexer } from "occam-lexers";

import bnf from "./bnf";
import BNFParser from "../bnf/parser";
import CommonParser from "../common/parser";

export default class MetaJSONParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          metaJSONParser = new MetaJSONParser(rules);

    return metaJSONParser;
  }

  static fromNothing() {
    const metaJSONParser = MetaJSONParser.fromBNF(bnf);

    return metaJSONParser;
  }
}
