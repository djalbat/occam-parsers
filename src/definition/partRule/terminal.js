"use strict";

import Definition from "../../definition";
import RuleNamePart from "../../part/nonTerminal/ruleName";
import ZeroOrMorePartsPart from "../../part/nonTerminal/zeroOrMoreParts";

import { QUANTIFIER_RULE_NAME, TERMINAL_PART_RULE_NAME } from "../../ruleNames";

export default class TerminalPartRuleDefinition extends Definition {
  static fromNothing() {
    let ruleName;

    ruleName = QUANTIFIER_RULE_NAME;

    const quantifierRuleNamePart = RuleNamePart.fromRuleName(ruleName);

    ruleName = TERMINAL_PART_RULE_NAME;

    const terminalPartRuleNamePart = RuleNamePart.fromRuleName(ruleName),
          zeroOrMoreQuantifierRuleNamePartsPart = ZeroOrMorePartsPart.fromPart(quantifierRuleNamePart),
          parts = [
            terminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
          ],
          precedence = null,
          terminalPartRuleDefinition = new TerminalPartRuleDefinition(parts, precedence);

    return terminalPartRuleDefinition;
  }
}
