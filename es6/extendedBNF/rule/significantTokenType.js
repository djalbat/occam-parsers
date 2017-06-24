'use strict';

const Rule = require('../rule'),
      SignificantTokenTypeNode = require('../node/significantTokenType'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class SignificantTokenTypeRule extends Rule {
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

module.exports = SignificantTokenTypeRule;
