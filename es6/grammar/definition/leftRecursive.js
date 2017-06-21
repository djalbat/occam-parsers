'use strict';

const Definition = require('../../extendedBNF/definition');

class LeftRecursiveDefinition extends Definition {
  static fromDefinitionAndProductionName(definition, productionName) {
    let leftRecursiveDefinition = null;
    
    const definitionFirstPartProductionNamePart = definition.isFirstPartProductionNamePart();
    
    if (definitionFirstPartProductionNamePart) {
      const definitionFirstPart = definition.getFirstPart(),
            definitionFirstProductionNamePart = definitionFirstPart,  ///
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
