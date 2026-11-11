"use strict";

import { CommonParser, BasicParser as BasicParserBase } from "../../index";  ///

export default class BasicParser extends BasicParserBase {
  static fromNothing() { return CommonParser.fromNothing(BasicParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(BasicParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(BasicParser, rules); }
}
