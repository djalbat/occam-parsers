'use strict';

var SequenceOfPartsPart = require('./sequenceOfParts');

class ZeroOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, productions) {
    var nodes = null,
        terminalPartOrProduction = this.terminalPartOrProduction(productions);

    if (terminalPartOrProduction !== null) {
      nodes = [];

      for(;;) {
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
    }

    return nodes;
  }
  
  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
    var regExp = /([^*]+)\*$/,
        Class = ZeroOrMorePartsPart,
        zeroOrMorePartsPart = super.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, regExp, Class);

    return zeroOrMorePartsPart;
  }
}

module.exports = ZeroOrMorePartsPart;
