'use strict';

var EpsilonTerminalNode = require('../../common/node/terminal/epsilon');

class EpsilonPart {
  parse(context, noWhitespace) {
    var epsilonTerminalNode = new EpsilonTerminalNode(),
        nodes = [epsilonTerminalNode];

    return nodes;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    var epsilonPart = null,
        found = (symbol === 'ε');
    
    if (found) {
      epsilonPart = new EpsilonPart();
    }

    return epsilonPart;
  }
}

module.exports = EpsilonPart;