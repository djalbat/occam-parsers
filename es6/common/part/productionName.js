'use strict';

class ProductionNamePart {
  constructor(productionName, noWhitespace) {
    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }
  
  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let nodeOrNodes = null;
    
    const productions = context.getProductions(),
          production = ProductionNamePart.findProduction(this.productionName, productions);

    if (production !== null) {
      nodeOrNodes = production.parse(context, noWhitespace);
    }

    return nodeOrNodes;
  }

  static findProduction(productionName, productions) {
    const name = productionName;  ///
    
    let foundProduction = null;

    productions.some(function(production) {
      const productionName = production.getName();

      if (name === productionName) {
        foundProduction = production;

        return true;
      } else {
        return false;
      }
    });

    const production = foundProduction;

    return production;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    const productionName = symbol,  ///
          productionNamePart = new ProductionNamePart(productionName, noWhitespace);
  
    return productionNamePart;
  }
}

module.exports = ProductionNamePart;
