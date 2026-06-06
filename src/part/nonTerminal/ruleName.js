"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { EMPTY_STRING } from "../../constants";
import { RuleNamePartType } from "../../partTypes";
import { ruleNamePartContext } from "../../utilities/context";

const { ellipsis } = specialSymbols;

export default class RuleNamePart extends NonTerminalPart {
  constructor(type, callAhead, ruleName) {
    super(type, callAhead);

    this.ruleName = ruleName;
  }
  
  getRuleName() {
    return this.ruleName;
  }

  isRuleNamePart() {
    const ruleNamePart = true;

    return ruleNamePart;
  }

  parse(context) {
    let parsed;

    const ruleNamePart = this;

    ruleNamePartContext((context) => {
      const rule = context.findRule(this.ruleName);

      parsed = (rule !== null) ?
                 rule.parse(context) :
                   false;

      if (parsed) {
        context.commit();
      }
    }, ruleNamePart, context);

    return parsed;
  }

  asString() {
    const callAhead = this.isCallAhead(),
          callAheadString = callAhead ?
                              ellipsis :
                                EMPTY_STRING,
          string = `${this.ruleName}${callAheadString}`;

    return string;
  }

  static fromRuleName(ruleName) {
    const type = RuleNamePartType,
          callAhead = false,
          ruleNamePart = new RuleNamePart(type, callAhead, ruleName);

    return ruleNamePart;
  }

  static fromCallAheadAndRuleName(callAhead, ruleName) {
    const type = RuleNamePartType,
          ruleNamePart = new RuleNamePart(type, callAhead, ruleName);

    return ruleNamePart;
  }
}
