"use strict";

import Rule from "../rule";
import RuleNameDefinition from "../definition/ruleName";
import NonTerminalPartBNFNode from "../node/bnf/part/nonTerminal";
import RuleNameNonTerminalPartRuleDefinition from "../definition/partRule/nonTerminal/ruleName";

import { nonTerminalPartRuleName, choiceOfPartsRuleName, sequenceOfPartsRuleName } from "../ruleNames";

export default class NonTerminalPartRule extends Rule {
  constructor() {
    const name = nonTerminalPartRuleName, ///
          choiceOfPartsRuleNameDefinition = new RuleNameDefinition(choiceOfPartsRuleName),
          sequenceOfPartsRuleNameDefinition = new RuleNameDefinition(sequenceOfPartsRuleName),
          ruleNameNonTerminalPartRuleDefinition = new RuleNameNonTerminalPartRuleDefinition(),
          ambiguous = false,
          definitions = [
            choiceOfPartsRuleNameDefinition,
            sequenceOfPartsRuleNameDefinition,
            ruleNameNonTerminalPartRuleDefinition
          ],
          Node = NonTerminalPartBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
