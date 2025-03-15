"use strict";

import Definition from "../../../definition";
import RuleNamePart from "../../../part/nonTerminal/ruleName";
import OptionalPartPart from "../../../part/nonTerminal/optionalPart";

import { ruleNameRuleName, callAheadModifierRuleName } from "../../../ruleNames";

export default class RuleNameNonTerminalPartRuleDefinition extends Definition {
  static fromNothing() {
    const ruleNameRuleNamePart = RuleNamePart.fromRuleName(ruleNameRuleName),
          callAheadModifierRuleNamePart = RuleNamePart.fromRuleName(callAheadModifierRuleName),
          optionalCallAheadRuleNamePartPart = OptionalPartPart.fromPart(callAheadModifierRuleNamePart),
          parts = [
            ruleNameRuleNamePart,
            optionalCallAheadRuleNamePartPart
          ],
          precedence = null,
          ruleNameNonTerminalPartRuleDefinition = new RuleNameNonTerminalPartRuleDefinition(parts, precedence);

    return ruleNameNonTerminalPartRuleDefinition;
  }
}
