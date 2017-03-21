'use strict';

const TerminalNode = require('../../common/node/terminal');

class TerminalSymbolPart {
  constructor(symbol, noWhitespace) {
    this.symbol = symbol;
    this.noWhitespace = noWhitespace;
  }

  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let terminalNode = null;
    
    const savedIndex = context.savedIndex(),
      nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
      significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      const content = significantToken.getContent(),
          parsed = (content === this.symbol);  ///

      if (parsed) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    if (terminalNode === null) {
      context.backtrack(savedIndex);
    }

    return terminalNode;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    let terminalSymbolPart = null;
    
    const terminalSymbolPartRegExp = /^'([^']+)'$/,
          matches = symbol.match(terminalSymbolPartRegExp);

    if (matches !== null) {
      const secondMatch = second(matches);
      
      symbol = secondMatch; ///

      terminalSymbolPart = new TerminalSymbolPart(symbol, noWhitespace);
    }

    return terminalSymbolPart;
  }
}

module.exports = TerminalSymbolPart;

function second(array) { return array[1]; }
