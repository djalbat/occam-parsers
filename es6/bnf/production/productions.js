'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      ProductionsDefinition = require('../definition/productions');

class ProductionsProduction extends Production {
  constructor() {
    const productionsDefinition = new ProductionsDefinition(),
          name = 'productions',
          definitions = [
            productionsDefinition
          ],
          Node = NonTerminalNode;
    
    super(name, definitions, Node)
  }
}

module.exports = ProductionsProduction;
