'use strict';

const Production = require('../production'),
      ProductionNode = require('../node/production'),
      ProductionDefinition = require('../definition/production');

class ProductionProduction extends Production {
  constructor() {
    const productionDefinition = new ProductionDefinition(),
          name = 'production',
          definitions = [
            productionDefinition
          ],
          Node = ProductionNode;
    
    super(name, definitions, Node);
  }
}

module.exports = ProductionProduction;
