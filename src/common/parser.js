"use strict";

import { BNFLexer } from "occam-lexers";

import Context from "../context";
import BNFParser from "../bnf/parser";

import { startRuleFromRules, ruleMapFromRules } from "../utilities/rules";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class CommonParser {
  constructor(startRule, ruleMap) {
    this.startRule = startRule;
    this.ruleMap = ruleMap;
  }

  getStartRule() {
    return this.startRule;
  }

  getRuleMap() {
    return this.ruleMap;
  }

  parse(tokens, rule = this.startRule) {
    const context = Context.fromTokensAndRuleMap(tokens, this.ruleMap),
          ruleNode = rule.parse(context),
          node = ruleNode; ///

    return node;
  }

  static fromNothing(Class) {
    const { bnf } = Class,
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          startRule = startRuleFromRules(rules),
          ruleMap = ruleMapFromRules(rules),
          parser = new Class(startRule, ruleMap);

    return parser;
  }

  static fromBNF(Class, bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          startRule = startRuleFromRules(rules),
          ruleMap = ruleMapFromRules(rules),
          parser = new Class(startRule, ruleMap);

    return parser;
  }

  static fromRules(Class, rules) {
    const startRule = startRuleFromRules(rules),
          ruleMap = ruleMapFromRules(rules),
          parser = new Class(startRule, ruleMap);

    return parser;
  }
}
