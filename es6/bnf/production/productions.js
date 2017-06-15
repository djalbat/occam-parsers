'use strict';

const Production = require('../production'),
      ProductionsNode = require('../node/productions'),
      ProductionsDefinition = require('../definition/productions');

class ProductionsProduction extends Production {
  constructor() {
    const productionsDefinition = new ProductionsDefinition(),
          name = 'productions',
          definitions = [
            productionsDefinition
          ],
          Node = ProductionsNode;
    
    super(name, definitions, Node)
  }
}

module.exports = ProductionsProduction;
