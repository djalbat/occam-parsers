"use strict";

import Rule from "../rule";
import RuleNameDefinition from "../../definition/ruleName";
import NonTerminalPartNode from "../node/part/nonTerminal";
import RuleNameNonTerminalPartRuleDefinition from "../../definition/partRule/nonTerminal/ruleName";

import { NonTerminalPartRuleName, ChoiceOfPartsRuleName, SequenceOfPartsRuleName } from "../ruleNames";

export default class NonTerminalPartRule extends Rule {
  constructor() {
    const name = NonTerminalPartRuleName,
          choiceOfPartsRuleName = ChoiceOfPartsRuleName,
          sequenceOfPartsRuleName = SequenceOfPartsRuleName,
          choiceOfPartsRuleNameDefinition = new RuleNameDefinition(choiceOfPartsRuleName),
          sequenceOfPartsRuleNameDefinition = new RuleNameDefinition(sequenceOfPartsRuleName),
          ruleNameNonTerminalPartRuleDefinition = new RuleNameNonTerminalPartRuleDefinition(),
          definitions = [
            choiceOfPartsRuleNameDefinition,
            sequenceOfPartsRuleNameDefinition,
            ruleNameNonTerminalPartRuleDefinition
          ],
          Node = NonTerminalPartNode;
    
    super(name, definitions, Node)
  }
}
