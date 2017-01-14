'use strict';

var FatalErrorNode = require('../node/fatalError'),
    SequenceOfPartsPart = require('./sequenceOfParts');

class ZeroOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, productions, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///

    var nodes = null,
        fatalErrorNode,
        terminalPartOrProduction = this.terminalPartOrProduction(productions);

    if (terminalPartOrProduction !== null) {
      nodes = [];

      for(;;) {
        var terminalPartOrProductionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
            terminalPartOrProductionParsed = (terminalPartOrProductionNodes !== null);

        if (terminalPartOrProductionParsed) {
          if (terminalPartOrProductionNodes !== undefined) {
            var firstTerminalPartOrProductionNode = first(terminalPartOrProductionNodes);

            if (firstTerminalPartOrProductionNode instanceof FatalErrorNode) {
              fatalErrorNode = firstTerminalPartOrProductionNode;

              nodes = [fatalErrorNode];

              return nodes;
            } else {
              nodes = nodes.concat(terminalPartOrProductionNodes);
            }
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