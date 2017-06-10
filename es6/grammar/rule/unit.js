'use strict';

const Rule = require('../../common/rule'),
      ProductionNamePart = require('../../common/part/productionName');

class UnitRule extends Rule {
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
          unitRule = new UnitRule(parts);

    return unitRule;
  }

  static fromRule(rule) {
    let unitRule = null;

    const partsLength = rule.getPartsLength();

    if (partsLength === 1) {
      const firstPart = rule.getFirstPart();
      
      if (firstPart instanceof ProductionNamePart) {
        const parts = rule.getParts();

        unitRule = new UnitRule(parts);
      }
    }

    return unitRule;
  }
}

module.exports = UnitRule;
