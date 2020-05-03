"use strict";

import { BNFLexer } from "occam-lexers";

import bnf from "./bnf";
import BNFParser from "../bnf/parser";
import CommonParser from "../common/parser";

export default class LaTeXParser extends CommonParser {
  static fromBNF(bnf) {
    const bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          laTeXParser = new LaTeXParser(rules);

    return laTeXParser;
  }

  static fromNothing() {
    const laTeXParser = LaTeXParser.fromBNF(bnf);

    return laTeXParser;
  }
}

Object.assign(LaTeXParser, {
  bnf
});
