"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { EMPTY_STRING } from "../../constants";
import { RuleNamePartType } from "../../partTypes";

const { ellipsis } = specialSymbols;

export default class RuleNamePart extends NonTerminalPart {
  constructor(type, continuation, ruleName) {
    super(type, continuation);

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
    const continuation = this.isContinuation(),
          continuationString = continuation ?
                                  ellipsis :
                                    EMPTY_STRING,
          string = `${this.ruleName}${continuationString}`;

    return string;
  }

  static fromRuleName(ruleName) {
    const type = RuleNamePartType,
          continuation = false,
          ruleNamePart = new RuleNamePart(type, continuation, ruleName);

    return ruleNamePart;
  }

  static fromContinuationAndRuleName(continuation, ruleName) {
    const type = RuleNamePartType,
          ruleNamePart = new RuleNamePart(type, continuation, ruleName);

    return ruleNamePart;
  }
}
