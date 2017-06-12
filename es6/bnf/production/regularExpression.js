'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class RegularExpressionProduction extends Production {
  constructor() {
    const regularExpressionSignificantTokenType = 'regularExpression',
          regularExpressionSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(regularExpressionSignificantTokenType),
          name = 'regularExpression',
          definitions = [
            regularExpressionSignificantTokenTypeDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RegularExpressionProduction;
