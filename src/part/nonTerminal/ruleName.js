"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { EMPTY_STRING } from "../../constants";
import { RuleNamePartType } from "../../partTypes";

const { ellipsis } = specialSymbols;

export default class RuleNamePart extends NonTerminalPart {
  constructor(type, ruleName, lookAhead) {
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

  findRule(state) {
    const ruleMap = state.getRuleMap(),
          rule = ruleMap[this.ruleName] || null;  ///

    return rule;
  }

  parse(nodes, state, callback, precedence, ruleName) {
    let parsed;

    const rule = this.findRule(state);

    if (rule === null) {
      parsed = false;
    } else {
      const ruleNode = rule.parse(state, callback, precedence, ruleName);

      parsed = (ruleNode !== null);

      if (parsed) {
        nodes.push(ruleNode);
      }
    }

    return parsed;
  }

  asString() {
    const lookAheadString = this.lookAhead ?
                              ellipsis :
                                EMPTY_STRING,
          string = `${this.ruleName}${lookAheadString}`;

    return string;
  }

  static fromRuleName(ruleName) {
    const type = RuleNamePartType,
          lookAhead = false,
          ruleNamePart = new RuleNamePart(type, ruleName, lookAhead);

    return ruleNamePart;
  }

  static fromRuleNameAndLookAhead(ruleName, lookAhead) {
    const type = RuleNamePartType,
          ruleNamePart = new RuleNamePart(type, ruleName, lookAhead);

    return ruleNamePart;
  }
}
