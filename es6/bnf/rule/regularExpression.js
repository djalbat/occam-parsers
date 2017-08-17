'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      RegularExpressionNode = require('../node/regularExpression'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class RegularExpressionRule extends Rule {
  constructor() {
    const regularExpressionSignificantTokenType = 'regularExpression',
          regularExpressionSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(regularExpressionSignificantTokenType),
          name = ruleNames.RegularExpressionRule,
          definitions = [
            regularExpressionSignificantTokenTypeDefinition
          ],
          Node = RegularExpressionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RegularExpressionRule;
