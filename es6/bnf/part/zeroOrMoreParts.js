'use strict';

var SequenceOfPartsPart = require('./sequenceOfParts');

class ZeroOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, productions, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///

    var nodes = null,
        terminalPartOrProduction = this.terminalPartOrProduction(productions);

    if (terminalPartOrProduction !== null) {
      nodes = [];

      for(;;) {
        var terminalPartOrProductionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
            parsed = (terminalPartOrProductionNodes !== null);

        if (parsed) {
          if (terminalPartOrProductionNodes !== undefined) {
            nodes = nodes.concat(terminalPartOrProductionNodes);
          }
        } else {
          return nodes;
        }
      }
    }

    return nodes;
  }
  
  static fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
    var regExp = /([^*]+)\*$/,
        Class = ZeroOrMorePartsPart,
        zeroOrMorePartsPart = super.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace, regExp, Class);

    return zeroOrMorePartsPart;
  }
}

module.exports = ZeroOrMorePartsPart;
