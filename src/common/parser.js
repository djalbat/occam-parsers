"use strict";

import { arrayUtilities } from "necessary";

import State from "../state";

import { rulesFromBNF, parserFromRules } from "../utilities/parser";

const { first } = arrayUtilities;

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
    let node = null;

    const nodes = [],
          state = State.fromTokensAndRuleMap(tokens, this.ruleMap),
          callback = null,
          parsed = rule.parse(nodes, state, callback);

    if (parsed) {
      const firstNode = first(nodes);

      node = firstNode; ///
    }

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
