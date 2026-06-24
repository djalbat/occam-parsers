"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { EMPTY_STRING } from "../../constants";
import { RuleNamePartType } from "../../partTypes";
import { ruleNamePartContext } from "../../utilities/context";

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

  parse(frame, context) {
    const ruleNamePart = this;  ///

    ruleNamePartContext((context) => {
      const rule = context.findRule(this.ruleName);

      if (rule !== null) {
        const continuing = context.isContinuing();

        if (continuing) {
          frame = rule.parse(frame, context);
        } else {
          const partFrame = rule.parse(emptyFrame, context);

          frame = (partFrame !== null) ?
                    context.compose(frame, partFrame) :
                      null;
        }
      }

      if (frame !== null) {
        context.commit();
      }
    }, ruleNamePart, context);

    return frame;
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
