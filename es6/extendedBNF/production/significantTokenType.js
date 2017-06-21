'use strict';

const Production = require('../production'),
      SignificantTokenTypeNode = require('../node/significantTokenType'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class SignificantTokenTypeProduction extends Production {
  constructor() {
    const typeSignificantTokenType = 'type',
          typeSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(typeSignificantTokenType),
          name = 'significantTokenType',
          definitions = [
            typeSignificantTokenTypeDefinition
          ],
          Node = SignificantTokenTypeNode;
    
    super(name, definitions, Node)
  }
}

module.exports = SignificantTokenTypeProduction;
