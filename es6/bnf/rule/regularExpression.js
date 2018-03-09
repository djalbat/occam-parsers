'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      RegularExpressionNode = require('../node/regularExpression'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

const { RegularExpressionRuleName } = ruleNames;

class RegularExpressionRule extends Rule {
  constructor() {
    const regularExpressionSignificantTokenType = 'regularExpression',
          regularExpressionSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(regularExpressionSignificantTokenType),
          name = RegularExpressionRuleName,
          definitions = [
            regularExpressionSignificantTokenTypeDefinition
          ],
          Node = RegularExpressionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RegularExpressionRule;
