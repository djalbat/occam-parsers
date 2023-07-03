"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { EMPTY_STRING } from "../../constants";
import { RuleNamePartType } from "../../partTypes";

// import { arrayUtilities } from "necessary";
//
// import { isPartLookAhead } from "./part";
//
// const { push } = arrayUtilities;

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

  parse(nodes, state, callback) {
    let parsed;

    const rule = this.findRule(state);

    parsed = (rule !== null) ?
                rule.parse(nodes, state, callback) :
                  false;

    // const partLookAhead = isPartLookAhead(part);
    //
    // if (partLookAhead) {
    //   let remainingNodes;
    //
    //   index++;
    //
    //   const lookAheadCallback = () => {
    //     remainingNodes = [];
    //
    //     const parsed = parsePartOfParts(index, parts, remainingNodes, state, callback);
    //
    //     return parsed;
    //   };
    //
    //   parsed = part.parse(nodes, state, lookAheadCallback);
    //
    //   if (parsed) {
    //     push(nodes, remainingNodes);
    //   }
    //
    // } else {
    //   parsed = part.parse(nodes, state, callback);
    //
    //   if (parsed) {
    //     index++;
    //
    //     parsed = parsePartOfParts(index, parts, nodes, state, callback);
    //   }
    // }

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
