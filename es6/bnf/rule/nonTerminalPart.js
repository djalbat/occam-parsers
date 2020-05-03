"use strict";

import Rule from "../rule";
import RuleNameDefinition from "../definition/ruleName";
import NonTerminalPartNode from "../node/part/nonTerminal";
import RuleNameNonTerminalPartRuleDefinition from "../definition/partRule/nonTerminal/ruleName";

import { NonTerminalPartRuleName, ChoiceOfPartsRuleName, GroupOfPartsRuleName } from "../ruleNames";

export default class NonTerminalPartRule extends Rule {
  constructor() {
    const name = NonTerminalPartRuleName,
          groupOfPartsRuleName = GroupOfPartsRuleName,
          choiceOfPartsRuleName = ChoiceOfPartsRuleName,
          groupOfPartsRuleNameDefinition = new RuleNameDefinition(groupOfPartsRuleName),
          choiceOfPartsRuleNameDefinition = new RuleNameDefinition(choiceOfPartsRuleName),
          ruleNameNonTerminalPartRuleDefinition = new RuleNameNonTerminalPartRuleDefinition(),
          definitions = [
            choiceOfPartsRuleNameDefinition,
            groupOfPartsRuleNameDefinition,
            ruleNameNonTerminalPartRuleDefinition
          ],
          Node = NonTerminalPartNode;
    
    super(name, definitions, Node)
  }
}
