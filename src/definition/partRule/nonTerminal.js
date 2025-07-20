"use strict";

import Definition from "../../definition";
import RuleNamePart from "../../part/nonTerminal/ruleName";
import ZeroOrMorePartsPart from "../../part/nonTerminal/zeroOrMoreParts";

import { QUANTIFIER_RULE_NAME, NON_TERMINAL_PART_RULE_NAME } from "../../ruleNames";

export default class NonTerminalPartRuleDefinition extends Definition {
  static fromNothing() {
    let ruleName;

    ruleName = QUANTIFIER_RULE_NAME;

    const quantifierRuleNamePart = RuleNamePart.fromRuleName(ruleName);

    ruleName = NON_TERMINAL_PART_RULE_NAME;

    const nonTerminalPartRuleNamePart = RuleNamePart.fromRuleName(ruleName),
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
