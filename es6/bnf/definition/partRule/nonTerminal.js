"use strict";

import Definition from "../../definition";
import RuleNamePart from "../../part/nonTerminal/ruleName";
import ZeroOrMorePartsPart from "../../part/nonTerminal/zeroOrMoreParts";

import { QuantifierRuleName, NonTerminalPartRuleName } from "../../ruleNames";

class NonTerminalPartRuleDefinition extends Definition {
  constructor() {
    const quantifierRuleName = QuantifierRuleName,
          nonTerminalPartRuleName = NonTerminalPartRuleName,
          quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
          nonTerminalPartRuleNamePart = new RuleNamePart(nonTerminalPartRuleName),
          zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
          parts = [
            nonTerminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
          ];
    
    super(parts)
  }
}

module.exports = NonTerminalPartRuleDefinition;
