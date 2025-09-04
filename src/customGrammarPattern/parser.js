"use strict";

import { CommonParser } from "../index";

import bnf from "./bnf";

export default class CustomGrammarPatternParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(CustomGrammarPatternParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(CustomGrammarPatternParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(CustomGrammarPatternParser, rules); }
}
