'use strict';

const TerminalNode = require('../../common/node/terminal');

class WildcardPart {
  constructor(noWhitespace) {
    this.noWhitespace = noWhitespace;
  }

  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let terminalNode = null;
    
    const savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      terminalNode = TerminalNode.fromSignificantToken(significantToken);
    }

    if (terminalNode === null) {
      context.backtrack(savedIndex);
    }

    return terminalNode;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    let wildcardPart = null;
    
    const wildcardPartRegExp = /^\*$/,
          matches = symbol.match(wildcardPartRegExp);

    if (matches !== null) {
      wildcardPart = new WildcardPart(noWhitespace);
    }

    return wildcardPart;
  }
}

module.exports = WildcardPart;
