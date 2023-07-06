"use strict";

import parserMixins from "../mixins/parser";

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

Object.assign(CommonParser.prototype, parserMixins);
