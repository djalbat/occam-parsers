'use strict';

const lexers = require('occam-lexers'),
      necessary = require('necessary');

const TerminalNode = require('../../common/node/terminal');

const { array } = necessary,
      { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { NO_WHITESPACE } = specialSymbols;

class RegularExpressionPart {
  constructor(regularExpression, noWhitespace = false) {
    this.regularExpression = regularExpression;
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
            matches = content.match(this.regularExpression);

      if (matches !== null) {
        const firstMatch = array.first(matches),
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

  toString() {
    const regularExpressionString = this.regularExpression.toString(),
          noWhitespaceString = this.noWhitespace ?
                                 NO_WHITESPACE :
                                   '',
          string = `${noWhitespaceString}${regularExpressionString}`;

    return string;
  }
}

module.exports = RegularExpressionPart;
