"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { EMPTY_STRING } from "../../constants";
import { RuleNamePartType } from "../../partTypes";

const { ellipsis } = specialSymbols;

export default class RuleNamePart extends NonTerminalPart {
  constructor(type, lookAhead, ruleName) {
    super(type, lookAhead);

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

  parse(nodes, state, callback) {
    let parsed;

    const rule = this.findRule(state);

    parsed = (rule !== null) ?
               rule.parse(nodes, state, callback) :
                 null;

    return parsed;
  }

  asString() {
    const lookAhead = this.isLookAhead(),
          lookAheadString = lookAhead ?
                              ellipsis :
                                EMPTY_STRING,
          string = `${this.ruleName}${lookAheadString}`;

    return string;
  }

  static fromRuleName(ruleName) {
    const type = RuleNamePartType,
          lookAhead = false,
          ruleNamePart = new RuleNamePart(type, lookAhead, ruleName);

    return ruleNamePart;
  }

  static fromLookAheadAndRuleName(lookAhead, ruleName) {
    const type = RuleNamePartType,
          ruleNamePart = new RuleNamePart(type, lookAhead, ruleName);

    return ruleNamePart;
  }
}
