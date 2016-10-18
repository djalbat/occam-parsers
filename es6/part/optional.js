'use strict';

var SequenceOfPartsPart = require('./sequenceOfParts');

class OptionalPart extends SequenceOfPartsPart {
  parse(context, productions) {
    var nodes = null,
        terminalPartOrProduction = this.terminalPartOrProduction(productions);
    
    if (terminalPartOrProduction !== null) {
      nodes = [];

      context.saveIndex();

      var productionNodes = terminalPartOrProduction.parse(context, productions),
          parsed = (productionNodes !== null);

      if (parsed) {
        nodes = nodes.concat(productionNodes);
      } else {
        context.backtrack();

        return nodes;
      }
    }

    return nodes;
  }
  
  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
    var regExp = /([^*]+)\?$/,
        Class = OptionalPart,
        optionalPart = super.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, regExp, Class);

    return optionalPart;
  }
}

module.exports = OptionalPart;
