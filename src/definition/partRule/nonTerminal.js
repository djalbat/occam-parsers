"use strict";

import Definition from "../../definition";
import RuleNamePart from "../../part/nonTerminal/ruleName";
import ZeroOrMorePartsPart from "../../part/nonTerminal/zeroOrMoreParts";

import { quantifierRuleName, nonTerminalPartRuleName } from "../../ruleNames";

export default class NonTerminalPartRuleDefinition extends Definition {
  static fromNothing() {
    const quantifierRuleNamePart = new RuleNamePart(quantifierRuleName),
          nonTerminalPartRuleNamePart = new RuleNamePart(nonTerminalPartRuleName),
          zeroOrMoreQuantifierRuleNamePartsPart = new ZeroOrMorePartsPart(quantifierRuleNamePart),
          parts = [
            nonTerminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
          ],
          precedence = null,
          nonTerminalPartRuleDefinition = new NonTerminalPartRuleDefinition(parts, precedence);
    
    return nonTerminalPartRuleDefinition;
  }
}
