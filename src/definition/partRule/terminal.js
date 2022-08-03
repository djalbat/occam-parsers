"use strict";

import Definition from "../../definition";
import RuleNamePart from "../../part/nonTerminal/ruleName";
import ZeroOrMorePartsPart from "../../part/nonTerminal/zeroOrMoreParts";

import { quantifierRuleName, terminalPartRuleName } from "../../ruleNames";

export default class TerminalPartRuleDefinition extends Definition {
  constructor() {
    const quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
          terminalPartRuleNamePart = new RuleNamePart(terminalPartRuleName),
          zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
          parts = [
            terminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
          ];
    
    super(parts)
  }
}
