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

  static findProduction(name, productions) {
    let foundProduction = null;

    productions.some(function(production) {
      const productionNamePart = production.getName();

      if (name === productionNamePart) {
        foundProduction = production;

        return true;
      } else {
        return false;
      }
    });

    const production = foundProduction;

    return production;
  }
}

module.exports = ProductionNamePart;
