'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      RuleNameNode = require('../node/ruleName'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

const { RuleNameRuleName } = ruleNames;

class RuleNameRule extends Rule {
  constructor() {
    const nameSignificantTokenType = 'name',
          nameSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(nameSignificantTokenType),
          name = RuleNameRuleName,
          definitions = [
            nameSignificantTokenTypeDefinition
          ],
          Node = RuleNameNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RuleNameRule;
