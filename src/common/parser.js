"use strict";

import State from "../state";

import { rulesFromBNF, parserFromRules } from "../utilities/parser";

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
    const state = State.fromTokensAndRuleMap(tokens, this.ruleMap),
          callback = null,
          precedence = null,
          ruleName = null,
          ruleNode = rule.parse(state, callback, precedence, ruleName),
          node = ruleNode; ///

    return node;
  }

  static fromNothing(Class) {
    const { bnf } = Class,
          rules = rulesFromBNF(bnf),
          parser = parserFromRules(Class, rules);

    return parser;
  }

  static fromBNF(Class, bnf) {
    const rules = rulesFromBNF(bnf),
          parser = parserFromRules(Class, rules);

    return parser;
  }

  static fromRules(Class, rules) {
    const parser = parserFromRules(Class, rules);

    return parser;
  }
}
