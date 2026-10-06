"use strict";

import Definition from "../../../definition";
import RuleNamePart from "../../../part/nonTerminal/ruleName";
import OptionalPartPart from "../../../part/nonTerminal/optionalPart";

import { RULE_NAME_RULE_NAME, BRANCHING_MODIFIER_RULE_NAME } from "../../../ruleNames";

export default class RuleNameNonTerminalPartRuleDefinition extends Definition {
  static fromNothing() {
    let ruleName;

    ruleName = RULE_NAME_RULE_NAME;

    const ruleNameRuleNamePart = RuleNamePart.fromRuleName(ruleName);

    ruleName = BRANCHING_MODIFIER_RULE_NAME;

    const branchingModifierRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          optionalBranchingnRuleNamePartPart = OptionalPartPart.fromPart(branchingModifierRuleNamePart),
          parts = [
            ruleNameRuleNamePart,
            optionalBranchingnRuleNamePartPart
          ],
          precedence = null,
          ruleNameNonTerminalPartRuleDefinition = new RuleNameNonTerminalPartRuleDefinition(parts, precedence);

    return ruleNameNonTerminalPartRuleDefinition;
  }
}
