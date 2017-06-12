'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class SignificantTokenTypeProduction extends Production {
  constructor() {
    const typeSignificantTokenType = 'type',
          typeSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(typeSignificantTokenType),
          name = 'significantTokenType',
          definitions = [
            typeSignificantTokenTypeDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = SignificantTokenTypeProduction;
