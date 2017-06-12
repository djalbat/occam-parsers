'use strict';

const Definition = require('../../common/definition'),
      ProductionNamePart = require('../../common/part/productionName');

class LeftRecursiveDefinition extends Definition {
  static fromDefinitionAndProductionName(definition, productionName) {
    let leftRecursiveDefinition = null;
    
    const definitionFirstPart = definition.getFirstPart();
    
    if (definitionFirstPart instanceof ProductionNamePart) {
      const definitionFirstProductionNamePart = definitionFirstPart,  ///
            definitionFirstProductionNamePartProductionName = definitionFirstProductionNamePart.getProductionName();
      
      if (definitionFirstProductionNamePartProductionName === productionName) {
        const parts = definition.getParts();

        leftRecursiveDefinition = new LeftRecursiveDefinition(parts);
      }
    }

    return leftRecursiveDefinition;
  }
}

module.exports = LeftRecursiveDefinition;
