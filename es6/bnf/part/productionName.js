'use strict';

class ProductionNamePart {
  constructor(content, noWhitespace) {
    this.content = content;
    this.noWhitespace = noWhitespace;
  }

  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let nodeOrNodes = null;

    const productions = context.getProductions(),
          production = ProductionNamePart.findProduction(this.content, productions);

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
