"use strict";

import Definition from "../../definition";
import RuleNamePart from "../../part/nonTerminal/ruleName";
import ZeroOrMorePartsPart from "../../part/nonTerminal/zeroOrMoreParts";

import { quantifierRuleName, nonTerminalPartRuleName } from "../../ruleNames";

export default class NonTerminalPartRuleDefinition extends Definition {
  static fromNothing() {
    const quantifierRuleNamePart = RuleNamePart.fromRuleName(quantifierRuleName),
          nonTerminalPartRuleNamePart = RuleNamePart.fromRuleName(nonTerminalPartRuleName),
          zeroOrMoreQuantifierRuleNamePartsPart = ZeroOrMorePartsPart.fromPart(quantifierRuleNamePart),
          parts = [
            nonTerminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
          ],
          precedence = null,
          nonTerminalPartRuleDefinition = new NonTerminalPartRuleDefinition(parts, precedence);
    
    return nonTerminalPartRuleDefinition;
  }
}
