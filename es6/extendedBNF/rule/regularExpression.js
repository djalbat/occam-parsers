'use strict';

const Rule = require('../rule'),
      RegularExpressionNode = require('../node/regularExpression'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class RegularExpressionRule extends Rule {
  constructor() {
    const regularExpressionSignificantTokenType = 'regularExpression',
          regularExpressionSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(regularExpressionSignificantTokenType),
          name = 'regularExpression',
          definitions = [
            regularExpressionSignificantTokenTypeDefinition
          ],
          Node = RegularExpressionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RegularExpressionRule;
