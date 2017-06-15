'use strict';

const TerminalNode = require('../../common/node/terminal');

class RegularExpressionPart {
  constructor(regExp, noWhitespace = false) {
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
      const significantTokenType = significantToken.getType(),
            parsed = (significantTokenType === 'regularExpression');  ///

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
    const regExpString = this.regExp.toString(),
          noWhitespaceString = this.noWhitespace ?
                                '<NO_WHITESPACE>' :
                                  '',
          string = `${noWhitespaceString}${regExpString}`;

    return string;
  }
}

module.exports = RegularExpressionPart;
