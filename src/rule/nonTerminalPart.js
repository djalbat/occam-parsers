"use strict";

import Rule from "../rule";
import RuleNameDefinition from "../definition/ruleName";
import NonTerminalPartBNFNode from "../node/bnf/part/nonTerminal";
import RuleNameNonTerminalPartRuleDefinition from "../definition/partRule/nonTerminal/ruleName";

import { nonTerminalPartRuleName, choiceOfPartsRuleName, sequenceOfPartsRuleName } from "../ruleNames";

export default class NonTerminalPartRule extends Rule {
  static fromNothing() {
    const name = nonTerminalPartRuleName, ///
          choiceOfPartsRuleNameDefinition = RuleNameDefinition.fromRuleName(choiceOfPartsRuleName),
          sequenceOfPartsRuleNameDefinition = RuleNameDefinition.fromRuleName(sequenceOfPartsRuleName),
          ruleNameNonTerminalPartRuleDefinition = RuleNameNonTerminalPartRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            choiceOfPartsRuleNameDefinition,
            sequenceOfPartsRuleNameDefinition,
            ruleNameNonTerminalPartRuleDefinition
          ],
          NonTerminalNode = NonTerminalPartBNFNode, ///
          nonTerminalPartRule = new NonTerminalPartRule(name, opacity, definitions, NonTerminalNode);

    return nonTerminalPartRule;
  }
}
