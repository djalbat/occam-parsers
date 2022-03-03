"use strict";

import Definition from "../../../definition";
import RuleNamePart from "../../../part/nonTerminal/ruleName";
import OptionalPartPart from "../../../part/nonTerminal/optionalPart";

import { RuleNameRuleName, LookAheadModifierRuleName } from "../../../bnf/ruleNames";

export default class RuleNameNonTerminalPartRuleDefinition extends Definition {
  constructor() {
    const ruleNameRuleName = RuleNameRuleName,
          lookAheadModifierRuleName = LookAheadModifierRuleName,
          ruleNameRuleNamePart = new RuleNamePart(ruleNameRuleName),
          lookAheadModifierRuleNamePart = new RuleNamePart(lookAheadModifierRuleName),
          optionalLookAheadRuleNamePartPart = new OptionalPartPart(lookAheadModifierRuleNamePart),
          parts = [
            ruleNameRuleNamePart,
            optionalLookAheadRuleNamePartPart
          ];
    
    super(parts)
  }
}
