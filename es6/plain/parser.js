"use strict";

import { BNFLexer } from "occam-lexers";

import bnf from "./bnf";
import BNFParser from "../bnf/parser";
import CommonParser from "../common/parser";

export default class PlainParser extends CommonParser {
  static fromBNF(bnf) {
    const bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          plainParser = new PlainParser(rules);

    return plainParser;
  }

  static fromNothing() {
    const plainParser = PlainParser.fromBNF(bnf);

    return plainParser;
  }
}

Object.assign(PlainParser, {
  bnf
});
