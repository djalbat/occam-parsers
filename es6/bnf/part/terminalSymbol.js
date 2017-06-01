'use strict';

const TerminalNode = require('../../common/node/terminal');

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
}

module.exports = TerminalSymbolPart;
