'use strict';

const Production = require('../production'),
      ProductionDefinition = require('../definition/production'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionProduction extends Production {
  constructor() {
    const productionDefinition = new ProductionDefinition(),
          name = 'production',
          definitions = [
            productionDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = ProductionProduction;
