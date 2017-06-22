'use strict';

const lexers = require('occam-lexers');

const arrayUtil = require('../../util/array'),
      TerminalNode = require('../../common/node/terminal');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { NO_WHITESPACE } = specialSymbols;

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
      const content = significantToken.getContent(),
            matches = content.match(this.regExp);

      if (matches !== null) {
        const firstMatch = arrayUtil.first(matches),
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
    const regExpString = this.regExp.toString(),
          noWhitespaceString = this.noWhitespace ?
                                 NO_WHITESPACE :
                                   '',
          string = `${noWhitespaceString}${regExpString}`;

    return string;
  }
}

module.exports = RegularExpressionPart;
