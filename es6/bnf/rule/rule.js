'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      RuleNode = require('../node/rule'),
      RuleDefinition = require('../definition/rule');

const { RuleRuleName } = ruleNames;

class RuleRule extends Rule {
  constructor() {
    const ruleDefinition = new RuleDefinition(),
          name = RuleRuleName,
          definitions = [
            ruleDefinition
          ],
          Node = RuleNode;
    
    super(name, definitions, Node);
  }
}

module.exports = RuleRule;
