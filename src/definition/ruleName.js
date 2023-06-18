"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";

export default class RuleNameDefinition extends Definition {
  static fromRuleName(ruleName) {
    const ruleNameRuleNamePart = new RuleNamePart(ruleName),
          parts = [
            ruleNameRuleNamePart
          ],
          precedence = null,
          ruleNameDefinition = new RuleNameDefinition(parts, precedence);

    return ruleNameDefinition;
  }
}
