'use strict';

var TerminalTypePart = require('./terminalType'),
    TerminalSymbolPart = require('./terminalSymbol'),
    ProductionNamePart = require('./productionName');

class SequenceOfPartsPart {
  constructor(terminalPart, productionName, noWhitespace) {
    this.terminalPart = terminalPart;
    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }
  
  getNoWhitespace() {
    return this.noWhitespace;
  }

  terminalPartOrProduction(productions) {
    var terminalPartOrProduction = (this.terminalPart !== null) ?
                                      this.terminalPart :
                                        ProductionNamePart.findProduction(this.productionName, productions);

    return terminalPartOrProduction;
  }

  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace, regExp, Class) {
    var part = null,
        matches = symbol.match(regExp);

    if (matches !== null) {
      var secondMatch = second(matches);

      symbol = secondMatch; ///

      var terminalPart = TerminalTypePart.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) ||
                          TerminalSymbolPart.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace),
          productionName = symbol;

      part = new Class(terminalPart, productionName, noWhitespace);
    }

    return part;
  }
}

module.exports = SequenceOfPartsPart;

function second(array) { return array[1]; }
