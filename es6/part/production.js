'use strict';

class ProductionPart {
  constructor(name) {
    this.name = name;
  }
  
  parse(input, context, productions) {
    var nodes = null,
        production = ProductionPart.findProduction(this.name, productions);

    if (production !== null) {
      nodes = production.parse(input, context, productions);
    }

    return nodes;
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

  static fromSymbol(symbol, specialSymbolsRegExp) {
    var name = symbol,  ///
        productionPart = new ProductionPart(name);

    return productionPart;
  }
}

module.exports = ProductionPart;
