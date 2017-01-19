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
            terminalPartOrProductionParsed = (terminalPartOrProductionNodes !== null);

        if (terminalPartOrProductionParsed) {
          nodes = nodes.concat(terminalPartOrProductionNodes);
        } else {
          return nodes;
        }
      }
    }

    return nodes;
  }
  
  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    var regExp = /([^*]+)\*$/,
        Class = ZeroOrMorePartsPart,
        zeroOrMorePartsPart = super.fromSymbol(symbol, significantTokenTypes, noWhitespace, regExp, Class);

    return zeroOrMorePartsPart;
  }


  static fromOneOrMorePartsPart(oneOrMorePartsPart) {
    var terminalPart = oneOrMorePartsPart.getTerminalPart(),
        productionName = oneOrMorePartsPart.getProductionName(),
        noWhitespace = oneOrMorePartsPart.getNoWhitespace(),
        zeroOrMorePartsPart = new ZeroOrMorePartsPart(terminalPart, productionName, noWhitespace);

    return zeroOrMorePartsPart;
  }
}

module.exports = ZeroOrMorePartsPart;

function first(array) { return array[0]; }