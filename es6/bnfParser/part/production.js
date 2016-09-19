'use strict';

class ProductionPart {
  constructor(name) {
    this.name = name;
  }
  
  parse(input, context, productions) {
    var parsed = false,
        production = ProductionPart.findProduction(this.name, productions);

    if (production !== null) {
      parsed = production.parse(input, context, productions);
    }

    return parsed;
  }

  static findProduction(name, productions) {
    var foundProduction = null;

    productions.some(function(production) {
      var productionName = production.getName();

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

  static fromSymbol(symbol, terminalSymbolsRegExp) {
    var name = symbol,  ///
        productionPart = new ProductionPart(name);

    return productionPart;
  }
}

module.exports = ProductionPart;
