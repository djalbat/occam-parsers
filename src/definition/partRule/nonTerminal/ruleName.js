"use strict";

import Definition from "../../../definition";
import RuleNamePart from "../../../part/nonTerminal/ruleName";
import OptionalPartPart from "../../../part/nonTerminal/optionalPart";

import { ruleNameRuleName, lookAheadModifierRuleName } from "../../../ruleNames";

export default class RuleNameNonTerminalPartRuleDefinition extends Definition {
  static fromNothing() {
    const ruleNameRuleNamePart = RuleNamePart.fromRuleName(ruleNameRuleName),
          lookAheadModifierRuleNamePart = RuleNamePart.fromRuleName(lookAheadModifierRuleName),
          optionalLookAheadRuleNamePartPart = OptionalPartPart.fromPart(lookAheadModifierRuleNamePart),
          parts = [
            ruleNameRuleNamePart,
            optionalLookAheadRuleNamePartPart
          ],
          precedence = null,
          ruleNameNonTerminalPartRuleDefinition = new RuleNameNonTerminalPartRuleDefinition(parts, precedence);

    return ruleNameNonTerminalPartRuleDefinition;
  }
}
