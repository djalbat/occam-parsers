"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { RuleNamePartType } from "../../partTypes";

const { exclamationMark } = specialSymbols;

export default class RuleNamePart extends NonTerminalPart {
  constructor(ruleName, lookAhead = false) {
    const type = RuleNamePartType; ///

    super(type);

    this.ruleName = ruleName;

    this.lookAhead = lookAhead;
  }
  
  getRuleName() {
    return this.ruleName;
  }

  isLookAhead() {
    return this.lookAhead;
  }

  isRuleNamePart() {
    const ruleNamePart = true;

    return ruleNamePart;
  }

  setLookAhead(lookAhead) {
    this.lookAhead = lookAhead;
  }

  findRule(configuration) {
    const ruleMap = configuration.getRuleMap(),
          rule = ruleMap[this.ruleName] || null;  ///

    return rule;
  }

  parse(configuration) {
    let node = null;
    
    const rule = this.findRule(configuration);

    if (rule !== null) {
      node = rule.parse(configuration);
    }

    return node;
  }

  parseRuleWithLookAhead(rule, configuration, callback) {
    if (rule !== null) {
      rule.parseWithLookAhead(configuration, callback);
    }
  }

  asString() {
    const lookAheadString = this.lookAhead ?
                              exclamationMark :
                                "",
          string = `${this.ruleName}${lookAheadString}`;

    return string;
  }

  clone() { return super.clone(RuleNamePart, this.ruleName, this.lookAhead); }
}
