'use strict';

var TerminalNode = require('../../common/node/terminal');

class RegularExpressionPart {
  constructor(regExp, noWhitespace) {
    this.regExp = regExp;
    this.noWhitespace = noWhitespace;
  }

  parse(context, productions, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    var nodes = null,
        savedIndex = context.savedIndex(),
        nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
        significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      var content = significantToken.getContent(),
          matches = content.match(this.regExp);

      if (matches !== null) {
        var firstMatch = first(matches),
            parsed = (firstMatch === content);

        if (parsed) {
          var productionName = null,
              terminalNode = TerminalNode.fromSignificantTokenAndProductionName(significantToken, productionName);

          nodes = [terminalNode];
        }
      }
    }
    
    if (nodes === null) {
      context.backtrack(savedIndex);
    }

    return nodes;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    var regularExpressionPart = null,
        regularExpressionPartRegExp = /^\/([^/]+)\/$/,
        matches = symbol.match(regularExpressionPartRegExp);

    if (matches !== null) {
      var secondMatch = second(matches),
          regExpPattern = secondMatch,  ///
          regExp = new RegExp(`^${regExpPattern}$`); ///

      regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);
    }

    return regularExpressionPart;
  }
}

module.exports = RegularExpressionPart;

function first(array) { return array[0]; }
function second(array) { return array[1]; }
