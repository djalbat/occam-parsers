'use strict';

const Production = require('../production'),
      ProductionNameNode = require('../node/productionName'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class ProductionNameProduction extends Production {
  constructor() {
    const nameSignificantTokenType = 'name',
          nameSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(nameSignificantTokenType),
          name = 'productionName',
          definitions = [
            nameSignificantTokenTypeDefinition
          ],
          Node = ProductionNameNode;
    
    super(name, definitions, Node)
  }
}

module.exports = ProductionNameProduction;
