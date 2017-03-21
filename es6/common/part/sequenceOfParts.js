'use strict';

const EndOfLinePart = require('./endOfLine'),
      ProductionNamePart = require('./productionName'),
      TerminalSymbolPart = require('./terminalSymbol'),
      SignificantTokenTypePart = require('./significantTokenType');

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

  static fromSymbol(symbol, significantTokenTypes, noWhitespace, regExp, Class) {
    let part = null;
    
    const matches = symbol.match(regExp);

    if (matches !== null) {
      const secondMatch = second(matches);

      symbol = secondMatch; ///

      const terminalPart = SignificantTokenTypePart.fromSymbol(symbol, significantTokenTypes, noWhitespace) ||
                             TerminalSymbolPart.fromSymbol(symbol, significantTokenTypes, noWhitespace) ||
                               EndOfLinePart.fromSymbol(symbol, significantTokenTypes, noWhitespace),
            productionName = symbol;

      part = new Class(terminalPart, productionName, noWhitespace);
    }

    return part;
  }
}

module.exports = SequenceOfPartsPart;

function second(array) { return array[1]; }
