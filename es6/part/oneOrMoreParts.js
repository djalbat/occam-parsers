'use strict';

var SequenceOfPartsPart = require('./sequenceOfParts');

class OneOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, productions) {
    var nodes = null,
        terminalPartOrProduction = this.terminalPartOrProduction();

    if (terminalPartOrProduction !== null) {
      context.saveIndex();

      var productionNodes = terminalPartOrProduction.parse(context, productions),
          parsed = (productionNodes !== null);

      if (parsed) {
        nodes = productionNodes;

        for(;;) {
          context.saveIndex();

          productionNodes = terminalPartOrProduction.parse(context, productions);
          parsed = (productionNodes !== null);

          if (parsed) {
            nodes = nodes.concat(productionNodes);
          } else {
            context.backtrack();

            return nodes;
          }
        }
      } else {
        context.backtrack();
      }
    }

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
    var regExp = /([^*]+)\+$/,
        Class = OneOrMorePartsPart,
        oneOrMorePartsPart = super.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, regExp, Class);

    return oneOrMorePartsPart;
  }
}

module.exports = OneOrMorePartsPart;
