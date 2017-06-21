'use strict';

const Definition = require('../../extendedBNF/definition'),
      ProductionNamePart = require('../../extendedBNF/part/productionName');

class UnitDefinition extends Definition {
  getProductionName() {
    const firstPart = this.getFirstPart(),
          productionNamePart = firstPart, ///
          productionName = productionNamePart.getProductionName();
    
    return productionName;
  }

  isIncludedInProductionNames(productionNames) {
    const productionName = this.getProductionName(),
          includedInProductionNames = productionNames.includes(productionName);

    return includedInProductionNames;
  }

  static fromProductionName(productionName) {
    const noWhitespace = false, ///
          productionNamePart = new ProductionNamePart(productionName, noWhitespace),
          parts = [
            productionNamePart
          ],
          unitDefinition = new UnitDefinition(parts);

    return unitDefinition;
  }

  static fromDefinition(definition) {
    let unitDefinition = null;

    const partsLength = definition.getPartsLength();

    if (partsLength === 1) {
      const firstPartProductionNamePart = definition.isFirstPartProductionNamePart();
      
      if (firstPartProductionNamePart) {
        const parts = definition.getParts();

        unitDefinition = new UnitDefinition(parts);
      }
    }

    return unitDefinition;
  }
}

module.exports = UnitDefinition;
