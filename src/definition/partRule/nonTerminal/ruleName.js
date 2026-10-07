"use strict";

import Definition from "../../../definition";
import RuleNamePart from "../../../part/nonTerminal/ruleName";

import { RULE_NAME_RULE_NAME } from "../../../ruleNames";

export default class RuleNameNonTerminalPartRuleDefinition extends Definition {
  static fromNothing() {
    const ruleName = RULE_NAME_RULE_NAME,
          ruleNameRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          parts = [
            ruleNameRuleNamePart,
          ],
          precedence = null,
          ruleNameNonTerminalPartRuleDefinition = new RuleNameNonTerminalPartRuleDefinition(parts, precedence);

    return ruleNameNonTerminalPartRuleDefinition;
  }
}
