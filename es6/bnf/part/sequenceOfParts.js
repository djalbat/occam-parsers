'use strict';

const ProductionNamePart = require('./productionName');

class SequenceOfPartsPart {
  constructor(terminalPart, productionName, noWhitespace) {
    this.terminalPart = terminalPart;
    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }

  getTerminalPart() {
    return this.terminalPart;
  }

  getProductionName() {
    return this.productionName;
  }
  
  getNoWhitespace() {
    return this.noWhitespace;
  }

  terminalPartOrProduction(productions) {
    const production = ProductionNamePart.findProduction(this.productionName, productions),
          terminalPartOrProduction = (this.terminalPart !== null) ?
                                        this.terminalPart :
                                          production;

    return terminalPartOrProduction;
  }
}

module.exports = SequenceOfPartsPart;
