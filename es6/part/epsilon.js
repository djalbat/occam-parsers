'use strict';

var TerminalNode = require('../node/terminal');

class EpsilonPart {
  parse(context, productions, noWhitespace) {
    var string = 'ε',
        type = null,
        terminalNode = new TerminalNode(string, type),
        nodes = [terminalNode];

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
    var epsilonPart = null,
        found = (symbol === 'ε');
    
    if (found) {
      epsilonPart = new EpsilonPart();
    }

    return epsilonPart;
  }
}

module.exports = EpsilonPart;