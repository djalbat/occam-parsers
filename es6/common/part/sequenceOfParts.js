'use strict';

const EndOfLinePart = require('./endOfLine'),
      parserUtil = require('../../util/parser'),
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

  getTerminalPartOrProduction(productions) {
    const production = parserUtil.findProduction(this.productionName, productions),
          terminalPartOrProduction = (this.terminalPart !== null) ?
                                        this.terminalPart :
                                          production;

    return terminalPartOrProduction;
  }

  toString(operatorString) {
    let string;

    const productionName = this.getProductionName();

    if (productionName !== null) {
      string = `${productionName}${operatorString}`;
    } else {
      const terminalPart = this.getTerminalPart(),
          terminalPartString = terminalPart.toString();

      string = `${terminalPartString}${operatorString}`;
    }

    return string;
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
