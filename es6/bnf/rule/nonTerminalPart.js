"use strict";

const Rule = require("../rule"),
      ruleNames = require("../ruleNames"),
      RuleNameDefinition = require("../definition/ruleName"),
      NonTerminalPartNode = require("../node/part/nonTerminal"),
      RuleNameNonTerminalPartRuleDefinition = require("../definition/partRule/nonTerminal/ruleName");

const { NonTerminalPartRuleName, ChoiceOfPartsRuleName, GroupOfPartsRuleName } = ruleNames;

class NonTerminalPartRule extends Rule {
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

module.exports = NonTerminalPartRule;
