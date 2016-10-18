'use strict';

var SequenceOfPartsPart = require('./sequenceOfParts');

class OneOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, productions, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///
    
    var nodes = null,
        terminalPartOrProduction = this.terminalPartOrProduction(productions);

    if (terminalPartOrProduction !== null) {
      context.saveIndex();

      var productionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
          parsed = (productionNodes !== null);

      if (parsed) {
        nodes = productionNodes;

        for(;;) {
          context.saveIndex();

          productionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace);
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

  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) {
    var regExp = /([^*]+)\+$/,
        Class = OneOrMorePartsPart,
        oneOrMorePartsPart = super.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace, regExp, Class);

    return oneOrMorePartsPart;
  }
}

module.exports = OneOrMorePartsPart;
