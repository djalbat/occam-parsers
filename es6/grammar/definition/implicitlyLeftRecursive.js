'use strict';

const Definition = require('../../extendedBNF/definition');

class ImplicitlyLeftRecursiveDefinition extends Definition {
  getPreviousProductionName() {
    const firstPart = this.getFirstPart(),
          productionNamePart = firstPart, ///
          productionNamePartProductionName = productionNamePart.getProductionName(),
          previousProductionName = productionNamePartProductionName;  ///
    
    return previousProductionName;
  }
  
  static fromDefinition(definition, callback) {
    let implicitlyLeftRecursiveDefinition = null;

    const definitionFirstPartProductionNamePart = definition.isFirstPartProductionNamePart();

    if (definitionFirstPartProductionNamePart) {
      const definitionFirstPart = definition.getFirstPart(),
            definitionFirstProductionNamePart = definitionFirstPart,  ///
            definitionFirstProductionNamePartProductionName = definitionFirstProductionNamePart.getProductionName(),
            productionName = definitionFirstProductionNamePartProductionName, ///
            definitionImplicitlyLeftRecursive = callback(productionName);

      if (definitionImplicitlyLeftRecursive) {
        const parts = definition.getParts();

        implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts);
      }
    }

    return implicitlyLeftRecursiveDefinition;
  }

  static fromDefinitionAndPreviousProduction(definition, previousProduction) {
    const previousProductionName = previousProduction.getName(),
          implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinition(definition, function(productionName) {
            const definitionImplicitlyLeftRecursive = (previousProductionName === productionName);
            
            return definitionImplicitlyLeftRecursive
          });
    

    return implicitlyLeftRecursiveDefinition;
  }
  
  static fromDefinitionAndPreviousProductions(definition, previousProductions) {
    const previousProductionNames = previousProductions.map(function(previousProduction) {
            const previousProductionName = previousProduction.getName();
  
            return previousProductionName;
          }),
          implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinition(definition, function(productionName) {
            const definitionImplicitlyLeftRecursive = previousProductionNames.includes(productionName);
  
            return definitionImplicitlyLeftRecursive
          });

    return implicitlyLeftRecursiveDefinition;
  }
}

module.exports = ImplicitlyLeftRecursiveDefinition;
