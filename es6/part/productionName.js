'use strict';

class ProductionNamePart {
  constructor(name) {
    this.name = name;
  }
  
  parse(context, productions) {
    var nodes = null,
        production = ProductionNamePart.findProduction(this.name, productions);

    if (production !== null) {
      nodes = production.parse(context, productions);
    }

    return nodes;
  }

  static findProduction(name, productions) {
    var foundProduction = null;

    productions.some(function(production) {
      var productionNamePart = production.getName();

      if (name === productionNamePart) {
        foundProduction = production;

        return true;
      } else {
        return false;
      }
    });

    var production = foundProduction;

    return production;
  }

  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
    var name = symbol,  ///
        productionNamePart = new ProductionNamePart(name);

    return productionNamePart;
  }
}

module.exports = ProductionNamePart;
