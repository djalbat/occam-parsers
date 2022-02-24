"use strict";

import bnf from "./bnf";
import CommonParser from "../common/parser";

export default class LookAheadParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(LookAheadParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(LookAheadParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(LookAheadParser, rules); }
}
