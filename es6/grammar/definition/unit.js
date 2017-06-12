'use strict';

const Definition = require('../../common/definition'),
      ProductionNamePart = require('../../common/part/productionName');

class UnitDefinition extends Definition {
  getProductionName () {
    const firstPart = this.getFirstPart(),
          productionNamePart = firstPart, ///
          productionName = productionNamePart.getProductionName();
    
    return productionName;
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
      const firstPart = definition.getFirstPart();
      
      if (firstPart instanceof ProductionNamePart) {
        const parts = definition.getParts();

        unitDefinition = new UnitDefinition(parts);
      }
    }

    return unitDefinition;
  }
}

module.exports = UnitDefinition;
