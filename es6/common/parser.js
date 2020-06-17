"use strict";

import Configuration from "./configuration";

import { first } from "../utilities/array";

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
    const configuration = Configuration.fromTokensAndRuleMap(tokens, this.ruleMap),
          node = rule.parse(configuration);

    return node;
  }

  static fromRules(Parser, rules) {
    const firstRule = first(rules),
          startRule = firstRule,  ///
          ruleMap = rules.reduce((ruleMap, rule) => {
            const ruleName = rule.getName();

            ruleMap[ruleName] = rule;

            return ruleMap;
          }, {}),
          parser = new Parser(startRule, ruleMap);

    return parser;
  }
}
