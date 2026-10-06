"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { EMPTY_STRING } from "../../constants";
import { RuleNamePartType } from "../../partTypes";

const { ellipsis } = specialSymbols;

export default class RuleNamePart extends NonTerminalPart {
  constructor(type, branching, ruleName) {
    super(type, branching);

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

    const branching = this.isBranching();

    if (branching) {
      state = state.branch();
    }

    return rule.parse(frame, state, forward, back);
  }

  asString() {
    const branching = this.isBranching(),
          branchingString = branching ?
                              ellipsis :
                                EMPTY_STRING,
          string = `${this.ruleName}${branchingString}`;

    return string;
  }

  static fromRuleName(ruleName) {
    const type = RuleNamePartType,
          branching = false,
          ruleNamePart = new RuleNamePart(type, branching, ruleName);

    return ruleNamePart;
  }

  static fromBranchingAndRuleName(branching, ruleName) {
    const type = RuleNamePartType,
          ruleNamePart = new RuleNamePart(type, branching, ruleName);

    return ruleNamePart;
  }
}
