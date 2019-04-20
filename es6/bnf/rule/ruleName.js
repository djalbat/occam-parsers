'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      RuleNameNode = require('../node/ruleName'),
      RuleNameDefinition = require('../definition/ruleName');

const { RuleNameRuleName } = ruleNames;

class RuleNameRule extends Rule {
  constructor() {
    const ruleNameDefinition = new RuleNameDefinition(),
          name = RuleNameRuleName,
          definitions = [
            ruleNameDefinition
          ],
          Node = RuleNameNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RuleNameRule;
