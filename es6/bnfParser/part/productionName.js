'use strict';

class ProductionNamePart {
  constructor(productionName) {
    this.productionName = productionName;
  }
  
  parse(input, context, productions) {
    var production = ProductionNamePart.findProduction(this.productionName, productions),
        parsed = production.parse(input, context, productions);

    return parsed;
  }

  static findProduction(productionName, productions) {
    var foundProduction = undefined;

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

  static fromSymbols(symbols, Parts) {
    var symbol = symbols.shift(),
        productionName = symbol,  ///
        productionNamePart = new ProductionNamePart(productionName);

    return productionNamePart;
  }
}

module.exports = ProductionNamePart;
