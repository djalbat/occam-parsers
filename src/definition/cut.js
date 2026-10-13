"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import StringLiteralPart from "../part/terminal/stringLiteral";

import { PRODUCING_MODIFIER_RULE_NAME } from "../ruleNames";

const { backtick } = specialSymbols;

export default class CutDefinition extends Definition {
  static fromNothing() {
    const content = backtick, ///
          backtickStringLiteralPart = StringLiteralPart.fromContent(content);

    let ruleName;

    ruleName = PRODUCING_MODIFIER_RULE_NAME;

    const producingModifierRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          optionalProducingRuleNamePartPart = OptionalPartPart.fromPart(producingModifierRuleNamePart),
          parts = [
            backtickStringLiteralPart,
            optionalProducingRuleNamePartPart
          ],
          precedence = null,
          ruleDefinition = new CutDefinition(parts, precedence);

    return ruleDefinition;
  }
}
