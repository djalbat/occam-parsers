'use strict';

var SequenceOfPartsPart = require('./sequenceOfParts');

class OptionalPartPart extends SequenceOfPartsPart {
  parse(context, productions, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///

    var nodes = [], ///
        terminalPartOrProduction = this.terminalPartOrProduction(productions);
    
    if (terminalPartOrProduction !== null) {
      var productionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
          parsed = (productionNodes !== null);

      if (parsed) {
        nodes = productionNodes;
      }
    }

    return nodes;
  }
  
  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) {
    var regExp = /([^*]+)\?$/,
        Class = OptionalPartPart,
        optionalPartPart = super.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace, regExp, Class);

    return optionalPartPart;
  }
}

module.exports = OptionalPartPart;
