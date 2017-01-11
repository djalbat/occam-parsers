'use strict';

var TerminalNode = require('../node/terminal');

class EpsilonPart {
  parse(context, productions, noWhitespace) {
    var content = 'ε',
        significantToken = null, ///
        terminalNode = new TerminalNode(content, significantToken),
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