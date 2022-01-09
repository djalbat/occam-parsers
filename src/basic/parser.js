"use strict";

import bnf from "./bnf";
import CommonParser from "../common/parser";

export default class BasicParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(BasicParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(BasicParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(BasicParser, rules); }
}
