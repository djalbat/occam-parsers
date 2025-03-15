"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { EMPTY_STRING } from "../../constants";
import { RuleNamePartType } from "../../partTypes";

const { ellipsis } = specialSymbols;

export default class RuleNamePart extends NonTerminalPart {
  constructor(type, callAAhead, ruleName) {
    super(type, callAAhead);

    this.ruleName = ruleName;
  }
  
  getRuleName() {
    return this.ruleName;
  }

  isRuleNamePart() {
    const ruleNamePart = true;

    return ruleNamePart;
  }

  findRule(state) {
    const ruleMap = state.getRuleMap(),
          rule = ruleMap[this.ruleName] || null;  ///

    return rule;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    const rule = this.findRule(state);

    parsed = (rule !== null) ?
               rule.parse(nodes, state, callback, callAhead) :
                 false;

    return parsed;
  }

  asString() {
    const callAAhead = this.isCallAhead(),
          callAAheadString = callAAhead ?
                              ellipsis :
                                EMPTY_STRING,
          string = `${this.ruleName}${callAAheadString}`;

    return string;
  }

  static fromRuleName(ruleName) {
    const type = RuleNamePartType,
          callAAhead = false,
          ruleNamePart = new RuleNamePart(type, callAAhead, ruleName);

    return ruleNamePart;
  }

  static fromCallAheadAndRuleName(callAAhead, ruleName) {
    const type = RuleNamePartType,
          ruleNamePart = new RuleNamePart(type, callAAhead, ruleName);

    return ruleNamePart;
  }
}
