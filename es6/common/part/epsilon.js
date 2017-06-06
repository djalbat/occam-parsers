'use strict';

const EpsilonTerminalNode = require('../node/terminal/epsilon');

class EpsilonPart {
  parse(context, noWhitespace) {
    const epsilonTerminalNode = new EpsilonTerminalNode();

    return epsilonTerminalNode;
  }
  
  toString() {
    const string = 'ε';
    
    return string;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    let  epsilonPart = null;
    
    const found = (symbol === 'ε');
    
    if (found) {
      epsilonPart = new EpsilonPart();
    }

    return epsilonPart;
  }
}

module.exports = EpsilonPart;