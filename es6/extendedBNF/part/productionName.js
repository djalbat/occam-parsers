'use strict';

const lexers = require('occam-lexers');

const parserUtil = require('../../util/parser');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { NO_WHITESPACE } = specialSymbols;

class ProductionNamePart {
  constructor(productionName, noWhitespace = false) {
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
    const noWhitespaceString = this.noWhitespace ?
                                 NO_WHITESPACE :
                                   '',
          string = `${noWhitespaceString}${this.productionName}`;

    return string;
  }
}

module.exports = ProductionNamePart;
