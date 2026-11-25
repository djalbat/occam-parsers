"use strict";

const { CommonParser } = require("occam-parsers");

const bnf = require("./bnf");

class ExpressionParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(ExpressionParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(ExpressionParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(ExpressionParser, rules); }
}

module.exports = ExpressionParser;
