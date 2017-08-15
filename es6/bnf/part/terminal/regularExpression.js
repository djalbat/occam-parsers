'use strict';

const lexers = require('occam-lexers'),
      necessary = require('necessary');

const TerminalPart = require('../../part/terminal'),
      TerminalNode = require('../../../common/node/terminal');

const { array } = necessary,
      { BNFLexer } = lexers,
      { first } = array,
      { specialSymbols } = BNFLexer,
      { NO_WHITESPACE } = specialSymbols;

class RegularExpressionPart extends TerminalPart {
  constructor(regularExpression, noWhitespace) {
    super(noWhitespace);
    
    this.regularExpression = regularExpression;
  }

  parse(configuration, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let terminalNode = null;
    
    const savedIndex = configuration.savedIndex(),
          nextNonWhitespaceSignificantToken = configuration.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      const content = significantToken.getContent(),
            matches = content.match(this.regularExpression);

      if (matches !== null) {
        const firstMatch = first(matches),
              parsed = (firstMatch === content);

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }
    }

    if (terminalNode === null) {
      configuration.backtrack(savedIndex);
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
