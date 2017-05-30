'use strict';

const TerminalNode = require('../../common/node/terminal');

class RegularExpressionPart {
  constructor(regExp, noWhitespace) {
    this.regExp = regExp;
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
            matches = content.match(this.regExp);

      if (matches !== null) {
        const firstMatch = first(matches),
              parsed = (firstMatch === content);

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }
    }
    
    if (terminalNode === null) {
      context.backtrack(savedIndex);
    }

    return terminalNode;
  }
}

module.exports = RegularExpressionPart;

function first(array) { return array[0]; }
