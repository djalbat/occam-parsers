"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { RuleNamePartType } from "../../partTypes";

export default class RuleNamePart extends NonTerminalPart {
  constructor(type, ruleName) {
    super(type);

    this.ruleName = ruleName;
  }

  getRuleName() {
    return this.ruleName;
  }

  isRuleNamePart() {
    const ruleNamePart = true;

    return ruleNamePart;
  }

  parse(frame, state, forward, back) {
    const rule = state.findRule(this.ruleName);

    if (rule === null) {
      return back();
    }

    return rule.parse(frame, state, forward, back);
  }

  asString() {
    const string = `${this.ruleName}`;

    return string;
  }

  static fromRuleName(ruleName) {
    const type = RuleNamePartType,
          ruleNamePart = new RuleNamePart(type, ruleName);

    return ruleNamePart;
  }
}
