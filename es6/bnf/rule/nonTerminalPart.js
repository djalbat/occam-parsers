'use strict';

const Rule = require('../rule'),
      PartNode = require('../node/part'),
      ruleNames = require('../ruleNames'),
      RuleNameDefinition = require('../definition/ruleName'),
      RuleNameNonTerminalPartRuleDefinition = require('../definition/nonTerminalPartRule/ruleName');

const { ChoiceOfPartsRuleName, GroupOfPartsRuleName } = ruleNames;

class NonTerminalPartRule extends Rule {
  constructor() {
    const name = PartRuleName,
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
          Node = PartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = NonTerminalPartRule;
