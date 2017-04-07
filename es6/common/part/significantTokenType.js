'use strict';

const TerminalNode = require('../../common/node/terminal');

class SignificantTokenTypePart {
  constructor(type, noWhitespace) {
    this.type = type;
    this.noWhitespace = noWhitespace;
  }

  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///
    
    let terminalNode = null;
    
    const savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      const type = significantToken.getType(),
            parsed = (type === this.type);  ///

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
    let significantTokenTypePart = null;
    
    const significantTokenTypePartRegExp = /^\[([^/]+)\]$/,
          matches = symbol.match(significantTokenTypePartRegExp);

    if (matches !== null) {
      const secondMatch = second(matches),
            type = secondMatch, ///
            foundType = significantTokenTypes.find(function(significantTokenType) {
              const found = (type === significantTokenType);
  
              return found;
            }),
            found = (foundType !== undefined);

      if (found) {
        significantTokenTypePart = new SignificantTokenTypePart(type, noWhitespace);
      }
    }

    return significantTokenTypePart;
  }
}

module.exports = SignificantTokenTypePart;

function second(array) { return array[1]; }