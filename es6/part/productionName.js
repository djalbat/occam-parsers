'use strict';

class ProductionNamePart {
  constructor(name, noWhitespace) {
    this.name = name;
    this.noWhitespace = noWhitespace;
  }
  
  parse(context, productions, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    var nodes = null,
        production = ProductionNamePart.findProduction(this.name, productions);

    if (production !== null) {
      nodes = production.parse(context, productions, noWhitespace);
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

  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) {
    var name = symbol,  ///
        productionNamePart = new ProductionNamePart(name, noWhitespace);

    return productionNamePart;
  }
}

module.exports = ProductionNamePart;
