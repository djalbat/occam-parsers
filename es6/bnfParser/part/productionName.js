'use strict';

class ProductionNamePart {
  constructor(productionName) {
    this.productionName = productionName;
  }
  
  parse(input, context, productions) {
    var parsed = false,
        production = ProductionNamePart.findProduction(this.productionName, productions);

    if (production !== null) {
      parsed = production.parse(input, context, productions);
    }

    return parsed;
  }

  static findProduction(productionName, productions) {
    var foundProduction = null;

    productions.some(function(production) {
      var name = production.getName();

      if (name === productionName) {
        foundProduction = production;

        return true;
      } else {
        return false;
      }
    });

    var production = foundProduction;

    return production;
  }

  static fromSymbol(symbol) {
    var productionName = symbol,  ///
        productionNamePart = new ProductionNamePart(productionName);

    return productionNamePart;
  }
}

module.exports = ProductionNamePart;
