'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class ProductionNameProduction extends Production {
  constructor() {
    const nameSignificantTokenType = 'name',
          nameSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(nameSignificantTokenType),
          name = 'productionName',
          definitions = [
            nameSignificantTokenTypeDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = ProductionNameProduction;
