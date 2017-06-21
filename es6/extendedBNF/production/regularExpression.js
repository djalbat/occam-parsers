'use strict';

const Production = require('../production'),
      RegularExpressionNode = require('../node/regularExpression'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class RegularExpressionProduction extends Production {
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

module.exports = RegularExpressionProduction;
