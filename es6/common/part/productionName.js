'use strict';

const parserUtil = require('../../util/parser');

class ProductionNamePart {
  constructor(productionName, noWhitespace) {
    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }
  
  getProductionName() {
    return this.productionName;
  }
  
  isLeftRecursive(productionName) {
    const leftRecursive = (this.productionName === productionName);
    
    return leftRecursive;
  }
  
  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let nodeOrNodes = null;
    
    const productions = context.getProductions(),
          production = parserUtil.findProduction(this.productionName, productions);

    if (production !== null) {
      nodeOrNodes = production.parse(context, noWhitespace);
    }

    return nodeOrNodes;
  }

  toString() {
    const string = this.productionName;

    return string;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    const productionName = symbol,  ///
          productionNamePart = new ProductionNamePart(productionName, noWhitespace);
  
    return productionNamePart;
  }
}

module.exports = ProductionNamePart;
