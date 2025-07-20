"use strict";

import Rule from "../../rule";
import RuleNameDefinition from "../../definition/ruleName";
import RuleNameNonTerminalPartRuleDefinition from "../../definition/partRule/nonTerminal/ruleName";

import { CHOICE_OF_PARTS_RULE_NAME, SEQUENCE_OF_PARTS_RULE_NAME, NON_TERMINAL_PART_RULE_NAME } from "../../ruleNames";

export default class NonTerminalPartBNFRule extends Rule {
  static fromNothing() {
    let ruleName;

    const name = NON_TERMINAL_PART_RULE_NAME; ///

    ruleName = CHOICE_OF_PARTS_RULE_NAME;

    const choiceOfPartsRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

    ruleName = SEQUENCE_OF_PARTS_RULE_NAME;

    const sequenceOfPartsRuleNameDefinition = RuleNameDefinition.fromRuleName(ruleName),
          ruleNameNonTerminalPartRuleDefinition = RuleNameNonTerminalPartRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            choiceOfPartsRuleNameDefinition,
            sequenceOfPartsRuleNameDefinition,
            ruleNameNonTerminalPartRuleDefinition
          ],
          nonTerminalPartRule = new NonTerminalPartBNFRule(name, opacity, definitions);

    return nonTerminalPartRule;
  }
}
