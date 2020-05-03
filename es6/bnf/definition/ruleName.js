"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";

class RuleNameDefinition extends Definition {
  constructor(ruleName) {
    const ruleNameRuleNamePart = new RuleNamePart(ruleName),
          parts = [
            ruleNameRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = RuleNameDefinition;
