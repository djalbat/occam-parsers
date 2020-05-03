"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";

export default class RuleNameDefinition extends Definition {
  constructor(ruleName) {
    const ruleNameRuleNamePart = new RuleNamePart(ruleName),
          parts = [
            ruleNameRuleNamePart
          ];
    
    super(parts)
  }
}
