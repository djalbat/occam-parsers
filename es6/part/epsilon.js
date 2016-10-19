'use strict';

var TerminalNode = require('../node/terminal');

class EpsilonPart {
  parse(context, productions, noWhitespace) {
    var str = 'ε',
        type = null,
        terminalNode = new TerminalNode(str, type),
        nodes = [terminalNode];

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) {
    var epsilonPart = null,
        found = (symbol === 'ε');
    
    if (found) {
      epsilonPart = new EpsilonPart();
    }

    return epsilonPart;
  }
}

module.exports = EpsilonPart;