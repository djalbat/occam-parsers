'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      RuleNameNode = require('../node/ruleName'),
      NameDefinition = require('../definition/name');

const { RuleNameRuleName } = ruleNames;

class RuleNameRule extends Rule {
  constructor() {
    const nameDefinition = new NameDefinition(),
          name = RuleNameRuleName,
          definitions = [
            nameDefinition  ///
          ],
          Node = RuleNameNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RuleNameRule;
