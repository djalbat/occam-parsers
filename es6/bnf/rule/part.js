'use strict';

const Rule = require('../rule'),
      PartNode = require('../node/part'),
      ruleNames = require('../ruleNames'),
      TerminalPartRuleDefinition = require('../definition/partRule/terminal'),
      NonTerminalPartRuleDefinition = require('../definition/partRule/nonTerminal');

const { PartRuleName } = ruleNames;

class PartRule extends Rule {
  constructor() {
    const name = PartRuleName,
          terminalPartRuleDefinition = new TerminalPartRuleDefinition(),
          nonTerminalPartRuleDefinition = new NonTerminalPartRuleDefinition(),
          definitions = [
            terminalPartRuleDefinition,
            nonTerminalPartRuleDefinition
          ],
          Node = PartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = PartRule;
