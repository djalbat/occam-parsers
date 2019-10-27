'use strict';

const Rule = require('../rule'),
      PartNode = require('../node/part'),
      ruleNames = require('../ruleNames'),
      RuleNameDefinition = require('../definition/ruleName'),
      TerminalPartRuleDefinition = require('../definition/partRule/terminal'),
      NonTerminalPartRuleDefinition = require('../definition/partRule/nonTerminal');

const { PartRuleName, NoWhitespacePartRuleName } = ruleNames;

class PartRule extends Rule {
  constructor() {
    const name = PartRuleName,
          terminalPartRuleDefinition = new TerminalPartRuleDefinition(),
          nonTerminalPartRuleDefinition = new NonTerminalPartRuleDefinition(),
          noWhitespacePartRuleNameDefinition = new RuleNameDefinition(NoWhitespacePartRuleName),
          definitions = [
            nonTerminalPartRuleDefinition,
            terminalPartRuleDefinition,
            noWhitespacePartRuleNameDefinition
          ],
          Node = PartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = PartRule;
