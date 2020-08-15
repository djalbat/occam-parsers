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

  findRule(context) {
    const ruleMap = context.getRuleMap(),
          rule = ruleMap[this.ruleName] || null;  ///

    return rule;
  }

  parse(nodes, context, callback) {
    let parsed;

    const rule = this.findRule(context);

    if (rule === null) {
      parsed = false;
    } else {
      const ruleNode = rule.parse(context, callback);

      parsed = (ruleNode !== null);

      if (parsed) {
        nodes.push(ruleNode);
      }
    }

    return parsed;
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
