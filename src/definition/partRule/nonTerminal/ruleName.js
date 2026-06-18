"use strict";

import Definition from "../../../definition";
import RuleNamePart from "../../../part/nonTerminal/ruleName";
import OptionalPartPart from "../../../part/nonTerminal/optionalPart";

import { RULE_NAME_RULE_NAME, CONTIUNATION_MODIFIER_RULE_NAME } from "../../../ruleNames";

export default class RuleNameNonTerminalPartRuleDefinition extends Definition {
  static fromNothing() {
    let ruleName;

    ruleName = RULE_NAME_RULE_NAME;

    const ruleNameRuleNamePart = RuleNamePart.fromRuleName(ruleName);

    ruleName = CONTIUNATION_MODIFIER_RULE_NAME;

    const continuationModifierRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          optionalContinuationRuleNamePartPart = OptionalPartPart.fromPart(continuationModifierRuleNamePart),
          parts = [
            ruleNameRuleNamePart,
            optionalContinuationRuleNamePartPart
          ],
          precedence = null,
          ruleNameNonTerminalPartRuleDefinition = new RuleNameNonTerminalPartRuleDefinition(parts, precedence);

    return ruleNameNonTerminalPartRuleDefinition;
  }
}
