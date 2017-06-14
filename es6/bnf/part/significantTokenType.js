'use strict';

const TerminalNode = require('../../common/node/terminal');

class SignificantTokenTypePart {
  constructor(significantTokenType, noWhitespace) {
    this.significantTokenType = significantTokenType;
    this.noWhitespace = noWhitespace;
  }
  
  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///
    
    let terminalNode = null;
    
    const savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      const significantTokenType = significantToken.getType(),
            parsed = (significantTokenType === this.significantTokenType);  ///

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
    const noWhitespaceString = this.noWhitespace ?
                                '<NO_WHITESPACE>' :
                                  '',
          string = `${noWhitespaceString}[${this.significantTokenType}]`;
    
    return string;
  }
}

module.exports = SignificantTokenTypePart;
