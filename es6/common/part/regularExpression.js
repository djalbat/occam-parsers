'use strict';

const arrayUtil = require('../../util/array'),
      TerminalNode = require('..//node/terminal');

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
          string = regExpString;  //

    return string;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    let regularExpressionPart = null;
    
    const regularExpressionPartRegExp = /^\/([^/]+)\/$/,
          matches = symbol.match(regularExpressionPartRegExp);

    if (matches !== null) {
      const secondMatch = arrayUtil.second(matches),
            pattern = secondMatch,  ///
            regExp = new RegExp(pattern);

      regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);
    }

    return regularExpressionPart;
  }
}

module.exports = RegularExpressionPart;
