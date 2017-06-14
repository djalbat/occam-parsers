'use strict';

const TerminalNode = require('../node/terminal');

class TerminalSymbolPart {
  constructor(content, noWhitespace) {
    this.content = content;
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
            parsed = (content === this.content);

      if (parsed) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    if (terminalNode === null) {
      context.backtrack(savedIndex);
    }

    return terminalNode;
  }
  
  toString() {
    const string = `'${this.content}'`;
    
    return string;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    let terminalSymbolPart = null;
    
    const terminalSymbolPartRegExp = /^"([^']+)"$/,
          matches = symbol.match(terminalSymbolPartRegExp);

    if (matches !== null) {
      const secondMatch = second(matches),      
            content = secondMatch; ///

      terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);
    }

    return terminalSymbolPart;
  }
}

module.exports = TerminalSymbolPart;

function second(array) { return array[1]; }
