'use strict';

class ProductionNamePart {
  constructor(name, noWhitespace) {
    this.name = name;
    this.noWhitespace = noWhitespace;
  }
  
  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    var nodeOrNodes = null,
        productions = context.getProductions(),
        production = ProductionNamePart.findProduction(this.name, productions);

    if (production !== null) {
      nodeOrNodes = production.parse(context, noWhitespace);
    }

    return nodeOrNodes;
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

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    var name = symbol,  ///
        productionNamePart = new ProductionNamePart(name, noWhitespace);

    return productionNamePart;
  }
}

module.exports = ProductionNamePart;
