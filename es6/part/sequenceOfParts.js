'use strict';

var TerminalTypePart = require('./terminalType'),
    TerminalSymbolPart = require('./terminalSymbol'),
    ProductionNamePart = require('./productionName');

class SequenceOfPartsPart {
  constructor(terminalPart, productionName) {
    this.terminalPart = terminalPart;
    this.productionName = productionName;
  }

  terminalPartOrProduction(productions) {
    var terminalPartOrProduction = (this.terminalPart !== null) ?
                                      this.terminalPart :
                                        ProductionNamePart.findProduction(this.productionName, productions);

    return terminalPartOrProduction;
  }

  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, regExp, Class) {
    var part = null,
        matches = symbol.match(regExp);

    if (matches !== null) {
      var secondMatch = second(matches);

      symbol = secondMatch; ///

      var terminalPart = TerminalTypePart.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) ||
                          TerminalSymbolPart.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes),
          productionName = symbol;

      part = new Class(terminalPart, productionName);
    }

    return part;
  }
}

module.exports = SequenceOfPartsPart;

function second(array) { return array[1]; }
